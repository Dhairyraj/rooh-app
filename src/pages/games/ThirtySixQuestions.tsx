import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const questions = [
  "Given the choice of anyone in the world, whom would you want as a dinner guest?",
  "Would you like to be famous? In what way?",
  "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
  "What would constitute a 'perfect' day for you?",
  "When did you last sing to yourself? To someone else?",
  "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
  "Do you have a secret hunch about how you will die?",
  "Name three things you and your partner appear to have in common.",
  "For what in your life do you feel most grateful?",
  "If you could change anything about the way you were raised, what would it be?",
  "Take four minutes and tell your partner your life story in as much detail as possible.",
  "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
  // Q13 (Index 12) - Where the paywall hits
  "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?"
];

export const ThirtySixQuestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isUnlocked] = useState(false);

  const isPaywall = currentIndex === 12 && !isUnlocked;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Mock payment for now
  const handleUnlock = () => {
    window.location.href = '/pricing';
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    })
  };

  return (
    <div className="min-h-screen bg-plum-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Header */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-3xl font-serif text-gold-100 mb-2">36 Questions of Love</h1>
        <div className="flex items-center justify-center gap-4 text-plum-300 text-sm">
          <span>Set {currentIndex < 12 ? '1' : '2'} of 3</span>
          <span className="w-1 h-1 rounded-full bg-gold-500/50"></span>
          <span>Question {currentIndex + 1}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-plum-900 rounded-full h-1.5 mb-12 overflow-hidden">
        <motion.div 
          className="bg-gold-400 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex) / 36) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-md aspect-[3/4] perspective-[1000px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute inset-0 bg-plum-800 rounded-2xl border border-plum-700 shadow-2xl flex flex-col items-center justify-center p-6 sm:p-8 text-center overflow-hidden ${isPaywall ? 'blur-[8px]' : ''}`}
          >
            <span className="text-gold-400/50 font-serif text-6xl absolute top-8 left-8 opacity-20">"</span>
            <h2 className="text-2xl md:text-3xl font-serif text-gold-50 leading-relaxed z-10">
              {questions[currentIndex]}
            </h2>
            <span className="text-gold-400/50 font-serif text-6xl absolute bottom-0 right-8 opacity-20 rotate-180">"</span>
          </motion.div>
        </AnimatePresence>

        {/* Paywall Overlay */}
        <AnimatePresence>
          {isPaywall && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="absolute inset-0 bg-plum-950/60 rounded-2xl"></div>
              
              <div className="relative z-30 bg-plum-800 border border-gold-400/30 p-6 sm:p-8 rounded-xl shadow-2xl shadow-plum-900/50 max-w-[320px] sm:max-w-sm w-full mx-auto">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                  <Heart className="w-6 h-6 text-gold-300" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif text-gold-100 mb-3">The most beautiful truths are still ahead.</h3>
                
                <p className="text-plum-200 text-xs sm:text-sm mb-6 leading-relaxed">
                  Set 2 dives into the deeper truths that transform relationships. Unlock the rest of the 36 Questions and your permanent Memory Website by upgrading.
                </p>
                
                <Button className="w-full mb-3" onClick={handleUnlock}>
                  Unlock Flame Tier <Lock className="w-4 h-4 ml-2" />
                </Button>
                
                <p className="text-xs text-plum-400">Takes 30 seconds. Lasts a lifetime.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 mt-12 w-full max-w-md">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0 || isPaywall}
          className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-plum-400 hover:text-gold-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <span className="text-plum-300 font-medium text-sm w-16 text-center">
          {currentIndex + 1} / 36
        </span>
        
        <button 
          onClick={handleNext}
          disabled={isPaywall}
          className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-plum-400 hover:text-gold-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
};
