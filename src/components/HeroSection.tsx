import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
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

type OrbitItem = { name: string; image?: string; emoji?: string; size: number };

const outerOrbit: OrbitItem[] = [
  { name: "SHIB", image: orbitShib, size: 58 },
  { name: "😂", emoji: "😂", size: 28 },
  { name: "FOREST", image: orbitForest, size: 42 },
  { name: "🤣", emoji: "🤣", size: 50 },
  { name: "FIGHT", image: orbitFight, size: 62 },
  { name: "😭", emoji: "😭", size: 32 },
  { name: "TURTLE", image: orbitTurtle, size: 38 },
  { name: "💀", emoji: "💀", size: 54 },
  { name: "DOGE", image: "https://customer-assets.emergentagent.com/job_you-meme-solana/artifacts/5slq9p38_Doge-Meme-PNG-Free-Download.png", size: 50 },
  { name: "🫠", emoji: "🫠", size: 26 },
  { name: "PEPE", image: "https://customer-assets.emergentagent.com/job_you-meme-solana/artifacts/bxzig1oh_png-clipart-discord-pepe-the-frog-video-games-pepe-removebg-preview.png", size: 54 },
  { name: "😤", emoji: "😤", size: 44 },
];

const middleOrbit: OrbitItem[] = [
  { name: "APE", image: orbitApe, size: 52 },
  { name: "🔥", emoji: "🔥", size: 24 },
  { name: "PENGUIN", image: orbitPenguin, size: 44 },
  { name: "😈", emoji: "😈", size: 48 },
  { name: "BLOB", image: orbitBlob, size: 56 },
  { name: "🚀", emoji: "🚀", size: 30 },
  { name: "CRY", image: orbitCrying, size: 40 },
  { name: "🤡", emoji: "🤡", size: 46 },
  { name: "BONK", image: orbitBonk, size: 34 },
  { name: "💎", emoji: "💎", size: 28 },
];

const innerOrbit: OrbitItem[] = [
  { name: "FAP", image: orbitFap, size: 48 },
  { name: "🧠", emoji: "🧠", size: 26 },
  { name: "SHIB2", image: orbitShib, size: 38 },
  { name: "😵‍💫", emoji: "😵‍💫", size: 42 },
  { name: "FIGHT2", image: orbitFight, size: 44 },
  { name: "🤯", emoji: "🤯", size: 30 },
  { name: "🐸", emoji: "🐸", size: 50 },
];

const microOrbit: OrbitItem[] = [
  { name: "😎", emoji: "😎", size: 36 },
  { name: "APE2", image: orbitApe, size: 28 },
  { name: "🤑", emoji: "🤑", size: 42 },
  { name: "💩", emoji: "💩", size: 24 },
  { name: "BLOB2", image: orbitBlob, size: 34 },
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
              {item.emoji ? (
                <span
                  className="block select-none"
                  style={{ fontSize: s * 0.7, lineHeight: 1 }}
                >
                  {item.emoji}
                </span>
              ) : (
                <div
                  className="rounded-full border border-border/50 bg-surface-card p-0.5 hover:border-primary/50 transition-colors overflow-hidden"
                  style={{ width: s, height: s }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  const isMobile = useIsMobile();
  const s = isMobile ? 0.55 : 1;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-green/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[80px]" />
      </div>

      {/* Orbit system */}
      <div className="relative flex items-center justify-center" style={{ width: 650 * s, height: 650 * s }}>
        {/* Orbit ring guides */}
        <div className="absolute border border-border/15 rounded-full" style={{ width: 600 * s, height: 600 * s }} />
        <div className="absolute border border-neon-green/8 rounded-full" style={{ width: 440 * s, height: 440 * s }} />
        <div className="absolute border border-neon-cyan/8 rounded-full" style={{ width: 300 * s, height: 300 * s }} />
        <div className="absolute border border-accent/8 rounded-full" style={{ width: 180 * s, height: 180 * s }} />

        <OrbitRing items={outerOrbit} radius={300} scale={s} className="spin-orbit" counterClass="counter-spin" />
        <OrbitRing items={middleOrbit} radius={220} scale={s} className="spin-orbit-reverse" counterClass="counter-spin-reverse" />
        <OrbitRing items={innerOrbit} radius={150} scale={s} className="spin-orbit-inner" counterClass="counter-spin-inner" />
        <OrbitRing items={microOrbit} radius={90} scale={s} className="spin-orbit-micro" counterClass="counter-spin-micro" />

        {/* Center emoji */}
        <motion.div
          className="relative z-20"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-neon-green/20 blur-3xl scale-150" />
            <img src={thinkEmoji} alt="$THINK" className="relative w-44 h-44 object-contain glow-pulse" />
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
