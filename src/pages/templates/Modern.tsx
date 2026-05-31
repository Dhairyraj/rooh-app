import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Modern = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_template_modern') === 'true' || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

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
        <title>Modern Love Template | Rooh</title>
        <meta name="description" content="A minimalist, brutalist, high-fashion aesthetic digital memory website." />
      </Helmet>

      <div className="relative min-h-screen bg-white text-black overflow-hidden font-sans selection:bg-black selection:text-white">
        
        {/* Paywall Overlay */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-black text-white border border-gray-800 p-8 md:p-12 shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
              <Lock className="w-10 h-10 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-2">Modern Love</h2>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Minimalist / Editorial</div>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Sleek, bold, and unapologetic. Unlock this high-fashion editorial template to make a striking statement.
              </p>
              <Button size="lg" className="w-full bg-white hover:bg-gray-200 text-black border-none rounded-none uppercase tracking-widest text-xs font-bold" onClick={() => window.location.href = '/pricing'}>
                Unlock Template — ₹299
              </Button>
            </div>
          </div>
        )}

        {/* Content Preview */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-md select-none opacity-40' : ''}`}>
          
          {/* Hero */}
          <section className="min-h-screen flex flex-col justify-between p-8 md:p-16">
            <header className="flex justify-between items-start w-full uppercase tracking-widest text-xs font-bold">
              <div>{demoData.location}</div>
              <div className="text-right">{demoData.date}</div>
            </header>
            
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase break-words hyphens-auto">
                {demoData.names.person1} <br/> <span className="text-gray-300">&</span> {demoData.names.person2}
              </h1>
            </motion.div>
          </section>

          {/* Large Image & Quote */}
          <section className="min-h-screen flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 bg-gray-100 p-8 md:p-16 flex items-center">
              <motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="text-3xl md:text-5xl font-medium leading-tight tracking-tight"
              >
                {demoData.moment_i_knew}
              </motion.p>
            </div>
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative overflow-hidden">
              <motion.img 
                initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80" 
                alt="Portrait" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </section>

          {/* Typography List */}
          <section className="py-32 px-8 md:px-16 bg-black text-white">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-16">The Details</h2>
            <div className="space-y-8 md:space-y-12">
              {demoData.things_i_love.map((thing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-gray-800 pb-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
                >
                  <span className="text-gray-600 font-mono text-sm">0{i + 1}</span>
                  <p className="text-2xl md:text-4xl font-medium tracking-tight">{thing}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Message Footer */}
          <section className="py-32 md:py-48 px-8 md:px-16 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-4xl font-serif italic text-gray-800 mb-12">
                "{demoData.message}"
              </p>
              <div className="w-12 h-12 bg-black rounded-full mx-auto" />
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
