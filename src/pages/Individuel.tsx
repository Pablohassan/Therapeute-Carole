import React from 'react';
import { motion } from 'framer-motion';
import homeindividuel from '../assets/carole-lagardere-therapeute-talence-individuel.jpeg';
import homeindividuelmobile from '../assets/carole-lagardere-therapeute-talence-ndividuel-mobile.jpeg';
import escalierImage from '../assets/soleil.jpg';
import piedsImage from '../assets/setionparentalite.jpg';

import BookingSection from '../components/BookingSection';
import ResponsiveImage from '../components/ResponsiveImage';
import SEO from '../components/SEO';
import { useIsMobile } from '../hooks/useIsMobile';
import { therapyServiceData } from '../constants/structuredData';
import { individualSpecialtyAreas } from '../constants/specialtyAreas';

import { sectionIds } from '../constants/navigation';
// import KeyboardNavigationHelper from '../components/KeyboardNavigationHelper';

// Import icons
import {
    // FaChild,
    // FaSadTear,
    FaExchangeAlt,
    // FaHeart,
    // FaPray,
    FaUsers
} from 'react-icons/fa';

import { LongPressHover } from '../components/LongPressHover';

// Standardize section padding and margins
const sectionClasses = "py-12 md:py-20 px-4 md:px-8 mx-auto";
const containerClasses = "container mx-auto max-w-5xl";

const IndividuelPage: React.FC = () => {
    // Create enhanced specific service data for individual therapy
    const individualTherapyData = {
        ...therapyServiceData,
        "@type": "MedicalTherapy",
        "name": "Thérapie Individuelle et Soutien à la Parentalité",
        "alternateName": ["Thérapie Personnelle", "Soutien à la Parentalité"],
        "medicalSpecialty": {
            "@type": "MedicalSpecialty",
            "name": "Thérapie Systémique"
        },
        "relevantSpecialty": [
            {
                "@type": "MedicalSpecialty",
                "name": "Thérapie Individuelle"
            },
            {
                "@type": "MedicalSpecialty",
                "name": "Soutien à la Parentalité"
            }
        ],
        "description": "La thérapie individuelle systémique et le soutien à la parentalité vous aident à explorer vos pensées, émotions et comportements en tenant compte de l'ensemble de vos relations. Un accompagnement personnalisé pour surmonter les difficultés personnelles, développer votre potentiel et renforcer vos compétences parentales.",
        "procedureType": "Thérapeutique",
        "followup": "Séances régulières adaptées aux besoins individuels et familiaux",
        "howPerformed": "Séances individuelles de 45 à 60 minutes",
        "preparation": "Aucune préparation spécifique requise",
        "procedure": "Exploration des relations passées et présentes, analyse des schémas comportementaux, développement de nouvelles stratégies, soutien aux compétences parentales",
        "recognizingAuthority": "European Family Therapy Association (EFTA)",
        "status": "Établie",
        "study": [
            {
                "@type": "MedicalStudy",
                "description": "Études démontrant l'efficacité de la thérapie individuelle systémique et du soutien à la parentalité"
            }
        ],
        "guideline": {
            "@type": "MedicalGuideline",
            "evidenceLevel": "B",
            "evidenceOrigin": "Études cliniques",
            "guidelineSubject": {
                "@type": "MedicalEntity",
                "name": "Thérapie Individuelle et Soutien à la Parentalité"
            }
        },
        "audience": {
            "@type": "PeopleAudience",
            "audienceType": "Adultes, adolescents, enfants et parents en difficulté personnelle, relationnelle ou parentale"
        },
        "serviceType": ["Thérapie Individuelle", "Soutien à la Parentalité"],
        "serviceOutput": "Amélioration du bien-être personnel, des relations et des compétences parentales",
        "offers": {
            "@type": "Offer",
            "price": "70.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.carole-lagardere.fr/individuel",
            "validFrom": "2023-01-01"
        }
    };

    const isMobile = useIsMobile();

    // Common style constants for consistency
    const primaryColor = "[#FBC018]";
    const bgColor = "[#FCF6E9]";
    const textColor = "stone-900";
    const headingClass = "text-2xl md:text-3xl lg:text-3xl font-medium tracking-wide text-stone-900";
    const subHeadingClass = "text-2xl md:text-3xl font-medium text-stone-800";
    const paragraphClass = "text-base md:text-lg text-stone-700 leading-relaxed";
    const buttonClass = `inline-block w-full  max-w-sm bg-${primaryColor}/80 rounded-sm px-6 md:px-10 py-3 md:py-4 text-${textColor} font-medium uppercase tracking-wider text-lg md:text-base transition-all duration-300 text-center hover:bg-${primaryColor} hover:text-stone-100 hover:shadow-lg hover:text-shadow-lg`;

    return (
        <div className="bg-[#FBC018]/30">
            <SEO
                title="Thérapie Individuelle et Soutien à la Parentalité | Talence"
                description="Consultations individuelles et soutien à la parentalité à Talence près de Bordeaux. Retrouvez votre équilibre personnel, développez votre potentiel et surmontez vos difficultés avec un accompagnement personnalisé pour enfants, adolescents et adultes."
                canonicalUrl="https://www.carole-lagardere.fr/individuel"
                ogImage="/carole-lagardere-therapeute-talence-individuel.jpeg"
                keywords={[
                    "thérapie individuelle Talence",
                    "psychothérapie Bordeaux",
                    "développement personnel thérapie",
                    "thérapie systémique individuelle",
                    "soutien psychologique Talence",
                    "bien-être émotionnel thérapie",
                    "thérapeute individuel Bordeaux",
                    "soutien à la parentalité Talence",
                    "accompagnement enfants adolescents",
                    "difficultés relationnelles",
                    "problèmes comportementaux enfants"
                ]}
                structuredData={individualTherapyData}
            />

            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${isMobile ? homeindividuelmobile : homeindividuel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: isMobile ? 'center top' : 'center'
                }}
            >
                <div className="absolute inset-0"></div>

                <motion.div
                    className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-medium uppercase tracking-wider text-stone-900 mb-6 md:mb-10"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        THERAPIE INDIVIDUELLE et ENTRETIEN DE SOUTIEN A LA PARENTALITE
                    </h1>

                    <p className="text-base md:text-xl text-stone-900 mb-6 md:mb-10 italic font-medium sm:font-light leading-relaxed px-4 md:px-0"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Un accompagnement individuel (enfant, adolescent, adulte) pour explorer vos difficultés en
                        tenant compte de l'ensemble de vos relations (familiales, professionnelles, sociales,
                        scolaires)
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <LongPressHover
                            className="inline-block w-full max-w-sm sm:max-w-md rounded-sm bg-[#FCF6E9]/80 border-1 border-[#FBC018] px-6 md:px-16 py-4 md:py-6 text-stone-900 font-medium uppercase tracking-wider text-md md:text-base transition-all duration-300 shadow-md"
                            hoverClassName="scale-105 bg-[#FBC018]/50 text-stone-950 font-semibold shadow-xl"
                            onClick={() => window.location.href = `#${sectionIds.booking}`}
                        >
                            Réserver un rendez-vous
                        </LongPressHover>
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className={`${sectionClasses} flex items-center`}>
                <div className={containerClasses}>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:col-span-2 space-y-6 mt-6 lg:mt-0 order-2 lg:order-1">
                            <motion.h2
                                className={`${subHeadingClass} relative inline-block text-2xl`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                La thérapie systémique individuelle
                                <span className={`absolute -bottom-2 left-0 w-16 h-1 bg-${primaryColor}`}></span>
                            </motion.h2>

                            <ul className={`${paragraphClass} space-y-4`}>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={`text-${primaryColor} mr-3 mt-1`}>•</span>
                                    <span>C'est un espace d'échange, d'écoute, pour déposer vos doutes, vos questionnements et
                                        expérimenter de nouveaux modes de communication et de relations avec votre entourage.</span>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={`text-${primaryColor} mr-3 mt-1`}>•</span>
                                    <span>La thérapie systémique individuelle est une approche psychothérapeutique qui considère
                                        l'individu, et les problèmes qu'il rencontre, sous l'angle des relations.</span>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={`text-${primaryColor} mr-3 mt-1`}>•</span>
                                    <span>Le thérapeute ne se focalise pas uniquement sur les symptômes du patient, mais explore ses
                                        interactions avec son environnement et les rôles qu'il y joue.</span>
                                </motion.li>
                            </ul>

                            <motion.p
                                className={`${paragraphClass} rounded-md bg-${bgColor} p-4 md:p-6 border-l-4 border-${primaryColor} italic`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Analyser les relations passées et présentes pour comprendre comment elles influencent les
                                comportements et les émotions actuels.
                            </motion.p>

                            <motion.div
                                className="pt-6 text-center "
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <LongPressHover
                                    className={buttonClass}
                                    hoverClassName="bg-[#FBC018] text-stone-100"
                                    onClick={() => window.location.href = `#${sectionIds.booking}`}
                                >
                                    Faire le premier pas
                                </LongPressHover>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-1 h-full order-1 lg:order-2">
                            <div className="h-64 lg:h-full relative overflow-hidden shadow-lg" style={{ minHeight: '300px', maxHeight: '750px' }}>
                                <ResponsiveImage
                                    src={piedsImage}
                                    alt="Pieds dans le sable"
                                    className="absolute inset-0 h-full w-full object-cover object-left"
                                    width={800}
                                    height={1000}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Therapeutic Approach Section */}
            <section className={sectionClasses}>
                <div className={containerClasses}>
                    <motion.div
                        className="text-center mb-8 md:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={headingClass}>
                            Motifs de consultation
                        </h2>
                        <div className={`w-20 h-1 bg-${primaryColor} mx-auto mt-4 mb-6`}></div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:col-span-1 h-full">
                            <div className="h-64 lg:h-full w-full relative rounded-md overflow-hidden shadow-lg" style={{ minHeight: '300px', maxHeight: '450px' }}>
                                <ResponsiveImage
                                    src={escalierImage}
                                    alt="Accompagnement thérapeutique"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    width={800}
                                    height={800}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className={`p-4 md:p-8 rounded-lg shadow-md border border-stone-100 bg-${bgColor}`}>
                                <p className={`${paragraphClass} mb-6`}>
                                    Elle s'adresse à toutes les personnes qui traversent des difficultés, des situations de tension,
                                    d'incompréhension ou de souffrance.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <motion.div
                                        className={`p-4 md:p-6 rounded-lg border-l-4 border-${primaryColor} shadow-md bg-white/60 transition-all duration-300 hover:shadow-md hover:bg-[#FBC018]/30`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${primaryColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-base md:text-lg font-medium text-stone-900">Problèmes relationnels</h4>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={`p-4 md:p-6 rounded-lg border-l-4 border-${primaryColor} shadow-md bg-white/60 transition-all duration-300 hover:shadow-md hover:bg-${primaryColor}/30`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${primaryColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-base md:text-lg font-medium text-stone-900">Conflits familiaux</h4>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={`p-4 md:p-6 rounded-lg border-l-4 border-${primaryColor} shadow-md bg-white/60 transition-all duration-300 hover:shadow-md hover:bg-${primaryColor}/30`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${primaryColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                            <h4 className="text-base md:text-lg font-medium text-stone-900">Répétitions de schémas de vie</h4>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className={`p-4 md:p-6 rounded-lg border-l-4 border-${primaryColor} shadow-md bg-white/60 transition-all duration-300 hover:shadow-md hover:bg-${primaryColor}/30`}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex items-center">
                                            <h4 className="text-base md:text-lg font-medium text-stone-900">Ou tout symptôme, trouble ou difficulté qui représente un point de souffrance au quotidien</h4>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section with Quote */}
            <section className={sectionClasses}>
                <div className={containerClasses}>
                    <motion.div
                        className="text-center mb-8 md:mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={headingClass}>
                            Entretien de soutien à la parentalité
                        </h2>
                        <div className={`w-20 h-1 bg-${primaryColor} mx-auto mt-4 mb-6`}></div>
                    </motion.div>

                    <motion.div
                        className="text-center my-12 md:my-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={`p-6 md:p-10 bg-[#FBC018] text-stone-900 mb-8 md:mb-12 shadow-md rounded-sm`}>
                            <p className="mx-auto text-xl md:text-2xl lg:text-3xl italic font-medium leading-relaxed">
                                « Je recois tout parent qui s'inquiète des difficultés de son enfant ou adolescent »
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`rounded-lg shadow-md overflow-hidden mb-8 md:mb-12 bg-${bgColor}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={`p-6 md:p-8 border-l-4 border-${primaryColor}`}>
                            <div className="flex flex-col md:flex-row items-start mb-6">
                                <div className={`w-12 h-12 rounded-full bg-${primaryColor}/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 mb-4 md:mb-0`}>
                                    <FaUsers className={`text-${primaryColor} text-xl`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium mb-3">Un facteur d'apaisement</h3>
                                    <p className={paragraphClass}>
                                        Tant pour les enfants que pour les parents, le fait de venir rencontrer une tierce personne
                                        qui comprend les difficultés qu'ils rencontrent, constitue déjà un facteur d'apaisement et
                                        contribue à installer un sentiment de sécurité et de confiance dans la relation.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-start">
                                <div className={`w-12 h-12 rounded-full bg-${primaryColor}/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 mb-4 md:mb-0`}>
                                    <FaExchangeAlt className={`text-${primaryColor} text-xl`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium mb-3">Une première étape</h3>
                                    <p className={paragraphClass}>
                                        Ces entretiens de soutien à la parentalité peuvent également s'envisager lorsqu'il est difficile
                                        voire impossible de réunir toute la famille en consultation, ou bien, ils peuvent représenter
                                        une première étape avant d'engager une thérapie familiale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={`#${sectionIds.booking}`}
                            className={buttonClass}
                        >
                            Réserver un rendez-vous
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Specialty Areas Section */}
            <section className={`${sectionClasses} min-h-screen`}>
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-8 md:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={headingClass}>
                            Domaines d'intervention
                        </h2>
                        <div className={`w-20 h-1 bg-${primaryColor} mx-auto mt-4 mb-6`}></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-2 md:px-0">
                            La thérapie individuelle peut vous aider dans de nombreuses situations de vie.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4">
                        {individualSpecialtyAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                className={`bg-${bgColor} p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: Math.min(index * 0.05, 0.3) // Limit maximum delay to 0.3s
                                }}
                                viewport={{ once: true, margin: "-50px" }} // Trigger animation earlier
                            >
                                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4">{area.title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{area.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <BookingSection />
        </div>
    );
};

export default IndividuelPage;
