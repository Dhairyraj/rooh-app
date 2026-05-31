import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, PenTool, Send, Save, Type } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { RoohLetter } from '../../components/ui/RoohLetter';

const PROMPTS = [
  "What do you wish they knew?",
  "What moment do you replay in your mind?",
  "What are you afraid to say out loud?",
  "What do you love that they do not notice?",
  "What do you promise them?"
];

export const UnsentLetter = () => {
  const tier = localStorage.getItem('rooh_tier') || 'spark';
  const isEternal = tier === 'eternal' || tier === 'forever';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(PROMPTS.length).fill(''));
  const [isFinished, setIsFinished] = useState(false);

  // Typewriter effect state
  const [displayedPrompt, setDisplayedPrompt] = useState('');

  useEffect(() => {
    if (!isEternal || isFinished) return;
    
    let currentText = '';
    const fullText = PROMPTS[currentIndex];
    setDisplayedPrompt('');
    
    let i = 0;
    const interval = setInterval(() => {
      currentText += fullText.charAt(i);
      setDisplayedPrompt(currentText);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    
    return () => clearInterval(interval);
  }, [currentIndex, isFinished, isEternal]);

  const handleNext = () => {
    if (currentIndex < PROMPTS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>The Unsent Letter | Rooh</title>
        <meta name="description" content="A guided writing experience to pour your heart out into a real love letter." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
        
        {!isEternal && (
          <div className="absolute inset-0 z-50 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">The Unsent Letter</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                A guided journaling experience designed to help you write a profound love letter. Download it, save it to your memory website, or send it anonymously. Available exclusively on Eternal and Forever tiers.
              </p>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/pricing'}>
                Unlock Eternal Tier — ₹999
              </Button>
            </div>
          </div>
        )}

        <div className={`max-w-3xl w-full ${!isEternal ? 'blur-sm select-none opacity-50' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gold-100 mb-4 flex items-center justify-center">
              <PenTool className="w-6 h-6 mr-4 opacity-50" /> The Unsent Letter
            </h1>
            <p className="text-plum-300">Take a deep breath. Write exactly what you feel.</p>
          </div>

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-plum-900/50 border border-plum-800 p-8 md:p-12 rounded-2xl shadow-xl relative"
              >
                <div className="text-gold-500/50 text-sm font-medium uppercase tracking-widest mb-8 text-center flex items-center justify-center">
                  <Type className="w-4 h-4 mr-2" /> Prompt {currentIndex + 1} of {PROMPTS.length}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-gold-100 mb-8 min-h-[80px]">
                  {displayedPrompt}<motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>
                </h3>
                
                <textarea
                  value={answers[currentIndex]}
                  onChange={(e) => {
                    const newAnswers = [...answers];
                    newAnswers[currentIndex] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                  className="w-full bg-transparent border-b border-plum-700 text-plum-100 p-4 min-h-[200px] focus:outline-none focus:border-gold-500/50 resize-none text-lg leading-relaxed placeholder-plum-700 font-serif"
                  placeholder="Start writing..."
                  autoFocus
                />
                
                <div className="flex justify-end mt-8">
                  <Button 
                    onClick={handleNext} 
                    disabled={answers[currentIndex].length < 10}
                    className="px-8"
                  >
                    {currentIndex < PROMPTS.length - 1 ? 'Next Prompt' : 'Seal Letter'}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#fcf8f2] border border-gold-200 p-8 md:p-16 rounded-sm shadow-2xl relative"
                style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', backgroundPosition: '0 0' }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/90 rounded-sm z-0" />
                
                <div className="relative z-10 text-gray-800 font-serif max-w-2xl mx-auto">
                  <h3 className="text-3xl mb-12 text-center italic text-gray-900 border-b border-gray-300 pb-8">My Letter to You</h3>
                  
                  <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                    {PROMPTS.map((_, i) => (
                      <div key={i}>
                        <p className="text-gray-900 mb-2">{answers[i]}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100">
                      <Save className="w-4 h-4 mr-2" /> Download PDF
                    </Button>
                    <Button className="bg-gray-900 text-white hover:bg-gray-800">
                      <Send className="w-4 h-4 mr-2" /> Send Anonymously
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {isFinished && isEternal && <RoohLetter />}
    </>
  );
};
