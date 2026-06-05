import { useState, useEffect } from 'react';

export const HimymCountdown = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startDate = new Date('2026-01-17T00:00:00');

  // Exact calendar difference calculation
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  // Absolute total days
  const diffMs = now.getTime() - startDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Next Anniversary Countdown
  let nextAnniversary = new Date(now.getFullYear(), 0, 17, 0, 0, 0);
  if (now > nextAnniversary) {
    nextAnniversary.setFullYear(now.getFullYear() + 1);
  }
  const diffAnniversary = nextAnniversary.getTime() - now.getTime();
  const nextDays = Math.floor(diffAnniversary / (1000 * 60 * 60 * 24));
  const nextHours = Math.floor((diffAnniversary % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const nextMinutes = Math.floor((diffAnniversary % (1000 * 60 * 60)) / (1000 * 60));
  const nextSeconds = Math.floor((diffAnniversary % (1000 * 60)) / 1000);

  const counterItems = [
    { label: "Years", value: years },
    { label: "Months", value: months },
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds, isSeconds: true }
  ];

  return (
    <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex flex-col items-center gap-8 relative overflow-hidden">
      
      {/* Background Starry Animation */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#f5c518] rounded-full top-[30%] left-[80%] animate-pulse [animation-delay:1s]"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[15%] animate-pulse [animation-delay:0.5s]"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[85%] left-[65%] animate-pulse [animation-delay:1.5s]"></div>
      </div>

      {/* Page Header */}
      <div className="text-center w-full border-b border-[#a89880]/20 pb-4 z-10">
        <span className="font-elite text-xs text-[#f5c518] tracking-widest uppercase">Season 1, Episode 8</span>
        <h2 className="font-abril text-3xl md:text-5xl text-[#f0e6d3] mt-1">How Long We've Been Legendary</h2>
        <p className="font-elite text-xs text-[#a89880] mt-1">"Together since January 17, 2026"</p>
      </div>

      {/* Narration */}
      <div className="text-center max-w-xl z-10">
        <p className="font-elite text-[#f0e6d3] text-sm leading-relaxed italic">
          "Kids, they say time is relative. A minute standing in the rain waiting for the bus feels like an hour. But a month cooked in Maggi, bad jokes, and long drives feels like a second. Since January 17, 2026, every tick of the clock has been... well, legendary."
        </p>
      </div>

      {/* Large Ticking Counter Board */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-3xl z-10 mt-2">
        {counterItems.map((item) => (
          <div 
            key={item.label} 
            className="bg-[#2d2d44] border-2 border-[#a89880]/30 rounded-2xl p-4 flex flex-col items-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f5c518] to-transparent"></div>
            
            <span className="font-elite text-[9px] text-[#a89880] tracking-widest uppercase mb-1">
              {item.label}
            </span>
            
            <div className={`font-marker text-3xl md:text-4xl text-[#f5c518] ${
              item.isSeconds ? 'text-[#c0392b] scale-105 transition-transform duration-200' : ''
            }`}>
              {String(item.value).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Milestone Translations Card */}
      <div className="bg-[#131322] border border-[#a89880]/15 p-6 rounded-3xl max-w-2xl w-full z-10 text-center shadow-xl flex flex-col gap-3">
        <span className="font-elite text-[9px] text-[#a89880] uppercase tracking-widest">The Stats in Perspective</span>
        <div className="font-marker text-lg md:text-xl text-[#f0e6d3] flex flex-col gap-2">
          <div>✨ That's <span className="text-[#f5c518]">{totalDays}</span> sunrises together</div>
          <div>🌅 <span className="text-[#f5c518]">{totalDays}</span> chances to say good morning</div>
          <div>💛 <span className="text-[#f5c518]">{totalDays}</span> days of choosing each other</div>
        </div>
      </div>

      {/* Next Anniversary Countdown */}
      <div className="bg-[#2d2d44]/55 border-2 border-[#c0392b]/30 p-6 rounded-3xl max-w-lg w-full z-10 text-center shadow-2xl relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c0392b] text-white font-elite text-[9px] px-3 py-0.5 rounded-full uppercase tracking-wider">
          Next Legendaversary Countdown
        </span>
        
        <div className="grid grid-cols-4 gap-2 mt-2 font-elite text-xs text-[#f0e6d3]">
          <div className="flex flex-col">
            <span className="font-marker text-xl md:text-2xl text-[#f5c518]">{nextDays}</span>
            <span className="text-[9px] text-[#a89880]">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="font-marker text-xl md:text-2xl text-[#f5c518]">{String(nextHours).padStart(2, '0')}</span>
            <span className="text-[9px] text-[#a89880]">Hours</span>
          </div>
          <div className="flex flex-col">
            <span className="font-marker text-xl md:text-2xl text-[#f5c518]">{String(nextMinutes).padStart(2, '0')}</span>
            <span className="text-[9px] text-[#a89880]">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="font-marker text-xl md:text-2xl text-[#c0392b]">{String(nextSeconds).padStart(2, '0')}</span>
            <span className="text-[9px] text-[#a89880]">Seconds</span>
          </div>
        </div>
      </div>

    </div>
  );
};
