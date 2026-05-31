import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Shield, Lock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Pricing = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutTier, setCheckoutTier] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleCheckout = (tierName: string) => {
    if (tierName === 'Spark') {
      window.location.href = '/play/36-questions';
      return;
    }
    
    // Simulate Razorpay Test Mode Checkout
    setCheckoutTier(tierName);
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      
      // Save simulated tier unlock to localStorage
      if (tierName.startsWith('Template ')) {
        const templateName = tierName.split(' ')[1].toLowerCase();
        localStorage.setItem(`rooh_template_${templateName}`, 'true');
        setTimeout(() => {
          window.location.href = `/templates/${templateName}`;
        }, 3000);
      } else {
        localStorage.setItem('rooh_tier', tierName.toLowerCase());
        setTimeout(() => {
          window.location.href = '/play/36-questions';
        }, 3000);
      }
    }, 2000);
  };

  const tiers = [
    {
      name: "Spark",
      price: "Free",
      description: "A taste of deep connection.",
      features: [
        "First 12 questions of 36 Questions",
        "Basic relationship check-in"
      ],
      buttonText: "Start Playing",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Flame",
      price: "₹299",
      description: "Unlock all games.",
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
    <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-gold-50 mb-6">Invest in Your Story</h1>
          <p className="text-plum-200 text-lg max-w-2xl mx-auto">
            You spend thousands on dinners and bouquets. Invest a fraction of that on an experience that lasts a lifetime. Secure, 256-bit encrypted checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-gold-500 text-plum-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" /> Most Thoughtful
                  </span>
                </div>
              )}
              
              <Card 
                variant={tier.popular ? 'highlight' : 'default'} 
                className={`h-full flex flex-col ${tier.popular ? 'border-gold-500/50 shadow-gold-900/20' : ''}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-serif text-gold-100 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-medium text-gold-50 mb-2">{tier.price}</div>
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
                  onClick={() => handleCheckout(tier.name)}
                >
                  {tier.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-16 pt-16 border-t border-plum-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gold-100 mb-4">À La Carte Templates</h2>
            <p className="text-plum-300">Standalone cinematic websites for special moments. (Included in Eternal/Forever tiers)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Eternal */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-2">The Flagship</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Eternal</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Our crown jewel. Deep plum, cinematic scroll, and beautiful typography.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/eternal', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Eternal')}>₹299</Button>
              </div>
            </Card>

            {/* Noor */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-orange-400 uppercase tracking-widest font-bold mb-2">Everyday Love</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Noor</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Warm sunrise palette. Perfect for 'just because' or telling them why you love them.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/noor', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Noor')}>₹299</Button>
              </div>
            </Card>
            
            {/* Junoon */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-red-400 uppercase tracking-widest font-bold mb-2">Obsession</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Junoon</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Dramatic and cinematic. For grand gestures, deep confessions, and proposals.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/junoon', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Junoon')}>₹299</Button>
              </div>
            </Card>

            {/* Mehfil */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-purple-400 uppercase tracking-widest font-bold mb-2">Milestones</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Mehfil</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Festive and upscale. Celebrate birthdays and anniversaries with confetti and joy.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/mehfil', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Mehfil')}>₹299</Button>
              </div>
            </Card>

            {/* Modern */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Editorial</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Modern Love</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Minimalist, sleek, black and white with bold typography.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/modern', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Modern')}>₹299</Button>
              </div>
            </Card>

            {/* Dreamy */}
            <Card className="p-6 bg-plum-900/50 border-plum-700 flex flex-col h-full hover:border-gold-500/50 transition-colors">
              <div className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Ethereal</div>
              <h3 className="text-2xl font-serif text-gold-50 mb-2">Dreamy</h3>
              <p className="text-plum-300 text-sm mb-6 flex-grow">Soft pastels, ethereal clouds, and romantic gentleness.</p>
              <div className="flex gap-2 mt-auto pt-4 border-t border-plum-800">
                <Button className="flex-1 bg-gold-500/20 text-gold-200 hover:bg-gold-500 hover:text-plum-950 border-none transition-colors" onClick={() => window.open('/demo/dreamy', '_blank')}>Preview Demo</Button>
                <Button className="flex-none bg-plum-800 text-gold-100 hover:bg-plum-700 border-none px-4" onClick={() => handleCheckout('Template Dreamy')}>₹299</Button>
              </div>
            </Card>

          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-plum-400 text-sm opacity-60">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" /> 100% Secure Checkout
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" /> Data Encrypted
          </div>
        </div>
      </div>

      {/* Mock Razorpay Modal */}
      <AnimatePresence>
        {(isProcessing || success) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-plum-900 border border-plum-700 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
            >
              {isProcessing ? (
                <div className="py-8">
                  <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <h3 className="text-xl font-serif text-gold-50 mb-2">Processing Payment...</h3>
                  <p className="text-plum-300 text-sm">Test Mode - No real money charged.</p>
                </div>
              ) : (
                <div className="py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-serif text-gold-50 mb-2">Payment Successful!</h3>
                  <p className="text-plum-300 text-sm mb-6">You have unlocked the {checkoutTier} tier.</p>
                  <p className="text-gold-400 text-xs animate-pulse">Redirecting to your experience...</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pricing;
