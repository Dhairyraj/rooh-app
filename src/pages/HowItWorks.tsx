import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | Rooh</title>
        <meta name="description" content="Learn how Rooh helps you and your partner foster deep intimacy and create permanent digital memory capsules in 3 simple steps." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-serif text-gold-100 mb-6">How Rooh Works</h1>
            <p className="text-plum-200 text-lg max-w-2xl mx-auto">
              We've designed an experience that removes all friction, allowing you to focus entirely on each other.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-plum-900 border border-gold-500/20 flex items-center justify-center relative shadow-2xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-500 text-plum-900 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <Sparkles className="w-20 h-20 text-gold-400" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-serif text-gold-50 mb-4">Choose an Experience</h2>
                <p className="text-plum-200 leading-relaxed">
                  Select from our library of interactive games designed by relationship experts. Whether you want to answer the famous 36 Questions, test your compatibility, or decode your love languages, there is a path for you.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-12"
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-plum-900 border border-gold-500/20 flex items-center justify-center relative shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500 text-plum-900 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <Heart className="w-20 h-20 text-gold-400" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h2 className="text-3xl font-serif text-gold-50 mb-4">Play Together</h2>
                <p className="text-plum-200 leading-relaxed">
                  Pour a glass of wine, put away your phones, and spend an evening actually looking at and listening to each other. The UI is designed to get out of the way so the conversation takes center stage.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-plum-900 border border-gold-500/20 flex items-center justify-center relative shadow-2xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-500 text-plum-900 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <Lock className="w-20 h-20 text-gold-400" />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-serif text-gold-50 mb-4">Unlock Memories</h2>
                <p className="text-plum-200 leading-relaxed">
                  Your most profound answers, milestones, and shared moments don't just disappear when the evening ends. They are saved into a beautifully designed, private digital capsule that you can keep and revisit forever.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-serif text-gold-100 mb-8">Ready to begin?</h2>
            <Button size="lg" onClick={() => window.location.href = '/play'}>Explore Experiences</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
