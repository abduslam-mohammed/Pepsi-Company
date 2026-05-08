import { ArrowRight, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const sections = [
    {
      title: "Products",
      links: ["Pepsi Classic", "Pepsi Zero Sugar", "Diet Pepsi", "Wild Cherry", "Real Sugar"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Investors", "Newsroom", "Sustainability"]
    },
    {
      title: "Support",
      links: ["Contact Us", "FAQ", "Store Locator", "Accessibility"]
    }
  ];

  return (
    <footer className="bg-pepsi-black border-t border-white/10 text-white pt-24 pb-12 relative overflow-hidden z-30">
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.8] tracking-tighter mb-6">
              STAY <br/> <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>REFRESHED</span>
            </h2>
            <p className="text-[12px] text-white/60 mb-8 font-medium">
              Join the movement. Get exclusive drops, campaign invites, and news before anyone else.
            </p>
            <form className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-full max-w-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 hidden sm:block">Newsletter</span>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none text-[12px] flex-1 focus:outline-none placeholder:text-white/40"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-pepsi-blue hover:text-white transition-colors flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 mb-6">{section.title}</h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link to="/" className="text-[12px] uppercase tracking-wider text-white/80 hover:text-white hover:text-electric-blue transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {['TW', 'IG', 'TK'].map((platform, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold opacity-60 hover:opacity-100 hover:text-electric-blue hover:border-electric-blue transition-colors cursor-pointer">
                  {platform}
                </div>
              ))}
            </div>
            <div className="hidden lg:block h-4 w-[1px] bg-white/20" />
            <div className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">
              &copy; 2026 PepsiCo. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-pepsi-black p-4 border-t border-white/10 flex lg:hidden items-center justify-between z-50">
         <span className="font-black italic uppercase tracking-wider text-lg">Thirsty?</span>
         <button className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-electric-blue hover:text-white transition-colors">
            Find Near You
         </button>
      </div>
    </footer>
  );
}
