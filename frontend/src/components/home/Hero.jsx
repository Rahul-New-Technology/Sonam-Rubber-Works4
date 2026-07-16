import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { COMPANY, waLink } from "../../data/site";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden hero-grain" data-testid="hero">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1800&q=75&auto=format')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden />
      <div className="absolute -top-32 -right-16 w-[520px] h-[520px] rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="container-x relative py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            GST Registered · Mumbai-based Manufacturer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
          >
            <span className="text-gold">Rubber Products</span><br />
            Manufacturer in<br /> Mumbai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-white/85 text-lg max-w-xl"
          >
            <strong>Sonam Rubber Works</strong> manufactures rubber gaskets, bushes, seals, O-rings, washers, sheets and custom moulded rubber components — supplied directly from our Kurla West workshop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="btn-primary" data-testid="hero-request-quote">
              <i className="fa-solid fa-file-lines" aria-hidden="true"></i> Get a Quote
            </Link>
            <a href={`tel:${COMPANY.phoneRaw}`} className="btn-outline" data-testid="hero-call-now">
              <i className="fa-solid fa-phone" aria-hidden="true"></i> Call {COMPANY.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-outline" style={{ borderColor: "#25D366", color: "#25D366" }} data-testid="hero-whatsapp">
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: "fa-file-invoice", label: "GST Registered" },
              { icon: "fa-sliders", label: "Custom Manufacturing" },
              { icon: "fa-shield-halved", label: "Quality Focused" },
              { icon: "fa-comments", label: "Direct Support" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="w-9 h-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                  <i className={`fa-solid ${b.icon} text-gold`} aria-hidden="true"></i>
                </div>
                <span className="text-white/85">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&q=80&auto=format"
              alt="Rubber manufacturing workshop — Sonam Rubber Works, Mumbai"
              loading="eager"
              width="1200" height="420"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-5">
              <div className="text-xs uppercase tracking-widest text-gold">Our workshop</div>
              <div className="font-heading text-white font-semibold text-lg">Kurla West · Mumbai · Maharashtra</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
