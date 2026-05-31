import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Junoon = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_template_junoon') === 'true' || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

  const data = {
    momentIKnew: "It was a Tuesday. Nothing special about the day. You were reading by the window, completely unaware of how the light was falling on your face. And I thought — I never want to stop seeing this. That was the moment.",
    timeline: [
      { date: "March 2021", title: "First coffee", desc: "You were 20 minutes late and completely unapologetic about it." },
      { date: "August 2021", title: "First trip", desc: "Coorg in the rain. We got lost and found something better." },
      { date: "February 2022", title: "Everything changed", desc: "You know what you said. I have not stopped smiling since." }
    ],
    question: "Three years ago I did not know your name. Now I cannot imagine a world where I do not know your laugh. You are my favourite person.",
    countdownTarget: "2025-02-14T00:00:00" // The day everything changed
  };

  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const diff = new Date().getTime() - new Date(data.countdownTarget).getTime();
    setDaysSince(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, [data.countdownTarget]);

  return (
    <>
      <Helmet>
        <title>Junoon Template | Rooh</title>
        <meta name="description" content="A cinematic, intense template for grand gestures and confessions." />
      </Helmet>

      <div className="relative min-h-screen bg-black text-[#E5E5E5] overflow-hidden font-sans">
        
        {/* Sparks Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914]"
              animate={{
                y: ["100vh", "-10vh"],
                x: [Math.random() * 100 + "vw", Math.random() * 100 + "vw"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 5
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_100%)]" />
        </div>

        {/* Paywall */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-[#0A0A0A] border border-[#E50914]/30 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(229,9,20,0.1)] max-w-lg w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />
              <Lock className="w-10 h-10 text-[#E50914] mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-white mb-2">"Junoon" Template</h2>
              <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#E50914] mb-6">Obsession / Grand Gesture</div>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Unlock this cinematic, high-impact template for proposals, deep confessions, or major anniversaries. Customize the timeline and the final question.
              </p>
              <Button size="lg" className="w-full bg-[#E50914] hover:bg-[#B81D1D] text-white border-none" onClick={() => window.location.href = '/pricing'}>
                Unlock Template — ₹299
              </Button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-sm select-none opacity-50' : ''}`}>
          
          {/* Hero */}
          <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"
            />
            <div className="relative z-10 max-w-3xl">
              <div className="text-[#E50914] text-sm tracking-[0.5em] uppercase mb-8 font-bold">The Moment I Knew</div>
              <p className="text-2xl md:text-4xl font-serif leading-relaxed text-white">
                "{data.momentIKnew}"
              </p>
            </div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-12 w-px h-16 bg-gradient-to-b from-[#E50914] to-transparent"
            />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto py-32 px-4">
            <div className="space-y-24 border-l border-[#333] ml-4 md:ml-12 pl-8 md:pl-16 relative">
              {data.timeline.map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] md:-left-[73px] w-4 h-4 rounded-full bg-black border-2 border-[#E50914] shadow-[0_0_15px_#E50914]" />
                  <div className="text-[#E50914] text-sm tracking-widest uppercase mb-2 font-bold">{event.date}</div>
                  <h3 className="text-3xl font-serif text-white mb-4">{event.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats / Counter */}
          <div className="py-32 bg-[#0A0A0A] border-y border-[#333] text-center px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto"
            >
              <div className="text-7xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4">
                {daysSince}
              </div>
              <div className="text-[#E50914] tracking-[0.4em] uppercase text-sm md:text-base font-bold">
                Days since everything changed
              </div>
            </motion.div>
          </div>

          {/* The Question */}
          <div className="min-h-[80vh] flex items-center justify-center text-center p-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                {data.question}
              </h1>
              <div className="w-24 h-px bg-[#E50914] mx-auto" />
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
};
