import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HimymIntro = () => {
  const navigate = useNavigate();

  // Split narration lines for typing effect
  const line1 = "Kids, I'm going to tell you an incredible story.";
  const line2 = "The story of how I met the love of my life.";

  return (
    <div className="flex-grow flex flex-col justify-between min-h-[calc(100vh-130px)] relative px-6 py-12 md:py-20 max-w-4xl mx-auto w-full text-center overflow-hidden">
      
      {/* Intro Narration (Ted's Voice) */}
      <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-3">
        <div className="bg-[#2d2d44]/60 border border-[#a89880]/20 rounded-2xl p-6 md:p-8 max-w-xl shadow-xl backdrop-blur-sm relative">
          {/* Quote mark decoration */}
          <span className="absolute -top-5 -left-2 text-7xl font-abril text-[#f5c518]/20 pointer-events-none">“</span>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-elite text-[#f5e6c8] text-sm md:text-base tracking-wide leading-relaxed"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear", delay: 0.5 }}
              className="inline-block overflow-hidden whitespace-normal border-r-2 border-transparent"
            >
              {line1}
            </motion.span>
            <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear", delay: 2.7 }}
              className="inline-block overflow-hidden whitespace-normal border-r-2 border-transparent mt-2"
            >
              {line2}
            </motion.span>
          </motion.p>
          
          <span className="absolute -bottom-10 -right-2 text-7xl font-abril text-[#f5c518]/20 pointer-events-none">”</span>
        </div>
      </div>

      {/* Couple Titles */}
      <div className="my-8 flex flex-col items-center justify-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 5 }}
          className="flex flex-col items-center"
        >
          <span className="font-elite text-xs md:text-sm text-[#a89880] tracking-[0.25em] uppercase mb-1">THE PILOT</span>
          <h1 className="font-abril text-5xl md:text-7xl lg:text-8xl text-[#f0e6d3] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Kush <span className="text-[#f5c518] font-marker font-normal">&</span> Samiksha
          </h1>
          <p className="font-marker text-[#a89880] text-lg md:text-xl lg:text-2xl mt-3 tracking-wide flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518]"></span>
            A Legendary Love Story
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518]"></span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6.2 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate('/himym/the-night-we-met')}
            className="group relative bg-[#f5c518] hover:bg-[#e0b410] text-[#1a1a2e] font-marker text-lg py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_5px_15px_rgba(245,197,24,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-300"
          >
            Begin the Story
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#c0392b] rounded-full group-hover:scale-125 transition-transform duration-300"></span>
          </button>
        </motion.div>
      </div>

      {/* Skyline and Yellow Umbrella Silhouette decoration at bottom */}
      <div className="relative w-full h-[120px] md:h-[150px] mt-auto pointer-events-none select-none">
        
        {/* NY Skyline SVG */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-[80px] md:h-[100px] text-[#131322] fill-current z-0" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none"
        >
          <path d="M0 100 h1000 V30 H980 V45 H960 V10 H940 V45 H920 V20 H900 V45 H870 V5 H850 V45 H820 V25 H800 V45 H780 V15 H750 V45 H720 V35 H700 V45 H680 V10 H660 V45 H640 V20 H620 V45 H590 V5 H570 V45 H540 V25 H520 V45 H500 V15 H470 V45 H440 V35 H420 V45 H400 V10 H380 V45 H360 V20 H340 V45 H310 V5 H290 V45 H260 V25 H240 V45 H220 V15 H190 V45 H160 V35 H140 V45 H120 V10 H100 V45 H80 V20 H60 V45 H30 V5 H10 V45 H0 Z" />
        </svg>

        {/* Floating Yellow Umbrella on bottom right */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 30 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5, delay: 6.8, ease: "easeOut" }}
          className="absolute bottom-1 right-[5%] md:right-[15%] z-10 w-[70px] h-[70px] md:w-[90px] md:h-[90px] text-[#f5c518] drop-shadow-[0_-5px_10px_rgba(245,197,24,0.3)]"
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            {/* Umbrella Canopy */}
            <path d="M50,15 C20,15 10,45 10,55 C10,57 12,58 14,56 C20,52 30,52 36,56 C40,59 46,59 50,56 C54,59 60,59 64,56 C70,52 80,52 86,56 C88,58 90,57 90,55 C90,45 80,15 50,15 Z" />
            {/* Umbrella Shaft and Handle */}
            <path d="M49,55 L49,80 C49,83 52,85 55,85 C57,85 59,83 59,80 C59,78 57,76 55,76 C53,76 53,78 53,80 C53,81 52,82 51.5,82 C51,82 51,81 51,80 L51,55 Z" fill="currentColor" />
            {/* Top Tip */}
            <path d="M48.5,10 H51.5 V15 H48.5 Z" />
          </svg>
        </motion.div>
      </div>

    </div>
  );
};
