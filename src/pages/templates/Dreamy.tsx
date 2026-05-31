import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Cloud } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Dreamy = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_template_dreamy') === 'true' || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

  const demoData = {
    names: { person1: "Aisha", person2: "Rohan" },
    date: "February 14, 2022",
    location: "Mumbai, India",
    things_i_love: [
      "The way you laugh at your own jokes",
      "How you remember every small thing I say",
      "That you always save me the last bite",
      "The way you hold my hand in crowded places",
      "How you make ordinary Tuesday evenings feel special"
    ],
    moment_i_knew: "It was a Tuesday. Nothing special about the day. You were reading by the window, completely unaware of how the light was falling on your face. And I thought — I never want to stop seeing this. That was the moment.",
    message: "Three years ago I did not know your name. Now I cannot imagine a world where I do not know your laugh, your stubborn opinions about movies, the specific way you say goodnight. You are my favourite person. That is all. That is everything."
  };

  return (
    <>
      <Helmet>
        <title>Dreamy Template | Rooh</title>
        <meta name="description" content="A soft, ethereal, pastel dream template." />
      </Helmet>

      <div className="relative min-h-screen bg-[#F0F4FF] text-[#4A5568] overflow-hidden font-serif selection:bg-[#B7C6E6] selection:text-white">
        
        {/* Soft Animated Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-full h-full bg-[#E6E6FA] rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[#FFD1DC] rounded-full blur-[120px]" 
          />
        </div>

        {/* Paywall Overlay */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-[#F0F4FF]/70 backdrop-blur-xl flex flex-col items-center justify-center p-4">
            <div className="bg-white/80 border border-[#B7C6E6] p-8 md:p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(183,198,230,0.4)] max-w-lg w-full text-center relative overflow-hidden backdrop-blur-md">
              <Cloud className="w-12 h-12 text-[#9FB3E1] mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-[#4A5568] mb-2">Dreamy</h2>
              <div className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#9FB3E1] mb-6">Ethereal / Soft Pastels</div>
              <p className="text-[#718096] mb-8 leading-relaxed text-sm font-sans">
                A soft, cloud-like aesthetic for the gentlest love stories. Pastel gradients and elegant serifs.
              </p>
              <Button size="lg" className="w-full bg-[#9FB3E1] hover:bg-[#869DDB] text-white border-none rounded-2xl" onClick={() => window.location.href = '/pricing'}>
                Unlock Template — ₹299
              </Button>
            </div>
          </div>
        )}

        {/* Content Preview */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-md select-none opacity-40' : ''}`}>
          
          {/* Hero */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: "easeOut" }}
              className="z-10"
            >
              <h1 className="text-6xl md:text-8xl text-[#4A5568] mb-6 tracking-tight">
                {demoData.names.person1}
              </h1>
              <div className="text-4xl text-[#9FB3E1] italic my-4">&</div>
              <h1 className="text-6xl md:text-8xl text-[#4A5568] mb-12 tracking-tight">
                {demoData.names.person2}
              </h1>
            </motion.div>
          </section>

          {/* Image & Quote */}
          <section className="py-24 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-square rounded-full overflow-hidden p-2 border-4 border-white shadow-2xl shadow-[#B7C6E6]/50">
                <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80" alt="Dreamy" className="w-full h-full object-cover rounded-full" />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Cloud className="w-8 h-8 text-[#9FB3E1] mb-8 mx-auto md:mx-0" />
              <p className="text-2xl md:text-3xl leading-relaxed text-[#4A5568]">
                "{demoData.moment_i_knew}"
              </p>
            </div>
          </section>

          {/* Soft List */}
          <section className="py-32 px-4 bg-white/40 backdrop-blur-sm border-y border-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-[#9FB3E1] mb-16 italic">Soft Details</h2>
              <div className="space-y-12">
                {demoData.things_i_love.map((thing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                  >
                    <p className="text-xl md:text-2xl text-[#4A5568]">{thing}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer Message */}
          <section className="py-40 px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl leading-loose text-[#4A5568] mb-12">
                "{demoData.message}"
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9FB3E1] to-transparent mx-auto" />
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
