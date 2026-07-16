import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import { COMPANY, waLink } from "../data/site";

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    taxID: COMPANY.gstin,
    url: "https://sonamrubberworks.com/contact",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-2, Good India, Shiv Shakti Society, Netaji Nagar, Khadi No. 3, Sakinaka, Kurla West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400072",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <SEO
        title="Contact Sonam Rubber Works — Rubber Manufacturer, Mumbai"
        description="Contact Sonam Rubber Works for rubber product quotations. Address: Sakinaka, Kurla West, Mumbai. Phone / WhatsApp: +91 9324760876. Email: sonamrubberworks@gmail.com."
        keywords="contact sonam rubber works, rubber manufacturer mumbai contact, rubber products enquiry, kurla rubber factory"
        path="/contact"
        schema={schema}
      />
      <PageHeader
        title="Contact Us"
        subtitle="Share your requirement and we will get back to you shortly with a suitable quotation."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="rt-card p-5 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0"><i className="fa-solid fa-location-dot text-lg"></i></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Address</div>
                <address className="not-italic text-navy font-medium text-sm mt-1 leading-relaxed">
                  {COMPANY.addressLines.map((l, i) => <div key={i}>{l}</div>)}
                </address>
                <a href={COMPANY.mapLink} target="_blank" rel="noreferrer" className="text-brand text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:text-navy">
                  Open in Google Maps <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>

            <div className="rt-card p-5 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0"><i className="fa-solid fa-phone text-lg"></i></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Phone / WhatsApp</div>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-navy font-medium hover:text-brand block">{COMPANY.phone}</a>
                <a href={waLink()} target="_blank" rel="noreferrer" className="text-success font-medium hover:underline text-sm inline-flex items-center gap-1"><i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>
              </div>
            </div>

            <div className="rt-card p-5 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0"><i className="fa-solid fa-envelope text-lg"></i></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Email</div>
                <a href={`mailto:${COMPANY.email}`} className="text-navy font-medium hover:text-brand break-all">{COMPANY.email}</a>
              </div>
            </div>

            <div className="rt-card p-5 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0"><i className="fa-solid fa-clock text-lg"></i></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Business Hours</div>
                <div className="text-navy font-medium text-sm mt-1">Monday to Saturday: 8:00 AM – 8:00 PM</div>
                <div className="text-muted2 text-sm">Sunday: Closed</div>
              </div>
            </div>

            <div className="rt-card p-5 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0"><i className="fa-solid fa-file-invoice text-lg"></i></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-brand font-semibold">Business Details</div>
                <div className="text-navy text-sm mt-1"><strong>Legal Name:</strong> {COMPANY.legalName}</div>
                <div className="text-navy text-sm"><strong>GSTIN:</strong> {COMPANY.gstin}</div>
              </div>
            </div>

            <GoogleMap />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
