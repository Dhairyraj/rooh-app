import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Lock, Shuffle, Share2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { RoohLetter } from '../../components/ui/RoohLetter';

const BINGO_SQUARES = [
  "Traveled somewhere new together", "Had our first fight and made up", "Stayed up all night talking", "Met the parents", "Finished each other's sentences",
  "Adopted a pet (or plant)", "Cooked a disaster meal together", "Binge-watched a whole show in one day", "Said 'I love you' first", "Took a spontaneous road trip",
  "Bought furniture together", "Shared a deeply embarrassing secret", "FREE SPACE: Survived assembly of IKEA furniture", "Tried a new hobby together", "Had a romantic staycation",
  "Farted in front of each other", "Stole their hoodie/shirt", "Planned a future vacation", "Attended a wedding together", "Got matching outfits by accident",
  "Supported each other through a crisis", "Have an inside joke nobody else gets", "Know their coffee/drink order by heart", "Cried together", "Kissed in the rain"
];

export const RelationshipBingo = () => {
  const tier = localStorage.getItem('rooh_tier') || 'spark';
  const isFlame = tier === 'flame' || tier === 'eternal' || tier === 'forever';

  const [marked, setMarked] = useState<number[]>([12]); // 12 is center Free Space
  const [boardId, setBoardId] = useState(1);

  const toggleSquare = (index: number) => {
    if (index === 12) return; // Free space always marked
    if (marked.includes(index)) {
      setMarked(marked.filter(i => i !== index));
    } else {
      setMarked([...marked, index]);
    }
  };

  const handleShuffle = () => {
    if (isFlame) {
      setBoardId(b => b + 1);
      setMarked([12]);
    } else {
      window.location.href = '/pricing';
    }
  };

  return (
    <>
      <Helmet>
        <title>Relationship Bingo | Rooh</title>
        <meta name="description" content="Check off your relationship milestones and share your bingo card." />
      </Helmet>

      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mb-8">
          <h1 className="text-4xl font-serif text-gold-100 mb-4">Relationship Bingo</h1>
          <p className="text-plum-300">Mark your milestones. Share with your partner.</p>
        </div>

        <div className="w-full max-w-2xl relative mb-12">
          <div className="bg-plum-800 border border-plum-700 p-4 md:p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-5 gap-2 md:gap-4 aspect-square">
              {BINGO_SQUARES.map((square, i) => (
                <motion.button
                  key={`${boardId}-${i}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  onClick={() => toggleSquare(i)}
                  className={`relative p-2 flex flex-col items-center justify-center text-center rounded-lg md:rounded-xl transition-all border
                    ${marked.includes(i) 
                      ? 'bg-gold-500/20 border-gold-400 text-gold-100 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]' 
                      : 'bg-plum-900 border-plum-700 text-plum-300 hover:bg-plum-800 hover:border-plum-500'
                    }
                    ${i === 12 ? 'ring-2 ring-gold-500 ring-offset-2 ring-offset-plum-800 bg-gold-900/30 text-gold-200' : ''}
                  `}
                >
                  {marked.includes(i) && i !== 12 && (
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} 
                      className="absolute inset-0 border-2 border-gold-400/50 rounded-lg md:rounded-xl pointer-events-none"
                    />
                  )}
                  <span className="text-[10px] md:text-sm font-medium leading-tight md:leading-snug">
                    {square.replace('FREE SPACE: ', '')}
                  </span>
                  {i === 12 && <span className="absolute top-1 text-[8px] text-gold-400 font-bold uppercase tracking-widest opacity-50">Free Space</span>}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-plum-700 pt-6">
              <Button onClick={handleShuffle} variant={isFlame ? "outline" : "primary"} className={!isFlame ? "bg-plum-700 hover:bg-plum-600 text-gold-100 border-none" : "border-plum-600"}>
                {!isFlame ? <Lock className="w-4 h-4 mr-2" /> : <Shuffle className="w-4 h-4 mr-2" />}
                {isFlame ? "Generate New Board" : "Unlock Custom Boards"}
              </Button>
              
              <Button>
                <Share2 className="w-4 h-4 mr-2" /> Share Card
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <RoohLetter />
    </>
  );
};
