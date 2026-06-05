import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Smile } from 'lucide-react';

export const HimymGang = () => {
  const cards = [
    {
      role: "The Marshall",
      tagline: "The core supporter",
      desc: "The one who always has snacks and the best hugs. Fiercely loyal and ready to defend you at a moment's notice.",
      icon: <Shield className="w-8 h-8 text-[#c0392b]" />,
      colorClass: "border-[#c0392b]",
      badge: "Loyalty 100%"
    },
    {
      role: "The Lily",
      tagline: "The mastermind",
      desc: "The one who knows everything before you even tell her. Gives the best advice, keeps the secrets, and steers the ship.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      colorClass: "border-pink-500",
      badge: "Mind Reader"
    },
    {
      role: "The Barney",
      tagline: "The wild card",
      desc: "The one who makes everything into a whole event. Suit up! Always pushing the group to make every night legendary.",
      icon: <Sparkles className="w-8 h-8 text-[#f5c518]" />,
      colorClass: "border-[#f5c518]",
      badge: "Legendary"
    },
    {
      role: "The Robin",
      tagline: "The reliable one",
      desc: "The one who shows up no matter what, no questions asked. Independent, strong-willed, and always ready for a road trip.",
      icon: <Smile className="w-8 h-8 text-teal-400" />,
      colorClass: "border-teal-400",
      badge: "Always There"
    }
  ];

  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col gap-8">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 2</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-2 mb-3">Our People</h2>
        <p className="font-elite text-xs md:text-sm text-[#a89880] italic">
          "Every legendary story needs a legendary group."
        </p>
      </div>

      {/* Narration intro */}
      <div className="bg-[#2d2d44]/30 border border-[#a89880]/15 p-5 rounded-2xl max-w-3xl mx-auto text-center shadow-md">
        <p className="font-elite text-[#f0e6d3] text-xs md:text-sm leading-relaxed">
          "Kids, you can't get through life without a solid crew. Marshall and Lily were the rock, Barney kept things crazy, and Robin was the wildcard. For Kush & Samiksha, their own story wouldn't be half as legendary without these roles being filled in their lives..."
        </p>
      </div>

      {/* Character Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.role}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className={`bg-[#2d2d44]/55 border-2 ${card.colorClass} rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-xl relative overflow-hidden group`}
          >
            {/* Stamp highlight overlay */}
            <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-white/5 rotate-45 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-4 w-full">
              {/* Avatar circle with Icon */}
              <div className="w-16 h-16 rounded-full bg-[#1a1a2e] border border-[#a89880]/20 flex items-center justify-center shadow-inner relative">
                {card.icon}
                {/* Micro-sparkle effect */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#f5c518] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>

              {/* Title Role */}
              <div>
                <h3 className="font-abril text-2xl text-[#f0e6d3] tracking-wide">{card.role}</h3>
                <span className="font-elite text-[9px] text-[#a89880] tracking-widest uppercase">{card.tagline}</span>
              </div>

              {/* Description */}
              <p className="font-lato text-xs text-[#f0e6d3]/80 leading-relaxed min-h-[72px]">
                {card.desc}
              </p>
            </div>

            {/* Friends Name Placeholder */}
            <div className="w-full mt-6 pt-4 border-t border-[#a89880]/15 flex flex-col items-center gap-2">
              <span className="font-elite text-[9px] text-[#a89880] uppercase tracking-wider">Assigned to:</span>
              <div className="font-marker text-sm text-[#f5c518] italic tracking-wide h-6">
                You know who you are 💛
              </div>
              <span className="bg-[#1a1a2e] text-[9px] font-elite text-[#f5e6c8]/60 px-2 py-0.5 rounded border border-[#a89880]/10 mt-1 uppercase">
                {card.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Retro bottom citation */}
      <div className="text-center mt-6">
        <span className="font-marker text-[#c0392b] text-base md:text-lg tracking-wider border-2 border-dashed border-[#c0392b]/30 px-6 py-2 rotate-[1.5deg] inline-block">
          GANG RULES: No one misses a Slap Bet.
        </span>
      </div>

    </div>
  );
};
