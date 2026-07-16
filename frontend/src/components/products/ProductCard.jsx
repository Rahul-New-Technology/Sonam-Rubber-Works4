import { Link } from "react-router-dom";

export default function ProductCard({ product, testId }) {
  return (
    <article className="rt-card overflow-hidden group" data-testid={testId || `product-${product.slug}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0D1B2A]">
        <img
          src={product.thumb}
          srcSet={`${product.thumb} 500w, ${product.image} 900w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          alt={product.alt || `${product.name} — Sonam Rubber Works`}
          loading="lazy"
          decoding="async"
          width="900" height="675"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-gold text-navy text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
          {product.tagline?.split(/[·—-]/)[0].trim()}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-navy text-lg clamp-2">{product.name}</h3>
        <p className="text-muted2 text-sm mt-2 clamp-3">{product.short}</p>
        <div className="flex items-center justify-between mt-4 gap-2">
          <Link to={`/products/${product.slug}`} className="text-brand font-semibold text-sm hover:text-navy inline-flex items-center gap-1" data-testid={`view-${product.slug}`}>
            View Details <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
          </Link>
          <Link to="/contact" className="text-xs font-semibold text-navy bg-gold px-3 py-1.5 rounded hover:bg-gold-600 transition-colors" data-testid={`enquire-${product.slug}`}>Enquire</Link>
        </div>
      </div>
    </article>
  );
}
