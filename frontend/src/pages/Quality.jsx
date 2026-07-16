import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import CTA from "../components/common/CTA";

const CHECKS = [
  { icon: "fa-clipboard-check", title: "Dimensional Inspection", desc: "Every batch is dimensionally checked against the customer drawing before it leaves the workshop." },
  { icon: "fa-eye", title: "Visual Inspection", desc: "Surface finish, colour uniformity and moulding defects are visually inspected on each part." },
  { icon: "fa-mortar-pestle", title: "Compound Consistency", desc: "We use consistent rubber compound formulations so that repeat orders behave the same on the machine." },
  { icon: "fa-recycle", title: "Rework Discipline", desc: "Parts that don&apos;t meet the drawing are separated at inspection — we never ship marginal material." },
  { icon: "fa-comments", title: "Customer Feedback Loop", desc: "If a batch under-performs in the field we investigate honestly and improve the next lot." },
  { icon: "fa-file-lines", title: "Documentation", desc: "Every dispatch is accompanied by a proper GST tax invoice and delivery note for traceability." },
];

export default function Quality() {
  return (
    <>
      <SEO
        title="Quality Practice — Sonam Rubber Works"
        description="How Sonam Rubber Works keeps rubber component quality consistent — practical inspection, honest rework discipline and clear customer communication."
        keywords="rubber quality inspection, rubber gasket quality, rubber manufacturer quality process"
        path="/quality"
      />
      <PageHeader
        title="Our Quality Practice"
        subtitle="We keep quality practical, honest and repeatable — the same batch behaviour, order after order."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Quality" }]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format" alt="Rubber part inspection at Sonam Rubber Works" width="1200" height="420" className="rounded-xl w-full h-[420px] object-cover" loading="lazy" />
          <div>
            <h2 className="section-title">Consistency you can plan around</h2>
            <p className="text-muted2 leading-relaxed">
              We don&apos;t make big quality claims we can&apos;t back up. What we do commit to is straightforward — a consistent rubber compound, careful moulding, honest inspection and clear communication if anything goes wrong. That is what keeps our customers coming back.
            </p>
            <p className="text-muted2 leading-relaxed mt-4">
              If you have a specific quality requirement — for example, a particular hardness, colour, or dimensional tolerance — please share it up front so we can plan the production accordingly.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-[#f6f8fb]">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHECKS.map((c, i) => (
            <div key={i} className="rt-card p-6" data-testid={`quality-${i}`}>
              <div className="w-12 h-12 rounded-lg bg-success/15 text-success flex items-center justify-center mb-4"><i className={`fa-solid ${c.icon}`}></i></div>
              <h3 className="font-heading font-semibold text-navy text-lg">{c.title}</h3>
              <p className="text-muted2 text-sm mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
