import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const CONTRACT_ADDRESS = "THINKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export function HowToBuySection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try { await navigator.clipboard.writeText(CONTRACT_ADDRESS); } catch {}
    setCopied(true);
    toast.success("Copied!", { description: "Now go buy some $THINK 🤔" });
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { num: "01", title: "Get a Wallet", desc: "Download Phantom or Solflare — your gateway to Solana.", icon: "👛" },
    { num: "02", title: "Load SOL", desc: "Purchase SOL on Coinbase, Binance, or any CEX.", icon: "💎" },
    { num: "03", title: "Head to Raydium", desc: "Go to raydium.io/swap and connect your wallet.", icon: "🔄" },
    { num: "04", title: "Swap for $THINK", desc: "Paste the CA, set slippage to ~1%, and swap.", icon: "🤔" },
  ];

  return (
    <section id="buy" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">[ Step by Step ]</span>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mt-3 tracking-tighter">
            How to <span className="text-primary">Buy</span>
          </h2>
        </motion.div>

        {/* Terminal-style steps */}
        <div className="border border-border bg-surface-card mb-10">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-surface-dark">
            <div className="w-2.5 h-2.5 bg-destructive/60" />
            <div className="w-2.5 h-2.5 bg-accent/60" />
            <div className="w-2.5 h-2.5 bg-primary/60" />
            <span className="ml-3 text-[10px] font-mono text-muted-foreground">how_to_think.sh</span>
          </div>
          <div className="p-6 space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <span className="text-2xl flex-shrink-0 mt-1">{step.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary font-mono text-xs">{step.num}</span>
                    <span className="text-foreground font-heading font-bold text-sm">{step.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{`> ${step.desc}`}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-primary/20 bg-primary/5"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Contract Address</p>
            <span className="px-2 py-0.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono uppercase">Verified</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <code className="flex-1 bg-background border border-border px-4 py-3 text-primary text-sm font-mono break-all">
              {CONTRACT_ADDRESS}
            </code>
            <motion.button
              onClick={copyAddress}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-2 px-6 py-3 font-mono font-bold text-sm uppercase tracking-widest transition-all ${
                copied
                  ? "bg-primary/20 border border-primary/40 text-primary"
                  : "bg-primary text-primary-foreground hover:shadow-[var(--shadow-neon)]"
              }`}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <Check size={14} /> Copied
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <Copy size={14} /> Copy CA
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
