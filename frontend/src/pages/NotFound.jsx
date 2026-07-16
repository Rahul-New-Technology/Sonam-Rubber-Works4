import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="Sorry, the page you're looking for doesn't exist." path="/404" />
      <section className="min-h-[70vh] flex items-center bg-navy text-white hero-grain">
        <div className="container-x text-center py-20">
          <div className="text-[120px] md:text-[180px] font-heading font-black leading-none text-gold">404</div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mt-2">Page not found</h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto">The page you were looking for has moved or no longer exists. Let&apos;s get you back on track.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/" className="btn-primary" data-testid="404-home">Back to Home</Link>
            <Link to="/products" className="btn-outline">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
