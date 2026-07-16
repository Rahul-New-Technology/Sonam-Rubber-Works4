import { useState } from "react";
import { toast } from "sonner";
import { COMPANY, waLink } from "../../data/site";

const SHEETS_URL = process.env.REACT_APP_SHEETS_URL || "";

const initial = { name: "", company: "", phone: "", email: "", product: "", quantity: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || form.name.trim().length < 2) return "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!/^[\d+\-\s()]{7,20}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.product.trim()) return "Please describe the product requirement.";
    if (!form.message.trim() || form.message.trim().length < 5) return "Please add a short message.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const err = validate();
    if (err) { toast.error(err); return; }

    setLoading(true);
    try {
      if (!SHEETS_URL) {
        // Fallback: no endpoint configured yet — send buyer to WhatsApp
        toast.success(
          "Thank you for contacting Sonam Rubber Works. Redirecting you to WhatsApp so we can serve you faster.",
          { duration: 4500 }
        );
        setTimeout(() => window.open(waLink(), "_blank", "noopener,noreferrer"), 800);
        setForm(initial);
        return;
      }

      // Google Apps Script Web App — use text/plain to avoid CORS pre-flight.
      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        product: form.product.trim(),
        quantity: form.quantity.trim(),
        message: form.message.trim(),
        submitted_at: new Date().toISOString(),
        source: window.location.hostname || "website",
      };
      const res = await fetch(SHEETS_URL, {
        method: "POST",
        mode: "cors",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      // Apps Script returns { ok: true } on success. Any non-throw fetch counts as delivered.
      let ok = res.ok;
      try {
        const data = await res.json();
        if (data && data.ok === false) ok = false;
      } catch { /* apps script may not return JSON body — treat as ok */ }

      if (!ok) throw new Error("Submission rejected");

      toast.success("Thank you for contacting Sonam Rubber Works. Our team will get back to you shortly.");
      setForm(initial);
    } catch (e2) {
      console.error("contact submit failed", e2);
      toast.error(`Sorry — something went wrong. Please WhatsApp us on ${COMPANY.phone}.`);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-md border border-line bg-white text-navy placeholder:text-muted2/70 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition disabled:bg-gray-50";

  return (
    <form onSubmit={onSubmit} className="rt-card p-6 md:p-8 space-y-4" data-testid="contact-form" aria-label="Enquiry form">
      <fieldset disabled={loading} className="contents">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-navy font-medium">Full Name *</label>
            <input id="name" name="name" value={form.name} onChange={onChange} className={`${inputCls} mt-1`} placeholder="Your full name" required data-testid="input-name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="company" className="text-sm text-navy font-medium">Company Name</label>
            <input id="company" name="company" value={form.company} onChange={onChange} className={`${inputCls} mt-1`} placeholder="Company name" data-testid="input-company" autoComplete="organization" />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm text-navy font-medium">Phone Number *</label>
            <input id="phone" name="phone" value={form.phone} onChange={onChange} className={`${inputCls} mt-1`} placeholder="+91 98765 43210" required data-testid="input-phone" autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-navy font-medium">Email *</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange} className={`${inputCls} mt-1`} placeholder="you@company.com" required data-testid="input-email" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="product" className="text-sm text-navy font-medium">Product Requirement *</label>
            <input id="product" name="product" value={form.product} onChange={onChange} className={`${inputCls} mt-1`} placeholder='e.g. Rubber Gasket 4" DN100 EPDM' required data-testid="input-product" />
          </div>
          <div>
            <label htmlFor="quantity" className="text-sm text-navy font-medium">Quantity</label>
            <input id="quantity" name="quantity" value={form.quantity} onChange={onChange} className={`${inputCls} mt-1`} placeholder="e.g. 500 nos / monthly" data-testid="input-quantity" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-navy font-medium">Message *</label>
          <textarea id="message" name="message" value={form.message} onChange={onChange} rows={5} className={`${inputCls} mt-1 resize-y`} placeholder="Please describe your requirement — material grade, dimensions, drawing/sample availability, target application, delivery city…" required data-testid="input-message"></textarea>
        </div>
      </fieldset>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed" data-testid="submit-contact" aria-busy={loading}>
        {loading ? <><i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Sending…</> : <><i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Send Enquiry</>}
      </button>
      <p className="text-xs text-muted2 text-center">By submitting, you agree to our <a href="/privacy-policy" className="text-brand underline">privacy policy</a>. Enquiries are recorded to a Google Sheet — we never share your details with third parties.</p>
    </form>
  );
}
