import { useState } from "react";
import { GALLERY } from "../../data/site";

export default function FactoryGallery({ compact = false }) {
  const [active, setActive] = useState(null);
  const list = compact ? GALLERY.slice(0, 8) : GALLERY;
  return (
    <section className="py-16 md:py-20 bg-[#f6f8fb]" data-testid="factory-gallery">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-brand font-semibold mb-2">Factory Gallery</div>
          <h2 className="section-title">Inside our manufacturing plant</h2>
          <p className="text-muted2">A glimpse into our 50,000 sq.ft. facility — moulding lines, testing lab and finished-goods warehouse.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {list.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(g)}
              className="relative aspect-square overflow-hidden rounded-lg group focus:outline-none"
              data-testid={`gallery-${i}`}
              aria-label={g.caption}
            >
              <img src={g.image} alt={g.alt || g.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{g.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4" onClick={() => setActive(null)} role="dialog">
          <button className="absolute top-6 right-6 text-white text-2xl" aria-label="Close" onClick={() => setActive(null)}><i className="fa-solid fa-xmark"></i></button>
          <figure className="max-w-5xl">
            <img src={active.image.replace("w=900", "w=1600")} alt={active.caption} className="w-full h-auto rounded-lg" />
            <figcaption className="text-white/85 text-center mt-3">{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
