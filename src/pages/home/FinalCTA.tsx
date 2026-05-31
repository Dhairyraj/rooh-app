import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const FinalCTA = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-plum-950 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gold-50 mb-8 leading-tight">
            Ready to create an <span className="italic text-gold-200">unforgettable evening?</span>
          </h2>
          <p className="text-xl text-plum-200 mb-12">
            No sign-up required to start. Just sit together, tap the button below, and ask the first question.
          </p>
          
          <Button size="lg" className="px-12 text-lg" onClick={() => window.location.href = '/play/36-questions'}>
            Start the Experience Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
