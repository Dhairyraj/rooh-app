import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Heart, RefreshCw, Bookmark } from 'lucide-react';

const categories = {
  Dreams: [
    "What is a dream you've let go of, but still think about?",
    "If money and time were limitless, what would our life look like in 5 years?",
    "What is a creative pursuit you've always wanted to try?",
    "Where is the one place in the world you feel you belong, other than home?",
    "What does your perfect morning routine look like?"
  ],
  Fears: [
    "What is your biggest fear regarding our relationship?",
    "What is a fear you have about aging?",
    "When do you feel most vulnerable with me?",
    "What is something you're afraid to ask me for?",
    "What is a professional fear you're currently battling?"
  ],
  Desires: [
    "What is a non-sexual form of intimacy you crave more of?",
    "What is a physical touch that always makes you feel loved?",
    "What is a fantasy you've never shared with anyone?",
    "When did you feel most attracted to me recently?",
    "What is something new you'd like us to try together?"
  ],
  Childhood: [
    "What is a childhood memory that still brings you pure joy?",
    "Who was the first person to break your heart?",
    "What is a habit you have now that stems directly from your childhood?",
    "What did you want to be when you grew up, and why?",
    "What is a family tradition you want to make sure we keep?"
  ],
  Future: [
    "What is a legacy you want to leave behind?",
    "How do you want to be remembered by our friends?",
    "What is a major milestone you want us to hit together next?",
    "Where do you see us retiring?",
    "What is a skill you want us to learn together in the next year?"
  ]
};

type Category = keyof typeof categories;

export const IntimacyJar = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>('Dreams');
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);
  
  const isFreeTier = localStorage.getItem('rooh_tier') === 'spark' || !localStorage.getItem('rooh_tier');

  const drawQuestion = (category: Category) => {
    setIsDrawing(true);
    setCurrentCategory(category);
    setTimeout(() => {
      const qList = categories[category];
      const randomQ = qList[Math.floor(Math.random() * qList.length)];
      setCurrentQuestion(randomQ);
      setIsDrawing(false);
    }, 600);
  };

  const toggleFavorite = (question: string) => {
    if (savedFavorites.includes(question)) {
      setSavedFavorites(savedFavorites.filter(q => q !== question));
    } else {
      setSavedFavorites([...savedFavorites, question]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Intimacy Jar | Rooh</title>
        <meta name="description" content="Draw random, thought-provoking questions across Dreams, Fears, Desires, Childhood, and Future to spark deep conversation." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-plum-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gold-100 mb-4">The Intimacy Jar</h1>
            <p className="text-plum-200">Shake the jar. Draw a question. Dive deep.</p>
          </div>

          {isFreeTier ? (
            <div className="bg-plum-800/80 backdrop-blur-md border border-gold-500/30 p-12 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-gold-50 mb-4">Unlock the Intimacy Jar</h2>
              <p className="text-plum-200 mb-8 leading-relaxed">
                Access 100+ deep questions across Dreams, Fears, Desires, Childhood, and Future. Save your favorites and never run out of things to talk about.
              </p>
              <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '/pricing'}>
                Unlock Flame Tier — ₹299
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Categories Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-lg font-serif text-gold-200 mb-4 pl-2">Categories</h3>
                {(Object.keys(categories) as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => drawQuestion(cat)}
                    className={`w-full text-left px-6 py-4 rounded-xl border transition-all ${
                      currentCategory === cat 
                        ? 'bg-plum-800 border-gold-500/50 shadow-lg shadow-gold-900/20 text-gold-50' 
                        : 'bg-plum-900/50 border-plum-700/50 text-plum-300 hover:bg-plum-800/50 hover:border-plum-600'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium tracking-wide">{cat}</span>
                      <RefreshCw className={`w-4 h-4 ${currentCategory === cat ? 'text-gold-400' : 'opacity-0'}`} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Main Draw Area */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {currentQuestion ? (
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{ type: "spring", damping: 20, stiffness: 100 }}
                      className="bg-plum-800 border border-gold-500/20 p-10 md:p-16 rounded-2xl shadow-2xl relative min-h-[400px] flex flex-col justify-center items-center text-center group"
                    >
                      <button 
                        onClick={() => toggleFavorite(currentQuestion)}
                        className="absolute top-6 right-6 p-2 text-plum-400 hover:text-gold-300 transition-colors"
                      >
                        <Bookmark className={`w-6 h-6 ${savedFavorites.includes(currentQuestion) ? 'fill-gold-400 text-gold-400' : ''}`} />
                      </button>
                      
                      <div className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-8">
                        {currentCategory}
                      </div>
                      
                      <h2 className="text-2xl md:text-4xl font-serif text-gold-50 leading-tight mb-12">
                        "{currentQuestion}"
                      </h2>

                      <Button 
                        variant="outline" 
                        className="mt-auto border-plum-600 text-gold-200 hover:bg-plum-700 hover:text-gold-100"
                        onClick={() => drawQuestion(currentCategory)}
                        disabled={isDrawing}
                      >
                        {isDrawing ? 'Drawing...' : 'Draw Another'}
                        <RefreshCw className={`w-4 h-4 ml-2 ${isDrawing ? 'animate-spin' : ''}`} />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-plum-900/30 border border-plum-800/50 border-dashed p-16 rounded-2xl h-full flex flex-col items-center justify-center text-center min-h-[400px]"
                    >
                      <Heart className="w-12 h-12 text-plum-600 mb-4" />
                      <p className="text-plum-400 text-lg">Select a category to draw your first question.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          )}
        </div>
      </div>
    </>
  );
};
