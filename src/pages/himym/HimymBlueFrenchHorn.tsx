import { motion } from 'framer-motion';

export const HimymBlueFrenchHorn = () => {
  return (
    <div className="flex-grow max-w-4xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col items-center gap-10">
      
      {/* Episode Header */}
      <div className="text-center w-full border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 5</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">The Grand Gesture</h2>
      </div>

      {/* Glowing Blue French Horn SVG */}
      <div className="relative w-44 h-44 flex items-center justify-center cursor-pointer">
        {/* Neon blue glow */}
        <div className="absolute inset-0 bg-[#00a2ff]/10 rounded-full filter blur-3xl animate-pulse"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-[#00a2ff] w-36 h-36 drop-shadow-[0_0_15px_rgba(0,162,255,0.7)]"
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            {/* High Quality French Horn outline */}
            <path d="M75,30 C65,15 40,15 30,30 C20,45 20,65 35,75 C45,80 65,75 75,60 L78,63 C65,85 35,88 22,74 C9,60 10,35 24,18 C38,1 70,2 85,22 C88,26 90,30 92,35 L80,35 C79,33 77,32 75,30 Z" />
            <path d="M50,45 C50,35 60,35 65,40 C70,45 68,55 60,58 L63,63 C75,58 78,40 70,30 C62,20 48,22 42,32 L46,36 Z" />
            <path d="M30,50 L10,50 A5,5 0 0,0 5,55 L5,65 A5,5 0 0,0 10,70 L30,70 Z M9,55 L26,55 L26,65 L9,65 Z" />
            {/* Horn bell flares */}
            <path d="M78,35 C83,38 88,43 90,50 L95,45 C92,35 85,28 78,25 Z" fill="currentColor" />
            <path d="M85,35 L98,40 C98,30 95,25 90,20 Z" opacity="0.8" />
          </svg>
        </motion.div>
      </div>

      {/* Poetic Narration */}
      <div className="text-center max-w-xl">
        <p className="font-elite text-[#a89880] text-sm tracking-wider uppercase mb-1">TED MOSBY'S WISDOM</p>
        <p className="font-elite text-[#f0e6d3] text-sm md:text-base leading-relaxed italic">
          "Kids, the thing about love is—it makes you do crazy things. Beautiful, ridiculous, legendary things. You'd steal a whole blue French horn, or you'd borrow a pen and make Maggi, just to see her smile."
        </p>
      </div>

      {/* Main Emotional Centerpiece Poster Section */}
      <div className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] border-2 border-[#f5c518] p-8 md:p-14 rounded-3xl text-center shadow-2xl relative overflow-hidden flex flex-col justify-center items-center my-4">
        
        {/* String lights / star dust accents inside the poster */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(245,197,24,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f5c518]"></div>
        
        <span className="font-elite text-[9px] text-[#f5c518] tracking-[0.3em] uppercase mb-4 z-10">THE PROMISE</span>

        {/* Large Typography Poster */}
        <div className="z-10 max-w-2xl flex flex-col gap-2 relative">
          <span className="absolute -top-10 -left-6 text-9xl font-abril text-[#f5e6c8]/5 select-none pointer-events-none">“</span>
          
          <h1 className="font-abril text-4xl md:text-6xl lg:text-7xl text-[#f0e6d3] leading-tight drop-shadow-lg tracking-wide uppercase">
            In a world full of people,
          </h1>
          <h1 className="font-marker text-3xl md:text-5xl lg:text-6xl text-[#f5c518] leading-tight drop-shadow-md tracking-wider mt-2">
            I'm lucky I found you.
          </h1>
        </div>

        <div className="mt-8 pt-6 border-t border-[#a89880]/20 w-44 z-10">
          <span className="font-marker text-[#f5e6c8] text-xl md:text-2xl italic">
            And that's how I knew.
          </span>
        </div>
      </div>

      {/* Full Width Cinematic Photo */}
      <div className="w-full mt-4 flex justify-center">
        <motion.div 
          whileHover={{ rotate: 1, scale: 1.02 }}
          className="polaroid-frame rotate-[-1.5deg] cursor-pointer max-w-lg w-full"
        >
          <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
            <img 
              src="/himym/photo6.jpg" 
              alt="Our Grand Gesture" 
              className="w-full h-full object-cover lazyload"
              loading="lazy"
            />
          </div>
          <div className="caption text-sm md:text-base">The Grand Gesture. 💛</div>
        </motion.div>
      </div>

    </div>
  );
};
