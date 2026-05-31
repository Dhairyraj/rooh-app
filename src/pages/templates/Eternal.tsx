import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TemplateProps {
  isDemo?: boolean;
}

export const Eternal = ({ isDemo = false }: TemplateProps) => {
  const isUnlocked = isDemo || localStorage.getItem('rooh_tier') === 'eternal' || localStorage.getItem('rooh_tier') === 'forever';

  // The Exact Dummy Data requested
  const demoData = {
    names: { person1: "Aisha", person2: "Rohan" },
    date: "February 14, 2022",
    location: "Mumbai, India",
    anniversary_countdown_target: "2025-02-14T00:00:00", // Format for JS Date parsing
    things_i_love: [
      "The way you laugh at your own jokes",
      "How you remember every small thing I say",
      "That you always save me the last bite",
      "The way you hold my hand in crowded places",
      "How you make ordinary Tuesday evenings feel special"
    ],
    moment_i_knew: "It was a Tuesday. Nothing special about the day. You were reading by the window, completely unaware of how the light was falling on your face. And I thought — I never want to stop seeing this. That was the moment.",
    timeline: [
      { date: "March 2021", title: "First coffee", description: "You were 20 minutes late and completely unapologetic about it." },
      { date: "August 2021", title: "First trip", description: "Coorg in the rain. We got lost and found something better." },
      { date: "February 2022", title: "Everything changed", description: "You know what you said. I have not stopped smiling since." }
    ],
    message: "Three years ago I did not know your name. Now I cannot imagine a world where I do not know your laugh, your stubborn opinions about movies, the specific way you say goodnight. You are my favourite person. That is all. That is everything."
  };

  return (
    <>
      <Helmet>
        <title>Eternal Template | Rooh</title>
        <meta name="description" content="The crown jewel of Rooh. A deeply cinematic, premium digital memory website." />
      </Helmet>

      <div className="relative min-h-screen bg-plum-950 text-gold-50 overflow-hidden font-serif selection:bg-gold-500/30 selection:text-gold-200">
        
        {/* Deep Plum & Gold Ambient Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-plum-800/30 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        </div>

        {/* Paywall Overlay */}
        {!isUnlocked && (
          <div className="fixed inset-0 z-50 bg-plum-950/80 backdrop-blur-xl flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <div className="w-16 h-16 rounded-full bg-plum-950 border border-gold-500/50 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Star className="w-8 h-8 text-gold-400" />
              </div>
              <h2 className="text-3xl font-serif text-gold-100 mb-2">The Eternal Memory</h2>
              <div className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-gold-400/80 mb-6">The Flagship Experience</div>
              <p className="text-plum-200 mb-8 leading-relaxed text-sm font-sans">
                Our crown jewel. A cinematic, premium website that immortalizes your story. Included exclusively in the Eternal and Forever tiers.
              </p>
              <Button size="lg" className="w-full bg-gold-500 hover:bg-gold-400 text-plum-950 border-none font-sans font-medium" onClick={() => window.location.href = '/pricing'}>
                Unlock Eternal Tier — ₹999
              </Button>
            </div>
          </div>
        )}

        {/* Content Preview */}
        <div className={`relative z-10 w-full ${!isUnlocked ? 'blur-md select-none opacity-40' : ''}`}>
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-30 mix-blend-overlay"
            >
              {/* Elegant placeholder image */}
              <div className="w-full h-full bg-gradient-to-br from-plum-900 to-black relative">
                <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-plum-950/60" />
              </div>
            </motion.div>
            
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
                className="w-px h-24 bg-gradient-to-b from-transparent to-gold-400/50 mb-12"
              />
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                className="text-sm font-sans tracking-[0.4em] uppercase text-gold-300/80 mb-8"
              >
                {demoData.location} • {demoData.date}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 mb-12 drop-shadow-2xl"
              >
                {demoData.names.person1} <span className="text-gold-500/50 italic font-light mx-4 md:mx-8">&</span> {demoData.names.person2}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
                className="w-px h-24 bg-gradient-to-t from-transparent to-gold-400/50 mt-12"
              />
            </div>
          </section>

          {/* The Moment I Knew */}
          <section className="py-32 px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/30 text-gold-400 mb-12">
                <Heart className="w-5 h-5" />
              </div>
              <p className="text-2xl md:text-4xl leading-relaxed text-gold-50/90 font-light mb-12">
                "{demoData.moment_i_knew}"
              </p>
              <div className="text-gold-400/60 uppercase tracking-widest text-sm font-sans font-bold">The Moment I Knew</div>
            </div>
          </section>

          {/* Things I Love List */}
          <section className="py-32 bg-plum-900/20 border-y border-gold-500/10 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl text-center text-gold-200 mb-20 italic">Things I absolutely love about you</h2>
              <div className="space-y-12">
                {demoData.things_i_love.map((thing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex items-center group"
                  >
                    <div className="w-8 md:w-16 h-px bg-gold-500/30 mr-6 group-hover:bg-gold-400 transition-colors duration-500" />
                    <p className="text-xl md:text-2xl text-gold-50/80 font-light tracking-wide">{thing}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-32 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl text-gold-100 mb-4">Our Story</h2>
              <div className="w-24 h-px bg-gold-500/50 mx-auto" />
            </div>
            
            <div className="space-y-32">
              {demoData.timeline.map((event, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1 }}
                  className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full relative">
                    <div className="aspect-[4/5] md:aspect-[3/2] rounded-2xl overflow-hidden bg-plum-900 relative shadow-2xl shadow-plum-950">
                      <img src={`https://images.unsplash.com/photo-${i === 0 ? '1501901609772-df0848060b33' : i === 1 ? '1469334031218-e382a71b716b' : '1522008629172-0c90c74b2488'}?auto=format&fit=crop&w=800&q=80`} alt={event.title} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" />
                      <div className="absolute inset-0 border-2 border-gold-500/20 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                  <div className={`flex-1 text-center ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-gold-400 font-sans tracking-widest uppercase text-sm mb-4 font-bold">{event.date}</div>
                    <h3 className="text-3xl md:text-4xl text-gold-100 mb-6">{event.title}</h3>
                    <p className="text-plum-200 text-lg leading-relaxed font-sans">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Letter / Final Message */}
          <section className="py-40 px-4 bg-gradient-to-b from-transparent to-plum-950/80">
            <div className="max-w-4xl mx-auto text-center relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="bg-plum-900/30 backdrop-blur-md border border-gold-500/20 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[50px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-plum-500/10 rounded-full blur-[50px]" />
                
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gold-50 font-light relative z-10">
                  "{demoData.message}"
                </p>
                
                <div className="mt-16 text-center relative z-10">
                  <div className="text-gold-300 italic text-2xl">— {demoData.names.person1}</div>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
