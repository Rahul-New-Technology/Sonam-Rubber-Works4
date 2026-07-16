import Breadcrumb from "./Breadcrumb";

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section
      className="relative bg-navy text-white overflow-hidden hero-grain"
      data-testid="page-header"
    >
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=70&auto=format')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" aria-hidden />
      <div className="container-x relative py-16 md:py-20">
        {breadcrumbs.length > 0 && <div className="mb-4"><Breadcrumb items={breadcrumbs} /></div>}
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-white/75 max-w-3xl text-base md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
