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
    <div className="relative flex flex-col rounded-2xl border border-border bg-card p-6 card-hover group">
      {badge && (
        <span className="absolute -top-3 right-5 rounded-full badge-glow px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
          {badge}
        </span>
      )}
      
      <h3 className="text-lg font-bold text-foreground mb-1.5 tracking-tight">{name}</h3>
      <p className="text-[13px] text-muted-foreground mb-5 flex-1 leading-relaxed">{description}</p>
      
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-[hsl(var(--price-color))]">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground uppercase tracking-wide mt-0.5 block">{stock}</span>
        </div>
        
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl btn-purchase px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Purchase
          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
