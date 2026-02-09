import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  stock: string;
  badge?: string;
  purchaseUrl: string;
}

const ProductCard = ({ name, description, price, originalPrice, stock, badge, purchaseUrl }: ProductCardProps) => {
  return (
    <div className="relative flex flex-col rounded-xl border border-border bg-card p-5 card-hover">
      {badge && (
        <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
          {badge}
        </span>
      )}
      
      <h3 className="text-base font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{description}</p>
      
      <div className="flex items-end justify-between mt-auto">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[hsl(var(--price-color))]">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{stock}</span>
        </div>
        
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95"
        >
          Purchase
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
