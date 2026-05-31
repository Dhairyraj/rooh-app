import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';

const questions = [
  { text: "How important is spending holidays with extended family?", category: "Family" },
  { text: "What's your ideal way to spend a Saturday morning?", category: "Lifestyle" },
  { text: "How do you prefer to handle financial stress?", category: "Finance" },
  { text: "What role does physical affection play in your daily life?", category: "Intimacy" },
  { text: "How much alone time do you need to recharge?", category: "Lifestyle" }
];

export const Compatibility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    setAnswers([...answers, value]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-3xl font-serif text-gold-100 mb-2">Compatibility Deep-Dive</h1>
        <p className="text-plum-300">Discover where your values align beautifully.</p>
      </div>

      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-plum-800 border border-plum-700 p-8 rounded-2xl shadow-xl text-center"
            >
              <div className="text-gold-400 text-xs font-medium uppercase tracking-wider mb-4">
                {questions[currentIndex].category}
              </div>
              <h3 className="text-xl font-serif text-gold-50 mb-8">
                {questions[currentIndex].text}
              </h3>

              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4, 5].map((val) => (
                  <Button
                    key={val}
                    variant="outline"
                    className="w-full text-left justify-start border-plum-600 text-plum-100 hover:bg-plum-700"
                    onClick={() => handleAnswer(val)}
                  >
                    {val === 1 && "Strongly Disagree"}
                    {val === 2 && "Disagree"}
                    {val === 3 && "Neutral"}
                    {val === 4 && "Agree"}
                    {val === 5 && "Strongly Agree"}
                  </Button>
                ))}
              </div>
              
              <div className="mt-8 text-sm text-plum-400">
                Question {currentIndex + 1} of {questions.length}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-plum-800 border border-gold-400/30 p-8 rounded-2xl shadow-xl shadow-gold-900/10 text-center relative overflow-hidden"
            >
              {(localStorage.getItem('rooh_tier') === 'spark' || !localStorage.getItem('rooh_tier')) && (
                <div className="absolute inset-0 z-20 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-8">
                  <div className="bg-plum-900 border border-gold-500/30 p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
                    <h3 className="text-2xl font-serif text-gold-100 mb-3">Unlock Your Full Compatibility Report</h3>
                    <p className="text-plum-200 text-sm mb-6 leading-relaxed">
                      Discover exactly where your values align, where they clash, and get a personalized psychological breakdown of your relationship dynamics.
                    </p>
                    <Button className="w-full" onClick={() => window.location.href = '/pricing'}>
                      Unlock Flame Tier — ₹299
                    </Button>
                  </div>
                </div>
              )}
              
              <div className={`relative z-10 ${(localStorage.getItem('rooh_tier') === 'spark' || !localStorage.getItem('rooh_tier')) ? 'blur-sm select-none' : ''}`}>
                <div className="w-20 h-20 rounded-full bg-plum-900 border-4 border-gold-400 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-serif text-gold-200">85%</span>
                </div>
                <h3 className="text-2xl font-serif text-gold-50 mb-4">Beautifully Aligned</h3>
                <p className="text-plum-200 mb-8 leading-relaxed">
                  You both value independence but cherish deep intimacy. Your approaches to lifestyle and family are highly compatible.
                </p>
                <Button className="w-full" onClick={() => window.location.href = '/play'}>
                  Return to Games
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
