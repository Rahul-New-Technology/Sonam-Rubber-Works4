import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Sonam Rubber Works — Rubber Products Manufacturer in Mumbai",
  description = "Sonam Rubber Works is a GST registered rubber products manufacturer in Kurla West, Mumbai. Rubber gaskets, bushes, seals, O-rings, washers, sheets and custom moulded rubber components.",
  keywords = "rubber products manufacturer mumbai, industrial rubber products, rubber gasket manufacturer, rubber bush manufacturer, rubber o-ring manufacturer, custom rubber parts, sonam rubber works",
  image = "https://sonamrubberworks.com/logo.png",
  path = "/",
  schema,
}) {
  const url = `https://sonamrubberworks.com${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
