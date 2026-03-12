export function ThinkFooter() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-primary flex items-center justify-center text-xs">🤔</div>
          <div>
            <p className="font-heading font-bold text-foreground text-sm">$THINK</p>
            <p className="text-muted-foreground text-[10px] font-mono">© 2025 • NFA • DYOR</p>
          </div>
        </div>
        <div className="flex gap-6 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a>
          <a href="#buy" className="hover:text-primary transition-colors">Buy</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </div>
        <p className="text-[10px] text-muted-foreground/50 font-mono max-w-xs text-center md:text-right">
          $THINK is a memecoin with no intrinsic value. Not financial advice.
        </p>
      </div>
    </footer>
  );
}
