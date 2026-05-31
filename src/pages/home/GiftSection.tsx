import { motion } from 'framer-motion';
import { Gift, Clock, Sparkles } from 'lucide-react';

export const GiftSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-800 border-t border-plum-700/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6 leading-tight">
            The Gift of <span className="italic">Eternal Memory</span>
          </h2>
          <p className="text-plum-200 text-lg mb-8 leading-relaxed">
            With the Eternal Tier, your answers aren't just a fun game—they become a permanent digital artifact. Within 10 minutes of completing your experience, we generate a beautifully designed, private website dedicated entirely to your relationship.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Sparkles className="w-6 h-6 text-gold-400 mr-4 shrink-0 mt-1" />
              <div>
                <h4 className="text-gold-100 font-medium text-lg mb-1">Your Personal URL</h4>
                <p className="text-plum-300 text-sm">A beautiful web page showcasing your love story, highest compatibility points, and favorite moments.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-gold-400 mr-4 shrink-0 mt-1" />
              <div>
                <h4 className="text-gold-100 font-medium text-lg mb-1">The Time Capsule</h4>
                <p className="text-plum-300 text-sm">Write a letter to each other today that automatically unlocks on your next anniversary.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Gift className="w-6 h-6 text-gold-400 mr-4 shrink-0 mt-1" />
              <div>
                <h4 className="text-gold-100 font-medium text-lg mb-1">Zero Wait Time</h4>
                <p className="text-plum-300 text-sm">Instant 10-minute generation means it's the perfect ultra-thoughtful, last-minute gift.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-1 md:order-2"
        >
          {/* Abstract representation of a digital memory page */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-plum-700 bg-plum-900 flex flex-col items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-plum-900/50 mix-blend-overlay"></div>
            <div className="w-24 h-24 rounded-full border border-gold-300/30 flex items-center justify-center mb-6 z-10 bg-plum-800/80 backdrop-blur-sm">
              <span className="font-serif text-3xl text-gold-200">A&R</span>
            </div>
            <h3 className="font-serif text-2xl text-gold-50 mb-2 z-10">Our Story</h3>
            <p className="text-plum-300 text-sm z-10 font-medium tracking-widest uppercase">Est. 2021</p>
            
            {/* Fake UI elements */}
            <div className="w-3/4 h-2 bg-plum-800 rounded-full mt-8 z-10 overflow-hidden">
              <div className="w-1/3 h-full bg-gold-400/50"></div>
            </div>
            <div className="w-1/2 h-2 bg-plum-800 rounded-full mt-3 z-10"></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
