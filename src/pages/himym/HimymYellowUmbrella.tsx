import { motion } from 'framer-motion';

export const HimymYellowUmbrella = () => {
  // Generate 60 raindrops with randomized offsets
  const drops = Array.from({ length: 60 }).map((_, i) => {
    const left = Math.random() * 100;
    const duration = 1 + Math.random() * 1.2;
    const delay = Math.random() * 2;
    return (
      <div
        key={i}
        className="rain-drop"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: 0.15 + Math.random() * 0.45
        }}
      />
    );
  });

  return (
    <div className="flex-grow flex flex-col justify-center items-center relative px-6 py-10 md:py-14 w-full overflow-hidden">
      
      {/* Background Rain Animation */}
      <div className="rain-container absolute inset-0 z-0">
        {drops}
      </div>

      {/* Episode Header */}
      <div className="text-center z-10 mb-8">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 3</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">The Sign</h2>
      </div>

      {/* Centered Glowing Yellow Umbrella */}
      <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mb-6">
        
        {/* Glow halo */}
        <div className="absolute inset-0 bg-[#f5c518]/15 rounded-full filter blur-3xl animate-pulse"></div>
        
        <motion.div
          animate={{ 
            y: [0, -6, 0],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-[#f5c518] w-40 h-40 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(245,197,24,0.75)] cursor-pointer"
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            {/* Canopy */}
            <path d="M50,15 C22,15 12,42 10,55 C10,57 12,58 14,56 C20,52 30,52 36,56 C40,59 46,59 50,56 C54,59 60,59 64,56 C70,52 80,52 86,56 C88,58 90,57 90,55 C88,42 78,15 50,15 Z" />
            {/* Pole & Handle */}
            <path d="M49,55 L49,80 C49,83 52,85 55,85 C57,85 59,83 59,80 C59,78 57,76 55,76 C53,76 53,78 53,80 C53,81 52,82 51.5,82 C51,82 51,81 51,80 L51,55 Z" fill="currentColor" />
            {/* Top Tip */}
            <path d="M48.5,10 H51.5 V15 H48.5 Z" />
          </svg>
        </motion.div>
      </div>

      {/* Poetic Narration Box */}
      <div className="relative z-10 w-full max-w-2xl bg-[#2d2d44]/75 border-2 border-[#f5c518]/30 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-sm flex flex-col gap-4 mb-8">
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#f5c518]/60"></div>
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#f5c518]/60"></div>
        
        <span className="font-elite text-[10px] text-[#f5c518] uppercase tracking-wider text-center block">THE UNIVERSAL TRUTH</span>
        
        <div className="font-elite text-[#f0e6d3] text-xs md:text-sm leading-relaxed text-center flex flex-col gap-3">
          <p className="italic">
            "Kids, destiny is a funny thing. We spend our lives looking for answers, running through the rain, hoping to find that one person to share the umbrella with."
          </p>
          <p className="italic">
            "Everyone has a yellow umbrella moment. That one sign from the universe that says—this is the one."
          </p>
          <p className="text-[#f5c518] font-marker text-sm md:text-base not-italic mt-2">
            "For Kush, it was September 17. The Pen. The Maggi. Watching her cut onions in a crowded cafeteria and realizing that he'd found his sign. He just knew."
          </p>
        </div>
      </div>

      {/* Polaroid in Circular Frame */}
      <div className="relative z-10 flex flex-col items-center gap-4 mb-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#f5e6c8] shadow-2xl bg-[#2d2d44]"
        >
          <img 
            src="/himym/photo2.jpg" 
            alt="The Sign" 
            className="w-full h-full object-cover lazyload"
            loading="lazy"
          />
        </motion.div>
        <span className="font-marker text-xs text-[#a89880]">The Sign in the Rain 💛</span>
      </div>

      {/* Large Quote */}
      <div className="relative z-10 text-center max-w-xl px-4 mt-2">
        <p className="font-abril text-lg md:text-2xl text-[#f0e6d3] leading-relaxed italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          "Whatever you do in this life, it's not legendary unless your friends are there to see it."
        </p>
        <span className="font-elite text-[9px] text-[#a89880] tracking-widest block mt-2 uppercase">— BARNEY STINSON</span>
      </div>

    </div>
  );
};
