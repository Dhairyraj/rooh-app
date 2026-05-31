import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import { Heart, Lock } from 'lucide-react';

const questions = [
  { text: "It's more meaningful to me when my partner...", optionA: "Sends me a loving text message unexpectedly.", optionB: "Hugs me tightly when they see me.", typeA: "Words of Affirmation", typeB: "Physical Touch" },
  { text: "I feel most loved when my partner...", optionA: "Helps me with a tedious chore without me asking.", optionB: "Brings me a small gift from their travels.", typeA: "Acts of Service", typeB: "Receiving Gifts" },
  { text: "I prefer when we...", optionA: "Spend an uninterrupted evening talking on the couch.", optionB: "Hold hands while walking.", typeA: "Quality Time", typeB: "Physical Touch" },
  { text: "It means a lot to me when my partner...", optionA: "Surprises me with a thoughtful present.", optionB: "Tells me how much they appreciate me.", typeA: "Receiving Gifts", typeB: "Words of Affirmation" },
  { text: "I feel deeply connected when...", optionA: "We go on a dedicated date night, just the two of us.", optionB: "They take a burden off my plate (e.g., cooking dinner).", typeA: "Quality Time", typeB: "Acts of Service" },
  // Adding 15 more to make 20
  { text: "I appreciate it when my partner...", optionA: "Gives me a back rub.", optionB: "Leaves me a sweet note.", typeA: "Physical Touch", typeB: "Words of Affirmation" },
  { text: "I feel cherished when my partner...", optionA: "Remembers something I wanted and buys it for me.", optionB: "Spends their Saturday doing a project with me.", typeA: "Receiving Gifts", typeB: "Quality Time" },
  { text: "I know my partner loves me when they...", optionA: "Say 'I love you' out of nowhere.", optionB: "Run an errand for me.", typeA: "Words of Affirmation", typeB: "Acts of Service" },
  { text: "I love it when my partner...", optionA: "Sits close to me while watching a movie.", optionB: "Brings me my favorite snack.", typeA: "Physical Touch", typeB: "Receiving Gifts" },
  { text: "I feel prioritized when my partner...", optionA: "Puts their phone away when we talk.", optionB: "Tells me I look great.", typeA: "Quality Time", typeB: "Words of Affirmation" },
  { text: "I feel secure when my partner...", optionA: "Helps me clean up after a long day.", optionB: "Cuddles with me in bed.", typeA: "Acts of Service", typeB: "Physical Touch" },
  { text: "It touches my heart when my partner...", optionA: "Gives me a gift they made themselves.", optionB: "Tells me they are proud of me.", typeA: "Receiving Gifts", typeB: "Words of Affirmation" },
  { text: "I feel valued when my partner...", optionA: "Plans a weekend getaway for us.", optionB: "Takes care of me when I'm sick.", typeA: "Quality Time", typeB: "Acts of Service" },
  { text: "I feel adored when my partner...", optionA: "Kisses me goodbye.", optionB: "Buys me flowers for no reason.", typeA: "Physical Touch", typeB: "Receiving Gifts" },
  { text: "It means the world to me when my partner...", optionA: "Compliments my personality.", optionB: "Listens to me vent without interrupting.", typeA: "Words of Affirmation", typeB: "Quality Time" },
  { text: "I feel understood when my partner...", optionA: "Takes the car for a wash so I don't have to.", optionB: "Holds me when I'm crying.", typeA: "Acts of Service", typeB: "Physical Touch" },
  { text: "I feel special when my partner...", optionA: "Brings me a souvenir.", optionB: "Helps me with my work or studies.", typeA: "Receiving Gifts", typeB: "Acts of Service" },
  { text: "I feel close to my partner when they...", optionA: "Tell me they missed me.", optionB: "Hold my hand in public.", typeA: "Words of Affirmation", typeB: "Physical Touch" },
  { text: "I feel loved when my partner...", optionA: "Plans an activity we both enjoy.", optionB: "Surprises me with a gift delivery.", typeA: "Quality Time", typeB: "Receiving Gifts" },
  { text: "I am happiest when my partner...", optionA: "Says supportive things to me.", optionB: "Takes out the trash without being asked.", typeA: "Words of Affirmation", typeB: "Acts of Service" }
];

export const LoveLanguage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    "Words of Affirmation": 0,
    "Physical Touch": 0,
    "Acts of Service": 0,
    "Receiving Gifts": 0,
    "Quality Time": 0,
  });
  const [isFinished, setIsFinished] = useState(false);
  
  const isFreeTier = localStorage.getItem('rooh_tier') === 'spark' || !localStorage.getItem('rooh_tier');

  const handleAnswer = (selectedType: string) => {
    const newScores = { ...scores, [selectedType]: scores[selectedType] + 1 };
    setScores(newScores);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getTopLanguage = () => {
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  return (
    <>
      <Helmet>
        <title>Love Language Decoder | Rooh</title>
        <meta name="description" content="Stop guessing how your partner wants to be loved. Decode your unique love languages and improve communication." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-2xl w-full text-center mb-12">
          <h1 className="text-3xl font-serif text-gold-100 mb-2">Love Language Decoder</h1>
          <p className="text-plum-300">Discover exactly what fills your cup.</p>
        </div>

        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-plum-800 border border-plum-700 p-8 rounded-2xl shadow-xl text-center"
              >
                <div className="text-gold-400 text-xs font-medium uppercase tracking-wider mb-8">
                  Question {currentIndex + 1} of {questions.length}
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-gold-50 mb-12">
                  {questions[currentIndex].text}
                </h3>

                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start border-plum-600 text-plum-100 hover:bg-plum-700 p-6 h-auto whitespace-normal"
                    onClick={() => handleAnswer(questions[currentIndex].typeA)}
                  >
                    {questions[currentIndex].optionA}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start border-plum-600 text-plum-100 hover:bg-plum-700 p-6 h-auto whitespace-normal"
                    onClick={() => handleAnswer(questions[currentIndex].typeB)}
                  >
                    {questions[currentIndex].optionB}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-plum-800 border border-gold-400/30 p-8 rounded-2xl shadow-xl shadow-gold-900/10 text-center relative overflow-hidden"
              >
                {isFreeTier && (
                  <div className="absolute inset-0 z-20 bg-plum-950/80 backdrop-blur-md flex flex-col items-center justify-center p-8">
                    <div className="bg-plum-900 border border-gold-500/30 p-8 rounded-xl shadow-2xl max-w-md w-full">
                      <Lock className="w-10 h-10 text-gold-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-serif text-gold-100 mb-3">Unlock Your Full Report</h3>
                      <p className="text-plum-200 text-sm mb-6 leading-relaxed">
                        See your primary and secondary love languages, practical tips for your partner, and your dynamic couple combination report.
                      </p>
                      <Button className="w-full" onClick={() => window.location.href = '/pricing'}>
                        Unlock Flame Tier — ₹299
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className={`relative z-10 ${isFreeTier ? 'blur-sm select-none' : ''}`}>
                  <div className="w-20 h-20 rounded-full bg-plum-900 border-4 border-gold-400 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-3xl font-serif text-gold-50 mb-2">Your Primary Language</h3>
                  <div className="text-2xl text-gold-300 font-serif mb-6 italic">{getTopLanguage()}</div>
                  
                  <div className="text-left bg-plum-900/50 p-6 rounded-xl mb-8">
                    <h4 className="text-gold-200 font-medium mb-4">Practical Tips for Your Partner:</h4>
                    <ul className="list-disc list-inside text-plum-200 space-y-2 text-sm">
                      {getTopLanguage() === "Words of Affirmation" && (
                        <>
                          <li>Leave random sticky notes with compliments.</li>
                          <li>Acknowledge their efforts out loud.</li>
                          <li>Send a random "I appreciate you" text during the day.</li>
                        </>
                      )}
                      {getTopLanguage() === "Physical Touch" && (
                        <>
                          <li>Hold hands while walking or driving.</li>
                          <li>Give a lingering hug when saying goodbye.</li>
                          <li>Sit close to them on the couch while watching TV.</li>
                        </>
                      )}
                      {getTopLanguage() === "Acts of Service" && (
                        <>
                          <li>Do a chore they hate doing.</li>
                          <li>Make their coffee exactly how they like it.</li>
                          <li>Fill up their gas tank unexpectedly.</li>
                        </>
                      )}
                      {getTopLanguage() === "Receiving Gifts" && (
                        <>
                          <li>Bring home their favorite snack.</li>
                          <li>Buy something small that reminded you of them.</li>
                          <li>Gift an experience you can share.</li>
                        </>
                      )}
                      {getTopLanguage() === "Quality Time" && (
                        <>
                          <li>Put your phone in another room during dinner.</li>
                          <li>Plan a distraction-free date night.</li>
                          <li>Go for a long walk and just talk.</li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    {Object.entries(scores)
                      .sort((a, b) => b[1] - a[1])
                      .slice(1)
                      .map(([lang, score]) => (
                      <div key={lang} className="bg-plum-900/30 p-4 rounded-lg">
                        <div className="text-xs text-plum-400 uppercase tracking-wider mb-1">{lang}</div>
                        <div className="text-gold-100 font-medium">{Math.round((score / 20) * 100)}% Match</div>
                      </div>
                    ))}
                  </div>
                  
                  {!isFreeTier && (
                    <Button className="w-full mt-8" onClick={() => window.location.href = '/play'}>
                      Return to Games
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
