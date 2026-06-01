import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const CustomTeaser = () => {
  const customDemos = [
    {
      id: 'custom/harry-potter',
      name: 'The Wizarding World',
      desc: 'Deep navy, parchment textures, floating particles, and a Marauder\'s Map timeline.',
      tag: 'Magical',
      color: 'text-blue-400'
    },
    {
      id: 'custom/friends',
      name: 'Central Perk Edition',
      desc: 'Warm orange, coffee vibes, episode titles, and a cork board photo wall.',
      tag: 'Cozy',
      color: 'text-orange-400'
    },
    {
      id: 'custom/bollywood',
      name: 'Bollywood Romance',
      desc: 'Rich marigold, cinematic poster typography, and a spinning vinyl soundtrack.',
      tag: 'Cinematic',
      color: 'text-red-400'
    }
  ];

  return (
    <section className="py-24 bg-plum-900 border-t border-plum-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 mr-2" /> Custom Themes
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-50 mb-6">See What's Possible</h2>
          <p className="text-plum-200 text-lg max-w-2xl mx-auto">
            Want a theme based on your favorite movie? A specific color palette? A unique timeline design? Our designers will craft a bespoke digital memory website just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customDemos.map((demo, i) => (
            <motion.div 
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-plum-950 border border-plum-700 rounded-3xl p-8 hover:border-gold-500/30 transition-colors group flex flex-col shadow-2xl"
            >
              <div className={`text-xs ${demo.color} uppercase tracking-widest font-bold mb-2`}>{demo.tag}</div>
              <h3 className="text-2xl font-serif text-gold-100 mb-2">{demo.name}</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">{demo.desc}</p>
              
              <div className="flex flex-col gap-2">
                <Button className="w-full bg-gold-500/10 text-gold-300 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open(`/demo/${demo.id}`, '_blank')}>
                  Preview Demo
                </Button>
                <Button className="w-full bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/custom'}>
                  ₹1499
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gold-500/30 text-gold-200 hover:bg-gold-500/10" onClick={() => window.location.href = '/custom'}>
            Request A Custom Theme <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
