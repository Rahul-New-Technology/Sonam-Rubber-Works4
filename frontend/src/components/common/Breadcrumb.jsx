import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Breadcrumb({ items = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `https://sonamrubberworks.com${it.to || ""}`,
    })),
  };
  return (
    <>
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
      <nav aria-label="Breadcrumb" className="text-sm text-white/70" data-testid="breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {last ? (
                  <span className="text-gold">{it.label}</span>
                ) : (
                  <Link to={it.to} className="hover:text-gold">{it.label}</Link>
                )}
                {!last && <i className="fa-solid fa-angle-right text-white/40 text-[10px]"></i>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
