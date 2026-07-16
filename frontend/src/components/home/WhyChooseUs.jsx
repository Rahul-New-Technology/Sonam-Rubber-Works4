import { WHY_CHOOSE_US } from "../../data/site";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white" data-testid="why-choose-us">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Why Choose Us</div>
          <h2 className="section-title">Engineered for performance. Trusted for consistency.</h2>
          <p className="text-muted2 text-base">Straightforward, verifiable reasons industrial buyers choose Sonam Rubber Works as their rubber component supplier.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map((w, i) => (
            <div key={i} className="rt-card p-6" data-testid={`why-${i}`}>
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center mb-4">
                <i className={`fa-solid ${w.icon} text-lg`}></i>
              </div>
              <h3 className="font-heading font-semibold text-navy text-lg">{w.title}</h3>
              <p className="text-muted2 text-sm mt-2 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
