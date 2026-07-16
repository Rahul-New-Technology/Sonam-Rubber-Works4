import { TRUST_POINTS } from "../../data/site";

export default function CertBar({ full = false }) {
  const items = full ? TRUST_POINTS : TRUST_POINTS;
  return (
    <section className={`py-14 md:py-16 ${full ? "bg-white" : "bg-navy text-white"}`} data-testid="cert-bar">
      <div className="container-x">
        <div className={`max-w-2xl ${full ? "" : "text-center mx-auto"}`}>
          <div className={`text-xs uppercase tracking-widest font-semibold mb-2 ${full ? "text-brand" : "text-gold"}`}>Business Trust & Compliance</div>
          <h2 className={`section-title ${full ? "" : "center text-white after:hidden"}`} style={!full ? { color: "#fff" } : {}}>
            Transparent business you can verify
          </h2>
          {!full && <p className="text-white/70 mt-2">Real, verifiable trust signals — no fake certifications, no exaggerated claims.</p>}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((c, i) => (
            <div key={i} className={`p-5 rounded-lg text-center ${full ? "rt-card" : "bg-white/[0.06] border border-white/10"}`} data-testid={`cert-${i}`}>
              <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-3 ${full ? "bg-navy text-gold" : "bg-white/10 text-gold"}`}>
                <i className={`fa-solid ${c.icon} text-xl`} aria-hidden="true"></i>
              </div>
              <div className={`font-heading font-semibold ${full ? "text-navy" : "text-white"}`}>{c.code}</div>
              <p className={`text-xs mt-1 ${full ? "text-muted2" : "text-white/70"}`}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
