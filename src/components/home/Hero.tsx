import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-[#000000] pt-28">
      {/* Background Elements */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#005CB9_0%,#000000_70%)] opacity-60" />
        
        {/* Particle Overlays representing bubbles/energy */}
        <div className="absolute top-[20%] left-[45%] w-2 h-2 bg-[#00A6FF] rounded-full blur-[2px] opacity-40 animate-blob" />
        <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-white rounded-full blur-[4px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-[80%] left-[10%] w-1.5 h-1.5 bg-[#E32934] rounded-full blur-[1px] opacity-30 animate-blob animation-delay-4000" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 h-full flex items-center pb-24 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-20 lg:mb-0">
          
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-4 opacity-30 origin-center"
            >
              <div className="h-[1px] w-40 bg-white" />
              <span className="text-[10px] uppercase tracking-[0.5em] whitespace-nowrap">Established 1898 — Globally Iconic</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[11px] font-bold tracking-[0.4em] text-electric-blue uppercase mb-4"
            >
              Thirst For More
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic mb-10"
            >
              PURE<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>ENERGY</span><br/>
              <span className="text-pepsi-blue">UNSTOPPABLE</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button className="bg-white text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                Find Near You
              </button>
              <button className="border border-white/30 backdrop-blur-md px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto">
                Explore Products
              </button>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.2 }}
               className="mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8 max-w-2xl"
            >
              <div>
                <div className="text-2xl font-bold mb-1">0%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Sugar Content (Zero)</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Recycled Material</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">190+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Countries Reached</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex-1 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/10 p-8 relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-electric-blue blur-[80px] opacity-20 transition-opacity group-hover:opacity-40" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-[9px] font-black uppercase tracking-widest mb-4">Trending Now</span>
                <h3 className="text-3xl font-black italic uppercase leading-none mb-2">PEPSI ZERO<br/><span className="text-electric-blue">SUGAR</span></h3>
                <p className="text-xs opacity-60 max-w-[180px] leading-relaxed">Bold flavor, zero sugar. The future of refreshment is here.</p>
                <div className="mt-6 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              {/* Mock Can Graphic */}
              <div className="absolute -bottom-10 -right-4 w-40 h-64 bg-gradient-to-b from-zinc-800 to-black rounded-t-[40px] shadow-2xl border-x border-white/10 flex flex-col items-center pt-8 transform group-hover:-translate-y-4 transition-transform duration-500">
                <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-b from-pepsi-blue via-white to-pepsi-red rounded-full opacity-40 shadow-inner" />
                </div>
                <div className="mt-4 text-[8px] font-black tracking-widest uppercase opacity-20">ZERO SUGAR</div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1 }}
               className="h-[240px] bg-white rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="relative z-10 text-black h-full flex flex-col justify-center">
                <h3 className="text-2xl font-black italic uppercase leading-none mb-4">SOUNDS OF<br/>THE GENERATION</h3>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-2 flex items-center gap-2 hover:text-pepsi-blue transition-colors">
                  Explore Music Collective <Play className="w-3 h-3 fill-current" />
                </button>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/2 flex gap-1 p-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                <div className="flex-1 bg-pepsi-red rounded-xl" />
                <div className="flex-1 bg-pepsi-blue rounded-xl" />
                <div className="flex-1 bg-black rounded-xl" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
