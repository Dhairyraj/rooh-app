import { motion } from 'framer-motion';
import { Sparkles, MonitorSmartphone } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const TemplateShowcase = () => {
  const templates = [
    { id: 'eternal', name: 'Eternal', desc: 'Our flagship cinematic experience. Deep plum & champagne gold.' },
    { id: 'noor', name: 'Noor', desc: 'Warm sunrise palette. Perfect for everyday love.' },
    { id: 'junoon', name: 'Junoon', desc: 'Dramatic and cinematic. For grand gestures.' }
  ];

  return (
    <section className="py-32 bg-plum-950 relative overflow-hidden border-t border-plum-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
            <MonitorSmartphone className="w-4 h-4 mr-2" /> Cinematic Templates
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-50 mb-6">Immortialise Your Story</h2>
          <p className="text-plum-200 text-lg max-w-2xl mx-auto">
            Choose from 6 stunning, interactive digital memory websites. Customize with your photos and share a link they'll keep forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((tpl, i) => (
            <motion.div 
              key={tpl.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-plum-900 border border-plum-700 rounded-3xl p-8 hover:border-gold-500/30 transition-colors group flex flex-col"
            >
              <div className="aspect-[4/3] bg-plum-950 rounded-xl mb-6 relative overflow-hidden border border-plum-800">
                <iframe 
                  src={`/demo/${tpl.id}`} 
                  className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                  title={tpl.name}
                />
              </div>
              <h3 className="text-2xl font-serif text-gold-100 mb-2">{tpl.name}</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">{tpl.desc}</p>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-gold-500/10 text-gold-300 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.location.href = `/demo/${tpl.id}`}>Live Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => window.location.href = '/pricing'}>₹299</Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gold-500/30 text-gold-200 hover:bg-gold-500/10" onClick={() => window.location.href = '/pricing'}>
            View All 6 Templates <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
