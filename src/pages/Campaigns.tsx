import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

const campaigns = [
  {
    id: "sounds-of-champions",
    title: "SOUNDS OF THE CHAMPIONS",
    category: "Sports & Music",
    description: "Experience the ultimate fusion of global football and chart-topping artists.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1600&auto=format&fit=crop",
    accent: "text-electric-blue",
    featured: true,
  },
  {
    id: "zero-limits",
    title: "ZERO LIMITS GAMING",
    category: "Esports",
    description: "Fueling the next generation of competitive gaming. Zero sugar, maximum focus.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    accent: "text-pepsi-red",
    featured: false,
  },
  {
    id: "summer-drop",
    title: "SUMMER DROP '26",
    category: "Lifestyle",
    description: "Catch the wave with our limited edition summer gear and exclusive beach events.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    accent: "text-pepsi-blue",
    featured: false,
  },
  {
    id: "street-culture",
    title: "STREET CULTURE COLLAB",
    category: "Fashion",
    description: "Merging iconic beverage design with underground streetwear aesthetics.",
    image: "https://images.unsplash.com/photo-1523398002811-999aa8e95709?q=80&w=1600&auto=format&fit=crop",
    accent: "text-white",
    featured: false,
  }
];

export function Campaigns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pepsi-black pt-32 pb-24 text-white overflow-hidden selection:bg-electric-blue">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,#E32934_0%,transparent_70%)] opacity-10 pointer-events-none blur-3xl mix-blend-screen" />
      
      <div className="container mx-auto px-10 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-pepsi-red uppercase mb-4 inline-block">
              Global Movements
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[60px] md:text-[90px] font-black italic uppercase leading-[0.85] tracking-tighter mb-6"
          >
            CULTURE <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>IN MOTION</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12px] uppercase tracking-widest text-white/50 max-w-lg"
          >
            Dive into the latest brand activations, exclusive collaborations, and global events that define the generation.
          </motion.p>
        </div>

        {/* Featured Campaign List */}
        <div className="flex flex-col gap-10">
          {campaigns.map((campaign, idx) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`group relative rounded-[40px] overflow-hidden cursor-pointer border border-white/10 ${campaign.featured ? "h-[60svh]" : "h-[45svh]"}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${campaign.image})` }}
              />
              {/* Darkening Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-pepsi-black via-pepsi-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              <div className="absolute inset-0 bg-pepsi-black/20" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20">
                    {campaign.category}
                  </span>
                  
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-electric-blue hover:text-white">
                     <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="max-w-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className={`text-4xl md:text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4 ${campaign.accent === 'text-white' ? 'text-white' : 'text-transparent'} bg-clip-text ${campaign.accent}-gradient`}>
                    {campaign.accent === 'text-electric-blue' && (
                       <span className="text-electric-blue">{campaign.title}</span>
                    )}
                    {campaign.accent === 'text-pepsi-red' && (
                       <span className="text-pepsi-red">{campaign.title}</span>
                    )}
                    {campaign.accent === 'text-pepsi-blue' && (
                       <span className="text-pepsi-blue">{campaign.title}</span>
                    )}
                    {campaign.accent === 'text-white' && (
                       <span>{campaign.title}</span>
                    )}
                  </h3>
                  <p className="text-[12px] md:text-[14px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {campaign.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
