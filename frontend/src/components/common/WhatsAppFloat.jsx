import { COMPANY, waLink } from "../../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${COMPANY.name} on WhatsApp`}
      data-testid="whatsapp-float"
      className="fixed z-40 right-5 bottom-5 md:right-7 md:bottom-7 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform"
    >
      <i className="fa-brands fa-whatsapp text-[28px]" aria-hidden="true"></i>
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" aria-hidden="true"></span>
    </a>
  );
}
