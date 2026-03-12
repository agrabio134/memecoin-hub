import { motion } from "framer-motion";
import { Zap, Shield, Flame, Unlock } from "lucide-react";

export function TokenomicsSection() {
  const stats = [
    { label: "Total Supply", value: "1,000,000,000", icon: <Zap size={18} />, sub: "$THINK tokens" },
    { label: "Liquidity Pool", value: "100% Burned", icon: <Flame size={18} />, sub: "Permanently locked" },
    { label: "Buy / Sell Tax", value: "0%", icon: <Shield size={18} />, sub: "No hidden fees" },
    { label: "Ownership", value: "Renounced", icon: <Unlock size={18} />, sub: "Fully decentralized" },
  ];

  return (
    <section id="tokenomics" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">[ The Numbers ]</span>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mt-3 tracking-tighter">
            Token<span className="text-primary">omics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 border border-border bg-surface-card hover:border-primary/30 transition-all cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary transition-all" />
              <div className="w-9 h-9 border border-primary/30 flex items-center justify-center mb-4 text-primary">
                {s.icon}
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1 font-mono">{s.label}</p>
              <p className="text-lg font-heading font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Distribution bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 border border-border bg-surface-card"
        >
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Distribution</p>
          <div className="flex h-2 overflow-hidden gap-0.5">
            <div className="flex-[75] bg-primary" />
            <div className="flex-[15] bg-neon-cyan" />
            <div className="flex-[10] bg-neon-lime" />
          </div>
          <div className="flex justify-between mt-3 text-xs text-muted-foreground font-mono">
            <span><span className="text-primary">75%</span> Public</span>
            <span><span className="text-neon-cyan">15%</span> Liquidity</span>
            <span><span className="text-neon-lime">10%</span> Dev</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
