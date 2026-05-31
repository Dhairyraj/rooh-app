import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Lock, Heart, Bell } from 'lucide-react';

export const AnniversaryCountdown = () => {
  const isEternal = localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';
  
  const [targetDate, setTargetDate] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [reminderSet, setReminderSet] = useState(false);

  useEffect(() => {
    if (!targetDate) return;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSetReminder = () => {
    setReminderSet(true);
  };

  return (
    <>
      <Helmet>
        <title>Anniversary Countdown | Rooh</title>
        <meta name="description" content="Never miss an anniversary. Live countdown dashboard with automated reminders." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
        
        {!isEternal && (
          <div className="absolute inset-0 z-50 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">Anniversary Dashboard</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                Live countdowns, automated 7-day email reminders to plan something special, and a beautiful widget for your partner. Available exclusively on Eternal and Forever tiers.
              </p>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/pricing'}>
                Unlock Eternal Tier — ₹999
              </Button>
            </div>
          </div>
        )}

        <div className={`max-w-3xl w-full text-center ${!isEternal ? 'blur-sm select-none opacity-50' : ''}`}>
          <Heart className="w-12 h-12 text-gold-400 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-serif text-gold-100 mb-12">The Countdown Begins</h1>

          {!targetDate ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-plum-800 border border-plum-700 p-8 rounded-2xl max-w-md mx-auto"
            >
              <label className="block text-sm font-medium text-plum-200 mb-4">When is your next anniversary?</label>
              <Input 
                type="date" 
                onChange={(e) => setTargetDate(e.target.value)}
                className="bg-plum-900 border-plum-700 text-plum-100 mb-6 w-full"
                disabled={!isEternal}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((unit, i) => (
                  <div key={i} className="bg-plum-800/80 border border-gold-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-full" />
                    <div className="text-4xl md:text-6xl font-serif text-gold-50 mb-2 relative z-10">{unit.value}</div>
                    <div className="text-xs uppercase tracking-widest text-plum-300 font-medium relative z-10">{unit.label}</div>
                  </div>
                ))}
              </div>

              {!reminderSet ? (
                <Button variant="outline" className="border-gold-500/30 text-gold-200 hover:bg-plum-800" onClick={handleSetReminder} disabled={!isEternal}>
                  <Bell className="w-4 h-4 mr-2" /> Enable 7-Day Reminder Alert
                </Button>
              ) : (
                <div className="inline-flex items-center text-sm font-medium text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                  <Bell className="w-4 h-4 mr-2" /> 7-Day Email Reminder Activated
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
