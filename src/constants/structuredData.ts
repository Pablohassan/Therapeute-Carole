const sharedAddress = {
  "@type": "PostalAddress",
  streetAddress: "192 Rue de Pessac",
  addressLocality: "Bordeaux",
  postalCode: "33000",
  addressCountry: "FR",
  addressRegion: "Nouvelle-Aquitaine",
};

const sharedGeo = {
  "@type": "GeoCoordinates",
  latitude: 44.8332,
  longitude: -0.5922,
};

const sharedOpeningHours = [
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
];

const sharedAreaServed = [
  { "@type": "City", name: "Bordeaux" },
  { "@type": "City", name: "Talence" },
  { "@type": "State", name: "Nouvelle-Aquitaine" },
];

export const therapyPracticeData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "HealthAndBeautyBusiness"],
  name: "Carole Lagardère - Thérapeute Familiale",
  alternateName: "Cabinet de Thérapie Familiale Carole Lagardère Bordeaux Talence",
  description:
    "Carole Lagardère, thérapeute familiale systémique certifiée EFTA, vous accompagne à Bordeaux (limite Talence) dans vos thérapies familiales, de couple et individuelles. Plus de 20 ans d'expérience en protection de l'enfance et accompagnement familial.",
  image: "https://www.carole-lagardere.fr/assets/therapist.webp",
  url: "https://www.carole-lagardere.fr",
  telephone: "+33 7 78 24 09 60",
  email: "therapie@carole-lagardere.fr",
  address: sharedAddress,
  geo: sharedGeo,
  areaServed: sharedAreaServed,
  openingHoursSpecification: sharedOpeningHours,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Check",
  sameAs: ["https://www.linkedin.com/in/carole-lagardere-ba828b33a/"],
  founder: {
    "@type": "Person",
    name: "Carole Lagardère",
    jobTitle: "Thérapeute Familiale Systémique",
    description:
      "Thérapeute familiale systémique certifiée EFTA avec plus de 20 ans d'expérience dans la protection de l'enfance et l'accompagnement familial.",
    knowsAbout: [
      "Thérapie familiale systémique",
      "Thérapie de couple",
      "Thérapie individuelle",
      "Soutien à la parentalité",
      "Protection de l'enfance",
      "Communication familiale",
      "Résolution de conflits",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification professionnelle",
      recognizedBy: {
        "@type": "Organization",
        name: "European Family Therapy Association (EFTA)",
        url: "https://www.europeanfamilytherapy.eu/",
      },
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de thérapie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thérapie Familiale",
          description:
            "Séances de thérapie familiale systémique de 60 à 90 minutes pour améliorer la communication et résoudre les conflits familiaux.",
          url: "https://www.carole-lagardere.fr/family",
        },
        price: "70.00",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thérapie de Couple",
          description:
            "Séances de thérapie de couple de 60 à 90 minutes pour améliorer la relation, la communication et renforcer les liens affectifs.",
          url: "https://www.carole-lagardere.fr/couple",
        },
        price: "70.00",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thérapie Individuelle",
          description:
            "Séances individuelles de 60 minutes pour adultes, adolescents et enfants. Développement personnel et gestion des émotions.",
          url: "https://www.carole-lagardere.fr/individuel",
        },
        price: "70.00",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soutien à la Parentalité",
          description:
            "Accompagnement parental de 60 minutes pour améliorer la relation parent-enfant et développer des stratégies éducatives.",
          url: "https://www.carole-lagardere.fr/individuel",
        },
        price: "70.00",
        priceCurrency: "EUR",
      },
    ],
  },
};

export const therapyServiceData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Thérapie Familiale",
  alternateName: "Psychothérapie Familiale Systémique",
  provider: {
    "@type": "ProfessionalService",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
    address: sharedAddress,
    geo: sharedGeo,
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
  areaServed: sharedAreaServed,
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
  alternateName: "Thérapie Conjugale Systémique",
  provider: {
    "@type": "ProfessionalService",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
    address: sharedAddress,
    geo: sharedGeo,
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
  areaServed: sharedAreaServed,
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
  alternateName: "Accompagnement Parental Systémique",
  provider: {
    "@type": "ProfessionalService",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
    address: sharedAddress,
    geo: sharedGeo,
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
  areaServed: sharedAreaServed,
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

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la thérapie familiale systémique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La thérapie familiale systémique est une approche thérapeutique qui considère l'individu dans son contexte relationnel et familial. Plutôt que de se concentrer uniquement sur un individu, elle analyse les interactions et les dynamiques entre les membres de la famille pour comprendre et résoudre les difficultés. Carole Lagardère pratique cette approche validée scientifiquement et reconnue par l'EFTA (European Family Therapy Association).",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les tarifs des consultations avec Carole Lagardère ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les consultations de thérapie familiale, de couple, individuelle et de soutien à la parentalité sont au tarif de 70€ la séance. Les séances durent entre 60 et 90 minutes selon le type de thérapie. Les consultations ne sont pas remboursées par la Sécurité sociale, mais certaines mutuelles peuvent prendre en charge une partie des frais.",
      },
    },
    {
      "@type": "Question",
      name: "Où se trouve le cabinet de Carole Lagardère ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le cabinet de Carole Lagardère est situé au 192 Rue de Pessac, 33000 Bordeaux, à la limite de Talence. Des consultations en visio sont également disponibles pour les personnes éloignées.",
      },
    },
    {
      "@type": "Question",
      name: "Comment prendre rendez-vous avec Carole Lagardère ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez prendre rendez-vous par téléphone au +33 7 78 24 09 60, par email à therapie@carole-lagardere.fr, ou directement en ligne via Calendly pour les consultations en visio. Le cabinet est ouvert du lundi au vendredi.",
      },
    },
    {
      "@type": "Question",
      name: "Les consultations en visio sont-elles possibles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Carole Lagardère propose des consultations en visio pour toutes ses prestations (thérapie familiale, de couple, individuelle, soutien à la parentalité). Vous pouvez réserver directement en ligne via la plateforme Calendly accessible depuis le site web.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un thérapeute familial et un psychologue ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un thérapeute familial systémique se spécialise dans les dynamiques relationnelles et familiales, en considérant l'individu dans son contexte d'interactions. Un psychologue clinicien se concentre davantage sur les processus psychiques individuels. Carole Lagardère, en tant que thérapeute familiale certifiée EFTA, propose une approche complémentaire centrée sur les relations et la communication au sein du système familial.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de problèmes la thérapie de couple peut-elle traiter ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La thérapie de couple peut aider à résoudre de nombreuses difficultés : problèmes de communication, conflits récurrents, infidélité, perte de désir, difficultés liées à la parentalité, gestion des crises, questionnement sur l'avenir du couple, et accompagnement lors de séparations. L'approche systémique permet de comprendre les mécanismes relationnels et de trouver des solutions durables.",
      },
    },
    {
      "@type": "Question",
      name: "La thérapie familiale est-elle adaptée aux adolescents ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la thérapie familiale systémique est particulièrement adaptée aux situations impliquant des adolescents. Elle permet de travailler sur la communication parent-adolescent, les conflits intergénérationnels, les difficultés scolaires, les comportements à risque et les crises d'adolescence, tout en tenant compte du contexte familial global.",
      },
    },
  ],
};

export const breadcrumbData = (pageName: string, pageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.carole-lagardere.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: `https://www.carole-lagardere.fr${pageUrl}`,
    },
  ],
});

export const individualTherapyData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Thérapie Individuelle",
  alternateName: "Psychothérapie Individuelle Systémique",
  provider: {
    "@type": "ProfessionalService",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
    address: sharedAddress,
    geo: sharedGeo,
  },
  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Thérapie Systémique",
  },
  serviceType: "Thérapie Individuelle",
  areaServed: sharedAreaServed,
  description:
    "Accompagnement thérapeutique individuel pour adultes, adolescents et enfants. Développement personnel, gestion des émotions, difficultés relationnelles et soutien psychologique avec une approche systémique.",
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.carole-lagardere.fr/individuel",
  },
};

export const parentingSupportData = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Soutien à la Parentalité",
  alternateName: "Accompagnement Parental Systémique",
  provider: {
    "@type": "ProfessionalService",
    name: "Carole Lagardère - Thérapeute Familiale",
    url: "https://www.carole-lagardere.fr",
    address: sharedAddress,
    geo: sharedGeo,
  },
  serviceType: "Soutien à la Parentalité",
  areaServed: sharedAreaServed,
  description:
    "Accompagnement des parents dans leur rôle éducatif. Aide à la relation parent-enfant, mobilisation des ressources parentales, stratégies éducatives adaptées aux besoins de chaque famille.",
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.carole-lagardere.fr/individuel",
  },
};
