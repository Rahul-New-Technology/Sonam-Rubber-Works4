import { Link } from "react-router-dom";
import { INDUSTRIES } from "../../data/site";

export default function IndustriesGrid({ compact = false }) {
  const list = compact ? INDUSTRIES.slice(0, 8) : INDUSTRIES;
  return (
    <section className="py-16 md:py-20 bg-[#f6f8fb]" data-testid="industries-grid">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Industries We Serve</div>
            <h2 className="section-title mb-2">From automotive to marine — one supplier</h2>
            <p className="text-muted2">We engineer, manufacture and deliver rubber components trusted by industries worldwide.</p>
          </div>
          {compact && <Link to="/industries" className="btn-dark self-start" data-testid="view-all-industries">All Industries <i className="fa-solid fa-arrow-right ml-1"></i></Link>}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((i) => (
            <div key={i.slug} className="rt-card p-5 flex items-start gap-3" data-testid={`industry-${i.slug}`}>
              <div className="w-11 h-11 rounded-md bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <i className={`fa-solid ${i.icon} text-lg`}></i>
              </div>
              <div>
                <div className="font-heading font-semibold text-navy">{i.name}</div>
                <div className="text-xs text-muted2 mt-1 clamp-2">{i.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
