import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, Eye, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { RoohLetter } from '../../components/ui/RoohLetter';

const PROMPTS = [
  "Where are we living?",
  "What does our typical Sunday look like?",
  "How has our career or financial situation changed?",
  "How are we balancing family and independence?",
  "What is our biggest shared achievement?",
  "What new tradition have we started?",
  "Where is our favorite travel destination?",
  "What is one fear we have conquered together?"
];

export const FiveYearVision = () => {
  const tier = localStorage.getItem('rooh_tier') || 'spark';
  const isFlame = tier === 'flame' || tier === 'eternal' || tier === 'forever';

  const [phase, setPhase] = useState<'p1' | 'p2' | 'compare'>('p1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [p1Answers, setP1Answers] = useState<string[]>(Array(PROMPTS.length).fill(''));
  const [p2Answers, setP2Answers] = useState<string[]>(Array(PROMPTS.length).fill(''));

  const handleNext = () => {
    if (currentIndex < PROMPTS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      if (phase === 'p1') {
        setPhase('p2');
        setCurrentIndex(0);
      } else if (phase === 'p2') {
        setPhase('compare');
      }
    }
  };

  const currentAnswers = phase === 'p1' ? p1Answers : p2Answers;
  const setAnswers = phase === 'p1' ? setP1Answers : setP2Answers;

  return (
    <>
      <Helmet>
        <title>The 5 Year Vision | Rooh</title>
        <meta name="description" content="Align your futures. Answer independently and compare your 5-year relationship vision." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden">
        
        {!isFlame && (
          <div className="absolute inset-0 z-50 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
            <div className="bg-plum-900 border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
              <Lock className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">The 5 Year Vision</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                A powerful exercise where you both independently map out your ideal future across 8 key areas, then compare notes. Available on Flame tier and above.
              </p>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/pricing'}>
                Unlock Flame Tier — ₹299
              </Button>
            </div>
          </div>
        )}

        <div className={`max-w-4xl w-full ${!isFlame ? 'blur-sm select-none opacity-50' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gold-100 mb-4 flex items-center justify-center">
              <Eye className="w-8 h-8 mr-4 opacity-80 text-gold-400" /> The 5 Year Vision
            </h1>
            <p className="text-plum-300">Align your futures. Discover where you overlap.</p>
          </div>

          <AnimatePresence mode="wait">
            {(phase === 'p1' || phase === 'p2') ? (
              <motion.div
                key={phase + currentIndex}
                initial={{ opacity: 0, x: phase === 'p2' && currentIndex === 0 ? 50 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-plum-800 border border-plum-700 p-8 md:p-12 rounded-2xl shadow-xl"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="text-sm font-medium uppercase tracking-widest text-gold-400">
                    {phase === 'p1' ? 'Partner 1' : 'Partner 2'}
                  </div>
                  <div className="text-sm text-plum-400">
                    Question {currentIndex + 1} of {PROMPTS.length}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-gold-50 mb-8 leading-snug">
                  In 5 years... <br/>
                  <span className="text-gold-200 italic">{PROMPTS[currentIndex]}</span>
                </h3>
                
                <textarea
                  value={currentAnswers[currentIndex]}
                  onChange={(e) => {
                    const newAnswers = [...currentAnswers];
                    newAnswers[currentIndex] = e.target.value;
                    setAnswers(newAnswers);
                  }}
                  className="w-full bg-plum-900 border border-plum-700 text-plum-100 p-4 min-h-[150px] focus:outline-none focus:border-gold-500/50 rounded-lg text-lg leading-relaxed mb-8"
                  placeholder="I see us..."
                />
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-plum-400 italic">
                    {phase === 'p1' && currentIndex === PROMPTS.length - 1 ? "Next: Hand device to Partner 2" : ""}
                    {phase === 'p2' && currentIndex === PROMPTS.length - 1 ? "Next: Reveal and compare" : ""}
                  </div>
                  <Button 
                    onClick={handleNext} 
                    disabled={currentAnswers[currentIndex].trim().length < 5}
                  >
                    {currentIndex < PROMPTS.length - 1 ? 'Next Area' : (phase === 'p1' ? 'Complete My Vision' : 'Reveal Our Vision')}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="compare"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="bg-plum-800/80 p-8 rounded-2xl border border-gold-500/30 text-center mb-8">
                  <h2 className="text-3xl font-serif text-gold-100 mb-2">Our 5 Year Vision</h2>
                  <p className="text-plum-200">Discuss the overlaps and the differences.</p>
                </div>

                {PROMPTS.map((prompt, i) => (
                  <div key={i} className="bg-plum-900/50 border border-plum-700 rounded-xl overflow-hidden">
                    <div className="bg-plum-800 p-4 border-b border-plum-700 text-center font-serif text-gold-200 text-lg">
                      {prompt}
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-plum-700">
                      <div className="p-6">
                        <div className="text-xs uppercase tracking-widest text-plum-400 mb-2">Partner 1</div>
                        <p className="text-plum-100 leading-relaxed">{p1Answers[i]}</p>
                      </div>
                      <div className="p-6">
                        <div className="text-xs uppercase tracking-widest text-plum-400 mb-2">Partner 2</div>
                        <p className="text-plum-100 leading-relaxed">{p2Answers[i]}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <Button variant="outline" className="border-gold-500/50 text-gold-200 hover:bg-plum-800">
                    <Check className="w-4 h-4 mr-2" /> Save to Memory Lane
                  </Button>
                  <Button onClick={() => window.location.href = '/play'}>
                    Back to Experiences
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {phase === 'compare' && isFlame && <RoohLetter />}
    </>
  );
};
