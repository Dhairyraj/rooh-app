import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
interface TemplateProps { isDemo?: boolean; }

export const FriendsDemo = (_props: TemplateProps) => {
  return (
    <>
      <Helmet>
        <title>Sneha & Kabir - The One Where They Fall In Love</title>
      </Helmet>

      <div className="relative min-h-screen bg-[#FFF8E7] text-[#4A3022] overflow-x-hidden font-sans">
        
        {/* Coffee Shop Background Elements */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[#F28C28]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-[#8B4513]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32 flex flex-col gap-32">
          
          {/* Section 1: Hero */}
          <section className="text-center min-h-[70vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#8B4513] text-[#FFF8E7] text-sm font-bold tracking-widest uppercase mb-8 shadow-md">
                Sneha & Kabir
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#3E2723] mb-4">
                The One Where<br/>They Fall In Love
              </h1>
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="w-12 h-[2px] bg-[#F28C28]"></span>
                <p className="text-lg text-[#F28C28] font-bold tracking-widest uppercase">
                  Mumbai • Since 2020
                </p>
                <span className="w-12 h-[2px] bg-[#F28C28]"></span>
              </div>
            </motion.div>
          </section>

          {/* Section 2: How You Doin'? */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#3E2723]">How You Doin'?</h2>
              <p className="text-[#8B4513] mt-2 font-medium">The episodes of our lives</p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "The One Where He Spilled Coffee On Her", desc: "And she was so mad she made him buy her coffee for a month." },
                { title: "The One Where She Called At 2AM", desc: "Because the pizza arrived and she needed someone to share the joy." },
                { title: "The One Where Everything Made Sense", desc: "When they realized they were each other's lobsters." },
              ].map((ep, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-[#8B4513]/20 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center"
                >
                  <div className="bg-[#F28C28] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    S{i+1}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#3E2723] mb-2">{ep.title}</h3>
                    <p className="text-[#4A3022]/80">{ep.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: The Friend Group Approved Stats */}
          <section className="bg-[#8B4513] text-[#FFF8E7] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold">The Friend Group Approved</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F28C28] mb-2">94%</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Binge-Watching Compatibility</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F28C28] mb-2">88%</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Late Night Food Agreement</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F28C28] mb-2">99%</div>
                <div className="text-sm uppercase tracking-widest font-semibold opacity-80">"We finish each other's..."</div>
              </div>
            </div>
          </section>

          {/* Section 4: Polaroid Wall */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#3E2723]">The Cork Board</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { rot: -3, text: 'Pivot!' },
                { rot: 2, text: 'We were on a break' },
                { rot: -1, text: 'My lobster' },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  style={{ rotate: p.rot }}
                  className="bg-white p-4 pb-12 shadow-xl border border-gray-100 rounded-sm relative"
                >
                  <div className="aspect-[4/5] bg-gray-200 w-full mb-4 flex items-center justify-center text-gray-400">
                    [Photo]
                  </div>
                  <div style={{ fontFamily: "'Caveat', cursive" }} className="absolute bottom-4 left-0 w-full text-center text-2xl text-[#3E2723]">
                    {p.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 5: Handwritten Note */}
          <section className="text-center px-4">
            <h2 className="text-2xl font-bold text-[#F28C28] mb-8 uppercase tracking-widest">Could This BE Any More Perfect?</h2>
            <p style={{ fontFamily: "'Caveat', cursive" }} className="text-4xl md:text-5xl text-[#3E2723] leading-relaxed max-w-2xl mx-auto">
              "You're my Rachel to my Ross, my Monica to my Chandler. I'll be there for you, always."
            </p>
          </section>

          {/* Section 6: Reunion Countdown */}
          <section className="text-center pb-20">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-8 uppercase tracking-widest">Next Anniversary In</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['300', '12', '45'].map((v, i) => (
                <div key={i} className="bg-white border-2 border-[#F28C28] w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#3E2723]">{v}</span>
                  <span className="text-[10px] md:text-xs font-bold text-[#F28C28] uppercase">{['Days', 'Hours', 'Mins'][i]}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
