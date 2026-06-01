import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Sparkles, Palette, Code, Rocket, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const Custom = () => {
  return (
    <>
      <Helmet>
        <title>Custom Themes | Rooh</title>
        <meta name="description" content="Get a bespoke digital memory website custom designed for your unique love story." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-plum-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 mr-2" /> Premium Tier
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-gold-50 mb-6 leading-tight">
                Your Universe,<br /><span className="italic text-gold-200">Built From Scratch.</span>
              </h1>
              <p className="text-plum-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Want a theme based on your favorite movie? A specific color palette? A unique timeline design? Our designers will craft a bespoke digital memory website just for you.
              </p>
              <Button size="lg" className="px-12 text-lg">
                Request Custom Theme — ₹1499
              </Button>
            </motion.div>
          </div>

          {/* How It Works */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-4">How It Works</h2>
              <p className="text-plum-300">From concept to a live website in 48 hours.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Palette />, title: "1. The Vision", desc: "Tell us about your partner, your favorite aesthetic, or a specific universe (like Harry Potter or a favorite movie)." },
                { icon: <Code />, title: "2. The Build", desc: "Our designers and developers craft a custom UI, complete with animations, bespoke fonts, and personalized copy." },
                { icon: <Rocket />, title: "3. The Launch", desc: "Within 48 hours, you get a private, permanent link to your custom digital memory website to share with them." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-plum-900/50 border border-plum-700/50 p-8 rounded-2xl relative"
                >
                  <div className="w-12 h-12 bg-gold-500/10 text-gold-400 rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gold-100 mb-3">{step.title}</h3>
                  <p className="text-plum-300 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* See What's Possible */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-4">See What's Possible</h2>
              <p className="text-plum-300 max-w-2xl mx-auto">Here are some examples of bespoke universes we can build. Every custom theme is entirely unique.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Wizarding World */}
              <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-all group">
                <div className="aspect-[4/3] bg-[#0A1128] rounded-xl mb-6 relative overflow-hidden border border-[#D4AF37]/30 flex items-center justify-center">
                  <div className="text-[#D4AF37] font-serif text-3xl opacity-50 group-hover:opacity-100 transition-opacity">⚡ Magical</div>
                </div>
                <div className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Theme Example</div>
                <h3 className="text-2xl font-serif text-gold-50 mb-2">The Wizarding World</h3>
                <p className="text-plum-300 text-sm mb-6 flex-grow">Deep navy, parchment textures, floating particles, and a Marauder's Map timeline.</p>
                <div className="pt-4 border-t border-plum-800">
                  <Button variant="outline" className="w-full border-gold-500/30 text-gold-200 hover:bg-gold-500 hover:text-plum-950" onClick={() => window.open('/demo/custom/harry-potter', '_blank')}>
                    View Live Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Central Perk */}
              <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-all group">
                <div className="aspect-[4/3] bg-[#FFF8E7] rounded-xl mb-6 relative overflow-hidden border border-[#F28C28]/30 flex items-center justify-center">
                  <div className="text-[#F28C28] font-sans text-3xl font-bold opacity-50 group-hover:opacity-100 transition-opacity">☕ Cozy</div>
                </div>
                <div className="text-xs text-orange-400 uppercase tracking-widest font-bold mb-2">Theme Example</div>
                <h3 className="text-2xl font-serif text-gold-50 mb-2">Central Perk Edition</h3>
                <p className="text-plum-300 text-sm mb-6 flex-grow">Warm orange, coffee vibes, episode titles, and a cork board photo wall.</p>
                <div className="pt-4 border-t border-plum-800">
                  <Button variant="outline" className="w-full border-gold-500/30 text-gold-200 hover:bg-gold-500 hover:text-plum-950" onClick={() => window.open('/demo/custom/friends', '_blank')}>
                    View Live Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Bollywood */}
              <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-all group">
                <div className="aspect-[4/3] bg-[#600000] rounded-xl mb-6 relative overflow-hidden border border-[#FFD700]/30 flex items-center justify-center">
                  <div className="text-[#FFD700] font-serif italic text-3xl opacity-50 group-hover:opacity-100 transition-opacity">🎬 Cinematic</div>
                </div>
                <div className="text-xs text-red-400 uppercase tracking-widest font-bold mb-2">Theme Example</div>
                <h3 className="text-2xl font-serif text-gold-50 mb-2">Bollywood Romance</h3>
                <p className="text-plum-300 text-sm mb-6 flex-grow">Rich marigold, cinematic poster typography, and a spinning vinyl soundtrack.</p>
                <div className="pt-4 border-t border-plum-800">
                  <Button variant="outline" className="w-full border-gold-500/30 text-gold-200 hover:bg-gold-500 hover:text-plum-950" onClick={() => window.open('/demo/custom/bollywood', '_blank')}>
                    View Live Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
