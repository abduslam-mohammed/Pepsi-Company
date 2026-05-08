import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Pepsi Classic",
    color: "from-pepsi-blue to-[#002244]",
    tag: "The Original",
    imgLight: "white"
  },
  {
    id: 2,
    name: "Pepsi Zero Sugar",
    color: "from-[#222] to-pepsi-black",
    tag: "Maximum Taste",
    imgLight: "pepsi-blue"
  },
  {
    id: 3,
    name: "Diet Pepsi",
    color: "from-[#D3D3D3] to-[#808080]",
    tag: "Light & Refreshing",
    textColor: "text-pepsi-black",
    imgLight: "white"
  }
];

export function ProductUniverse() {
  return (
    <section className="py-32 bg-pepsi-black relative z-10 border-t border-white/10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[60px] md:text-[80px] font-black uppercase italic leading-none mb-4"
            >
              CHOOSE YOUR <br/><span className="text-electric-blue">FLAVOR</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-medium font-sans max-w-sm"
            >
              Explore our core lineup. From the iconic original to the uncompromising Zero Sugar.
            </motion.p>
          </div>
          <motion.button
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-[10px] font-bold uppercase tracking-[0.2em] text-white underline underline-offset-8 decoration-2 hover:text-electric-blue transition-colors pb-1"
          >
            View All Products
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative h-[500px] rounded-[40px] overflow-hidden bg-gradient-to-br ${product.color} p-8 flex flex-col group cursor-pointer border border-white/10`}
            >
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-black/20 backdrop-blur-md ${product.textColor || 'text-white'}`}>
                  {product.tag}
                </span>
              </div>

              {/* Simulated 3D Can Representation via CSS shapes to keep it lightweight */}
              <div className="absolute inset-0 flex items-center justify-center p-8 mt-12 transition-transform duration-700 group-hover:scale-110">
                <div className={`w-[120px] lg:w-[150px] aspect-[1/2] rounded-[30px] border-[3px] border-white/20 shadow-2xl relative overflow-hidden bg-${product.imgLight === 'pepsi-blue' ? 'pepsi-black' : 'pepsi-blue'}`}>
                     <div className="absolute top-0 w-full h-[15px] bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 rounded-t-[30px]" />
                     <div className="absolute bottom-0 w-full h-[15px] bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 rounded-b-[30px]" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/40" />
                     {/* Simplified Logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-white rounded-full flex flex-col overflow-hidden shadow-inner rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700">
                      <div className="w-full h-[45%] bg-pepsi-red" />
                      <div className="w-full h-[10%] bg-white" />
                      <div className="w-full h-[45%] bg-pepsi-blue" />
                    </div>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className={`text-3xl lg:text-4xl font-black italic uppercase tracking-tighter ${product.textColor || 'text-white'}`}>
                  {product.name}
                </h3>
              </div>
              
              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
