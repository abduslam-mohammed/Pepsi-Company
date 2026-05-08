import { motion } from "motion/react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from 'three';

const allProducts = [
  {
    id: "pepsi-classic",
    name: "Pepsi Classic",
    tagline: "The Original. Bolder Than Ever.",
    color: "from-pepsi-blue to-[#002244]",
    hex: "#005CB9",
    accent: "text-pepsi-blue",
    image: "https://images.unsplash.com/photo-1550684376-efdb6e01c228?q=80&w=1600&auto=format&fit=crop",
    textColor: "text-white",
  },
  {
    id: "pepsi-zero",
    name: "Pepsi Zero Sugar",
    tagline: "Maximum Taste. Zero Compromise.",
    color: "from-[#222] to-pepsi-black",
    hex: "#111111",
    accent: "text-electric-blue",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop",
    textColor: "text-white",
  },
  {
    id: "diet-pepsi",
    name: "Diet Pepsi",
    tagline: "Light, Crisp, Refreshing.",
    color: "from-[#E0E0E0] to-[#808080]",
    hex: "#E0E0E0",
    accent: "text-pepsi-blue",
    image: "https://images.unsplash.com/photo-1549419131-1e9bf43ee227?q=80&w=1600&auto=format&fit=crop",
    textColor: "text-pepsi-black",
  },
  {
    id: "wild-cherry",
    name: "Wild Cherry",
    tagline: "A Burst of Wild Flavor.",
    color: "from-pepsi-red to-[#5A0013]",
    hex: "#E32934",
    accent: "text-pepsi-red",
    image: "https://images.unsplash.com/photo-1554522938-f9b2af7a76be?q=80&w=1600&auto=format&fit=crop",
    textColor: "text-white",
  }
];

function Can3D({ color }: { color: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
     if (meshRef.current) {
        meshRef.current.rotation.y -= delta * 0.5;
     }
  });

  return (
    <group ref={meshRef} dispose={null} position={[0, -0.5, 0]}>
      {/* Main Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 3.5, 64]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Top rim */}
      <mesh position={[0, 1.77, 0]}>
         <cylinderGeometry args={[0.98, 1, 0.05, 64]} />
         <meshStandardMaterial color="#eeeeee" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Top indentation */}
      <mesh position={[0, 1.8, 0]}>
         <cylinderGeometry args={[0.9, 0.98, 0.05, 64]} />
         <meshStandardMaterial color="#dddddd" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Bottom rim */}
      <mesh position={[0, -1.77, 0]}>
         <cylinderGeometry args={[0.95, 1, 0.05, 64]} />
         <meshStandardMaterial color="#eeeeee" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Decal approximation (White swoosh) */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
         <cylinderGeometry args={[1.001, 1.001, 0.4, 64, 1, true, 0, Math.PI]} />
         <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function Products() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pepsi-black pt-32 pb-24 text-white overflow-hidden selection:bg-electric-blue">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,#005CB9_0%,transparent_70%)] opacity-20 pointer-events-none blur-3xl mix-blend-screen" />
      
      <div className="container mx-auto px-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-electric-blue uppercase mb-4 inline-block">
              Our Lineup
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[60px] md:text-[90px] font-black italic uppercase leading-[0.85] tracking-tighter mb-8"
          >
            UNLEASH YOUR<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>THIRST</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12px] uppercase tracking-widest text-white/50 max-w-lg mx-auto"
          >
            Explore the entire universe of bold flavors. Whether you want the classic taste, zero sugar, or a burst of wild cherry, we've got you covered.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {allProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="group relative h-[600px] w-full rounded-[40px] overflow-hidden cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
            >
              {/* Cinematic Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-pepsi-black via-pepsi-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              
              {/* Content Container */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10 w-full h-full">
                
                {/* Interactive 3D Model */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[350px] h-[450px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-translate-y-4 transition-all duration-700 cursor-grab active:cursor-grabbing z-30">
                  <Canvas
                    camera={{ position: [0, 0, 7], fov: 45 }}
                    gl={{ alpha: true, antialias: true }}
                  >
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <pointLight position={[-5, 0, -5]} intensity={1} color="#ffffff" />
                    <Can3D color={product.hex} />
                    <Environment preset="studio" />
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={5} blur={1.5} far={4} color="#000000" />
                  </Canvas>
                </div>

                <div className="relative z-20 w-full">
                   <div className="flex justify-between items-end gap-4 w-full">
                     <div className="flex-1">
                        <span className={`text-[10px] uppercase font-black tracking-[0.2em] mb-2 block ${product.accent}`}>
                          {product.tagline}
                        </span>
                        <h3 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter leading-none text-white whitespace-normal">
                          {product.name}
                        </h3>
                     </div>
                     
                     {/* Action Button */}
                     <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:bg-electric-blue hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <ArrowRight className="w-5 h-5" />
                     </button>
                   </div>

                   {/* Add to Cart Footer (appears on hover) */}
                   <div className="mt-8 pt-6 border-t border-white/20 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 flex justify-between items-center w-full">
                      <div className="flex gap-4">
                        <span className="text-[11px] font-bold tracking-widest uppercase opacity-70">12-Pack</span>
                        <span className="text-[11px] font-bold tracking-widest uppercase opacity-70">24-Pack</span>
                      </div>
                      <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-electric-blue hover:text-white transition-colors">
                        <ShoppingBag className="w-4 h-4" /> Buy Now
                      </button>
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
