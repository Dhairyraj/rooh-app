import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const PricingSection = () => {
  const tiers = [
    {
      name: "Spark",
      price: "Free",
      description: "A taste of deep connection.",
      features: [
        "First 12 questions of 36 Questions",
        "Basic relationship check-in",
        "No saved memories"
      ],
      buttonText: "Start Playing",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Flame",
      price: "₹299",
      description: "Unlock all games and experiences.",
      features: [
        "Full 36 Questions unlocked",
        "Compatibility Engine access",
        "Love Language Decoder",
        "Temporary digital summary (24h)"
      ],
      buttonText: "Unlock Flame",
      buttonVariant: "secondary" as const,
      popular: false
    },
    {
      name: "Eternal",
      price: "₹999",
      description: "The ultimate digital gift.",
      features: [
        "Everything in Flame",
        "Beautiful, permanent Memory Website",
        "Time Capsule delivery on future date",
        "Anniversary Countdown dashboard",
        "Priority 10-minute generation"
      ],
      buttonText: "Gift Eternal",
      buttonVariant: "primary" as const,
      popular: true
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900 border-t border-plum-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6">Invest in Your Story</h2>
          <p className="text-plum-200 max-w-2xl mx-auto">
            You spend thousands on dinners and bouquets. Invest a fraction of that on an experience that lasts a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-gold-500 text-plum-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" /> Most Thoughtful Gift
                  </span>
                </div>
              )}
              
              <Card 
                variant={tier.popular ? 'highlight' : 'default'} 
                className={`h-full flex flex-col ${tier.popular ? 'border-gold-500/50 shadow-gold-900/20' : ''}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-gold-100 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-medium text-gold-50 mb-2">{tier.price}</div>
                  <p className="text-sm text-plum-300">{tier.description}</p>
                </div>
                
                <ul className="flex-grow space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gold-400 mr-3 shrink-0" />
                      <span className="text-plum-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.buttonVariant} 
                  className={`w-full ${tier.popular ? 'bg-gold-300 text-plum-900 hover:bg-gold-400 border-none' : ''}`}
                  onClick={() => window.location.href = '/pricing'}
                >
                  {tier.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
