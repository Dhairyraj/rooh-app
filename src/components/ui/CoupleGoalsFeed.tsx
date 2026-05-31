import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, MessageSquareHeart } from 'lucide-react';

const feedItems = [
  { text: "A couple from Mumbai just completed the 36 Questions ❤️", icon: <Heart className="w-5 h-5 text-red-400" /> },
  { text: "Someone in Delhi just bought the Eternal Tier. A memory website is being built! ✨", icon: <Sparkles className="w-5 h-5 text-gold-400" /> },
  { text: "A couple just discovered their top love language is Quality Time.", icon: <MessageSquareHeart className="w-5 h-5 text-plum-300" /> },
  { text: "Someone just sealed a Time Capsule to open in 2029 🕰️", icon: <Sparkles className="w-5 h-5 text-gold-400" /> },
  { text: "A couple from Bangalore agreed on 9/10 Would You Rather questions!", icon: <Heart className="w-5 h-5 text-red-400" /> },
  { text: "Someone just sent their partner The Unsent Letter 🌹", icon: <MessageSquareHeart className="w-5 h-5 text-plum-300" /> },
  { text: "A couple mapped out their Five Year Vision together today.", icon: <Sparkles className="w-5 h-5 text-gold-400" /> },
];

export const CoupleGoalsFeed = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  // Create a continuous array for infinite scrolling effect
  const scrollingItems = [...feedItems, ...feedItems, ...feedItems];

  return (
    <div className="py-24 bg-plum-950 border-y border-plum-800 overflow-hidden" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-gold-100 mb-4">Love in Real-Time</h2>
        <p className="text-plum-300">Join thousands of couples deepening their connection right now.</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fade Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-plum-950 to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-plum-950 to-transparent z-10" />

        <motion.div
          animate={isInView ? { x: [0, -1920] } : {}}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
          className="flex gap-6 px-6"
          style={{ width: 'max-content' }}
        >
          {scrollingItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-plum-900/50 border border-plum-700/50 p-6 rounded-2xl flex items-center gap-4 min-w-[350px] shadow-lg backdrop-blur-sm whitespace-normal"
            >
              <div className="w-12 h-12 rounded-full bg-plum-950 flex items-center justify-center border border-plum-800 shrink-0">
                {item.icon}
              </div>
              <p className="text-sm text-plum-200 leading-snug">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-12">
        <button className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors border-b border-gold-400/30 hover:border-gold-300 pb-1">
          Share your result anonymously
        </button>
      </div>
    </div>
  );
};
