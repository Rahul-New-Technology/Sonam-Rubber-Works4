import { MFG_STEPS } from "../../data/site";

export default function ManufacturingSteps({ heading = true }) {
  return (
    <section className="py-16 md:py-20 bg-white" data-testid="mfg-steps">
      <div className="container-x">
        {heading && (
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Manufacturing Process</div>
            <h2 className="section-title">From raw compound to finished component — in six steps</h2>
            <p className="text-muted2">Every process step is documented, monitored and traceable.</p>
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MFG_STEPS.map((s, i) => (
            <div key={i} className="rt-card p-6 relative overflow-hidden" data-testid={`step-${i}`}>
              <div className="absolute -right-3 -top-3 text-[80px] font-heading font-bold text-navy/[0.05] leading-none">{s.step}</div>
              <div className="w-12 h-12 rounded-lg bg-gold/20 text-navy flex items-center justify-center mb-4">
                <i className={`fa-solid ${s.icon} text-lg`}></i>
              </div>
              <div className="text-xs uppercase tracking-widest text-brand font-semibold">Step {s.step}</div>
              <h3 className="font-heading font-semibold text-navy text-lg mt-1">{s.title}</h3>
              <p className="text-muted2 text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
