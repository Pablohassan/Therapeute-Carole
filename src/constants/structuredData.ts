export const therapyPracticeData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Carole Lagardère - Thérapeute Familiale",
  description:
    "Carole Lagardère, thérapeute familiale systémique certifiée EFTA, vous accompagne à Talence dans vos thérapies familiales, de couple et individuelles.",
  image: "https://www.carole-lagardere.fr/assets/therapist.webp",
  url: "https://www.carole-lagardere.fr",
  telephone: "+33 7 78 24 09 60",
  address: {
    "@type": "PostalAddress",
    streetAddress: "184 cours du Maréchal Gallieni",
    addressLocality: "Talence",
    postalCode: "33400",
    addressCountry: "FR",
    addressRegion: "Nouvelle-Aquitaine",
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
      dayOfWeek: ["Tuesday"],
      opens: "08:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday"],
      opens: "08:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "08:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:30",
      closes: "19:30",
    },
  ],
  priceRange: "€€",
  sameAs: ["https://www.linkedin.com/in/carole-lagardere-ba828b33a/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de thérapie",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Thérapie Familiale",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultation de thérapie familiale",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Thérapie de Couple",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultation de thérapie de couple",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Thérapie Individuelle",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultation de thérapie individuelle",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Soutien à la Parentalité",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultation de soutien à la parentalité",
            },
          },
        ],
      },
    ],
  },
};

export const therapyServiceData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Thérapie Familiale",
  alternateName: "Psychothérapie Familiale",
  provider: {
    "@type": "HealthBusiness",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
  },
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Systémique",
  },
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Familiale",
  },
  serviceType: "Thérapie Familiale",
  areaServed: [
    {
      "@type": "City",
      name: "Talence",
    },
    {
      "@type": "City",
      name: "Bordeaux",
    },
    {
      "@type": "State",
      name: "Nouvelle-Aquitaine",
    },
  ],
  description:
    "Thérapie familiale systémique pour améliorer le fonctionnement familial et la communication entre les membres de la famille.",
  procedureType: "Thérapeutique",
  followup: "Séances régulières adaptées aux besoins de la famille",
  howPerformed:
    "Séances de 60 à 90 minutes en présence des membres de la famille",
  preparation: "Aucune préparation spécifique requise",
  procedure:
    "Exploration des dynamiques familiales, amélioration de la communication, résolution de conflits",
  recognizingAuthority: "European Family Therapy Association (EFTA)",
  status: "Établie",
  study: [
    {
      "@type": "MedicalStudy",
      description:
        "Études démontrant l'efficacité de la thérapie familiale systémique",
    },
  ],
  guideline: {
    "@type": "MedicalGuideline",
    evidenceLevel: "B",
    evidenceOrigin: "Études cliniques",
    guidelineSubject: {
      "@type": "MedicalEntity",
      name: "Thérapie Familiale",
    },
  },
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.carole-lagardere.fr/family",
    validFrom: "2023-01-01",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Familles, Couples, Individus",
  },
  serviceOutput:
    "Amélioration du fonctionnement familial et de la communication",
  termsOfService: "https://www.carole-lagardere.fr/conditions-generales",
};

export const coupleTherapyServiceData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Thérapie de Couple",
  alternateName: "Thérapie Conjugale",
  provider: {
    "@type": "HealthBusiness",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
  },
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Systémique",
  },
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Conjugale",
  },
  serviceType: "Thérapie de Couple",
  areaServed: [
    {
      "@type": "City",
      name: "Talence",
    },
    {
      "@type": "City",
      name: "Bordeaux",
    },
    {
      "@type": "State",
      name: "Nouvelle-Aquitaine",
    },
  ],
  description:
    "La thérapie de couple vise à transformer votre relation pour vous permettre de vous sentir plus satisfaits et épanouis. Elle aide à améliorer la communication, à résoudre les conflits et à renforcer les liens affectifs.",
  procedureType: "Thérapeutique",
  followup: "Séances régulières adaptées aux besoins du couple",
  howPerformed: "Séances de 60 à 90 minutes en présence des deux partenaires",
  preparation: "Aucune préparation spécifique requise",
  procedure:
    "Exploration de la dynamique relationnelle, amélioration de la communication, résolution de conflits",
  recognizingAuthority: "European Family Therapy Association (EFTA)",
  status: "Établie",
  study: [
    {
      "@type": "MedicalStudy",
      description:
        "Études démontrant l'efficacité de la thérapie de couple systémique",
    },
  ],
  guideline: {
    "@type": "MedicalGuideline",
    evidenceLevel: "B",
    evidenceOrigin: "Études cliniques",
    guidelineSubject: {
      "@type": "MedicalEntity",
      name: "Thérapie de Couple",
    },
  },
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.carole-lagardere.fr/couple",
    validFrom: "2023-01-01",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType:
      "Couples en difficulté, couples en crise, couples souhaitant améliorer leur relation",
  },
  serviceOutput: "Amélioration de la relation conjugale et de la communication",
  termsOfService: "https://www.carole-lagardere.fr/conditions-generales",
};

export const parentingSupportServiceData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Soutien à la Parentalité",
  alternateName: "Accompagnement Parental",
  provider: {
    "@type": "HealthBusiness",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
  },
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Systémique",
  },
  relevantSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Accompagnement Parental",
  },
  serviceType: "Soutien à la Parentalité",
  areaServed: [
    {
      "@type": "City",
      name: "Talence",
    },
    {
      "@type": "City",
      name: "Bordeaux",
    },
    {
      "@type": "State",
      name: "Nouvelle-Aquitaine",
    },
  ],
  description:
    "Accompagnement et soutien des parents dans leur rôle éducatif, aide à la mobilisation des ressources parentales et amélioration de la relation parent-enfant.",
  procedureType: "Consultation de soutien",
  followup: "Séances régulières ou ponctuelles selon les besoins",
  howPerformed: "Séances de 60 minutes avec les parents ou la famille",
  preparation: "Aucune préparation spécifique requise",
  procedure:
    "Écoute active, conseils éducatifs, stratégies relationnelles, mobilisation des ressources parentales",
  recognizingAuthority: "European Family Therapy Association (EFTA)",
  status: "Établie",
  study: [
    {
      "@type": "MedicalStudy",
      description: "Études démontrant l'efficacité du soutien à la parentalité",
    },
  ],
  guideline: {
    "@type": "MedicalGuideline",
    evidenceLevel: "B",
    evidenceOrigin: "Études cliniques",
    guidelineSubject: {
      "@type": "MedicalEntity",
      name: "Soutien à la Parentalité",
    },
  },
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.carole-lagardere.fr/individuel",
    validFrom: "2023-01-01",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType:
      "Parents rencontrant des difficultés éducatives, familles cherchant un accompagnement",
  },
  serviceOutput:
    "Amélioration des pratiques parentales et de la relation parent-enfant",
  termsOfService: "https://www.carole-lagardere.fr/conditions-generales",
};
