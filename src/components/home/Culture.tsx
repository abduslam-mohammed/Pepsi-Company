import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Culture() {
  const cards = [
    {
      title: "Champions League",
      cat: "Sports",
      img: "bg-pepsi-blue",
      delay: 0.1
    },
    {
      title: "Global Music Drop",
      cat: "Music",
      img: "bg-[#111]",
      delay: 0.2
    },
    {
      title: "Street Culture",
      cat: "Lifestyle",
      img: "bg-electric-blue",
      delay: 0.3
    }
  ];

  return (
    <section className="py-32 bg-pepsi-black text-white relative z-20 border-t border-white/10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[60px] md:text-[80px] font-black italic uppercase leading-none mb-6 tracking-tighter"
          >
            WHERE CULTURE <br/> <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>HAPPENS</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-[10px] uppercase tracking-widest opacity-60 max-w-xl"
          >
            From the stadium to the stage, Pepsi fuels the moments that define a generation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="group cursor-pointer"
            >
              <div className={`relative w-full h-[320px] rounded-3xl ${card.img} overflow-hidden mb-6 border border-white/10`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                 <div className="absolute top-6 left-6 py-1 px-3 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/20">
                    {card.cat}
                 </div>
                 
                 <div className="absolute w-full h-full flex items-end p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
