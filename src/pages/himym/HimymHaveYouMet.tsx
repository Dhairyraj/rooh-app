import { useState } from 'react';
import { motion } from 'framer-motion';
import { useHimymMusic } from './HimymLayout';
import { Share2, Copy, Play, Pause } from 'lucide-react';

export const HimymHaveYouMet = () => {
  const { isPlaying, togglePlay } = useHimymMusic();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = window.location.origin + '/himym/intro';
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareText = encodeURIComponent("Have you met Kush & Samiksha? Check out their legendary love story! 💛\n");
  const shareUrl = encodeURIComponent(window.location.origin + '/himym/intro');
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}${shareUrl}`;

  return (
    <div className="flex-grow max-w-4xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col items-center gap-10 text-center">
      
      {/* Title */}
      <div className="w-full border-b border-[#a89880]/20 pb-4">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Finale</span>
        <h2 className="font-abril text-4xl md:text-6xl text-[#f0e6d3] mt-1">Have You Met...?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full mt-2">
        
        {/* Left Side: Polaroid Photo Showcase */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-elite text-xs text-[#a89880] tracking-widest uppercase">THE BEST PHOTO</span>
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="polaroid-frame rotate-[-3deg] cursor-pointer max-w-[290px] md:max-w-[320px]"
          >
            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-200">
              <img 
                src="/himym/photo7.jpg" 
                alt="Kush and Samiksha" 
                className="w-full h-full object-cover lazyload"
                loading="lazy"
              />
            </div>
            <div className="caption text-sm">Kush & Samiksha 💛</div>
          </motion.div>
        </div>

        {/* Right Side: Vintage Turntable Music Player */}
        <div className="flex flex-col items-center gap-6">
          <span className="font-elite text-xs text-[#a89880] tracking-widest uppercase">THE SOUNDTRACK</span>
          
          {/* Turntable Container */}
          <div className="w-64 h-64 md:w-72 md:h-72 bg-[#3e2b1e] border-8 border-[#2d1f15] rounded-3xl p-4 shadow-2xl relative flex flex-col justify-between items-center overflow-hidden">
            
            {/* Wooden grain highlights */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none"></div>

            {/* Turntable Platter (Grey circle) */}
            <div 
              onClick={togglePlay}
              className="w-48 h-48 md:w-52 md:h-52 rounded-full bg-black/60 border border-black/80 flex items-center justify-center relative cursor-pointer group shadow-inner"
            >
              {/* Vinyl Groove Lines */}
              <div className="absolute inset-2 border-2 border-black/40 rounded-full"></div>
              <div className="absolute inset-6 border border-black/35 rounded-full"></div>
              <div className="absolute inset-10 border border-black/30 rounded-full"></div>
              <div className="absolute inset-14 border border-black/25 rounded-full"></div>

              {/* Vinyl Body */}
              <div 
                className={`w-full h-full rounded-full bg-black/90 flex items-center justify-center relative shadow-lg ${
                  isPlaying ? 'animate-spin [animation-duration:8s]' : ''
                }`}
              >
                {/* Center Label (Cream/Yellow) */}
                <div className="w-16 h-16 rounded-full bg-[#f5e6c8] border-2 border-[#f5c518] flex flex-col items-center justify-center p-1 relative z-10 shadow-md">
                  <span className="text-[7px] font-marker text-black leading-none text-center">K & S</span>
                  <span className="text-[6px] font-elite text-black/60 mt-0.5 leading-none">THEME</span>
                </div>
                
                {/* Yellow Umbrella SVG miniature in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#f5c518] pointer-events-none z-20 opacity-30">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,15 C20,15 10,45 10,55 C12,58 14,56 20,52 30,52 36,56 40,59 46,59 50,56 54,59 60,59 64,56 70,52 80,52 86,56 C90,57 90,55 90,55 C80,15 50,15 Z" />
                  </svg>
                </div>
              </div>

              {/* Hover Overlay Play icon */}
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                {isPlaying ? <Pause className="w-8 h-8 text-[#f5c518] fill-[#f5c518]" /> : <Play className="w-8 h-8 text-[#f5c518] fill-[#f5c518] ml-1" />}
              </div>
            </div>

            {/* Tonearm (Metal Arm on top right) */}
            <div 
              className="absolute top-4 right-4 w-12 h-28 pointer-events-none z-30 transition-transform duration-700 ease-in-out"
              style={{
                transformOrigin: "top right",
                transform: isPlaying ? "rotate(22deg)" : "rotate(0deg)"
              }}
            >
              {/* Arm Pivot Base */}
              <div className="w-6 h-6 rounded-full bg-[#8d8d8d] border-2 border-[#555] absolute right-0 top-0 shadow-md"></div>
              {/* Arm Stick */}
              <div className="w-1.5 h-24 bg-[#b5b5b5] absolute right-2.5 top-3.5 shadow-inner"></div>
              {/* Arm Head/Cartridge */}
              <div className="w-4 h-6 bg-[#333] border border-[#555] absolute right-1.5 bottom-0 rounded shadow-md"></div>
            </div>

            {/* Display / Info panel */}
            <div className="w-full bg-[#1e140d] border border-[#2d1f15] p-2 rounded-xl text-center">
              <span className="text-[7px] font-elite text-[#a89880] tracking-widest uppercase block">NOW PLAYING</span>
              <span className="text-[10px] font-marker text-[#f5c518] truncate block">HIMYM Theme Song</span>
            </div>

          </div>

          <p className="font-elite text-xs text-[#a89880] max-w-xs leading-relaxed italic">
            Click on the record plate to play or pause their background song.
          </p>
        </div>

      </div>

      {/* Share / Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mt-4 z-10">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 bg-[#25d366] hover:bg-[#20ba5a] text-white font-marker text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <Share2 size={16} />
          Share their story
        </a>

        <button 
          onClick={handleCopy}
          className="w-full sm:flex-1 bg-[#2d2d44] hover:bg-[#393956] border border-[#a89880]/30 text-[#f0e6d3] font-marker text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <Copy size={16} />
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>

      {/* Show Ending Card - Immersive fade out */}
      <div className="mt-12 mb-6 w-full max-w-2xl bg-[#131322] border-2 border-dashed border-[#a89880]/30 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center shadow-inner">
        {/* Glowing umbrella in background */}
        <div className="absolute inset-0 bg-[#f5c518]/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <span className="font-elite text-[9px] text-[#a89880] tracking-[0.25em] uppercase mb-4">THE FINALE</span>

        <p className="font-elite text-lg md:text-xl text-[#f0e6d3] leading-relaxed italic max-w-lg mb-6">
          "And that, kids, is the story of how a borrowed pen in a cafeteria turned into a legendary love story."
        </p>

        <h1 className="font-abril text-3xl md:text-4xl text-[#f5c518] uppercase tracking-wider">
          Kush & Samiksha
        </h1>
        <p className="font-marker text-[#a89880] text-sm md:text-base mt-2">
          It's going to be legendary.
        </p>

        {/* Small Yellow Umbrella SVG icon */}
        <div className="w-8 h-8 text-[#f5c518] mt-6 animate-bounce">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,15 C20,15 10,45 10,55 C12,58 14,56 20,52 30,52 36,56 40,59 46,59 50,56 54,59 60,59 64,56 70,52 80,52 86,56 C90,57 90,55 90,55 C80,15 50,15 Z" />
          </svg>
        </div>
      </div>

    </div>
  );
};
