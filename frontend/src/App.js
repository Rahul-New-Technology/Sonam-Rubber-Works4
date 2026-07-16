import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import BackToTop from "./components/common/BackToTop";
import ScrollToTop from "./components/common/ScrollToTop";
import lazyRetry from "./lib/lazyRetry";
import "./App.css";

// Code-splitting: every route is a lazy chunk
const Home = lazy(() => lazyRetry(() => import("./pages/Home"), "Home"));
const About = lazy(() => lazyRetry(() => import("./pages/About"), "About"));
const Products = lazy(() => lazyRetry(() => import("./pages/Products"), "Products"));
const ProductDetail = lazy(() => lazyRetry(() => import("./pages/ProductDetail"), "ProductDetail"));
const Industries = lazy(() => lazyRetry(() => import("./pages/Industries"), "Industries"));
const Manufacturing = lazy(() => lazyRetry(() => import("./pages/Manufacturing"), "Manufacturing"));
const Quality = lazy(() => lazyRetry(() => import("./pages/Quality"), "Quality"));
const Certifications = lazy(() => lazyRetry(() => import("./pages/Certifications"), "Certifications"));
const Gallery = lazy(() => lazyRetry(() => import("./pages/Gallery"), "Gallery"));
const FAQ = lazy(() => lazyRetry(() => import("./pages/FAQ"), "FAQ"));
const Contact = lazy(() => lazyRetry(() => import("./pages/Contact"), "Contact"));
const Privacy = lazy(() => lazyRetry(() => import("./pages/Privacy"), "Privacy"));
const Terms = lazy(() => lazyRetry(() => import("./pages/Terms"), "Terms"));
const NotFound = lazy(() => lazyRetry(() => import("./pages/NotFound"), "NotFound"));

// Named exports live in Blog.jsx (Blog + BlogPost)
const Blog = lazy(() =>
  lazyRetry(async () => ({ default: (await import("./pages/Blog")).Blog }), "Blog")
);
const BlogPost = lazy(() =>
  lazyRetry(async () => ({ default: (await import("./pages/Blog")).BlogPost }), "BlogPost")
);

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="flex items-center gap-3 text-navy">
        <i className="fa-solid fa-circle-notch fa-spin text-2xl text-brand"></i>
        <span className="font-heading font-medium">Loading…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/manufacturing-process" element={<Manufacturing />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
      <BackToTop />
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}
