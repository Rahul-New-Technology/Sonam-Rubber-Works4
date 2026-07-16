import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import FactoryGallery from "../components/gallery/FactoryGallery";
import CTA from "../components/common/CTA";

export default function Gallery() {
  return (
    <>
      <SEO title="Factory Gallery — Sonam Rubber Works" description="A visual tour of the Sonam Rubber Works workshop, moulding operations and finished rubber components." keywords="rubber factory mumbai, rubber workshop, rubber manufacturing gallery" path="/gallery" />
      <PageHeader
        title="Factory Gallery"
        subtitle="A visual tour of our manufacturing facility, testing lab and finished goods."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <FactoryGallery />
      <CTA />
    </>
  );
}
