import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const HimymPlaybook = () => {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const rules = [
    {
      num: 1,
      title: "The Present Rule",
      text: "Always show up.",
      desc: "Through the storms, the celebrations, and the completely average Tuesday afternoons. The best gift you can give is simply being there."
    },
    {
      num: 2,
      title: "The Diner Clause",
      text: "Never go to bed angry. Hungry is fine.",
      desc: "You can always order pizza at 2 AM and laugh it off. Disagreements are temporary, but pizza (and love) is eternal."
    },
    {
      num: 3,
      title: "The Mileage Act",
      text: "The road trip is always worth it.",
      desc: "Get in the car, play the terrible music, and drive toward the mountains. The destination doesn't matter; it's the bad singing on the highway that does."
    },
    {
      num: 4,
      title: "The Anchor Pact",
      text: "Be each other's person. Even on the weird days.",
      desc: "When the world gets chaotic and nothing makes sense, you are each other's calm harbor. The one constant in all the noise."
    },
    {
      num: 5,
      title: "The MacLaren's Directive",
      text: "When in doubt, find your MacLaren's.",
      desc: "Find your cozy booth, order your favorite drinks, and sit together. Every great chapter of life deserves a toast."
    },
    {
      num: 6,
      title: "The Bravery Commandment",
      text: "Say it. Even when it's scary.",
      desc: "Speak the truth, share the fears, and say 'I love you' first. Vulnerability isn't a weakness; it's the ultimate power play."
    },
    {
      num: 7,
      title: "The Sanctuary Rule",
      text: "New is exciting. But home is always better.",
      desc: "Traveling the world is incredible, but coming back to sit on the couch together, eating takeout, is where the real magic lives."
    },
    {
      num: 8,
      title: "The Stinson Mandate",
      text: "Suit up. For the big moments and the small ones.",
      desc: "Dress up for the anniversaries, but also bring your absolute best self to the quiet, mundane, everyday routines."
    }
  ];

  const handlePrev = () => {
    if (activePage > 0) {
      setDirection(-1);
      setActivePage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (activePage < rules.length - 1) {
      setDirection(1);
      setActivePage(prev => prev + 1);
    }
  };

  // Page flip animation variants
  const variants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: dir > 0 ? "left center" : "right center"
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: "center center"
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: dir > 0 ? "right center" : "left center"
    })
  };

  const currentRule = rules[activePage];

  return (
    <div className="flex-grow max-w-4xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col items-center gap-8">
      
      {/* Header */}
      <div className="text-center w-full border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 7</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">The Playbook</h2>
        <p className="font-elite text-xs text-[#a89880] mt-1">"Rules for a Legendary Relationship"</p>
      </div>

      {/* Narration */}
      <div className="text-center max-w-xl">
        <p className="font-elite text-[#f0e6d3] text-xs md:text-sm leading-relaxed italic">
          "Kids, Barney Stinson had the Playbook to find girls. But Kush and Samiksha? They wrote their own Playbook. A set of rules not for the chase, but for keeping the love of your life forever."
        </p>
      </div>

      {/* Book Container */}
      <div className="w-full max-w-xl aspect-[3/4] md:aspect-[4/5] bg-[#3a2212] border-4 border-[#25150a] rounded-3xl p-3 shadow-2xl relative flex flex-col justify-center items-center overflow-hidden">
        
        {/* Leather texture shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none rounded-2xl"></div>

        {/* Inner page boundary (Book Spine / Center) */}
        <div className="absolute top-0 bottom-0 left-[8px] w-[2px] bg-black/50 z-30"></div>
        <div className="absolute top-0 bottom-0 right-[8px] w-[2px] bg-black/50 z-30"></div>

        {/* Paper Page Container */}
        <div className="w-full h-full bg-[#f5e6c8] rounded-2xl shadow-inner border border-amber-900/10 p-6 md:p-8 flex flex-col justify-between text-[#2b2b2b] relative overflow-hidden z-10">
          
          {/* Ring Binder marks or paper grain */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

          {/* Book Header info */}
          <div className="flex justify-between items-center border-b border-black/15 pb-2">
            <span className="font-elite text-[9px] uppercase tracking-widest font-bold">THE PLAYBOOK</span>
            <BookOpen size={14} className="text-amber-800" />
            <span className="font-elite text-[9px] uppercase tracking-widest font-bold">RULE {currentRule.num} OF 8</span>
          </div>

          {/* Flip Page Content */}
          <div className="flex-grow flex flex-col justify-center py-6 perspective-1000">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activePage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col gap-4 text-center items-center w-full"
              >
                {/* Rule title */}
                <span className="font-elite text-xs uppercase tracking-widest text-amber-800 bg-amber-950/5 px-2 py-0.5 rounded-md border border-amber-900/10">
                  {currentRule.title}
                </span>

                {/* Big Rule Statement */}
                <h1 className="font-abril text-2xl md:text-3xl lg:text-4xl text-[#1e1e1e] leading-snug drop-shadow-sm max-w-sm mt-2">
                  "{currentRule.text}"
                </h1>

                {/* Typewritten description */}
                <p className="font-elite text-xs md:text-sm text-[#444] leading-relaxed max-w-md mt-4 border-t border-black/10 pt-4 px-2 italic">
                  {currentRule.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page Footer Navigation */}
          <div className="flex justify-between items-center border-t border-black/15 pt-3 mt-auto">
            <button
              onClick={handlePrev}
              disabled={activePage === 0}
              className="text-[#2b2b2b] hover:text-amber-800 disabled:opacity-20 transition-colors flex items-center gap-1 font-elite text-xs"
            >
              <ChevronLeft size={16} />
              PREV
            </button>

            {/* Ducky Tie / Suit decoration */}
            <span className="text-[10px] font-marker tracking-widest text-[#c0392b] bg-yellow-500/10 px-2 py-0.5 rounded border border-dashed border-[#c0392b]/20">
              {activePage === 7 ? "SUIT UP! 👔" : "DUCKY TIE APPROVED 🦆"}
            </span>

            <button
              onClick={handleNext}
              disabled={activePage === rules.length - 1}
              className="text-[#2b2b2b] hover:text-amber-800 disabled:opacity-20 transition-colors flex items-center gap-1 font-elite text-xs"
            >
              NEXT
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
