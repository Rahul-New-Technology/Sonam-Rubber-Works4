import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import CertBar from "../components/home/CertBar";
import CTA from "../components/common/CTA";
import { COMPANY } from "../data/site";

export default function Certifications() {
  return (
    <>
      <SEO
        title="Business Trust & Compliance — Sonam Rubber Works"
        description={`Sonam Rubber Works is a GST registered rubber products manufacturer in Mumbai. GSTIN ${COMPANY.gstin}. Verifiable business details, transparent contact and honest customer support.`}
        keywords="sonam rubber works gst, gst registered rubber manufacturer, mumbai rubber factory business details"
        path="/certifications"
      />
      <PageHeader
        title="Business Trust & Compliance"
        subtitle="We keep our claims honest — no fake certifications, no exaggerated numbers. Here is what you can actually verify."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Business Trust" }]}
      />
      <section className="py-14 bg-white">
        <div className="container-x max-w-3xl">
          <div className="rt-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Trade Name</div>
                <div className="font-heading text-navy text-lg mt-1">Sonam Rubber Works</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Legal / Proprietor Name</div>
                <div className="font-heading text-navy text-lg mt-1">{COMPANY.legalName}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">GSTIN</div>
                <div className="font-heading text-navy text-lg mt-1">{COMPANY.gstin}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Business Type</div>
                <div className="font-heading text-navy text-lg mt-1">Proprietorship · Rubber Component Manufacturer</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Registered Address</div>
                <div className="text-navy mt-1 leading-relaxed">{COMPANY.address}</div>
              </div>
            </div>
          </div>
          <p className="text-muted2 text-sm mt-6">
            You may verify our GSTIN independently on the Government of India GST portal at <a href="https://services.gst.gov.in/services/searchtp" target="_blank" rel="noreferrer" className="text-brand underline">services.gst.gov.in</a>. We are committed to transparent, verifiable business practice.
          </p>
        </div>
      </section>
      <CertBar full />
      <CTA />
    </>
  );
}
