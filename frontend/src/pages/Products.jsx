import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import ProductGrid from "../components/products/ProductGrid";
import CTA from "../components/common/CTA";

export default function Products() {
  return (
    <>
      <SEO
        title="Rubber Products — Full Catalogue | Sonam Rubber Works"
        description="Browse the Sonam Rubber Works product range — rubber sheets, gaskets, O-rings, seals, silicone parts, rollers, bushes, washers, bellows, mats and custom moulded components."
        keywords="rubber products mumbai, rubber gasket, rubber bush, rubber o-ring, rubber seal, silicone rubber parts, rubber sheet, rubber washer, rubber moulded parts, custom rubber components"
        path="/products"
      />
      <PageHeader
        title="Our Products"
        subtitle="Standard catalogue and fully custom moulded rubber components — engineered for demanding industrial environments."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />
      <ProductGrid heading={false} />
      <CTA />
    </>
  );
}
