import { motion } from "framer-motion";

const text = "LET ME $THINK • THINK BEFORE YOU APE • $THINK OR STAY POOR • SOLANA THINKERS • DYOR • ";

export function Marquee() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-primary py-2 border-b border-primary/50">
      <div className="marquee-track whitespace-nowrap flex">
        <span className="text-primary-foreground font-mono font-bold text-xs uppercase tracking-[0.3em]">
          {text.repeat(4)}
        </span>
      </div>
    </div>
  );
}
