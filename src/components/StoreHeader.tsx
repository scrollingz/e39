import { Store } from "lucide-react";

const StoreHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Store className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">E39 Store</span>
        </div>
        
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="text-foreground font-medium">Products</span>
          <a
            href="https://t.me/goopypoopyparty"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default StoreHeader;
