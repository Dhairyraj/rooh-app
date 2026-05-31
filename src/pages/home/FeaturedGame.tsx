import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const FeaturedGame = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900 border-t border-plum-800 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Visual representation of a card stack */}
            <div className="absolute inset-0 bg-gold-200/5 rounded-2xl transform rotate-6 scale-95 border border-gold-200/10"></div>
            <div className="absolute inset-0 bg-plum-800 rounded-2xl transform -rotate-3 scale-100 border border-plum-700 shadow-2xl flex flex-col items-center justify-center p-8 text-center">
              <span className="text-gold-400 font-serif text-lg mb-8">Question 12</span>
              <h3 className="text-2xl md:text-3xl font-serif text-gold-50 mb-12 leading-relaxed">
                "If you could wake up tomorrow having gained any one quality or ability, what would it be?"
              </h3>
              <div className="w-12 h-1 bg-gold-500/50 rounded-full mt-auto"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <span className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-4 block">The Flagship Experience</span>
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6 leading-tight">
            Fall in love.<br />Or fall deeper.
          </h2>
          <p className="text-plum-200 text-lg mb-6 leading-relaxed">
            Psychologist Arthur Aron successfully made two strangers fall in love in his laboratory using a specific set of 36 questions. 
          </p>
          <p className="text-plum-200 text-lg mb-8 leading-relaxed">
            We've taken this proven psychological framework and turned it into an immersive, cinematic digital experience. It starts simple, but by question 12, you'll be having conversations you haven't had in years.
          </p>
          
          <Button size="lg" onClick={() => window.location.href = '/play/36-questions'}>
            Experience Set 1 for Free
          </Button>
        </motion.div>
        
      </div>
    </section>
  );
};
