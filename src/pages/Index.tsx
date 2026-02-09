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

      <main className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground tracking-tight sm:text-4xl">
            E39 Store
          </h1>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Browse our digital products. Instant delivery after purchase.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <f.icon className="h-4 w-4 text-primary" />
              <div>
                <span className="font-medium text-foreground">{f.label}</span>
                <span className="hidden sm:inline"> · {f.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 E39 Store · All rights reserved</p>
          <p className="mt-1">
            Contact us on{" "}
            <a
              href="https://t.me/goopypoopyparty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Telegram
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
