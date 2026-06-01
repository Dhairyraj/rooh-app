import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
interface TemplateProps { isDemo?: boolean; }

export const BollywoodDemo = (_props: TemplateProps) => {
  return (
    <>
      <Helmet>
        <title>Ananya & Vikram - A Bollywood Love Story</title>
      </Helmet>

      <div className="relative min-h-screen bg-[#600000] text-[#FFD700] overflow-x-hidden" style={{ fontFamily: "'Yatra One', cursive" }}>
        
        {/* Rich background texture & mandala styling */}
        <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFD700] via-transparent to-transparent mix-blend-overlay" />
        
        {/* CSS Mandala Borders (Corners) */}
        <div className="fixed top-0 left-0 w-32 h-32 md:w-64 md:h-64 border-t-8 border-l-8 border-[#FFD700]/30 rounded-br-[100%] pointer-events-none" />
        <div className="fixed top-0 right-0 w-32 h-32 md:w-64 md:h-64 border-t-8 border-r-8 border-[#FFD700]/30 rounded-bl-[100%] pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 border-b-8 border-l-8 border-[#FFD700]/30 rounded-tr-[100%] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 border-b-8 border-r-8 border-[#FFD700]/30 rounded-tl-[100%] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32 flex flex-col gap-32 font-sans">
          
          {/* Section 1: Hero Poster */}
          <section className="text-center min-h-[80vh] flex flex-col justify-center relative border-4 border-[#FFD700] bg-[#4A0000]/80 p-8 md:p-12 shadow-[0_0_50px_rgba(255,215,0,0.2)]">
            <div className="absolute inset-2 border-2 border-dashed border-[#FFD700]/50 pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-[#FBAE3C] text-xl md:text-2xl mb-4 tracking-[0.3em] uppercase" style={{ fontFamily: "'Yatra One', cursive" }}>A Yash Chopra Style Romance</h2>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#FBAE3C] to-[#FF8C00] drop-shadow-2xl mb-8 leading-none" style={{ fontFamily: "'Yatra One', cursive" }}>
                ANANYA <br/> & <br/> VIKRAM
              </h1>
              <p className="text-xl md:text-3xl text-white font-serif italic max-w-2xl mx-auto mb-8 drop-shadow-lg">
                "A story written by destiny, directed by love"
              </p>
              <div className="bg-[#FFD700] text-[#600000] inline-block px-8 py-3 rounded text-sm md:text-lg font-bold tracking-widest uppercase">
                Releasing: February 14, 2023
              </div>
            </motion.div>
          </section>

          {/* Section 2: The Trailer */}
          <section>
            <div className="text-center mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#FFD700]/30 -z-10" />
              <h2 className="inline-block bg-[#600000] px-6 text-4xl md:text-6xl text-[#FFD700]" style={{ fontFamily: "'Yatra One', cursive" }}>The Trailer</h2>
            </div>
            
            <div className="space-y-12">
              {[
                { scene: "Scene 1", title: "The Meet Cute", desc: "It was raining. Of course it was raining. She couldn't find a cab, and he offered his umbrella. Classic." },
                { scene: "Scene 2", title: "The Interval Twist", desc: "He got transferred to Bangalore. Long distance? Cue the dramatic airport running sequence." },
                { scene: "Scene 3", title: "The Happy Ending", desc: "He came back. Because true love always finds its way home." },
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 items-center bg-[#4A0000] p-6 rounded-lg border-l-4 border-[#FFD700] shadow-xl"
                >
                  <div className="bg-[#FFD700] text-[#600000] px-4 py-2 font-bold tracking-widest uppercase whitespace-nowrap">
                    {s.scene}
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-serif italic mb-2">{s.title}</h3>
                    <p className="text-[#FBAE3C]/80">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Critics Say */}
          <section className="bg-gradient-to-br from-[#4A0000] to-[#2D0000] p-8 md:p-12 rounded-3xl border border-[#FFD700]/20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl text-center mb-12 text-[#FFD700]" style={{ fontFamily: "'Yatra One', cursive" }}>Critics Say...</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { text: "Bhai, finally! We've been waiting for this since 2018.", author: "Rahul (Best Friend)", stars: 5 },
                { text: "Too much drama, but completely worth it.", author: "Neha (Sister)", stars: 4 },
              ].map((r, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 relative">
                  <div className="flex text-[#FFD700] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={j < r.stars ? "opacity-100" : "opacity-30"}>★</span>
                    ))}
                  </div>
                  <p className="text-white text-lg font-serif italic mb-4">"{r.text}"</p>
                  <p className="text-[#FBAE3C] text-sm font-bold uppercase tracking-widest">— {r.author}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Soundtrack */}
          <section className="text-center">
            <h2 className="text-3xl md:text-5xl mb-12 text-[#FFD700]" style={{ fontFamily: "'Yatra One', cursive" }}>The Soundtrack of Us</h2>
            <div className="inline-block relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#111] border-[10px] border-[#222] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative mx-auto"
              >
                {/* Vinyl Grooves */}
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute inset-12 rounded-full border border-white/10" />
                {/* Center Label */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#600000] border-2 border-[#FFD700] flex flex-col items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white mb-1" />
                  <span className="text-[8px] md:text-xs text-[#FFD700] uppercase font-bold text-center leading-tight">Tum Hi Ho</span>
                </div>
              </motion.div>
              <div className="mt-8 bg-black/40 backdrop-blur px-8 py-4 rounded-full inline-flex items-center gap-4 border border-white/10">
                <span className="text-white">Playing: <strong className="text-[#FFD700]">Tujh Mein Rab Dikhta Hai</strong></span>
                <span className="w-16 h-1 bg-[#FFD700]/30 rounded-full overflow-hidden flex">
                  <motion.span 
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-[#FFD700]"
                  />
                </span>
              </div>
            </div>
          </section>

          {/* Section 5: Box Office */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y-2 border-[#FFD700]/30 py-12">
            {[
              { val: "1000+", label: "Days Together" },
              { val: "10,000", label: "Cups of Chai" },
              { val: "50+", label: "Fights Won" },
              { val: "∞", label: "Inside Jokes" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-black text-[#FFD700] mb-2">{s.val}</div>
                <div className="text-xs md:text-sm text-white/70 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </section>

          {/* Section 6: Now Showing Message */}
          <section className="text-center pb-20">
            <div className="border-2 border-[#FFD700] p-8 md:p-16 bg-[#600000] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#600000] px-6 py-2 font-black uppercase tracking-[0.2em]">
                Now Showing
              </div>
              <p className="text-2xl md:text-4xl text-white font-serif italic leading-relaxed">
                "From our first hello to our forever. You are my favorite plot twist."
              </p>
            </div>
          </section>
          
        </div>
      </div>
    </>
  );
};
