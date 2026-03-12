import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border border-primary flex items-center justify-center text-xs">🤔</div>
          <span className="font-heading font-bold text-foreground tracking-tight text-sm">$THINK</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a>
          <a href="#buy" className="hover:text-primary transition-colors">How to Buy</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </div>
        <a
          href="https://raydium.io/swap"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-widest hover:shadow-[var(--shadow-neon)] transition-all"
        >
          Buy $THINK
        </a>
      </div>
    </motion.nav>
  );
}
