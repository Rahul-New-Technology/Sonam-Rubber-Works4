import { Link } from "react-router-dom";
import { COMPANY, waLink } from "../../data/site";

export default function CTA() {
  return (
    <section className="relative bg-navy text-white overflow-hidden hero-grain" data-testid="cta-band">
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative py-16 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-3">
            <i className="fa-solid fa-bolt" aria-hidden="true"></i> Get a Quick Quote
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
            Need rubber components?<br />
            <span className="text-gold">Send us your requirement — we&apos;ll get back quickly.</span>
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl">
            Share your drawing, sample photo or written specification along with quantity and delivery city. We usually respond within a few working hours with a suitable material, process suggestion and price.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <Link to="/contact" className="btn-primary" data-testid="cta-request-quote">
            <i className="fa-solid fa-file-lines" aria-hidden="true"></i> Enquiry Form
          </Link>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: "#25D366", color: "#25D366" }} data-testid="cta-whatsapp">
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Now
          </a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="btn-outline" data-testid="cta-call-now">
            <i className="fa-solid fa-phone" aria-hidden="true"></i> Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
