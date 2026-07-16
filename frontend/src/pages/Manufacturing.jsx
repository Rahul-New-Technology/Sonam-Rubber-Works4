import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import ManufacturingSteps from "../components/home/ManufacturingSteps";
import CTA from "../components/common/CTA";

export default function Manufacturing() {
  return (
    <>
      <SEO
        title="Manufacturing Process — Sonam Rubber Works"
        description="How Sonam Rubber Works produces rubber components — raw material selection, mixing, moulding, vulcanisation, inspection and dispatch."
        keywords="rubber manufacturing process, rubber moulding, rubber vulcanisation, compression moulding, transfer moulding"
        path="/manufacturing-process"
      />
      <PageHeader
        title="Our Manufacturing Process"
        subtitle="Documented. Monitored. Traceable — every step from raw compound to finished rubber component."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Manufacturing Process" }]}
      />
      <ManufacturingSteps heading={false} />
      <CTA />
    </>
  );
}
