import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { RoohLetter } from '../../components/ui/RoohLetter';

export const TwoTruths = () => {
  const [phase, setPhase] = useState<'setup' | 'guess' | 'result'>('setup');
  const [statements, setStatements] = useState([
    { text: '', isLie: false },
    { text: '', isLie: false },
    { text: '', isLie: false }
  ]);
  const [lieIndex, setLieIndex] = useState<number | null>(null);
  const [guessIndex, setGuessIndex] = useState<number | null>(null);
  
  const handleSetupComplete = () => {
    if (statements.every(s => s.text.trim() !== '') && lieIndex !== null) {
      const newStatements = statements.map((s, i) => ({ ...s, isLie: i === lieIndex }));
      // Shuffle for the guesser
      const shuffled = [...newStatements].sort(() => Math.random() - 0.5);
      setStatements(shuffled);
      setPhase('guess');
    }
  };

  const handleGuess = (index: number) => {
    setGuessIndex(index);
    setPhase('result');
  };

  const resetGame = () => {
    setStatements([{ text: '', isLie: false }, { text: '', isLie: false }, { text: '', isLie: false }]);
    setLieIndex(null);
    setGuessIndex(null);
    setPhase('setup');
  };

  return (
    <>
      <Helmet>
        <title>Two Truths and a Lie | Rooh</title>
        <meta name="description" content="Test how well you really know each other in this classic playful game." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center mb-12">
          <h1 className="text-4xl font-serif text-gold-100 mb-4">Two Truths & A Lie</h1>
          <p className="text-plum-300">Partner Edition. How well do you really know them?</p>
        </div>

        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {phase === 'setup' && (
              <motion.div
                key="setup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-plum-800 border border-plum-700 p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-serif text-gold-100 mb-6 text-center">Partner 1: Write your statements</h3>
                <div className="space-y-6 mb-8">
                  {statements.map((s, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <button 
                        onClick={() => setLieIndex(i)}
                        className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center border transition-colors ${lieIndex === i ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-plum-900 border-plum-600 text-plum-400'}`}
                        title="Mark as the lie"
                      >
                        {lieIndex === i ? 'LIE' : '?'}
                      </button>
                      <Input 
                        value={s.text}
                        onChange={(e) => {
                          const newS = [...statements];
                          newS[i].text = e.target.value;
                          setStatements(newS);
                        }}
                        placeholder={`Statement ${i + 1}`}
                        className="w-full bg-plum-900 border-plum-700 text-plum-100"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-plum-300 text-center mb-6 italic">Don't let Partner 2 look at the screen!</div>
                <Button 
                  className="w-full" 
                  disabled={lieIndex === null || statements.some(s => s.text.trim() === '')}
                  onClick={handleSetupComplete}
                >
                  Hand over to Partner 2
                </Button>
              </motion.div>
            )}

            {phase === 'guess' && (
              <motion.div
                key="guess"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-plum-800 border border-plum-700 p-8 rounded-2xl shadow-xl text-center"
              >
                <h3 className="text-xl font-serif text-gold-100 mb-2">Partner 2: Spot the Lie</h3>
                <p className="text-plum-300 mb-8 text-sm">Select the statement you think is completely made up.</p>
                
                <div className="space-y-4">
                  {statements.map((s, i) => (
                    <Button 
                      key={i}
                      variant="outline"
                      className="w-full h-auto py-6 px-6 text-left justify-start border-plum-600 text-plum-100 hover:bg-plum-700 whitespace-normal text-lg"
                      onClick={() => handleGuess(i)}
                    >
                      "{s.text}"
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            {phase === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-plum-800 border border-gold-400/30 p-8 md:p-12 rounded-2xl shadow-xl text-center"
              >
                {statements[guessIndex!].isLie ? (
                  <>
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-3xl font-serif text-gold-50 mb-4">Bullseye!</h3>
                    <p className="text-plum-200 mb-8 leading-relaxed">
                      You spotted the lie perfectly. You really know them inside and out.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                      <span className="text-3xl">🎭</span>
                    </div>
                    <h3 className="text-3xl font-serif text-gold-50 mb-4">Fooled!</h3>
                    <p className="text-plum-200 mb-8 leading-relaxed">
                      You thought the truth was a lie! The actual lie was: <br/><br/>
                      <span className="text-gold-200 italic font-medium">"{statements.find(s => s.isLie)?.text}"</span>
                    </p>
                  </>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-gold-500/50 text-gold-200 hover:bg-plum-900" onClick={resetGame}>
                    Swap Roles & Play Again
                  </Button>
                  <Button onClick={() => window.location.href = '/play'}>
                    Back to Games
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {phase === 'result' && <RoohLetter />}
    </>
  );
};
