import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

export function PepsiZeroPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gallery = [
    {
      title: "ZERO LIMITS",
      subtitle: "ESPORTS & GAMING",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "UNCOMPROMISING",
      subtitle: "LIFESTYLE",
      image: "https://images.unsplash.com/photo-1558227911-37cd802f0688?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "PURE ENERGY",
      subtitle: "NIGHTLIFE",
      image: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-pepsi-black text-white overflow-hidden selection:bg-electric-blue">
      {/* Hero Section with Cinematic Background Image */}
      <section className="relative h-[90svh] w-full flex flex-col justify-center items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pepsi-black via-pepsi-black/60 to-transparent" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />

        <div className="relative z-10 container mx-auto px-10 flex flex-col items-center text-center mt-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-electric-blue uppercase border border-electric-blue/30 px-6 py-2 rounded-full bg-electric-blue/10 backdrop-blur-md">
              The New Standard
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="text-[100px] sm:text-[140px] md:text-[200px] lg:text-[250px] font-black italic uppercase leading-[0.75] tracking-tighter text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
              ZERO
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black italic uppercase leading-none text-white drop-shadow-[0_0_40px_rgba(0,166,255,0.6)]">
                COMPROMISE
              </h2>
            </div>
          </motion.div>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-12 text-[12px] uppercase tracking-widest text-white/60 max-w-lg"
          >
            All the bold, refreshing taste you expect, with zero sugar. Crafted for a generation that refuses to settle.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex gap-6"
          >
            <button className="bg-white text-black px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3">
              Buy Now <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/20 px-8 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-3 backdrop-blur-md">
              <Play className="w-4 h-4 fill-white" /> Watch Anthem
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Gallery Section */}
      <section className="py-32 relative z-20 border-t border-white/10 bg-pepsi-black">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
              LIVE IN THE <span className="text-electric-blue">FAST LANE</span>
            </h2>
            <p className="text-[12px] uppercase tracking-widest text-white/50">
              Pepsi Zero Sugar is the official fuel of those who push boundaries. Experience maximum intensity across gaming, music, and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gallery.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative h-[500px] w-full rounded-[40px] overflow-hidden cursor-pointer border border-white/10"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-electric-blue text-[9px] font-black uppercase tracking-[0.2em] mb-2 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-6">
                    {item.title}
                  </h3>
                  
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bold Banner */}
      <section className="py-24 bg-electric-blue text-black border-y border-white/10">
        <div className="container mx-auto px-10 text-center flex flex-col items-center">
          <h2 className="text-[60px] md:text-[100px] font-black italic uppercase leading-none tracking-tighter mb-8">
            READY FOR MORE?
          </h2>
          <button className="bg-black text-white px-12 py-6 rounded-full font-black text-[12px] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl">
             Explore Pepsi Zero Sugar Near You <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
