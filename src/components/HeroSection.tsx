import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Copy, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
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
import memeDoge from "@/assets/meme-doge.png";
import memePepe from "@/assets/meme-pepe.png";
import memeFloki from "@/assets/meme-floki.png";
import memeBonk2 from "@/assets/meme-bonk2.png";
import memeWif from "@/assets/meme-wif.png";
import memePopcat from "@/assets/meme-popcat.png";
import memeBrett from "@/assets/meme-brett.png";
import memeMog from "@/assets/meme-mog.png";

type OrbitItem = { name: string; image: string; size: number };

const outerOrbit: OrbitItem[] = [
  { name: "SHIB", image: orbitShib, size: 58 },
  { name: "DOGE", image: memeDoge, size: 50 },
  { name: "FOREST", image: orbitForest, size: 42 },
  { name: "PEPE", image: memePepe, size: 56 },
  { name: "FIGHT", image: orbitFight, size: 62 },
  { name: "WIF", image: memeWif, size: 48 },
  { name: "TURTLE", image: orbitTurtle, size: 38 },
  { name: "FLOKI", image: memeFloki, size: 52 },
  { name: "BONK2", image: memeBonk2, size: 44 },
  { name: "POPCAT", image: memePopcat, size: 50 },
  { name: "BRETT", image: memeBrett, size: 46 },
  { name: "MOG", image: memeMog, size: 54 },
  { name: "APE-O", image: orbitApe, size: 40 },
  { name: "BLOB-O", image: orbitBlob, size: 36 },
];

const middleOrbit: OrbitItem[] = [
  { name: "APE", image: orbitApe, size: 52 },
  { name: "PENGUIN", image: orbitPenguin, size: 44 },
  { name: "DOGE2", image: memeDoge, size: 38 },
  { name: "BLOB", image: orbitBlob, size: 56 },
  { name: "CRY", image: orbitCrying, size: 40 },
  { name: "PEPE2", image: memePepe, size: 48 },
  { name: "BONK", image: orbitBonk, size: 34 },
  { name: "FLOKI2", image: memeFloki, size: 42 },
  { name: "WIF2", image: memeWif, size: 46 },
  { name: "POPCAT2", image: memePopcat, size: 36 },
  { name: "SHIB2", image: orbitShib, size: 50 },
  { name: "MOG2", image: memeMog, size: 44 },
];

const innerOrbit: OrbitItem[] = [
  { name: "FAP", image: orbitFap, size: 48 },
  { name: "BRETT2", image: memeBrett, size: 38 },
  { name: "FIGHT2", image: orbitFight, size: 44 },
  { name: "DOGE3", image: memeDoge, size: 42 },
  { name: "BONK3", image: memeBonk2, size: 36 },
  { name: "PEPE3", image: memePepe, size: 50 },
  { name: "TURTLE2", image: orbitTurtle, size: 40 },
  { name: "FOREST2", image: orbitForest, size: 34 },
  { name: "FLOKI3", image: memeFloki, size: 46 },
];

const microOrbit: OrbitItem[] = [
  { name: "APE2", image: orbitApe, size: 36 },
  { name: "WIF3", image: memeWif, size: 30 },
  { name: "BLOB2", image: orbitBlob, size: 34 },
  { name: "MOG3", image: memeMog, size: 28 },
  { name: "CRY2", image: orbitCrying, size: 32 },
  { name: "POPCAT3", image: memePopcat, size: 26 },
  { name: "SHIB3", image: orbitShib, size: 30 },
];

function OrbitRing({
  items,
  radius,
  className,
  counterClass,
  scale = 1,
}: {
  items: OrbitItem[];
  radius: number;
  className: string;
  counterClass: string;
  scale?: number;
}) {
  const r = radius * scale;
  return (
    <div className={`${className} absolute`} style={{ width: r * 2, height: r * 2 }}>
      {items.map((item, i) => {
        const angle = (i / items.length) * 360;
        const s = item.size * scale;
        return (
          <div
            key={item.name}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translateX(${r}px) translateY(-50%)`,
              transformOrigin: "0 0",
            }}
          >
            <div className={counterClass}>
              <div
                className="rounded-full border border-border/40 bg-surface-card/80 p-0.5 hover:border-primary/50 transition-colors overflow-hidden backdrop-blur-sm"
                style={{ width: s, height: s }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CopyCA() {
  const [copied, setCopied] = useState(false);
  const ca = "EjUW3rz6HsPityrCqhkxYAsWA87Uz9xutqXh8uA4pump";

  const copy = async () => {
    try { await navigator.clipboard.writeText(ca); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-border bg-surface-card font-mono text-xs text-muted-foreground hover:border-primary/40 transition-colors cursor-pointer"
    >
      <span className="text-primary font-bold">CA:</span>
      <span className="text-muted-foreground/70 tracking-wide">{ca.slice(0, 6)}...{ca.slice(-4)}</span>
      {copied ? <Check size={12} className="text-primary" /> : <Copy size={12} />}
    </button>
  );
}

export function HeroSection() {
  const isMobile = useIsMobile();
  const s = isMobile ? 0.5 : 1;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[80px]" />
      </div>

      {/* Orbit system */}
      <div className="relative flex items-center justify-center" style={{ width: 700 * s, height: 700 * s }}>
        {/* Orbit ring guides */}
        <div className="absolute border border-border/10 rounded-full" style={{ width: 640 * s, height: 640 * s }} />
        <div className="absolute border border-neon-green/6 rounded-full" style={{ width: 480 * s, height: 480 * s }} />
        <div className="absolute border border-neon-cyan/6 rounded-full" style={{ width: 330 * s, height: 330 * s }} />
        <div className="absolute border border-accent/6 rounded-full" style={{ width: 200 * s, height: 200 * s }} />

        <div className="orbit-tilt absolute flex items-center justify-center" style={{ width: 700 * s, height: 700 * s }}>
          <OrbitRing items={outerOrbit} radius={320} scale={s} className="spin-orbit" counterClass="counter-spin" />
        </div>
        <div className="orbit-wobble absolute flex items-center justify-center" style={{ width: 700 * s, height: 700 * s }}>
          <OrbitRing items={middleOrbit} radius={240} scale={s} className="spin-orbit-reverse" counterClass="counter-spin-reverse" />
        </div>
        <div className="orbit-breathe absolute flex items-center justify-center" style={{ width: 700 * s, height: 700 * s }}>
          <OrbitRing items={innerOrbit} radius={165} scale={s} className="spin-orbit-inner" counterClass="counter-spin-inner" />
        </div>
        <div className="orbit-drift absolute flex items-center justify-center" style={{ width: 700 * s, height: 700 * s }}>
          <OrbitRing items={microOrbit} radius={100} scale={s} className="spin-orbit-micro" counterClass="counter-spin-micro" />
        </div>

        {/* Center emoji */}
        <motion.div
          className="relative z-20"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-neon-green/20 blur-3xl scale-150" />
            <img src={thinkEmoji} alt="$THINK" className={`relative object-contain glow-pulse ${isMobile ? 'w-24 h-24' : 'w-44 h-44'}`} />
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-surface-card text-primary text-xs font-mono uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          Live on Solana
        </div>

        <h1
          className="glitch-text text-5xl md:text-9xl font-heading font-extrabold tracking-tighter leading-none mb-4"
          data-text="$THINK"
          style={{
            background: "var(--gradient-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          $THINK
        </h1>

        <CopyCA />

        <p className="text-base md:text-xl text-muted-foreground mb-2">
          Let me <span className="text-primary font-bold">$THINK</span> about it...
        </p>
        <p className="text-xs md:text-sm text-muted-foreground/50 font-mono mb-10">
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
