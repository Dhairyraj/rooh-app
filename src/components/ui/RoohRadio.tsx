import { useState, useEffect, useRef } from 'react';
import { Music, Play, Pause, X, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

type Mood = 'Romantic' | 'Nostalgic' | 'Playful' | 'Dreamy';

export const RoohRadio = () => {
  const location = useLocation();
  
  if (location.pathname.startsWith('/himym')) {
    return null;
  }
  
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMood, setCurrentMood] = useState<Mood>('Romantic');
  
  // Audio context refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playMood = (mood: Mood) => {
    stopAudio();
    initAudio();
    
    const ctx = audioCtxRef.current!;
    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 2); // Soft fade in
    gainNodeRef.current = gainNode;

    const createOsc = (freq: number, type: OscillatorType, detune = 0) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.detune.setValueAtTime(detune, ctx.currentTime);
      
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.1, ctx.currentTime); // very slow modulation
      
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(5, ctx.currentTime);
      
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      
      osc.connect(gainNode);
      osc.start();
      lfo.start();
      
      oscillatorsRef.current.push(osc, lfo);
    };

    // Frequencies based on mood
    if (mood === 'Romantic') {
      // Warm, deep, harmonious (C major 7th chord drones)
      createOsc(130.81, 'sine'); // C3
      createOsc(164.81, 'sine'); // E3
      createOsc(196.00, 'triangle'); // G3
      createOsc(246.94, 'sine'); // B3
    } else if (mood === 'Nostalgic') {
      // Melancholic, slightly detuned (A minor 9th drones)
      createOsc(110.00, 'triangle'); // A2
      createOsc(130.81, 'sine'); // C3
      createOsc(164.81, 'sine'); // E3
      createOsc(246.94, 'sine', 10); // B3 detuned
    } else if (mood === 'Playful') {
      // Higher pitched, brighter (G major add9)
      createOsc(196.00, 'triangle'); // G3
      createOsc(246.94, 'sine'); // B3
      createOsc(293.66, 'sine'); // D4
      createOsc(440.00, 'sine', -5); // A4
    } else if (mood === 'Dreamy') {
      // Ethereal, wide chords (F Lydian)
      createOsc(87.31, 'sine'); // F2
      createOsc(130.81, 'sine'); // C3
      createOsc(164.81, 'triangle'); // E3
      createOsc(246.94, 'sine'); // B3
    }
    
    setIsPlaying(true);
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      // Fade out
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 1);
      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch (e) {}
        });
        oscillatorsRef.current = [];
        if (gainNodeRef.current) {
          gainNodeRef.current.disconnect();
          gainNodeRef.current = null;
        }
      }, 1000);
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playMood(currentMood);
    }
  };

  const changeMood = (mood: Mood) => {
    setCurrentMood(mood);
    if (isPlaying) {
      playMood(mood);
    }
  };

  useEffect(() => {
    return () => stopAudio(); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed bottom-[110px] md:bottom-6 right-4 md:right-6 z-[90] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-full right-0 bg-plum-900/95 backdrop-blur-md border border-plum-700 p-4 rounded-2xl shadow-2xl w-56 mb-4"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gold-200 uppercase tracking-widest flex items-center">
                <SlidersHorizontal className="w-3 h-3 mr-2" /> Rooh Radio
              </span>
              <button onClick={() => setIsOpen(false)} className="text-plum-400 hover:text-plum-200">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {(['Romantic', 'Nostalgic', 'Dreamy', 'Playful'] as Mood[]).map((mood) => (
                <button
                  key={mood}
                  onClick={() => changeMood(mood)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentMood === mood 
                      ? 'bg-plum-800 text-gold-100 border border-gold-500/20' 
                      : 'text-plum-300 hover:bg-plum-800/50'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-row-reverse items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 md:w-12 md:h-12 bg-plum-800/80 backdrop-blur-md border border-gold-500/30 rounded-full flex items-center justify-center text-gold-200 hover:bg-plum-700 hover:text-gold-100 shadow-xl transition-all"
        >
          <Music className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <button
          onClick={togglePlay}
          className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 text-plum-950 rounded-full flex items-center justify-center hover:bg-gold-400 shadow-xl transition-all"
        >
          {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5 fill-current" /> : <Play className="w-4 h-4 md:w-5 md:h-5 fill-current ml-1" />}
        </button>
      </div>
      
      {/* Visualizer dots when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute bottom-14 right-2 flex gap-1 items-end h-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["4px", "16px", "4px"] }}
                transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 bg-gold-400/50 rounded-t-full"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
