import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, ChevronLeft, ChevronRight, X, ArrowLeft, Disc } from 'lucide-react';

// Define context for persistent audio controls
interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
  togglePlay: () => void;
  hasInteracted: boolean;
  triggerPlayOnInteract: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useHimymMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useHimymMusic must be used within a HimymLayout provider');
  }
  return context;
};

export const episodes = [
  { path: '/himym/intro', title: 'The Pilot', num: 1 },
  { path: '/himym/the-night-we-met', title: 'Pilot Episode', num: 2 },
  { path: '/himym/the-gang', title: 'Our People', num: 3 },
  { path: '/himym/yellow-umbrella', title: 'The Sign', num: 4 },
  { path: '/himym/slap-bet', title: 'The Milestones', num: 5 },
  { path: '/himym/blue-french-horn', title: 'The Grand Gesture', num: 6 },
  { path: '/himym/marshall-and-lily', title: 'What Love Looks Like', num: 7 },
  { path: '/himym/the-playbook', title: 'Our Rules', num: 8 },
  { path: '/himym/countdown', title: 'How Long We\'ve Been Legendary', num: 9 },
  { path: '/himym/have-you-met', title: 'Tell the World', num: 10 }
];

export const HimymLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // UI states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [remoteOpen, setRemoteOpen] = useState(true);
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(true);

  // Find current episode index
  const currentIndex = episodes.findIndex(ep => ep.path === location.pathname);
  const currentEp = currentIndex !== -1 ? episodes[currentIndex] : episodes[0];

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio('/himym/theme.mp3');
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Detect browser autoplay block and setup interaction handler
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setShowInteractionPrompt(false);
        // Play song
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log('Autoplay blocked even after click:', err);
        });
      }
      // Remove listeners
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      audio.pause();
      audioRef.current = null;
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // In case user hasn't interacted
      setHasInteracted(true);
      setShowInteractionPrompt(false);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log(err));
    }
  };

  const triggerPlayOnInteract = () => {
    if (!hasInteracted && audioRef.current) {
      setHasInteracted(true);
      setShowInteractionPrompt(false);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log(err));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(episodes[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (currentIndex < episodes.length - 1) {
      navigate(episodes[currentIndex + 1].path);
    }
  };

  // Generate bulbs for string lights
  const bulbs = Array.from({ length: 24 }).map((_, i) => (
    <div 
      key={i} 
      className="light-bulb w-3 h-3 rounded-full bg-[#f5c518] mx-2 relative inline-block border border-yellow-300"
      style={{
        top: i % 2 === 0 ? '4px' : '12px',
        boxShadow: '0 0 6px rgba(245, 197, 24, 0.6)'
      }}
    />
  ));

  // Progress percentage
  const progressPercent = ((currentIndex + 1) / episodes.length) * 100;

  return (
    <MusicContext.Provider value={{
      isPlaying,
      setIsPlaying,
      volume,
      setVolume,
      togglePlay,
      hasInteracted,
      triggerPlayOnInteract
    }}>
      <div className="himym-theme flex flex-col relative select-none">
        {/* Film grain texture */}
        <div className="film-grain" />

        {/* Interaction/Autoplay Prompt */}
        <AnimatePresence>
          {showInteractionPrompt && !hasInteracted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={triggerPlayOnInteract}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#2d2d44] border-2 border-[#f5c518] p-8 rounded-3xl max-w-md w-full text-center shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-[-30px] right-[-30px] w-20 h-20 bg-[#f5c518] rotate-45 flex items-end justify-center pb-2">
                  <span className="text-[#1a1a2e] font-marker font-bold text-xs">HIMYM</span>
                </div>
                
                <h3 className="font-abril text-3xl text-[#f5c518] mb-4">Legendary Journey</h3>
                
                <p className="text-[#f0e6d3] font-lato text-sm mb-6 leading-relaxed">
                  Welcome to Kush & Samiksha's story. For the full cinematic experience, please click to play the background theme song.
                </p>
                
                <button 
                  onClick={triggerPlayOnInteract}
                  className="bg-[#f5c518] hover:bg-[#e0b410] text-[#1a1a2e] font-marker text-lg py-3 px-8 rounded-full shadow-lg transition-transform active:scale-95"
                >
                  Suit Up!
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Twinkling String Lights */}
        <div className="string-lights-container flex justify-between absolute top-0 left-0 right-0 w-full overflow-hidden h-[40px] opacity-75">
          <div className="w-full h-[2px] bg-yellow-500/20 absolute top-[8px] left-0"></div>
          <div className="w-full flex justify-around">
            {bulbs}
          </div>
        </div>

        {/* Global Back to Rooh Button */}
        <Link 
          to="/" 
          className="absolute top-10 left-6 z-40 flex items-center gap-1 text-[#a89880] hover:text-[#f5e6c8] text-xs font-elite transition-colors group bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to Rooh
        </Link>

        {/* Floating TV Remote Control / VHS Controls */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          <AnimatePresence>
            {remoteOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 30 }}
                className="bg-[#2d2d44] border-2 border-[#a89880]/30 p-4 rounded-3xl w-64 shadow-2xl flex flex-col gap-3 relative overflow-hidden"
              >
                {/* Worn texture highlights */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f5e6c8]/10 to-transparent"></div>
                
                {/* Red Remote Light */}
                <div className="flex justify-between items-center px-1">
                  <div className="flex gap-1 items-center">
                    <span className="text-[10px] font-elite text-[#a89880]/60 tracking-wider">ROOH REMOTE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b] animate-pulse"></span>
                  </div>
                  <button 
                    onClick={() => setRemoteOpen(false)}
                    className="text-[#a89880]/60 hover:text-[#f0e6d3] transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Display Area */}
                <div className="bg-black/40 border border-black/80 rounded-xl p-2.5 text-center flex flex-col gap-0.5 relative">
                  <span className="text-[10px] text-[#a89880] font-elite tracking-widest uppercase">EPISODE</span>
                  <div className="text-xl font-marker text-[#f5c518] tracking-widest">
                    {currentEp ? `EP ${String(currentEp.num).padStart(2, '0')} / 10` : 'EP -- / 10'}
                  </div>
                  <div className="text-[11px] text-[#f0e6d3] font-lato truncate px-1">
                    {currentEp ? currentEp.title : 'Intro'}
                  </div>
                </div>

                {/* Episode Selection Dropdown Trigger */}
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full bg-black/20 hover:bg-black/35 border border-[#a89880]/20 rounded-xl py-2 px-3 flex justify-between items-center text-xs font-elite text-[#f5e6c8]"
                  >
                    <span>Episode Selector</span>
                    <Menu size={12} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full left-0 right-0 mb-2 max-h-56 overflow-y-auto bg-[#1a1a2e] border-2 border-[#a89880]/30 rounded-xl z-50 shadow-2xl custom-scrollbar"
                      >
                        {episodes.map((ep, idx) => (
                          <button
                            key={ep.path}
                            onClick={() => {
                              navigate(ep.path);
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left py-2 px-3 text-xs transition-colors flex items-center gap-2 hover:bg-[#2d2d44] ${
                              location.pathname === ep.path ? 'text-[#f5c518] font-bold bg-black/20' : 'text-[#f0e6d3]/80'
                            }`}
                          >
                            <span className="font-elite text-[10px] text-[#a89880]">EP {idx + 1}</span>
                            <span className="truncate">{ep.title}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remote Directional controls */}
                <div className="grid grid-cols-3 gap-2 items-center justify-items-center py-1 bg-black/10 rounded-2xl border border-black/20">
                  <button 
                    disabled={currentIndex <= 0}
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[#1a1a2e] hover:bg-[#1f1f3a] active:scale-95 disabled:opacity-30 disabled:pointer-events-none text-[#f0e6d3] flex items-center justify-center border border-[#a89880]/20 shadow-md transition-all"
                    title="Previous Episode"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="font-elite text-[9px] text-[#a89880] tracking-widest text-center leading-tight">
                    NAV
                  </div>

                  <button 
                    disabled={currentIndex >= episodes.length - 1}
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#1a1a2e] hover:bg-[#1f1f3a] active:scale-95 disabled:opacity-30 disabled:pointer-events-none text-[#f0e6d3] flex items-center justify-center border border-[#a89880]/20 shadow-md transition-all"
                    title="Next Episode"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Bottom VHS style buttons */}
                <div className="flex gap-2 justify-between">
                  <button 
                    onClick={togglePlay}
                    className="flex-1 bg-[#c0392b] hover:bg-[#a93023] text-white font-elite text-[10px] tracking-wider py-2 rounded-xl transition-colors shadow-md flex items-center justify-center gap-1 active:scale-95"
                  >
                    <Disc size={10} className={isPlaying ? 'animate-spin' : ''} />
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>

                  {/* Volume Control Button */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowVolumePopup(!showVolumePopup)}
                      className="bg-black/30 hover:bg-black/50 border border-[#a89880]/20 text-[#f5e6c8] p-2 rounded-xl transition-colors shadow-md flex items-center justify-center h-full active:scale-95"
                    >
                      {volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>

                    <AnimatePresence>
                      {showVolumePopup && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9, x: 10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9, x: 10 }}
                          className="absolute bottom-full right-0 mb-3 bg-[#2d2d44] border border-[#a89880]/30 p-2.5 rounded-xl flex flex-col items-center gap-2 shadow-2xl w-8"
                        >
                          <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.05"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="h-20 accent-[#f5c518] cursor-pointer"
                            style={{ writingMode: 'vertical-lr' as any, WebkitAppearance: 'slider-vertical' as any }}
                          />
                          <span className="text-[9px] text-[#f5e6c8] font-elite">{Math.round(volume * 100)}%</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Miniature remote control launch tag if closed */}
          {!remoteOpen && (
            <motion.button 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#2d2d44] hover:bg-[#393956] border-2 border-[#f5c518] text-[#f5c518] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 font-elite text-xs"
              onClick={() => setRemoteOpen(true)}
            >
              <span>📺 OPEN REMOTE</span>
            </motion.button>
          )}
        </div>

        {/* Small floating music indicator on other pages */}
        {location.pathname !== '/himym/have-you-met' && (
          <div className="fixed top-8 right-6 z-40 flex items-center gap-2">
            <AnimatePresence>
              {isPlaying && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-[#1a1a2e]/60 border border-[#f5c518]/20 text-[10px] text-[#f5e6c8] font-elite px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                  MUSIC PLAYING
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={togglePlay}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all active:scale-95 ${
                isPlaying 
                  ? 'bg-[#f5c518] border-[#f5c518] text-[#1a1a2e] shadow-[0_0_10px_rgba(245,197,24,0.4)] animate-spin [animation-duration:10s]' 
                  : 'bg-black/30 border-[#a89880]/30 text-[#a89880]'
              }`}
              title={isPlaying ? 'Pause Theme Song' : 'Play Theme Song'}
            >
              <Disc size={16} />
            </button>
          </div>
        )}

        {/* Main Render Area */}
        <main className="flex-grow w-full flex flex-col pt-[50px] pb-[80px] min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full flex-grow flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Progress Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-[#2d2d44] z-40">
          <div 
            className="h-full bg-[#f5c518] transition-all duration-500 ease-out" 
            style={{ 
              width: `${progressPercent}%`,
              boxShadow: '0 0 4px rgba(245, 197, 24, 0.5)'
            }}
          ></div>
        </div>
      </div>
    </MusicContext.Provider>
  );
};
