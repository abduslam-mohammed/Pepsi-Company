import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Zero Sugar", path: "/zero" },
    { name: "Culture", path: "/culture" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-pepsi-black/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent pt-8 pb-4"
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="lg:hidden text-white hover:text-electric-blue transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="w-10 h-10 bg-gradient-to-b from-pepsi-blue via-white to-pepsi-red rounded-full" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic hidden sm:block">Pepsi</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 hover:opacity-100 hover:text-electric-blue transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-pepsi-black transition-all">
            Store Locator
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-pepsi-blue rounded-full hover:scale-105 transition-transform">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
