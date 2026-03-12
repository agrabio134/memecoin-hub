import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import thinkEmoji from "@/assets/think-emoji.png";
import orbitShib from "@/assets/orbit-shib.png";
import orbitForest from "@/assets/orbit-forest.png";
import orbitFight from "@/assets/orbit-fight.png";
import orbitTurtle from "@/assets/orbit-turtle.png";
import orbitFap from "@/assets/orbit-fap.png";
import orbitBonk from "@/assets/orbit-bonk.png";
import orbitApe from "@/assets/orbit-ape.png";
import orbitPenguin from "@/assets/orbit-penguin.png";
import orbitBlob from "@/assets/orbit-blob.png";
import orbitCrying from "@/assets/orbit-crying.png";

const outerOrbit = [
  { name: "SHIB", image: orbitShib },
  { name: "FOREST", image: orbitForest },
  { name: "FIGHT", image: orbitFight },
  { name: "TURTLE", image: orbitTurtle },
  { name: "FAP", image: orbitFap },
  { name: "BONK2", image: orbitBonk },
  { name: "BLOB", image: orbitBlob },
  { name: "CRY", image: orbitCrying },
  { name: "DOGE", image: "https://customer-assets.emergentagent.com/job_you-meme-solana/artifacts/5slq9p38_Doge-Meme-PNG-Free-Download.png" },
  { name: "PEPE", image: "https://customer-assets.emergentagent.com/job_you-meme-solana/artifacts/bxzig1oh_png-clipart-discord-pepe-the-frog-video-games-pepe-removebg-preview.png" },
];

const middleOrbit = [
  { name: "APE", image: orbitApe },
  { name: "PENGUIN", image: orbitPenguin },
  { name: "SHIB2", image: orbitShib },
  { name: "BLOB2", image: orbitBlob },
  { name: "FIGHT2", image: orbitFight },
  { name: "CRY2", image: orbitCrying },
  { name: "BONK3", image: orbitBonk },
  { name: "FAP2", image: orbitFap },
];

const innerOrbit = [
  { name: "TURTLE2", image: orbitTurtle },
  { name: "FOREST2", image: orbitForest },
  { name: "APE2", image: orbitApe },
  { name: "PENGUIN2", image: orbitPenguin },
  { name: "BLOB3", image: orbitBlob },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[80px]" />
      </div>

      {/* Orbit system */}
      <div className="relative w-[600px] h-[600px] max-w-[95vw] flex items-center justify-center">
        {/* Orbit rings */}
        <div className="absolute w-[540px] h-[540px] border border-border/20" style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }} />
        <div className="absolute w-[390px] h-[390px] border border-neon-green/10" style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }} />
        <div className="absolute w-[260px] h-[260px] border border-neon-cyan/10" style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)" }} />

        {/* Outer orbit tokens (10 items) */}
        <div className="spin-orbit absolute w-[540px] h-[540px]">
          {outerOrbit.map((meme, i) => {
            const angle = (i / outerOrbit.length) * 360;
            return (
              <div
                key={meme.name}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(270px) translateY(-50%)`,
                  transformOrigin: "0 0",
                }}
              >
                <div className="counter-spin">
                  <div className="w-11 h-11 rounded-full border border-border/50 bg-surface-card p-0.5 hover:border-primary/50 transition-colors overflow-hidden">
                    <img src={meme.image} alt={meme.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle orbit tokens (8 items) */}
        <div className="spin-orbit-reverse absolute w-[390px] h-[390px]">
          {middleOrbit.map((meme, i) => {
            const angle = (i / middleOrbit.length) * 360;
            return (
              <div
                key={meme.name}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(195px) translateY(-50%)`,
                  transformOrigin: "0 0",
                }}
              >
                <div className="counter-spin-reverse">
                  <div className="w-9 h-9 rounded-full border border-border/30 bg-surface-card p-0.5 hover:border-neon-cyan/50 transition-colors overflow-hidden">
                    <img src={meme.image} alt={meme.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inner orbit tokens (5 items) */}
        <div className="spin-orbit-inner absolute w-[260px] h-[260px]">
          {innerOrbit.map((meme, i) => {
            const angle = (i / innerOrbit.length) * 360;
            return (
              <div
                key={meme.name}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(130px) translateY(-50%)`,
                  transformOrigin: "0 0",
                }}
              >
                <div className="counter-spin-inner">
                  <div className="w-8 h-8 rounded-full border border-border/20 bg-surface-card p-0.5 hover:border-accent/50 transition-colors overflow-hidden">
                    <img src={meme.image} alt={meme.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center emoji */}
        <motion.div
          className="relative z-20"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-neon-green/20 blur-3xl scale-150" />
            <img src={thinkEmoji} alt="$THINK" className="relative w-52 h-52 object-contain glow-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        className="relative z-20 text-center px-6 -mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          Live on Solana
        </div>

        <h1
          className="glitch-text text-7xl md:text-9xl font-heading font-extrabold tracking-tighter leading-none mb-4"
          data-text="$THINK"
          style={{
            background: "var(--gradient-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          $THINK
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-2">
          Let me <span className="text-primary font-bold">$THINK</span> about it...
        </p>
        <p className="text-sm text-muted-foreground/50 font-mono mb-10">
          // because aping blindly is so last cycle
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a
            href="https://raydium.io/swap"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold uppercase tracking-widest text-sm transition-all hover:shadow-[var(--shadow-neon-lg)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap size={16} className="group-hover:animate-pulse" />
            Buy $THINK
          </motion.a>
          <motion.a
            href="#story"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-muted-foreground font-mono text-sm uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
