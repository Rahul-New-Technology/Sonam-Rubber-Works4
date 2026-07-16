import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductGrid from "../components/products/ProductGrid";
import ManufacturingSteps from "../components/home/ManufacturingSteps";
import IndustriesGrid from "../components/home/IndustriesGrid";
import CertBar from "../components/home/CertBar";
import TrustBar from "../components/home/TrustBar";
import CTA from "../components/common/CTA";
import { COMPANY } from "../data/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sonamrubberworks.com/#business",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    image: "https://sonamrubberworks.com/logo.png",
    url: "https://sonamrubberworks.com/",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "₹₹",
    taxID: COMPANY.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-2, Good India, Shiv Shakti Society, Netaji Nagar, Khadi No. 3, Sakinaka, Kurla West",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
    ],
    areaServed: "India",
  };
  return (
    <>
      <SEO
        title="Sonam Rubber Works — Rubber Products Manufacturer in Mumbai"
        description="Sonam Rubber Works is a GST registered rubber products manufacturer in Mumbai. Rubber gaskets, bushes, seals, O-rings, washers, sheets and custom moulded rubber parts."
        keywords="rubber products manufacturer mumbai, industrial rubber products, rubber gasket manufacturer, rubber bush manufacturer, rubber o-ring manufacturer, custom rubber parts, rubber sheet manufacturer, rubber washer manufacturer, rubber seal manufacturer, sonam rubber works"
        path="/"
        schema={schema}
      />
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <ProductGrid compact />
      <ManufacturingSteps />
      <IndustriesGrid compact />
      <CertBar />
      <CTA />
    </>
  );
}
