import { TRUST_SIGNALS, COMPANY } from "../../data/site";

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-y border-line" data-testid="trust-bar">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Why Buyers Choose Us</div>
          <h2 className="section-title mb-3">Straightforward, verifiable trust signals</h2>
          <p className="text-muted2 max-w-md">We keep our claims honest. Here is exactly what you can expect when you buy from Sonam Rubber Works.</p>
          <div className="mt-5 text-sm text-navy">
            <div><i className="fa-solid fa-file-invoice text-brand mr-2"></i><strong>GSTIN:</strong> {COMPANY.gstin}</div>
            <div className="mt-1"><i className="fa-solid fa-user-tie text-brand mr-2"></i><strong>Prop.:</strong> {COMPANY.legalName}</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TRUST_SIGNALS.map((t, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-md bg-[#f6f8fb] border border-line" data-testid={`trust-${i}`}>
                <i className={`fa-solid ${t.icon} text-success mt-1`} aria-hidden="true"></i>
                <span className="text-navy text-sm">{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
