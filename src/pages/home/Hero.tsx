import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plum-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-200 text-sm font-medium tracking-wider uppercase mb-6">
            For couples who want more
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-gold-50 font-medium leading-[1.1] mb-8"
        >
          The question that changes everything — <span className="text-gold-200 italic">have you asked it yet?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-plum-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience interactive love games, uncover deep truths, and unlock beautiful memory pages designed to bring you closer than ever before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '/play/36-questions'}>
            Play Free Together
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-gold-100 border-gold-200/30 hover:bg-gold-500/10" onClick={() => window.location.href = '/pricing'}>
            Give as a Gift
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
