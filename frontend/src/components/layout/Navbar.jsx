import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { COMPANY } from "../../data/site";

const LINKS = [
  { to: "/", label: "Home", icon: "fa-house" },
  { to: "/about", label: "About", icon: "fa-users" },
  { to: "/products", label: "Products", icon: "fa-cube" },
  { to: "/industries", label: "Industries", icon: "fa-industry" },
  { to: "/manufacturing-process", label: "Process", icon: "fa-gears" },
  { to: "/quality", label: "Quality", icon: "fa-shield-halved" },
  { to: "/certifications", label: "Trust", icon: "fa-certificate" },
  { to: "/gallery", label: "Gallery", icon: "fa-images" },
  { to: "/blog", label: "Blog", icon: "fa-newspaper" },
  { to: "/faq", label: "FAQ", icon: "fa-circle-question" },
  { to: "/contact", label: "Contact", icon: "fa-phone" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header data-testid="site-navbar" className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="hidden md:block bg-navy text-white/85 text-xs">
        <div className="container-x flex justify-between items-center py-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-gold transition-colors" data-testid="topbar-phone">
              <i className="fa-solid fa-phone mr-2 text-gold" aria-hidden="true"></i>{COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-gold transition-colors" data-testid="topbar-email">
              <i className="fa-solid fa-envelope mr-2 text-gold" aria-hidden="true"></i>{COMPANY.email}
            </a>
            <span className="hidden lg:inline"><i className="fa-solid fa-file-invoice mr-2 text-gold" aria-hidden="true"></i>GSTIN: {COMPANY.gstin}</span>
          </div>
          <div className="flex items-center gap-3">
            <span><i className="fa-solid fa-clock mr-2 text-gold" aria-hidden="true"></i>{COMPANY.hours}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-white border-b border-line transition-shadow ${scrolled ? "shadow-md" : ""}`} aria-label="Primary navigation">
        <div className="container-x flex items-center justify-between h-[76px] gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0" data-testid="nav-logo" aria-label="Sonam Rubber Works — home">
            <img
              src="/logo.png"
              alt="Sonam Rubber Works logo"
              width="52" height="52"
              className="w-[52px] h-[52px] object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-heading font-bold text-navy text-[17px]">Sonam Rubber Works</div>
              <div className="text-[10px] text-muted2 tracking-widest uppercase">Rubber Manufacturer · Mumbai</div>
            </div>
          </Link>

          <ul className="hidden 2xl:flex items-center gap-0.5">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  data-testid={`nav-${l.to.replace(/\//g, "") || "home"}`}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `px-2.5 py-2 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap ${
                      isActive ? "text-navy bg-gold/20" : "text-navy/80 hover:text-navy hover:bg-gray-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Compact desktop nav (lg to xl) */}
          <ul className="hidden lg:flex 2xl:hidden items-center gap-0.5">
            {LINKS.filter((l) => ["/", "/about", "/products", "/industries", "/blog", "/contact"].includes(l.to)).map((l) => (
              <li key={l.to}>
                <NavLink
                  data-testid={`nav-compact-${l.to.replace(/\//g, "") || "home"}`}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                      isActive ? "text-navy bg-gold/20" : "text-navy/80 hover:text-navy hover:bg-gray-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="relative group">
              <button className="px-3 py-2 text-sm font-medium rounded-md text-navy/80 hover:text-navy hover:bg-gray-50" data-testid="nav-more">
                More <i className="fa-solid fa-chevron-down text-[10px] ml-1"></i>
              </button>
              <div className="absolute right-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <div className="bg-white border border-line rounded-md shadow-lg py-2 min-w-[200px]">
                  {LINKS.filter((l) => ["/manufacturing-process", "/quality", "/certifications", "/gallery", "/faq"].includes(l.to)).map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-navy/85 hover:bg-gold/15 hover:text-navy"
                    >
                      <i className={`fa-solid ${l.icon} text-brand w-4 text-center`} aria-hidden="true"></i>
                      {l.label === "Trust" ? "Business Trust" : l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a href={`tel:${COMPANY.phoneRaw}`} className="btn-dark text-sm whitespace-nowrap" data-testid="nav-call-btn" aria-label={`Call ${COMPANY.phone}`}>
              <i className="fa-solid fa-phone" aria-hidden="true"></i> Call
            </a>
            <Link to="/contact" className="btn-primary text-sm whitespace-nowrap" data-testid="nav-quote-btn">
              <i className="fa-solid fa-file-lines" aria-hidden="true"></i> Get Quote
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-line"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="mobile-menu-toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-white" data-testid="mobile-menu">
            <ul className="container-x py-3 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-3 rounded-md text-navy ${
                        isActive ? "bg-gold/20" : "hover:bg-gray-50"
                      }`
                    }
                    data-testid={`mobile-nav-${l.to.replace(/\//g, "") || "home"}`}
                  >
                    <i className={`fa-solid ${l.icon} text-brand w-5 text-center`} aria-hidden="true"></i>
                    <span className="font-medium">{l.label === "Trust" ? "Business Trust" : l.label}</span>
                  </NavLink>
                </li>
              ))}
              <li className="sm:col-span-2 mt-2 grid grid-cols-2 gap-2">
                <a href={`tel:${COMPANY.phoneRaw}`} className="btn-dark w-full justify-center" data-testid="mobile-call-btn"><i className="fa-solid fa-phone"></i> Call Now</a>
                <Link to="/contact" className="btn-primary w-full justify-center" data-testid="mobile-quote-btn"><i className="fa-solid fa-file-lines"></i> Get Quote</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
