import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Helmet } from 'react-helmet-async';
import { Lock, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const TimeCapsule = () => {
  const isEternal = localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';
  
  const [partnerEmail, setPartnerEmail] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    if (partnerEmail && unlockDate && message) {
      setIsSending(true);
      // Mock email trigger (Resend-ready)
      setTimeout(() => {
        setIsSending(false);
        setIsSent(true);
      }, 2000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Time Capsule | Rooh</title>
        <meta name="description" content="Write a letter to your partner today that automatically unlocks on a future date." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
        
        {!isEternal && (
          <div className="absolute inset-0 z-50 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">Digital Time Capsule</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                Write a letter today. Lock it away. We'll deliver it on your anniversary or a date you choose in the future. Available exclusively on Eternal and Forever tiers.
              </p>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/pricing'}>
                Unlock Eternal Tier — ₹999
              </Button>
            </div>
          </div>
        )}

        <div className={`max-w-2xl w-full ${!isEternal ? 'blur-sm select-none opacity-50' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gold-100 mb-4">Time Capsule</h1>
            <p className="text-plum-300">A message for tomorrow, written today.</p>
          </div>

          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-plum-800 border border-plum-700 p-8 rounded-2xl shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-plum-200 mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gold-400" /> Partner's Email
                      </label>
                      <Input 
                        type="email" 
                        placeholder="their@email.com" 
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        className="bg-plum-900 border-plum-700"
                        disabled={!isEternal || isSending}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-plum-200 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gold-400" /> Unlock Date
                      </label>
                      <Input 
                        type="date" 
                        value={unlockDate}
                        onChange={(e) => setUnlockDate(e.target.value)}
                        className="bg-plum-900 border-plum-700 text-plum-100"
                        disabled={!isEternal || isSending}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-plum-200 mb-2">Your Message</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={!isEternal || isSending}
                      className="w-full bg-plum-900 border border-plum-700 text-plum-100 rounded-lg p-4 min-h-[250px] focus:ring-1 focus:ring-gold-500/50 leading-relaxed resize-y"
                      placeholder="My love, as I write this today..."
                    />
                  </div>

                  <Button 
                    className="w-full text-lg h-14 mt-4" 
                    onClick={handleSend}
                    disabled={!isEternal || isSending || !partnerEmail || !unlockDate || !message}
                  >
                    {isSending ? (
                      <span className="flex items-center">Sealing Capsule <span className="ml-2 w-4 h-4 border-2 border-plum-900 border-t-transparent rounded-full animate-spin"></span></span>
                    ) : (
                      <span className="flex items-center">Seal & Lock <Send className="w-5 h-5 ml-2" /></span>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-plum-800 border border-gold-400/30 p-12 rounded-2xl shadow-2xl text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-3xl font-serif text-gold-50 mb-4">Capsule Sealed</h2>
                <p className="text-plum-200 mb-8 leading-relaxed max-w-md mx-auto">
                  Your message has been securely locked away. We will automatically deliver it to <strong>{partnerEmail}</strong> on <strong>{new Date(unlockDate).toLocaleDateString()}</strong>.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/play'}>
                  Return to Experiences
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
