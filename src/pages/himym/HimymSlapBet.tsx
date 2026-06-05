import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HimymSlapBet = () => {
  const [slapCount, setSlapCount] = useState(1);
  const [showSlapText, setShowSlapText] = useState(false);

  const handleSlap = () => {
    setSlapCount(prev => prev + 1);
    setShowSlapText(true);
    setTimeout(() => {
      setShowSlapText(false);
    }, 800);
  };

  const milestones = [
    {
      date: "Jan 17, 2026",
      title: "The Pen. The Maggi. The Beginning.",
      desc: "It was in the cafeteria that he borrowed a pen, watched her cut onions, and cooked Maggi. That simple lunch table talk was where a lifetime connection began.",
      photo: "/himym/photo3.jpg",
      caption: "Chapter 1: The Pen 🖊️",
      rotation: "rotate-[-2deg]"
    },
    {
      date: "March 2026",
      title: "The First Time It Felt Real",
      desc: "Beyond college walls, we started looking forward to every shared laughter. Those late-night texts turned into deep conversations about the universe.",
      photo: null
    },
    {
      date: "June 2026",
      title: "The First Adventure",
      desc: "Taking that first trip together, exploring the beautiful mountains around Dehradun, and creating memories that would be told for generations.",
      photo: "/himym/photo4.jpg",
      caption: "First Road Trip 🚗",
      rotation: "rotate-[3deg]"
    },
    {
      date: "September 2026",
      title: "The Moment Everything Changed",
      desc: "A year from the cafeteria, standing at the very spot where we borrowed a pen. Looking into each other's eyes and realizing there is no turning back.",
      photo: "/himym/photo5.jpg",
      caption: "One Year Later 💛",
      rotation: "rotate-[-3deg]"
    },
    {
      date: "Present",
      title: "Still Writing This Chapter",
      desc: "The story is far from over. In fact, every single day we add another legendary line to our playbook. And the best is yet to come.",
      photo: null
    }
  ];

  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-8 relative">
      
      {/* Slap Bet Counter Widget in corner */}
      <div className="absolute top-2 right-6 z-30">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSlap}
          className="bg-[#2d2d44] border-2 border-[#c0392b] p-3 rounded-2xl shadow-xl flex flex-col items-center gap-1 cursor-pointer select-none relative"
        >
          <span className="text-[9px] font-elite text-[#a89880] tracking-wider uppercase">SLAP BET COMMISH</span>
          <div className="flex items-center gap-2">
            <span className="text-xl">🖐️</span>
            <div className="bg-black/40 border border-black/80 px-2.5 py-0.5 rounded-lg text-lg font-marker text-[#c0392b]">
              {slapCount}
            </div>
          </div>
          <span className="text-[8px] font-lato text-[#f0e6d3]/60">Click to slap!</span>

          {/* Slap Floating Text */}
          <AnimatePresence>
            {showSlapText && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{ opacity: 1, scale: 1.5, y: -40 }}
                exit={{ opacity: 0 }}
                className="absolute text-2xl font-marker text-[#c0392b] drop-shadow-[0_2px_10px_rgba(192,57,43,0.8)] pointer-events-none whitespace-nowrap"
              >
                SLAP! 👋💥
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Page Header */}
      <div className="text-center md:text-left border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 4</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">The Legendary Timeline</h2>
        <p className="font-elite text-xs text-[#a89880] mt-1">"Every great story has its moments."</p>
      </div>

      {/* Narration intro */}
      <div className="bg-[#2d2d44]/30 border border-[#a89880]/15 p-5 rounded-2xl max-w-3xl mr-auto shadow-md">
        <p className="font-elite text-[#f0e6d3] text-xs md:text-sm leading-relaxed italic">
          "Kids, looking back, it's easy to see how the dots connect. You borrow a pen, you make some Maggi. But it's the milestones that follow—the small choices, the big trips, the quiet moments—that define a legendary love story."
        </p>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative border-l-2 border-[#a89880]/25 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 flex flex-col gap-12 py-8 w-full max-w-4xl mx-auto">
        
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={m.title} 
              className={`relative flex flex-col md:flex-row items-start md:items-center w-full pl-6 md:pl-0 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-[-7px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#f5c518] border-2 border-[#1a1a2e] z-10 shadow-[0_0_8px_rgba(245,197,24,0.6)]"></div>

              {/* Timeline Card */}
              <div className={`w-full md:w-[45%] flex flex-col gap-4 ${
                isEven ? 'md:pl-8' : 'md:pr-8'
              }`}>
                
                {/* Text Content */}
                <div className="bg-[#2d2d44]/55 border border-[#a89880]/15 p-5 rounded-2xl shadow-xl">
                  <span className="font-marker text-xs text-[#f5c518] tracking-wider">{m.date}</span>
                  <h3 className="font-abril text-lg md:text-xl text-[#f0e6d3] mt-1 mb-2">{m.title}</h3>
                  <p className="font-lato text-xs md:text-sm text-[#f0e6d3]/80 leading-relaxed">{m.desc}</p>
                </div>

                {/* Optional Polaroid Image */}
                {m.photo && (
                  <div className={`flex justify-center mt-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.03, rotate: 0 }}
                      className={`polaroid-frame ${m.rotation} cursor-pointer scale-90 md:scale-95`}
                    >
                      <div className="w-[200px] h-[160px] overflow-hidden bg-gray-200">
                        <img 
                          src={m.photo} 
                          alt={m.title} 
                          className="w-full h-full object-cover lazyload"
                          loading="lazy"
                        />
                      </div>
                      <div className="caption text-xs">{m.caption}</div>
                    </motion.div>
                  </div>
                )}

              </div>

              {/* Empty spacing for matching layout on desktop */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          );
        })}

      </div>

    </div>
  );
};
