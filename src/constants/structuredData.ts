export const therapyPracticeData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Carole Lagardère - Thérapeute Familiale",
  image: "https://www.carole-lagardere.fr/assets/therapist.webp",
  url: "https://www.carole-lagardere.fr",
  telephone: "+33 7 78 24 09 60",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184 cours du Maréchal Gallieni",
    addressLocality: "Talence",
    postalCode: "33400",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.820372403613234,
    longitude: -0.5960509166141641,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "08:30",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "08:30",
      closes: "19:30",
    },
  ],
  priceRange: "€€",
  sameAs: ["https://www.linkedin.com/in/carole-lagardere-ba828b33a/"],
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
    price: "70.00",
    priceCurrency: "EUR",
  },
};
