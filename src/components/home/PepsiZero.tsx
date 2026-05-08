import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function PepsiZero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="relative py-40 border-t border-white/10 bg-pepsi-black overflow-hidden flex items-center min-h-[90svh]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-20 blur-[80px] mix-blend-screen pointer-events-none">
         <div className="w-full aspect-video bg-gradient-to-r from-pepsi-blue via-transparent to-electric-blue rounded-full animate-blob"></div>
      </div>

      <div className="container mx-auto px-10 relative z-10 flex flex-col items-center">
        <motion.div style={{ scale }} className="text-center w-full max-w-5xl relative">
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] z-0 pointer-events-none"
             style={{ rotate }}
          >
             {/* Zero Sugar text outline in background */}
             <p className="text-[180px] lg:text-[280px] font-black italic uppercase tracking-tighter text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)', lineHeight: 0.8 }}>
               ZERO
             </p>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="text-electric-blue font-bold tracking-[0.4em] uppercase text-[11px] px-6 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 backdrop-blur-md">
              Zero Sugar. Zero Compromise.
            </span>
            <h2 className="text-7xl md:text-[120px] font-black italic uppercase leading-[0.85] tracking-tighter text-white mb-6 drop-shadow-2xl">
              MAXIMUM <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>TASTE</span>
            </h2>
            <p className="text-[12px] uppercase tracking-widest text-white/50 max-w-lg mb-10">
              The boldest, most refreshing zero sugar cola experience ever created. Crafted for those who go all in.
            </p>

            <button className="group relative overflow-hidden rounded-full bg-white px-10 py-5 text-pepsi-black text-sm font-black tracking-widest uppercase transition-transform hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <span className="relative z-10">Experience Zero</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

       {/* Floating graphic elements */}
       <motion.div style={{ y }} className="absolute right-0 lg:right-20 top-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full hidden md:block" />
       <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }} className="absolute left-10 lg:left-32 bottom-20 w-16 h-16 border border-white/20 rotate-45 hidden md:block" />
    </section>
  );
}
