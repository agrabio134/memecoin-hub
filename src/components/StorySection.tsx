import { motion } from "framer-motion";
import thinkEmoji from "@/assets/think-emoji.png";

export function StorySection() {
  const cards = [
    { label: "In the chaos of memecoins", text: "DOGEs bark and PEPEs croak. Millions ape blindly into the void, hoping for a 100x." },
    { label: "One entity pauses", text: "While others act on FOMO and cope, $THINK takes a step back. Observes. Calculates." },
    { label: "Then strikes", text: '"Hmm... let me $THINK." And when $THINK moves — it moves with purpose. The smartest ape wins.' },
  ];

  return (
    <section id="story" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">[ Origin Story ]</span>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold mt-3 tracking-tighter">
            The <span className="text-primary">Thinker</span> Rises
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 border border-border bg-surface-card hover:border-primary/30 transition-all group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary/50 transition-all" />
              <p className="text-xs font-mono text-primary mb-3">{`0${i + 1}.`}</p>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wide mb-2">{card.label}</p>
              <p className="text-foreground/70 leading-relaxed text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 border border-primary/20 bg-primary/5 text-center"
        >
          <img src={thinkEmoji} alt="$THINK" className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <p className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            &ldquo;Those who $THINK shall prosper.&rdquo;
          </p>
          <p className="text-muted-foreground text-xs font-mono">— The Thinker Manifesto</p>
        </motion.div>
      </div>
    </section>
  );
}
