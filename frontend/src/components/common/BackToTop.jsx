import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      data-testid="back-to-top"
      className="fixed z-40 right-5 bottom-24 md:right-7 md:bottom-28 w-11 h-11 rounded-full bg-navy text-gold border border-white/10 shadow-lg hover:bg-brand transition-colors flex items-center justify-center"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
