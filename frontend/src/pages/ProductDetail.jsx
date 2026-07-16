import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { findProduct, PRODUCTS } from "../data/site";
import ProductCard from "../components/products/ProductCard";
import CTA from "../components/common/CTA";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProduct(slug);
  if (!product) return <Navigate to="/404" replace />;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.short,
    brand: { "@type": "Brand", name: "Sonam Rubber Works" },
    manufacturer: { "@type": "Organization", name: "Sonam Rubber Works" },
  };

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <SEO
        title={`${product.name} Manufacturer in Mumbai | Sonam Rubber Works`}
        description={`${product.short} Direct from Sonam Rubber Works, Mumbai. GST registered manufacturer.`}
        keywords={`${product.name.toLowerCase()}, ${product.name.toLowerCase()} manufacturer, ${product.name.toLowerCase()} mumbai, rubber products manufacturer`}
        path={`/products/${product.slug}`}
        image={product.image}
        schema={schema}
      />
      <PageHeader
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.name }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="rt-card overflow-hidden">
              <img src={product.image} alt={product.alt || product.name} width="1200" height="900" className="w-full h-[440px] object-cover" loading="eager" decoding="async" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Product Overview</div>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-4">{product.name}</h2>
            <p className="text-muted2 leading-relaxed">{product.short}</p>

            <h3 className="font-heading font-semibold text-navy text-lg mt-8 mb-3">Technical Specifications</h3>
            <div className="rt-card divide-y divide-line">
              {product.specs.map((s, i) => (
                <div key={i} className="grid grid-cols-3 px-5 py-3 text-sm">
                  <div className="col-span-1 text-muted2">{s.k}</div>
                  <div className="col-span-2 text-navy font-medium">{s.v}</div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-navy text-lg mt-8 mb-3">Typical Applications</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((a, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-navy">
                  <i className="fa-solid fa-circle-check text-success"></i>{a}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary" data-testid="product-quote">Request Quote for {product.name}</Link>
              <Link to="/products" className="btn-dark">All Products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#f6f8fb]">
        <div className="container-x">
          <h3 className="section-title mb-8">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
