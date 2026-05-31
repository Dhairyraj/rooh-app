import { motion } from 'framer-motion';

export const Hook = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-plum-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-8 leading-tight">
            When was the last time you learned something <span className="italic text-gold-300">completely new</span> about your partner?
          </h2>
          
          <p className="text-lg text-plum-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            In the beginning, we talk until 3 AM. We ask questions. We listen. But as years pass, conversation becomes logistics—"Did you pay the bill?", "What's for dinner?"
          </p>
          
          <p className="text-lg text-plum-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            We spend more time looking at our screens than looking into each other's eyes. The intimacy doesn't disappear; it just gets buried under routine.
          </p>

          <div className="w-16 h-px bg-gold-500/30 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
