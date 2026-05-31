import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, Gift, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Mehfil = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_template_mehfil') === 'true' || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

  const data = {
    title: "Aisha & Rohan",
    subtitle: "It was a Tuesday. Nothing special about the day. You were reading by the window, completely unaware of how the light was falling on your face. And I thought — I never want to stop seeing this. That was the moment.",
    reasons: [
      "The way you laugh at your own jokes",
      "How you remember every small thing I say",
      "That you always save me the last bite",
      "The way you hold my hand in crowded places",
      "How you make ordinary Tuesday evenings feel special"
    ],
    memories: [
      { caption: "First coffee. You were 20 minutes late and completely unapologetic about it.", date: "March 2021" },
      { caption: "Coorg in the rain. We got lost and found something better.", date: "August 2021" },
      { caption: "Everything changed. You know what you said. I have not stopped smiling since.", date: "February 2022" }
    ],
    message: "Three years ago I did not know your name. Now I cannot imagine a world where I do not know your laugh, your stubborn opinions about movies, the specific way you say goodnight. You are my favourite person. That is all. That is everything.",
    signature: "Always.",
    yearsTogether: 3
  };

  return (
    <>
      <Helmet>
        <title>Mehfil Template | Rooh</title>
        <meta name="description" content="A joyful, premium celebration template for milestones and birthdays." />
      </Helmet>

      <div className="relative min-h-screen bg-[#0F1C2E] text-[#E2E8F0] overflow-hidden font-sans">
        
        {/* Confetti / Jewel Tone Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 md:w-4 md:h-4 opacity-40 ${['bg-[#D4AF37]', 'bg-[#9C27B0]', 'bg-[#00BCD4]', 'bg-[#E91E63]'][i % 4]}`}
              style={{
                borderRadius: i % 3 === 0 ? '50%' : i % 2 === 0 ? '0%' : '50% 0 50% 0',
              }}
              animate={{
                y: ["-10vh", "110vh"],
                x: [Math.random() * 100 + "vw", Math.random() * 100 + "vw"],
                rotate: [0, 720]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        {/* Paywall Overlay */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-[#0F1C2E]/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-[#172A45] border border-[#D4AF37]/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9C27B0] via-[#D4AF37] to-[#00BCD4]" />
              <Lock className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-[#D4AF37] mb-2">"Mehfil" Template</h2>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#00BCD4] mb-6">Celebration / Milestones</div>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Unlock this festive, premium template to celebrate birthdays, anniversaries, or major achievements. Beautiful, joyful, and completely customizable.
              </p>
              <Button size="lg" className="w-full bg-[#D4AF37] hover:bg-[#B5952F] text-[#0F1C2E] border-none" onClick={() => window.location.href = '/pricing'}>
                Unlock Template — ₹299
              </Button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-sm select-none opacity-60' : ''}`}>
          
          {/* Hero */}
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}>
              <Gift className="w-16 h-16 text-[#D4AF37] mb-8 mx-auto" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] mb-6"
            >
              {data.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-[#94A3B8] max-w-2xl font-light"
            >
              {data.subtitle}
            </motion.p>
          </div>

          {/* X Reasons */}
          <div className="py-24 bg-[#13233A] px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-serif text-center text-[#D4AF37] mb-16 flex items-center justify-center">
                <Star className="w-6 h-6 mr-3 text-[#D4AF37]" /> {data.reasons.length} Reasons You Are Incredible <Star className="w-6 h-6 ml-3 text-[#D4AF37]" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.reasons.map((reason, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#172A45] border border-[#233857] p-8 rounded-2xl shadow-lg flex items-start"
                  >
                    <div className="text-[#D4AF37] text-2xl font-serif font-bold mr-6 mt-1">{i + 1}</div>
                    <p className="text-lg text-[#E2E8F0] leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats / Years Together */}
          <div className="py-24 text-center px-4">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#9C27B0] via-[#D4AF37] to-[#00BCD4] mb-8">
              <div className="w-32 h-32 rounded-full bg-[#0F1C2E] flex items-center justify-center">
                <span className="text-5xl font-serif text-[#D4AF37]">{data.yearsTogether}</span>
              </div>
            </div>
            <div className="text-[#00BCD4] tracking-[0.3em] uppercase font-bold">Years of Adventures Together</div>
          </div>

          {/* Highlight Reel */}
          <div className="py-24 bg-[#13233A] px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif text-center text-[#D4AF37] mb-16">The Highlight Reel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.memories.map((mem, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-[#172A45] rounded-2xl overflow-hidden shadow-xl border border-[#233857]"
                  >
                    <div className="aspect-[4/3] bg-[#233857] flex items-center justify-center text-[#475569]">
                      [Photo]
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-[#00BCD4] uppercase tracking-widest font-bold mb-2">{mem.date}</div>
                      <p className="text-[#E2E8F0]">{mem.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Message & Signature */}
          <div className="max-w-3xl mx-auto py-32 px-4 text-center">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-12 text-[#E2E8F0]">
              "{data.message}"
            </p>
            <div className="text-xl font-serif italic text-[#D4AF37] border-t border-[#233857] pt-8 inline-block px-12">
              {data.signature}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
