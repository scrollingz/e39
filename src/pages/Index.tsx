import StoreHeader from "@/components/StoreHeader";
import ProductCard from "@/components/ProductCard";
import { Shield, Zap, Headphones } from "lucide-react";

const PURCHASE_URL = "https://t.me/goopypoopyparty";

const products = [
  {
    name: "1 Month Nitro",
    description: "Discord Nitro subscription for 1 month with all premium perks.",
    price: "$7.00",
    stock: "∞ in stock",
    purchaseUrl: PURCHASE_URL,
  },
  {
    name: "1 Year Nitro",
    description: "Discord Nitro subscription for 1 full year. Best value for Nitro.",
    price: "$35.00",
    stock: "∞ in stock",
    badge: "BEST VALUE",
    purchaseUrl: PURCHASE_URL,
  },
  {
    name: "14x Server Boosts — 1 Month",
    description: "14 server boosts for 1 month. Boost your favorite server instantly.",
    price: "$6.00",
    stock: "∞ in stock",
    purchaseUrl: PURCHASE_URL,
  },
  {
    name: "14x Server Boosts — 3 Months",
    description: "14 server boosts for 3 months. Save more with a longer duration.",
    price: "$18.00",
    stock: "∞ in stock",
    purchaseUrl: PURCHASE_URL,
  },
  {
    name: "20x Server Boosts — 1 Month",
    description: "20 server boosts for 1 month. Maximum boost power for your server.",
    price: "$9.00",
    stock: "∞ in stock",
    purchaseUrl: PURCHASE_URL,
  },
  {
    name: "20x Server Boosts — 3 Months",
    description: "20 server boosts for 3 months. Best deal for heavy boosting.",
    price: "$27.00",
    stock: "∞ in stock",
    badge: "POPULAR",
    purchaseUrl: PURCHASE_URL,
  },
];

const features = [
  { icon: Shield, label: "Secure Payments", desc: "Protected transactions" },
  { icon: Zap, label: "Instant Delivery", desc: "Get access immediately" },
  { icon: Headphones, label: "24/7 Support", desc: "Always here to help" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />

      {/* Hero glow effect */}
      <div className="hero-glow">
        <main className="mx-auto max-w-5xl px-6 py-14">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gradient tracking-tight sm:text-5xl">
              E39 Store
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-base">
              Premium Discord Nitro & Server Boosts. Instant delivery after purchase.
            </p>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 rounded-full border border-border/60 bg-secondary/50 px-4 py-2 text-sm"
              >
                <f.icon className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{f.label}</span>
                <span className="hidden sm:inline text-muted-foreground">· {f.desc}</span>
              </div>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-20 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 E39 Store · All rights reserved</p>
            <p className="mt-1.5">
              Contact us on{" "}
              <a
                href="https://t.me/goopypoopyparty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Telegram
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
