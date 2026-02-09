import { Store } from "lucide-react";

const StoreHeader = () => {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
            <Store className="h-5 w-5" />
          </div>
          <span className="text-lg font-extrabold text-foreground tracking-tight">E39 Store</span>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <span className="text-foreground font-semibold">Products</span>
          <a
            href="https://t.me/goopypoopyparty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default StoreHeader;
