import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, Check, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { RoohLetter } from '../../components/ui/RoohLetter';

const ALL_QUESTIONS = [
  { optA: "Never have to do chores again", optB: "Never have to cook again" },
  { optA: "Travel the world for a year", optB: "Buy your dream home" },
  { optA: "Always know when they are lying", optB: "Always know what they are feeling" },
  { optA: "Have a designated weekly date night", optB: "Have spontaneous, unplanned dates" },
  { optA: "Share all passwords", optB: "Keep total digital privacy" },
  { optA: "Spend holidays with your family", optB: "Spend holidays with their family" },
  { optA: "Be rich and unknown", optB: "Be poor and famous" },
  { optA: "Sleep in a cold room with heavy blankets", optB: "Sleep in a warm room with thin sheets" },
  { optA: "Have a massive extravagant wedding", optB: "Elope privately" },
  { optA: "Adopt 3 dogs", optB: "Adopt 3 cats" },
  // Adding 5 more for demo
  { optA: "Live in a bustling city", optB: "Live in a quiet cabin" },
  { optA: "Cook dinner together", optB: "Order takeout and watch a movie" },
  { optA: "Have matching tattoos", optB: "Never get a tattoo" },
  { optA: "Win the lottery", optB: "Find your true purpose" },
  { optA: "Apologize first after a fight", optB: "Wait for them to apologize" }
];

export const WouldYouRather = () => {
  const tier = localStorage.getItem('rooh_tier') || 'spark';
  const isFlame = tier === 'flame' || tier === 'eternal' || tier === 'forever';
  
  const questions = isFlame ? ALL_QUESTIONS : ALL_QUESTIONS.slice(0, 10);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [player1Choice, setPlayer1Choice] = useState<'A' | 'B' | null>(null);
  const [player2Choice, setPlayer2Choice] = useState<'A' | 'B' | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [matches, setMatches] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleChoice = (player: 1 | 2, choice: 'A' | 'B') => {
    if (player === 1) setPlayer1Choice(choice);
    if (player === 2) setPlayer2Choice(choice);
  };

  const handleReveal = () => {
    if (player1Choice && player2Choice) {
      if (player1Choice === player2Choice) {
        setMatches(m => m + 1);
      }
      setRevealed(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setPlayer1Choice(null);
      setPlayer2Choice(null);
      setRevealed(false);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Would You Rather | Rooh</title>
        <meta name="description" content="A fun, revealing game for couples to see where their preferences match." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-4xl font-serif text-gold-100 mb-4">Would You Rather</h1>
          <p className="text-plum-300">Answer independently. Reveal the truth.</p>
        </div>

        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-plum-800 border border-plum-700 p-6 md:p-12 rounded-2xl shadow-xl"
              >
                <div className="text-center text-gold-400 text-sm font-medium uppercase tracking-wider mb-8">
                  Question {currentIndex + 1} of {questions.length}
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="flex flex-col gap-4 relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-plum-900 to-transparent opacity-50 pointer-events-none rounded-xl" />
                    <h3 className="text-lg font-serif text-gold-200 mb-2 text-center">Partner 1</h3>
                    <Button 
                      variant={player1Choice === 'A' ? 'primary' : 'outline'} 
                      onClick={() => !revealed && handleChoice(1, 'A')}
                      className={`h-auto py-6 px-4 text-center whitespace-normal border-plum-600 ${player1Choice === 'A' ? 'bg-gold-500 text-plum-950' : 'text-plum-100 hover:bg-plum-700'}`}
                    >
                      {questions[currentIndex].optA}
                    </Button>
                    <div className="text-center text-plum-400 font-serif italic text-sm">or</div>
                    <Button 
                      variant={player1Choice === 'B' ? 'primary' : 'outline'} 
                      onClick={() => !revealed && handleChoice(1, 'B')}
                      className={`h-auto py-6 px-4 text-center whitespace-normal border-plum-600 ${player1Choice === 'B' ? 'bg-gold-500 text-plum-950' : 'text-plum-100 hover:bg-plum-700'}`}
                    >
                      {questions[currentIndex].optB}
                    </Button>
                  </div>
                  
                  <div className="flex flex-col gap-4 relative">
                    <div className="absolute -inset-2 bg-gradient-to-l from-plum-900 to-transparent opacity-50 pointer-events-none rounded-xl" />
                    <h3 className="text-lg font-serif text-gold-200 mb-2 text-center">Partner 2</h3>
                    <Button 
                      variant={player2Choice === 'A' ? 'primary' : 'outline'} 
                      onClick={() => !revealed && handleChoice(2, 'A')}
                      className={`h-auto py-6 px-4 text-center whitespace-normal border-plum-600 ${player2Choice === 'A' ? 'bg-gold-500 text-plum-950' : 'text-plum-100 hover:bg-plum-700'}`}
                    >
                      {questions[currentIndex].optA}
                    </Button>
                    <div className="text-center text-plum-400 font-serif italic text-sm">or</div>
                    <Button 
                      variant={player2Choice === 'B' ? 'primary' : 'outline'} 
                      onClick={() => !revealed && handleChoice(2, 'B')}
                      className={`h-auto py-6 px-4 text-center whitespace-normal border-plum-600 ${player2Choice === 'B' ? 'bg-gold-500 text-plum-950' : 'text-plum-100 hover:bg-plum-700'}`}
                    >
                      {questions[currentIndex].optB}
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  {!revealed ? (
                    <Button 
                      size="lg" 
                      disabled={!player1Choice || !player2Choice}
                      onClick={handleReveal}
                      className="w-full md:w-auto"
                    >
                      Reveal Answer
                    </Button>
                  ) : (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6">
                      <div className="flex items-center justify-center gap-4 text-2xl font-serif">
                        {player1Choice === player2Choice ? (
                          <span className="text-green-400 flex items-center"><Check className="w-8 h-8 mr-2" /> Match!</span>
                        ) : (
                          <span className="text-red-400 flex items-center"><X className="w-8 h-8 mr-2" /> Differ</span>
                        )}
                      </div>
                      <Button size="lg" onClick={handleNext} className="w-full md:w-auto">
                        {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-plum-800 border border-gold-400/30 p-8 md:p-12 rounded-2xl shadow-xl shadow-gold-900/10 text-center relative overflow-hidden"
              >
                {!isFlame && (
                  <div className="absolute inset-0 z-20 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-8">
                    <div className="bg-plum-900 border border-gold-500/30 p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
                      <Lock className="w-10 h-10 text-gold-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-serif text-gold-100 mb-3">Unlock 40 More Questions</h3>
                      <p className="text-plum-200 text-sm mb-6 leading-relaxed">
                        You played the 10 free questions. Upgrade to Flame to unlock the full 50-question deck and deeper categories.
                      </p>
                      <Button className="w-full" onClick={() => window.location.href = '/pricing'}>
                        Unlock Flame Tier — ₹299
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className={`relative z-10 ${!isFlame ? 'blur-sm select-none' : ''}`}>
                  <div className="w-24 h-24 rounded-full bg-plum-900 border-4 border-gold-400 flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-3xl font-serif text-gold-200">{matches}/{questions.length}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-gold-50 mb-4">
                    {matches >= questions.length * 0.7 ? 'Highly Synchronized' : 'Opposites Attract'}
                  </h3>
                  <p className="text-plum-200 mb-12 leading-relaxed max-w-lg mx-auto text-lg">
                    {matches >= questions.length * 0.7 
                      ? "You two share incredibly similar preferences. Your alignment makes daily life smooth and harmonious." 
                      : "You two have very different preferences! This brings balance and fresh perspectives into the relationship, even if it causes a little friction."}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-gold-500/50 text-gold-200 hover:bg-plum-900">
                      Share Result Card
                    </Button>
                    <Button onClick={() => window.location.href = '/play'}>
                      Return to Games
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {isFinished && isFlame && <RoohLetter />}
    </>
  );
};
