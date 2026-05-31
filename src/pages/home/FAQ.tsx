import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: "Is this just another basic quiz app?",
      answer: "No. Rooh is built on proven psychological frameworks (like Arthur Aron's 36 Questions) and outputs a stunning, personalized memory website. It's designed to be a premium, emotional gifting experience, not a casual distraction."
    },
    {
      question: "Can I play for free before buying?",
      answer: "Yes! You can start the 36 Questions of Love completely free, with no signup required. You only pay when you decide to unlock the deeper questions and memory-saving features."
    },
    {
      question: "Is ₹999 expensive for a digital product?",
      answer: "It's the cost of a nice bouquet of flowers, but it lasts forever. It creates an entire evening of profound intimacy, and generates a custom memory capsule you'll look back on for years."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. Your answers, memories, and time capsules are completely private and encrypted. Only you and anyone you share your specific secure link with can view your memory pages."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900 border-t border-plum-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-plum-700/50 bg-plum-800/30 rounded-lg overflow-hidden transition-colors hover:bg-plum-800/50"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg text-gold-50">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold-400 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-plum-200 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
