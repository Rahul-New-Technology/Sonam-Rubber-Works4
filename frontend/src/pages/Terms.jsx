import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { COMPANY } from "../data/site";

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions — Sonam Rubber Works" description="Terms and conditions governing use of the Sonam Rubber Works website and any transaction with us." path="/terms" />
      <PageHeader title="Terms & Conditions" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl prose prose-slate">
          <p className="text-muted2">Last updated: December 2025</p>

          <h2 className="font-heading text-navy">1. Use of website</h2>
          <p className="text-muted2">By using this website you agree to these terms. Product information, images and specifications are provided for reference and do not by themselves constitute a binding offer to sell. Formal quotations are issued in writing (email or WhatsApp) by Sonam Rubber Works.</p>

          <h2 className="font-heading text-navy">2. Business identity</h2>
          <p className="text-muted2">This website is operated by <strong>Sonam Rubber Works</strong>, a proprietorship of {COMPANY.legalName}, GSTIN {COMPANY.gstin}. Registered address: {COMPANY.address}.</p>

          <h2 className="font-heading text-navy">3. Product specifications</h2>
          <p className="text-muted2">Product specifications on this website are indicative. Actual specifications supplied against an order will be as confirmed in the mutually accepted quotation and purchase order.</p>

          <h2 className="font-heading text-navy">4. Pricing and payments</h2>
          <p className="text-muted2">Prices, taxes and delivery terms will be stated in the quotation. All prices are subject to applicable GST. Payment terms will be as agreed in the accepted quotation.</p>

          <h2 className="font-heading text-navy">5. Warranty</h2>
          <p className="text-muted2">Rubber components supplied are warranted against manufacturing defects when used in accordance with the agreed specification and operating conditions. Warranty does not cover misuse, incorrect installation or use outside agreed conditions.</p>

          <h2 className="font-heading text-navy">6. Limitation of liability</h2>
          <p className="text-muted2">Our liability under any supplied order shall not exceed the invoice value of the supplied product. We are not liable for indirect or consequential losses.</p>

          <h2 className="font-heading text-navy">7. Intellectual property</h2>
          <p className="text-muted2">All content, product photographs, logos and trademarks on this website are the property of Sonam Rubber Works and may not be reproduced without prior written consent.</p>

          <h2 className="font-heading text-navy">8. Governing law</h2>
          <p className="text-muted2">These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</p>
        </div>
      </section>
    </>
  );
}
