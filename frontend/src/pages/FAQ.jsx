import { useState } from "react";
import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { FAQS } from "../data/site";
import CTA from "../components/common/CTA";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <SEO title="FAQ — Sonam Rubber Works" description="Frequently asked questions about our rubber products, custom manufacturing, MOQ, GST, delivery and how to enquire." keywords="sonam rubber works faq, rubber manufacturer faq, custom rubber part enquiry, rubber moq" path="/faq" schema={schema} />
      <PageHeader title="Frequently Asked Questions" subtitle="Answers to what customers most often ask before placing an order." breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="rt-card overflow-hidden" data-testid={`faq-${i}`}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-heading font-semibold text-navy pr-4">{f.q}</span>
                  <i className={`fa-solid fa-plus text-gold transition-transform ${open === i ? "rotate-45" : ""}`}></i>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-muted2 leading-relaxed border-t border-line pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
