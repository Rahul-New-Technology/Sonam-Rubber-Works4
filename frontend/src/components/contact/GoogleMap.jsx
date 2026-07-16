import { COMPANY } from "../../data/site";

export default function GoogleMap() {
  return (
    <div className="rt-card overflow-hidden" data-testid="google-map">
      <iframe
        title="Sonam Rubber Works location — Sakinaka, Kurla West, Mumbai"
        src={COMPANY.mapEmbed}
        width="100%"
        height="360"
        loading="lazy"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
