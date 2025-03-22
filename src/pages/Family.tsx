// src/pages/Family.tsx
import React, { useEffect, useState, useCallback } from 'react';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import BookingSection from '../components/BookingSection';
import { sectionIds } from '../constants/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LongPressHover } from '../components/LongPressHover';

import { useIsMobile } from '../hooks/useIsMobile';
import livingroomImage from '../assets/carole-lagardere-therapeute-talence-illustration-family.jpg';
import couplelaptopImage from '../assets/carole-lagardere-therapeute-talence-comunication-famille.jpg';
import homefamily from '../assets/carole-lagardere-therapeute-talence-family-home.jpeg';
import homefamilyMobile from '../assets/carole-lagardere-therapeute-famille-talence-mobile.jpeg'
import famille from '../assets/carole-lagardere-therapeute-talence-image-illustration-famille.jpg';

// Standardize section padding and margins
const sectionClasses = "py-12 md:py-20 px-4 md:px-8 mx-auto flex flex-col justify-center";
const containerClasses = "container mx-auto";

const FamilyPage: React.FC = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();
    const isMobile = useIsMobile();

    // Create transform functions for parallax effect
    const y = useTransform(scrollY, [0, windowHeight], [0, 200]);
    const backgroundOpacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);
    // Button subtle movement for parallax effect
    const buttonY = useTransform(scrollY, [0, windowHeight], [0, 100]);

    // Handle window resize
    const handleResize = useCallback(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        // Get window height for parallax calculations
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Create enhanced specific service data for family therapy
    const familyTherapyData = {
        ...therapyServiceData,
        "@type": "MedicalTherapy",
        "name": "Thérapie Familiale Systémique",
        "alternateName": "Thérapie Familiale",
        "medicalSpecialty": {
            "@type": "MedicalSpecialty",
            "name": "Thérapie Systémique"
        },
        "relevantSpecialty": {
            "@type": "MedicalSpecialty",
            "name": "Thérapie Familiale"
        },
        "description": "La thérapie familiale systémique vise l'amélioration du fonctionnement familial, la revalorisation de la compréhension mutuelle et du soutien émotionnel entre les membres de la famille. Elle permet de résoudre les conflits et d'améliorer la communication.",
        "procedureType": "Thérapeutique",
        "followup": "Séances régulières adaptées aux besoins de la famille",
        "howPerformed": "Séances de 60 à 90 minutes en présence de plusieurs membres de la famille",
        "preparation": "Aucune préparation spécifique requise",
        "procedure": "Exploration des dynamiques familiales, amélioration de la communication, résolution de conflits",
        "recognizingAuthority": "European Family Therapy Association (EFTA)",
        "status": "Établie",
        "study": [
            {
                "@type": "MedicalStudy",
                "description": "Études démontrant l'efficacité de la thérapie familiale systémique"
            }
        ],
        "guideline": {
            "@type": "MedicalGuideline",
            "evidenceLevel": "B",
            "evidenceOrigin": "Études cliniques",
            "guidelineSubject": {
                "@type": "MedicalEntity",
                "name": "Thérapie Familiale Systémique"
            }
        },
        "audience": {
            "@type": "PeopleAudience",
            "audienceType": "Familles en difficulté, parents, enfants, adolescents"
        },
        "serviceType": "Thérapie Familiale",
        "serviceOutput": "Amélioration des relations familiales et de la communication",
        "offers": {
            "@type": "Offer",
            "price": "70.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.carole-lagardere.fr/family",
            "validFrom": "2023-01-01"
        }
    };

    return (
        <div className={`bg-[#AB4D8C]/30`}>
            <SEO
                title="Thérapie Familiale Systémique à Talence | Carole Lagardère"
                description="Consultations en thérapie familiale à Talence près de Bordeaux. Retrouvez l'harmonie familiale, améliorez la communication et résolvez les conflits avec une approche systémique personnalisée pour chaque famille."
                canonicalUrl="https://www.carole-lagardere.fr/family"
                ogImage="/carole-lagardere-therapeute-talence-family-home.jpeg"
                keywords={[
                    "thérapie familiale Talence",
                    "thérapie systémique Bordeaux",
                    "conflits familiaux résolution",
                    "communication famille amélioration",
                    "relation parent-enfant",
                    "thérapeute familial EFTA Talence",
                    "thérapie famille Bordeaux",
                    "problèmes adolescence",
                    "difficultés parentalité",
                    "dysfonctionnements familiaux",
                    "soutien familial Talence"
                ]}
                structuredData={familyTherapyData}
            />

            {/* Hero Section */}
            <section
                className="relative h-screen px-4 md:px-8 mx-auto flex flex-col justify-center overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        y,
                        opacity: backgroundOpacity,
                        backgroundImage: `url(${isMobile ? homefamilyMobile : homefamily})`,
                        backgroundSize: isMobile ? 'cover' : 'cover',
                        backgroundPosition: isMobile ? 'center center' : 'center'
                    }}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-opacity-40"></div>
                </motion.div>

                <div className={containerClasses + " max-w-6xl relative z-10"}>
                    <motion.div
                        className="relative text-center z-10 max-w-4xl mx-auto py-2 md:py-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase tracking-wider text-stone-900 mb-6 md:mb-16 "
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                        >
                            Thérapie Familiale Systémique
                        </h1>

                        <p className="text-lg md:text-2xl text-stone-960 mb-4 md:mb-8 italic font-medium sm:font-light leading-relaxed px-4 md:px-0"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)' }}
                        >
                            Comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant vos ressources et vos compétences.
                        </p>
                        <p className="text-lg md:text-2xl font-medium sm:font-light text-stone-900 mb-8 md:mb-12 italic font-light leading-relaxed px-4 md:px-0"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                        >
                            Accompagner, verbaliser, expérimenter le changement au sein de vos relations familiales.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{ y: buttonY }}
                        >
                            <LongPressHover
                                className="inline-block w-full md:w-1/2  rounded-sm font-medium w-full max-w-sm sm:max-w-md bg-[#FCF6E9]/70  md:border-2 border-1 border-[#AB4D8C] md:border-[#AB4D8C] px-4 md:px-8 py-4 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-stone-900 md:text-base transition-all duration-300 hover:bg-[#AB4D8C]/10 hover:text-stone-950 hover:font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                                hoverClassName="scale-105 bg-[#AB4D8C]/40 text-stone-900 font-semibold shadow-xl"
                                onClick={() => window.location.href = `#${sectionIds.booking}`}
                            >
                                Réserver un rendez-vous
                            </LongPressHover>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className={sectionClasses}>
                <div className={containerClasses + " max-w-5xl"}>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                            <img
                                src={famille}
                                alt="Communication familiale"
                                className="absolute inset-0 h-full w-full object-cover shadow-xl rounded-md"
                            />
                            <div className="absolute bottom-0 right-0 bg-black/20 text-white/70 text-xs px-1 py-[2px] rounded-tl-md">
                                © Bea Muller
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4 md:px-4 font-light">
                            <h2 className="md:block text-2xl md:text-3xl text-gray-900 font-medium tracking-wide mb-6">
                                La relation est au cœur de la thérapie
                            </h2>

                            <p className="text-lg text-gray-800 leading-relaxed">
                                Avec nos proches, nous éprouvons parfois une
                                forme d'appréhension à parler de nos émotions, de nos sentiments profonds.
                            </p>

                            <p className="text-lg text-gray-800 leading-relaxed">
                                La thérapie permet de faire vivre à la famille des échanges différents et offre à chacun la possibilité de s'exprimer, de se sentir entendu.
                            </p>

                            <p className="text-lg sm:text-xl sm:text-lg text-center md:text-left font-medium sm:font-medium italic mb-8">
                                "La famille est un lieu où les esprits se façonnent mutuellement avec patience et amour"
                            </p>

                            <div className="pt-2 md:pt-4 text-center">
                                <LongPressHover
                                    className="inline-block bg-[#AB4D8C] w-full md:w-1/2 px-8 md:px-12 py-4 md:py-5 rounded-sm text-stone-100 font-medium sm:font-medium uppercase border-2 border-[#AB4D8C] hover:text-[#AB4D8C] uppercase tracking-wider transition-all duration-500 shadow-md"
                                    hoverClassName="bg-[#FCF6E9] text-[#AB4D8C] shadow-xl"
                                    onClick={() => window.location.href = `#${sectionIds.booking}`}
                                >
                                    Faire le premier pas
                                </LongPressHover>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Therapeutic Approach Section */}
            <section className={sectionClasses}>
                <div className={containerClasses + " max-w-5xl"}>
                    <motion.div
                        className="py-8 md:py-16  md:px-6 text-stone-100 font-medium flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="container mx-auto p-4 md:p-6 md:max-w-[90%] bg-[#AB4D8C]/80 text-center mb-8 md:mb-12 rounded-md">
                            <p className="mx-auto text-xl md:text-2xl lg:text-2xl italic font-light leading-relaxed">
                                La thérapie familiale est un espace de rencontre, et d'échanges dans un environnement contenant et rassurant.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 mx-auto md:px-8 lg:grid-cols-3 gap-6 md:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:col-span-1">
                            <div className="relative">
                                <img
                                    src={livingroomImage}
                                    alt="Espace thérapeutique"
                                    className="w-full h-auto object-cover rounded-md shadow-md"
                                    loading="lazy"
                                    width="600"
                                    height="800"
                                />
                                <div className="absolute bottom-0 right-0 bg-black/30 text-white/80 text-xs px-1 py-[2px] rounded-tl-md">
                                    © Claire Ritchie
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4 pr-0 sm:pr-12 font-light">
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-2xl lg:text-3xl text-gray-900 font-medium">
                                    Chaque famille est unique.
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    En séance, le thérapeute porte une attention particulière aux besoins de chacun, à leurs
                                    expressions, à la manière dont la parole circule.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Il s'agit de faire un état des lieux et engager une réflexion sur les places et les rôles de chacun.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Le thérapeute s'adapte et tente de repérer et mobiliser les ressources,
                                    en faisant preuve de souplesse et de créativité.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Alternative Communication Section */}
            <section className={sectionClasses}>
                <div className={containerClasses + " max-w-4xl  md:px-8 font-light"}>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start md:items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-medium tracking-wide">
                                Parfois les mots sont usés...
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                Ils ont été trop entendus par la famille et ne provoquent plus de
                                réaction.
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed pt-4">
                                    La thérapie permet de créer la surprise et
                                    de changer les habitudes de communication, en invitant la famille à se raconter autrement
                                    ou en utilisant d'autres moyens d'expression, comme le langage du corps, le jeu.
                                </p>
                            </p>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                Le jeu en thérapie donne l'occasion de tisser des liens entre les
                                membres de la famille, de renforcer le sentiment d'appartenance, d'expliciter des émotions, des
                                ressentis, des représentations.
                            </p>
                        </div>

                        <div className="lg:col-span-1 order-1 lg:order-2 h-full">
                            <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                <img
                                    src={couplelaptopImage}
                                    alt="Communication familiale"
                                    className="absolute inset-0 h-full w-full object-cover shadow-md rounded-md"
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 right-0 bg-black/20 text-white/80 text-xs px-1 py-[2px] rounded-tl-md">
                                    © Anna Kovecses
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Practical Information Section */}
            <section className={sectionClasses}>
                <div className={containerClasses + " max-w-4xl"}>
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12 mt-0 md:mt-16">
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-medium tracking-wide text-gray-900 mb-0 md:mb-6">
                                Comment se déroule une thérapie familiale ?
                            </h2>
                            <div className="w-20 h-1 mx-auto"></div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-md shadow-md">
                            <p className="text-lg font-medium sm:font-light text-gray-600 leading-relaxed mb-6">
                                Une séance de thérapie familiale dure entre 60 et 90 minutes; l'intervalle entre les séances
                                varie de une à plusieurs semaines en fonction des problèmes présentés, des besoins des
                                membres de la famille, de l'étape du traitement et d'autres variables.
                            </p>

                            <p className="text-lg font-medium sm:font-light text-gray-600 leading-relaxed mb-6">
                                Les séances regroupent plusieurs membres de la famille mais les séances individuelles ou les
                                rencontres avec les parents (sans leur enfant par exemple) sont également proposées si cela
                                se révèle nécessaire.
                            </p>
                            <p className="text-lg font-medium sm:font-light text-gray-600 leading-relaxed mb-6">
                                La longueur et la configuration de la thérapie familiale est le résultat
                                d'une collaboration et d'un accord mutuel entre le thérapeute et la famille.
                            </p>
                        </div>

                        <div className="text-center mt-12">
                            <LongPressHover
                                className="inline-block w-full font-medium rounded-sm w-full md:w-1/2 bg-[#AB4D8C] md:border-2 border-1 border-[#AB4D8C] md:border-[#AB4D8C] px-4 md:px-16 py-4 md:py-6 mt-4 md:mt-8 text-stone-100 uppercase tracking-wider  hover:text-[#AB4D8C]  transition-all duration-300 ease-in-out"
                                hoverClassName="bg-[#FCF6E9] text-[#AB4D8C] shadow-xl"
                                onClick={() => window.location.href = `#${sectionIds.booking}`}
                            >
                                Réserver un rendez-vous
                            </LongPressHover>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Areas of Specialty Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 mx-auto flex flex-col justify-center">
                <div className={containerClasses + " max-w-6xl"}>
                    <motion.div
                        className="text-center mb-8 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl font-medium md:text-3xl font-light tracking-wide text-gray-900 mb-4 md:mb-8">
                                Motifs de consultation
                            </h2>
                            <div className="w-24 h-1 bg-[#AB4D8C]/60 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4">
                            {specialtyAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#FCF6E9] p-6 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: Math.min(index * 0.05, 0.3) // Limit maximum delay to 0.3s
                                    }}
                                    viewport={{ once: true, margin: "-50px" }} // Trigger animation earlier
                                >
                                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4 ">{area.title}</h3>
                                    <ul className="text-md md:text-base text-gray-600 list-none space-y-2 text-left">
                                        {area.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="pl-0">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Booking Section */}
            <BookingSection calendlyUrl="https://calendly.com/carolelagardere33/consultation" />
        </div>
    );
};

// Sample specialty areas data
const specialtyAreas = [
    {
        title: "ENFANCE",
        items: [
            "Difficultés scolaires",
            "Énurésie, encoprésie",
            "Trouble du comportement",
            "Difficulté d'endormissement/ cauchemars/terreur nocturne",
            "Gestion des émotions",
            "Anxiété/replis sur soi/isolement",
            "Dépendance aux écrans",
            "Peur de la séparation"
        ]
    },
    {
        title: "ADOLESCENCE ",
        items: [
            "Addictions / écrans",
            "Conflit",
            "Replis sur soi/isolement",
            "Mal être /anxiété",
            "Troubles alimentaires",
            "Gestion des émotions",
            "Difficultés scolaires"
        ]
    },
    {
        title: "ADULTE",
        items: [

            "Insomnies",
            "Dépression/ Tristesse",
            "Troubles alimentaires",
            "Addictions",
            "Conjugalité (violence/conflit/impasse)",
            "Mal être/questionnements",
            "Manque d'estime de soi",
            "Échecs répétés",
            "Angoisse/ Phobie/ Anxiété"
        ]
    },
    {
        title: "PARENTALITE",
        items: [
            "Co parentalité",
            "Homoparentalité",
            "Beau parentalité",
            "Adoption",
            "Burn out parental"
        ]
    },
    {
        title: "CONFLITS FAMILIAUX",
        items: [
            "Difficultés relationnelles (parents/enfants, fratrie, grands parents/enfants/petits enfants)",
            "Dysfonctionnements familiaux"
        ]
    },
    {
        title: "EVENEMENTS internes ou externes à la famille",
        items: [
            "Décès",
            "Accidents",
            "Violences",
            "Perte d'emploi",
            "Incarcération",
            "Maladie",
            "IVG",
            "Expériences traumatiques"
        ]
    }
];

export default FamilyPage;
