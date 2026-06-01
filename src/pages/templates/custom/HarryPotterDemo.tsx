import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
interface TemplateProps { isDemo?: boolean; }

export const HarryPotterDemo = (_props: TemplateProps) => {
  return (
    <>
      <Helmet>
        <title>Priya & Arjun - A Magical Story</title>
      </Helmet>

      <div 
        className="relative min-h-screen bg-[#0A1128] text-[#D4AF37] overflow-x-hidden"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {/* Magical Particles Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + Math.random() * 200,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: -100,
                x: `+=${(Math.random() - 0.5) * 100}`,
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        {/* Floating background gradient */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32 flex flex-col gap-32">
          
          {/* Section 1: Hero */}
          <section className="text-center min-h-[70vh] flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="border-b-2 border-t-2 border-[#D4AF37]/40 py-12 px-4 relative bg-[#0A1128]/50 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#D4AF37]/50 bg-[#0A1128] flex items-center justify-center">
                <span className="text-2xl text-[#800020]">⚡</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37] mb-6">
                Priya & Arjun
              </h1>
              <p className="text-lg md:text-xl text-[#B0C4DE] tracking-wider max-w-xl mx-auto leading-relaxed">
                A love story written in the stars<br/>since September 1, 2021
              </p>
              <p className="mt-8 text-sm tracking-[0.2em] text-[#D4AF37]/60 uppercase">
                Somewhere between the muggle world and magic
              </p>
            </motion.div>
          </section>

          {/* Section 2: Sorting */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 text-[#D4AF37]">The Sorting of Two Souls</h2>
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#0A1128] border border-blue-800/50 p-8 rounded-t-full shadow-[0_0_30px_rgba(0,0,128,0.3)] relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                <div className="w-20 h-20 mx-auto border-2 border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#D4AF37] text-2xl font-bold">P</span>
                </div>
                <h3 className="text-2xl text-blue-300 mb-2 font-bold tracking-widest">Ravenclaw</h3>
                <p className="text-[#B0C4DE] italic font-serif">
                  "She who reads till 3am and loves with her whole heart."
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#0A1128] border border-red-800/50 p-8 rounded-t-full shadow-[0_0_30px_rgba(128,0,0,0.3)] relative overflow-hidden text-center mt-8 md:mt-0"
              >
                <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
                <div className="w-20 h-20 mx-auto border-2 border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#D4AF37] text-2xl font-bold">A</span>
                </div>
                <h3 className="text-2xl text-red-400 mb-2 font-bold tracking-widest">Gryffindor</h3>
                <p className="text-[#B0C4DE] italic font-serif">
                  "He who showed up every single time without being asked."
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 3: Marauder's Map Timeline */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 text-[#D4AF37]">Our Marauder's Map</h2>
              <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto" />
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37]/30 before:to-transparent">
              {[
                { title: "The Great Hall", desc: "First meeting", year: "2021" },
                { title: "The Astronomy Tower", desc: "First date under the stars", year: "2021" },
                { title: "Platform 9¾", desc: "When they knew it was magic", year: "2022" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#0A1128] text-[#D4AF37] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-xs">{item.year}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#D4AF37]/20 bg-[#0A1128]/80 backdrop-blur shadow-xl">
                    <h4 className="text-xl text-[#D4AF37] font-bold tracking-wider">{item.title}</h4>
                    <p className="text-[#B0C4DE] font-sans mt-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 4: Howler Message */}
          <section className="relative p-1 bg-[#D4AF37]/10 rounded-2xl">
            <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-xl text-center relative border border-[#D4AF37]/20">
              <h2 className="text-3xl text-red-500 mb-6 font-bold tracking-widest uppercase">A Howler Worth Keeping</h2>
              <div style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl md:text-4xl text-[#E8E8E8] leading-relaxed max-w-2xl mx-auto">
                "You are the magic I never believed in. Thank you for making the ordinary world extraordinary."
              </div>
            </div>
          </section>

          {/* Section 5: Always Countdown */}
          <section className="text-center py-20 relative">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-bold text-white/5 select-none pointer-events-none">
              ALWAYS
            </h2>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              {[
                { label: 'Years', val: '2' },
                { label: 'Months', val: '9' },
                { label: 'Days', val: '14' },
                { label: 'Hours', val: '08' },
              ].map(t => (
                <div key={t.label} className="w-24 h-24 rounded-full border border-[#D4AF37]/40 flex flex-col items-center justify-center bg-[#0A1128]/80 backdrop-blur shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <span className="text-3xl font-bold text-[#D4AF37]">{t.val}</span>
                  <span className="text-xs text-[#B0C4DE] tracking-widest uppercase">{t.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
