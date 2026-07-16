import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import CTA from "../components/common/CTA";
import { COMPANY } from "../data/site";

export default function About() {
  return (
    <>
      <SEO
        title={`About Sonam Rubber Works — Rubber Manufacturer in Kurla West, Mumbai`}
        description={`Learn about Sonam Rubber Works — a GST registered (${COMPANY.gstin}) rubber component manufacturer based in Kurla West, Mumbai. Proprietor: ${COMPANY.legalName}.`}
        keywords="about sonam rubber works, rubber manufacturer mumbai, kurla rubber factory, rubber components company mumbai"
        path="/about"
      />
      <PageHeader
        title="About Sonam Rubber Works"
        subtitle="A Mumbai-based rubber products manufacturer focused on honest work, custom components and direct customer support."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200&q=80&auto=format" alt="Sonam Rubber Works workshop in Kurla West, Mumbai" width="1200" height="420" className="rounded-xl w-full h-[420px] object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Our Story</div>
            <h2 className="section-title">Rubber components made in Mumbai</h2>
            <p className="text-muted2 leading-relaxed">
              Sonam Rubber Works is a rubber products manufacturing workshop based in Sakinaka, Kurla West, Mumbai. Operating under the proprietorship of <strong>{COMPANY.legalName}</strong>, we manufacture rubber gaskets, bushes, seals, O-rings, washers, sheets and custom moulded rubber components for industrial buyers, workshops and OEMs.
            </p>
            <p className="text-muted2 leading-relaxed mt-4">
              We are a straightforward, owner-led business. When you deal with us you speak to the person responsible for your order — not a call centre. Every order is dispatched with a proper GST tax invoice and, where possible, we welcome local buyers to visit the workshop by appointment.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#f6f8fb] border border-line">
                <div className="text-brand font-semibold text-sm uppercase tracking-widest">What we do</div>
                <div className="text-navy text-sm mt-2">Manufacture standard and custom rubber components to your drawing, sample or specification.</div>
              </div>
              <div className="p-5 rounded-lg bg-[#f6f8fb] border border-line">
                <div className="text-brand font-semibold text-sm uppercase tracking-widest">How we work</div>
                <div className="text-navy text-sm mt-2">Direct owner contact · transparent pricing · honest lead times · proper GST invoicing.</div>
              </div>
              <div className="p-5 rounded-lg bg-[#f6f8fb] border border-line">
                <div className="text-brand font-semibold text-sm uppercase tracking-widest">Business Details</div>
                <div className="text-navy text-sm mt-2">
                  <div><strong>Trade Name:</strong> Sonam Rubber Works</div>
                  <div><strong>Proprietor:</strong> {COMPANY.legalName}</div>
                  <div><strong>GSTIN:</strong> {COMPANY.gstin}</div>
                </div>
              </div>
              <div className="p-5 rounded-lg bg-[#f6f8fb] border border-line">
                <div className="text-brand font-semibold text-sm uppercase tracking-widest">Contact</div>
                <div className="text-navy text-sm mt-2">
                  <div><a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-brand"><i className="fa-solid fa-phone mr-1"></i> {COMPANY.phone}</a></div>
                  <div><a href={`mailto:${COMPANY.email}`} className="hover:text-brand break-all"><i className="fa-solid fa-envelope mr-1"></i> {COMPANY.email}</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
