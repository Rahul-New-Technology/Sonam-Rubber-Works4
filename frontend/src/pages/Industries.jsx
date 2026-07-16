import SEO from "../components/common/SEO";
import PageHeader from "../components/common/PageHeader";
import { INDUSTRIES } from "../data/site";
import CTA from "../components/common/CTA";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve — Sonam Rubber Works"
        description="Rubber components manufactured for automotive, agriculture, construction, engineering, mining, railways, chemical and marine applications."
        keywords="rubber for automotive, agricultural rubber parts, construction rubber, engineering rubber, mining rubber, railway rubber, marine rubber components"
        path="/industries"
      />
      <PageHeader
        title="Industries We Serve"
        subtitle="Engineered rubber solutions trusted across 10+ industries and 25+ countries."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />
      <section className="py-16 md:py-20 bg-white">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((i) => (
            <article key={i.slug} className="rt-card overflow-hidden group" data-testid={`industry-page-${i.slug}`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={i.image} alt={i.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gold text-navy flex items-center justify-center"><i className={`fa-solid ${i.icon}`}></i></div>
                  <div className="font-heading font-bold text-white text-xl">{i.name}</div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted2 text-sm">{i.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
