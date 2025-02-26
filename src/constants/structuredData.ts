export const therapyPracticeData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Carole Lagardère - Thérapeute Familiale",
  image: "https://www.carole-lagardere.com/assets/therapist.webp",
  url: "https://www.carole-lagardere.com",
  ephone: "+33 7 78 24 09 60", // Add your phone number
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Rue Example", // Add your address
    addressLocality: "Talence", // Add your city
    postalCode: "33400", // Add your postal code
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.8378, // Add your coordinates
    longitude: -0.5792, // Add your coordinates
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  priceRange: "€€",
  sameAs: [
    "https://www.facebook.com/yourpag", // Add your social media links
    "https://www.linkedin.com/in/yourprofile",
  ],
};

export const therapyServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Thérapie Familiale",
  provider: {
    "@type": "HealthBusiness",
    name: "Carole Lagardère - Thérapeute Familiale",
  },
  serviceType: "Thérapie Familiale",
  areaServed: {
    "@type": "City",
    name: "Talence",
  },
  description:
    "Thérapie familiale systémique pour améliorer le fonctionnement familial et la communication entre les membres de la famille.",
  offers: {
    "@type": "Offer",
    price: "70.00", // Add your price
    priceCurrency: "EUR",
  },
};
