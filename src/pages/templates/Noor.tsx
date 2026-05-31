import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Noor = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_template_noor') === 'true' || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

  // Dummy Data for Preview
  const data = {
    partnerName: "Aisha & Rohan",
    message: "Three years ago I did not know your name. Now I cannot imagine a world where I do not know your laugh, your stubborn opinions about movies, the specific way you say goodnight. You are my favourite person. That is all. That is everything.",
    thingsILove: [
      "The way you laugh at your own jokes",
      "How you remember every small thing I say",
      "That you always save me the last bite",
      "The way you hold my hand in crowded places",
      "How you make ordinary Tuesday evenings feel special"
    ],
    closing: "It was a Tuesday. Nothing special about the day. You were reading by the window, completely unaware of how the light was falling on your face. And I thought — I never want to stop seeing this. That was the moment."
  };

  return (
    <>
      <Helmet>
        <title>Noor Template | Rooh</title>
        <meta name="description" content="A beautiful everyday love template." />
      </Helmet>

      <div className="relative min-h-screen bg-[#FFFBF5] text-[#8C4A32] overflow-hidden">
        
        {/* Floating Petals / Warm Light Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#E88D67] opacity-10 blur-xl"
              animate={{
                y: ["-10vh", "110vh"],
                x: [Math.random() * 100 + "vw", Math.random() * 100 + "vw"],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        {/* Paywall Overlay */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-[#FFFBF5]/60 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-white border border-[#E88D67]/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F4C27F] to-[#E88D67]" />
              <Lock className="w-12 h-12 text-[#E88D67] mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-[#8C4A32] mb-2">"Noor" Template</h2>
              <div className="text-sm font-medium tracking-widest uppercase text-[#D4A373] mb-6">Everyday Love</div>
              <p className="text-[#A97155] mb-8 leading-relaxed">
                Unlock this beautiful template to customize with your own photos, names, and reasons why you love them. Send them a link they'll keep forever.
              </p>
              <Button size="lg" className="w-full bg-[#E88D67] hover:bg-[#D47A56] text-white border-none" onClick={() => window.location.href = '/pricing'}>
                Unlock Template — ₹299
              </Button>
            </div>
          </div>
        )}

        {/* Content Preview (blurred if locked) */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-sm select-none opacity-80' : ''}`}>
          
          {/* Hero */}
          <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl leading-tight"
            >
              {data.message}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="w-px h-24 bg-gradient-to-b from-[#E88D67] to-transparent mt-8"
            />
          </div>

          {/* Polaroid Grid */}
          <div className="max-w-6xl mx-auto py-24 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, rotate: i % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -2 : 2 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 pb-12 shadow-xl border border-[#F4E3D7] transform transition-transform hover:scale-105 hover:rotate-0"
                >
                  <div className="aspect-square bg-[#F9F1E7] w-full flex items-center justify-center text-[#D4A373]">
                    [Photo {i}]
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="max-w-3xl mx-auto py-24 px-4 text-center">
            <h2 className="text-3xl font-serif italic mb-16">Things I love about you...</h2>
            <div className="space-y-8">
              {data.thingsILove.map((thing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="text-xl md:text-2xl font-serif text-[#A97155]"
                >
                  {thing}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="max-w-2xl mx-auto py-32 px-4 text-center">
            <p className="text-2xl font-serif leading-relaxed mb-8">{data.closing}</p>
            <div className="w-12 h-12 rounded-full border border-[#E88D67] mx-auto flex items-center justify-center">
              <span className="text-[#E88D67]">❤</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
