import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { COMPANY } from "../data/site";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — Sonam Rubber Works" description="How Sonam Rubber Works collects, uses and protects information you share via our website enquiry form." path="/privacy-policy" />
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl prose prose-slate">
          <p className="text-muted2">Last updated: December 2025</p>

          <h2 className="font-heading text-navy">1. Who we are</h2>
          <p className="text-muted2">This website is operated by <strong>Sonam Rubber Works</strong> (proprietor: {COMPANY.legalName}, GSTIN {COMPANY.gstin}), a rubber products manufacturer based at {COMPANY.address}.</p>

          <h2 className="font-heading text-navy">2. Information we collect</h2>
          <p className="text-muted2">We collect the information you voluntarily provide through our enquiry form — full name, company name, phone number, email, product requirement, quantity and message. We also collect standard technical data (IP address, browser, pages visited) via server logs for security and analytics.</p>

          <h2 className="font-heading text-navy">3. How we use your information</h2>
          <p className="text-muted2">Enquiry details are used only to respond to your enquiry, prepare a quotation and follow up on the order. We do not sell your personal information to any third party.</p>

          <h2 className="font-heading text-navy">4. Cookies</h2>
          <p className="text-muted2">We use essential cookies for basic site functionality and, where applicable, anonymous analytics cookies. You may disable cookies from your browser settings.</p>

          <h2 className="font-heading text-navy">5. Data retention</h2>
          <p className="text-muted2">Enquiry information is retained for a reasonable period (typically up to 3 years) for order tracking and follow-up. You may request earlier deletion by writing to {COMPANY.email}.</p>

          <h2 className="font-heading text-navy">6. Your rights</h2>
          <p className="text-muted2">You may request access to, correction of, or deletion of your personal data at any time by emailing us at {COMPANY.email} or writing to our registered address.</p>

          <h2 className="font-heading text-navy">7. Contact</h2>
          <p className="text-muted2">For any question about this policy, please email {COMPANY.email} or call {COMPANY.phone}.</p>
        </div>
      </section>
    </>
  );
}
