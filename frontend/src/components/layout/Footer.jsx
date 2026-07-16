import { Link } from "react-router-dom";
import { COMPANY, waLink } from "../../data/site";
import { PRODUCTS } from "../../data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/85 mt-24" data-testid="site-footer">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Sonam Rubber Works logo" width="56" height="56" className="w-14 h-14 object-contain bg-white/95 rounded-md p-1" loading="lazy" />
            <div>
              <div className="font-heading font-bold text-white text-lg">Sonam Rubber Works</div>
              <div className="text-[11px] text-white/60 uppercase tracking-wider">Rubber Manufacturer · Mumbai</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Sonam Rubber Works is a Mumbai-based manufacturer of industrial and custom rubber components including rubber gaskets, bushes, seals, O-rings, washers, sheets and moulded parts.
          </p>
          <div className="mt-4 text-xs text-white/60">
            <div><span className="text-gold">Legal Name:</span> {COMPANY.legalName}</div>
            <div className="mt-1"><span className="text-gold">GSTIN:</span> {COMPANY.gstin}</div>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-base mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/products", "Products"],
              ["/industries", "Industries"],
              ["/manufacturing-process", "Manufacturing Process"],
              ["/quality", "Quality"],
              ["/certifications", "Business Trust"],
              ["/gallery", "Gallery"],
              ["/blog", "Blog"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
              ["/privacy-policy", "Privacy Policy"],
              ["/terms", "Terms & Conditions"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors inline-flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-gold text-[10px]" aria-hidden="true"></i> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-base mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm">
            {PRODUCTS.slice(0, 9).map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="hover:text-gold transition-colors inline-flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-gold text-[10px]" aria-hidden="true"></i> {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white text-base mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><i className="fa-solid fa-location-dot text-gold mt-1" aria-hidden="true"></i><span className="text-white/75">{COMPANY.address}</span></li>
            <li className="flex gap-3"><i className="fa-solid fa-phone text-gold mt-1" aria-hidden="true"></i><a href={`tel:${COMPANY.phoneRaw}`} className="text-white/90 hover:text-gold">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><i className="fa-brands fa-whatsapp text-gold mt-1" aria-hidden="true"></i><a href={waLink()} target="_blank" rel="noreferrer" className="text-white/90 hover:text-gold">WhatsApp: {COMPANY.phone}</a></li>
            <li className="flex gap-3"><i className="fa-solid fa-envelope text-gold mt-1" aria-hidden="true"></i><a href={`mailto:${COMPANY.email}`} className="text-white/90 hover:text-gold break-all">{COMPANY.email}</a></li>
            <li className="flex gap-3"><i className="fa-solid fa-clock text-gold mt-1" aria-hidden="true"></i><span className="text-white/75">{COMPANY.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Sonam Rubber Works · Prop. {COMPANY.legalName}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
            <Link to="/sitemap.xml" className="hover:text-gold" reloadDocument>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
