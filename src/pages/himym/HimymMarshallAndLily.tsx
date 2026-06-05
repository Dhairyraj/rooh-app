import { motion } from 'framer-motion';

export const HimymMarshallAndLily = () => {
  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-10">
      
      {/* Page Header */}
      <div className="text-center md:text-left border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 6</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">What Love Looks Like</h2>
        <p className="font-elite text-xs text-[#a89880] mt-1">"The Kind of Love Worth Writing About"</p>
      </div>

      {/* Narration Block */}
      <div className="bg-[#2d2d44]/35 border border-[#a89880]/15 p-6 rounded-2xl shadow-lg relative max-w-3xl">
        <p className="font-elite text-[#f0e6d3] text-sm leading-relaxed italic">
          "Kids, Marshall and Lily were the gold standard. They had this crazy, telepathic, matching-Halloween-costumes kind of love. It was the kind of relationship that made the rest of us feel completely inadequate. But when you look at Kush and Samiksha, you realize that the gold standard isn't about matching costumes. It's about being each other's person. Always."
        </p>
      </div>

      {/* 3 Column Grid: What We Are */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center bg-[#131322] border border-[#a89880]/15 p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c0392b]"></div>
        
        {/* Column 1: Marshall & Lily */}
        <div className="md:col-span-3 text-center flex flex-col gap-2 p-4 bg-[#2d2d44]/30 rounded-2xl border border-[#a89880]/10">
          <span className="font-elite text-xs text-[#c0392b] tracking-wider uppercase">THE BENCHMARK</span>
          <h3 className="font-abril text-2xl text-[#f0e6d3]">Marshall & Lily</h3>
          <p className="font-lato text-xs text-[#a89880] leading-relaxed">
            Nine years of synchronized conversations, matching high fives, olive theories, and absolute, unwavering support. The gold standard.
          </p>
        </div>

        {/* Column 2: Equals & Heart */}
        <div className="md:col-span-1 flex flex-col items-center justify-center p-2">
          <div className="text-4xl text-[#f5c518] font-abril font-bold animate-pulse flex flex-col items-center gap-1">
            <span>=</span>
            <span className="text-2xl">💛</span>
          </div>
        </div>

        {/* Column 3: Kush & Samiksha */}
        <div className="md:col-span-3 text-center flex flex-col gap-2 p-4 bg-[#2d2d44]/30 rounded-2xl border border-[#a89880]/10">
          <span className="font-elite text-xs text-[#f5c518] tracking-wider uppercase">THE REAL DEAL</span>
          <h3 className="font-abril text-2xl text-[#f0e6d3]">Kush & Samiksha</h3>
          <p className="font-lato text-xs text-[#a89880] leading-relaxed">
            A cafeteria table, a borrowed pen, onions cutting tears, sharing plates of hot Maggi, and choosing each other day in and day out. The new standard.
          </p>
        </div>
      </div>

      {/* Side-by-side Cinematic Photo Gallery (Photos 7 and 8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <motion.div 
          whileHover={{ rotate: 0, scale: 1.03 }}
          className="polaroid-frame rotate-[-2.5deg] cursor-pointer w-full max-w-[340px]"
        >
          <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
            <img 
              src="/himym/photo7.jpg" 
              alt="Marshall & Lily Vibe 1" 
              className="w-full h-full object-cover lazyload"
              loading="lazy"
            />
          </div>
          <div className="caption text-xs md:text-sm">Two of a Kind. 💛</div>
        </motion.div>

        <motion.div 
          whileHover={{ rotate: 0, scale: 1.03 }}
          className="polaroid-frame rotate-[2.5deg] cursor-pointer w-full max-w-[340px]"
        >
          <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
            <img 
              src="/himym/photo8.jpg" 
              alt="Marshall & Lily Vibe 2" 
              className="w-full h-full object-cover lazyload"
              loading="lazy"
            />
          </div>
          <div className="caption text-xs md:text-sm">Legendary together. ⚡</div>
        </motion.div>
      </div>

      {/* Compatibility Stats Card */}
      <div className="bg-[#2d2d44]/55 border-2 border-[#a89880]/30 rounded-3xl p-6 md:p-8 shadow-2xl max-w-xl mx-auto w-full relative overflow-hidden">
        
        {/* Star Wars reference subtle badge */}
        <div className="absolute top-3 right-4 bg-black/40 border border-[#a89880]/30 px-2 py-0.5 rounded text-[8px] font-elite text-[#f5e6c8]/60 tracking-widest uppercase">
          May the Force be with us
        </div>

        <h3 className="font-abril text-2xl text-[#f5c518] mb-6 text-center border-b border-[#a89880]/15 pb-2">
          Official Compatibility Scorecard
        </h3>

        <div className="flex flex-col gap-4 font-elite text-xs md:text-sm text-[#f0e6d3]">
          <div className="flex justify-between items-center border-b border-[#a89880]/10 pb-2">
            <span>Legendary Compatibility:</span>
            <span className="font-bold text-[#c0392b]">100%</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#a89880]/10 pb-2">
            <span>Times they've been each other's person:</span>
            <span className="font-bold text-[#f5c518]">∞</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#a89880]/10 pb-2">
            <span>Arguments about nothing important:</span>
            <span className="font-bold text-[#a89880]">several (it was the onions)</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#a89880]/10 pb-2">
            <span>Arguments that mattered:</span>
            <span className="font-bold text-green-400">0</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span>Yellow umbrella moments:</span>
            <span className="font-bold text-[#f5c518]">1 (that's all you need)</span>
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="legendary-stamp">LEGENDARY APPROVED</span>
        </div>
      </div>

    </div>
  );
};
