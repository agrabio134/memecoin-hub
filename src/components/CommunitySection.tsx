import { motion } from "framer-motion";
import { Twitter, Send, BarChart3, ExternalLink } from "lucide-react";

export function CommunitySection() {
  const links = [
    { name: "Twitter / X", icon: <Twitter size={20} />, url: "https://x.com/i/communities/2032095188139585932", desc: "Follow for alpha" },
    { name: "Dexscreener", icon: <BarChart3 size={20} />, url: "https://dexscreener.com", desc: "Watch the chart" },
  ];

  return (
    <section id="community" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">[ The $THINK Tank ]</span>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mt-3 tracking-tighter">
            Join the <span className="text-primary">Movement</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">Great minds think alike. Join thousands of $THINKers.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {links.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 p-8 border border-border bg-surface-card hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-all">
                {l.icon}
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{l.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{l.desc}</p>
              </div>
              <ExternalLink size={12} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 border border-primary/20 bg-primary/5 relative overflow-hidden"
        >
          <div className="relative">
            <p className="text-3xl md:text-4xl font-heading font-extrabold mb-3">
              Ready to <span className="text-primary">$THINK</span>?
            </p>
            <p className="text-muted-foreground mb-6">Stop aping. Start thinking. Join the revolution.</p>
            <motion.a
              href="https://raydium.io/swap"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-bold uppercase tracking-widest text-sm hover:shadow-[var(--shadow-neon-lg)] transition-all"
            >
              Buy $THINK on Raydium <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
