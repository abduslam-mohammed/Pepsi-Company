import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Play, Music, Gamepad2, Trophy, Flame } from "lucide-react";
import { useEffect, useRef } from "react";

const culturePillars = [
  {
    id: "music",
    title: "GLOBAL SOUNDS",
    description: "From underground beats to stadium anthems. We amplify the voices of a generation.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop",
    color: "text-electric-blue"
  },
  {
    id: "sports",
    title: "STADIUM GLORY",
    description: "Fueling the passion of champions. The official drink of uncompromising victory.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1518605368461-1ee7c5320d2e?q=80&w=1600&auto=format&fit=crop",
    color: "text-pepsi-blue"
  },
  {
    id: "gaming",
    title: "CYBER ARENA",
    description: "Esports dominance. Zero sugar, maximum focus for the digital battleground.",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    color: "text-pepsi-red"
  },
  {
    id: "street",
    title: "STREET STYLE",
    description: "Fashion, art, and movement. The pulse of the city runs in our veins.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1523398002811-999aa8e95709?q=80&w=1600&auto=format&fit=crop",
    color: "text-white"
  }
];

export function CulturePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-pepsi-black text-white selection:bg-electric-blue overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[90svh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540039155733-d7696d59b20b?q=80&w=2000&auto=format&fit=crop)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-pepsi-black/80 via-transparent to-pepsi-black" />
        
        <div className="relative z-10 container mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase border border-white/20 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
              The Pulse of Now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[60px] md:text-[100px] lg:text-[140px] font-black italic uppercase leading-[0.85] tracking-tighter mx-auto max-w-5xl"
          >
            WE ARE THE <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>CULTURE</span>
          </motion.h1>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-10 text-[12px] uppercase tracking-widest text-white/70 max-w-lg mx-auto"
          >
            Music, Sports, Gaming. Pepsi isn't just a drink, it's the backdrop to the moments that define our generation.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
             <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               className="absolute inset-0 bg-white"
             />
          </div>
        </motion.div>
      </section>

      {/* Pillars of Culture */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {culturePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative h-[600px] w-full rounded-[40px] overflow-hidden cursor-pointer border border-white/10"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-pepsi-black/80 to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 w-full h-full">
                  {/* Top Icon Area */}
                  <div className="flex justify-between items-start w-full">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    
                    <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:scale-110">
                       <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4 ${pillar.color}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-[12px] uppercase tracking-widest text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Community Banner */}
      <section className="py-32 bg-electric-blue border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_50%)] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-10 relative z-10 text-center flex flex-col items-center">
            <h2 className="text-[60px] md:text-[100px] font-black italic uppercase tracking-tighter text-black leading-none mb-8">
              JOIN THE <br/> MOVEMENT
            </h2>
            <button className="bg-black text-white px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <Play className="w-4 h-4 fill-white" /> Watch The Manifesto
            </button>
        </div>
      </section>
    </div>
  );
}
