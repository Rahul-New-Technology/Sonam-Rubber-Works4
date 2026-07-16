import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../../data/site";

export default function ProductGrid({ compact = false, heading = true }) {
  const list = compact ? PRODUCTS.slice(0, 8) : PRODUCTS;
  return (
    <section className="py-16 md:py-20 bg-white" data-testid="product-grid">
      <div className="container-x">
        {heading && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Our Products</div>
              <h2 className="section-title mb-2">Precision rubber components, built to your spec</h2>
              <p className="text-muted2">Standard catalogue and fully custom moulded parts.</p>
            </div>
            {compact && <Link to="/products" className="btn-dark self-start" data-testid="view-all-products">View All Products <i className="fa-solid fa-arrow-right ml-1"></i></Link>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  );
}
