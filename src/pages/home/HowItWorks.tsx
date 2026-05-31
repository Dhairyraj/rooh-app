import { motion } from 'framer-motion';
import { Heart, Sparkles, Lock } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Sparkles className="w-8 h-8 text-gold-300" />,
      title: 'Choose an Experience',
      description: 'Select from our library of interactive couple games, from the famous 36 Questions of Love to Compatibility deep-dives.'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-300" />,
      title: 'Play Together',
      description: 'Pour a glass of wine, put away your phones, and spend an evening actually looking at and listening to each other.'
    },
    {
      icon: <Lock className="w-8 h-8 text-gold-300" />,
      title: 'Unlock Memories',
      description: 'Your answers and moments are saved into a beautifully designed, private digital capsule that you can keep forever.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6">How Rooh Works</h2>
          <p className="text-plum-200 max-w-2xl mx-auto">
            We've removed all the friction so you can focus entirely on each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card variant="glass" className="h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-plum-800 border border-gold-500/20 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-medium text-gold-100 mb-4">{step.title}</h3>
                <p className="text-plum-200 leading-relaxed text-sm">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
