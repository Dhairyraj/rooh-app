import { motion } from 'framer-motion';

export const HimymNightWeMet = () => {
  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-10">
      
      {/* Episode Header Card */}
      <div className="text-center md:text-left border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 1</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">The Night We Met</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Date & MacLaren's Booth Illustration */}
        <div className="lg:col-span-5 flex flex-col gap-6 items-center">
          
          {/* Main Relationship Start Date */}
          <div className="bg-[#2d2d44]/55 border border-[#a89880]/15 p-6 rounded-2xl w-full text-center shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2.5 h-full bg-[#f5c518]"></div>
            <span className="font-elite text-[10px] text-[#a89880] uppercase tracking-wider block mb-1">ANNIVERSARY</span>
            <div className="font-marker text-3xl md:text-4xl text-[#f0e6d3] leading-snug">
              January 17, 2026
            </div>
            <div className="font-elite text-xs text-[#f5c518] mt-2">
              Dehradun, India
            </div>
          </div>

          {/* MacLaren's Booth CSS Illustration */}
          <div className="w-full bg-[#131322] border border-[#a89880]/10 rounded-2xl p-6 shadow-xl flex flex-col items-center gap-4 relative overflow-hidden">
            <div className="absolute top-2 left-4 text-[10px] font-elite text-[#a89880]/50 uppercase tracking-widest">MacLaren's Pub Booth</div>
            
            {/* Hanging Vintage Lamp */}
            <div className="flex flex-col items-center -mt-2">
              <div className="w-0.5 h-8 bg-amber-800"></div>
              <div className="w-8 h-4 rounded-t-full bg-amber-600/80 shadow-[0_0_12px_rgba(245,197,24,0.7)] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f5c518] animate-pulse"></div>
              </div>
            </div>

            {/* Booth Layout */}
            <div className="w-full max-w-[280px] h-[130px] flex justify-between items-end relative mt-2">
              {/* Left Seat */}
              <div className="w-12 h-24 bg-[#c0392b] rounded-t-xl border-r border-[#a93023] flex flex-col justify-end p-1 relative shadow-lg">
                <div className="w-full h-8 bg-[#8d291e] rounded-t-md mb-2"></div>
                <div className="absolute top-4 left-2 w-1.5 h-12 bg-black/20 rounded-full"></div>
              </div>
              
              {/* Wooden Table */}
              <div className="flex-grow h-14 bg-amber-900 border-t-4 border-amber-700 rounded-md mx-2 flex items-center justify-center shadow-md relative z-10">
                {/* Yellow Umbrella SVG small on table */}
                <div className="w-5 h-5 text-[#f5c518] opacity-75">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,15 C20,15 10,45 10,55 C12,58 14,56 20,52 30,52 36,56 40,59 46,59 50,56 54,59 60,59 64,56 70,52 80,52 86,56 C90,57 90,55 90,55 C80,15 50,15 Z" />
                  </svg>
                </div>
                {/* Pen SVG */}
                <div className="absolute top-1 right-3 w-4 h-1 bg-blue-500 rotate-12 rounded"></div>
              </div>

              {/* Right Seat */}
              <div className="w-12 h-24 bg-[#c0392b] rounded-t-xl border-l border-[#a93023] flex flex-col justify-end p-1 relative shadow-lg">
                <div className="w-full h-8 bg-[#8d291e] rounded-t-md mb-2"></div>
                <div className="absolute top-4 right-2 w-1.5 h-12 bg-black/20 rounded-full"></div>
              </div>
            </div>

            <div className="text-[10px] font-elite text-[#a89880]/80 italic text-center mt-1">
              "We sat at this booth for years. But it all started with a pen."
            </div>
          </div>
          
        </div>

        {/* Right Column: Ted's Narration Text */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-[#2d2d44]/40 border-2 border-[#f5e6c8]/10 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col gap-4 relative">
            <span className="font-marker text-xs text-[#f5c518] tracking-widest uppercase">THE STORY</span>
            
            <p className="font-elite text-[#f0e6d3] text-sm md:text-base leading-relaxed italic">
              "Kids, in the autumn of 2025, I was just another guy running around college, worrying about classes and the future. I had no idea that a random Tuesday in September would change the course of my entire life.
            </p>
            <p className="font-elite text-[#f0e6d3] text-sm md:text-base leading-relaxed italic">
              It was September 17, at exactly 3:18 PM. I was in the college cafeteria. An ordinary afternoon. Kush needed a pen. Samiksha had one.
            </p>
            <p className="font-elite text-[#f0e6d3] text-sm md:text-base leading-relaxed italic">
              What followed was Maggi, bad jokes, and the beginning of everything. We made that Maggi together—she was cutting the onions, tears in her eyes, and I was just standing there, watching her, unable to take my eyes off her.
            </p>
            <p className="font-elite text-[#f0e6d3] text-sm md:text-base leading-relaxed italic">
              In a world full of people, kids, I was just incredibly lucky I found her. And by January 17, 2026, we had officially started our own legendary story."
            </p>

            {/* Signature */}
            <div className="text-right mt-2">
              <span className="font-marker text-[#f5c518] text-lg">- Ted Mosby</span>
            </div>
          </div>
        </div>

      </div>

      {/* Polaroid Frame at bottom - Center */}
      <div className="flex justify-center mt-6">
        <motion.div 
          whileHover={{ rotate: 0, scale: 1.05 }}
          className="polaroid-frame rotate-[-3deg] cursor-pointer"
        >
          <div className="w-[260px] h-[220px] md:w-[320px] md:h-[260px] overflow-hidden bg-gray-200">
            <img 
              src="/himym/photo1.jpg" 
              alt="The Beginning" 
              className="w-full h-full object-cover lazyload"
              loading="lazy"
            />
          </div>
          <div className="caption">The beginning. 💛</div>
        </motion.div>
      </div>

    </div>
  );
};
