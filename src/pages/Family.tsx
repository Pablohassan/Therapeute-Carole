// src/pages/Family.tsx
import React from 'react';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import BookingSection from '../components/BookingSection';
import { sectionIds } from '../constants/navigation';
import { motion } from 'framer-motion';

import { useIsMobile } from '../hooks/useIsMobile';
import livingroomImage from '../assets/illustration-family.jpg';
import couplelaptopImage from '../assets/comunication-famille.jpg';
import homefamily from '../assets/carole-lagardere-therapeute-talence-family-home.jpeg';
import homefamilyMobile from '../assets/carole-lagardere-therapeute-famille-talence-mobile.jpeg'
import famille from '../assets/image-illustration-famille.jpg';
import SnapScrollContainer from '../components/SnapScrollContainer';
import SectionNavigation from '../components/SectionNavigation';
// import KeyboardNavigationHelper from '../components/KeyboardNavigationHelper';

// Mobile-optimized section wrapper
const MobileOptimizedSection: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className = "", style = {} }) => {
    const isMobile = useIsMobile();

    return (
        <section
            className={`${isMobile ? 'py-10 min-h-[100vh]' : 'py-20 h-screen'} px-4 md:px-8 mx-auto flex flex-col justify-center ${className}`}
            style={style}
        >
            {children}
        </section>
    );
};

const FamilyPage: React.FC = () => {
    // Create specific service data for family therapy
    const familyTherapyData = {
        ...therapyServiceData,
        name: "Thérapie Familiale Systémique",
        serviceType: "Thérapie Familiale",
        description: "La thérapie familiale a pour but l'amélioration du fonctionnement familial à différents niveaux, la revalorisation de la compréhension mutuelle et du soutien émotionnel entre les membres de la famille."
    };

    const totalSections = 7;
    const sectionNames = ['Accueil', 'Introduction', 'Communication', 'Approche', 'Informations', 'Domaines', 'Réservation'];
    const isMobile = useIsMobile();

    return (
        <div className={`bg-[#AB4D8C]/30`}>
            <SEO
                title="Thérapie Familiale Systémique à Talence"
                description="Consultations familiales à Talence (Bordeaux). Retrouvez un lien familial harmonieux, améliorez la communication et résolvez les conflits avec une approche systémique adaptée à chaque famille."
                canonicalUrl="https://www.carole-lagardere.fr/family"
                ogImage="/images/carole-lagardere-therapeute-talence-home.jpeg"
                keywords={["thérapie familiale Talence", "thérapie systémique Bordeaux", "conflits familiaux", "communication famille", "relation parent-enfant", "thérapeute familial EFTA", "thérapie famille Bordeaux"]}
                structuredData={familyTherapyData}
            />

            <SectionNavigation totalSections={totalSections} sectionNames={sectionNames} />
            {/* <KeyboardNavigationHelper autoHideDelay={8000} /> */}

            <SnapScrollContainer preventFooterOverlap={true}>
                {/* Hero Section */}
                <MobileOptimizedSection
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${isMobile ? homefamilyMobile : homefamily})`,
                        backgroundSize: isMobile ? 'cover' : 'cover',
                        backgroundPosition: isMobile ? 'center' : 'center'
                    }}
                >
                    <div className="absolute inset-0  bg-opacity-40"></div>
                    <div className="container mx-auto max-w-6xl relative z-10">
                        <motion.div
                            className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl py-2 md:py-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-stone-900 mb-6 md:mb-16"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                Thérapie Familiale Systémique
                            </h1>

                            <p className="text-lg md:text-2xl text-stone-900 mb-8 md:mb-8 italic font-light leading-relaxed px-2 md:px-0"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                Pour comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant vos ressources et vos compétences.
                            </p>
                            <p className="text-lg md:text-2xl text-stone-900 mb-8 md:mb-12 italic font-light leading-relaxed px-2 md:px-0"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                Accompagner, verbaliser, expérimenter le changement au sein de vos relations familiales.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block w-full font-medium sm:w-1/2 bg-white/70 md:bg-transparent md:border-2 border-1 border-[#AB4D8C] md:border-[#AB4D8C] px-8 md:px-16 py-5 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-lg  text-stone-900 md:text-base hover:scale-105 transition-all duration-300 hover:bg-[#AB4D8C]/40 hover:text-stone-900 hover:font-semibold shadow-lg hover:shadow-xl"
                                >
                                    Réserver un rendez-vous
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>

                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-5xl">
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
                            </div>

                            <div className="lg:col-span-2 space-y-4 font-light">
                                <h2 className="hidden md:block text-2xl md:text-3xl text-gray-900 font-medium tracking-wide mb-6">
                                    La relation est au cœur de la thérapie
                                </h2>



                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Avec les personnes qui sont les plus proches de nous, nous éprouvons parfois une
                                    forme d'appréhension à parler de nos émotions, de nos sentiments profonds.
                                </p>

                                <p className="text-lg text-gray-800 leading-relaxed">
                                    La thérapie permet de faire vivre à la famille des échanges différents et offre à chacun la possibilité de s'exprimer, de se sentir entendu.
                                </p>

                                <p className="text-xl sm:text-lg text-center md:text-left font-medium  sm:font-medium italic mb-8">
                                    "La famille est un lieu où les esprits se façonnent mutuellement avec patience et amour"
                                </p>

                                <div className=" md:pt-1 text-center">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className=" md:inline-block bg-[#AB4D8C] rounded-md px-16 md:px-12 py-3 sm:text-md text-xl py-5 md:py-4 text-stone-100 border-2 border-[#AB4D8C]  uppercase tracking-wider  transition-all duration-300 hover:bg-white/80 hover:text-[#AB4D8C] font-medium  hover:font-semibold"
                                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                                    >
                                        Faire le premier pas
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>

                {/* Quote Section */}


                {/* Therapeutic Approach Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="py-16 px-6 text-stone-100 font-medium flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="container mx-auto p-4 md:p-6  md:max-w-[90%] bg-[#AB4D8C]/80 text-center mb-12 rounded-md">
                                <p className=" mx-auto text-xl md:text-2xl lg:text-2xl italic font-light leading-relaxed">
                                    La thérapie familiale est un espace de rencontre, et d'échanges dans un environnement contenant et rassurant.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 mx-auto px-8 lg:grid-cols-3 gap-8 "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1">
                                <img
                                    src={livingroomImage}
                                    alt="Espace thérapeutique"
                                    className="w-full h-auto object-cover rounded-md shadow-md"
                                    loading="lazy"
                                    width="600"
                                    height="800"

                                />
                            </div>

                            <div className="lg:col-span-2 max-w-xl space-y-4 max-w-lg pr-12 font-light ml-4 ">
                                <div className="space-y-4">
                                    <h3 className="text-lg text-gray-600  leading-relaxed  text-2xl md:text-3xl text-gray-900 font-medium">
                                        Chaque famille est unique.
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed pt-4">
                                        En séance, le thérapeute porte une attention particulière aux besoins de chacun, à leurs
                                        expressions, à la manière dont la parole circule.
                                        <p className="text-lg text-gray-600 leading-relaxed pt-4">
                                            Il
                                            s'agit de faire un état des lieux et engager une réflexion sur les places et les rôles de chacun.
                                        </p>
                                    </p>


                                    <p className="text-lg text-gray-600 leading-relaxed pt-4">
                                        Le thérapeute s'adapte et tente de repérer et mobiliser les ressources,
                                        en faisant preuve de souplesse et de créativité.
                                    </p>



                                </div>


                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>


                {/* Alternative Communication Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto font-light max-w-4xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start md:items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
                                <h2 className=" text-2xl md:text-3xl text-gray-900 font-medium tracking-wide">
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

                            <div className="lg:col-span-1 order-1 lg:order-2 h-full  ">
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
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>


                {/* Practical Information Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            className="space-y-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-12 mt-8 md:mt-16">
                                <h2 className=" text-2xl md:text-3xl text-gray-900 font-medium  tracking-wide text-gray-900 mb-6">
                                    Comment se déroule une thérapie familiale ?
                                </h2>
                                <div className="w-20 h-1 mx-auto"></div>
                            </div>

                            <div className="bg-stone-50 p-8 rounded-md shadow-md">
                                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                                    Une séance de thérapie familiale dure entre 60 et 90 minutes; l'intervalle entre les séances
                                    varie de une à plusieurs semaines en fonction des problèmes présentés, des besoins des
                                    membres de la famille, de l'étape du traitement et d'autres variables.
                                </p>

                                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                                    Les séances regroupent plusieurs membres de la famille mais les séances individuelles ou les
                                    rencontres avec les parents (sans leur enfant par exemple) sont également proposées si cela
                                    se révèle nécessaire.
                                </p>
                                <p className="text-lg  text-gray-600 leading-relaxed mb-6">
                                    La longueur et la configuration de la thérapie familiale est le résultat
                                    d'une collaboration et d'un accord mutuel entre le thérapeute et la famille.
                                </p>
                            </div>

                            <div className="text-center mt-12">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block bg-[#AB4D8C]/60 px-16 md:px-12 py-4 md:py-5  text-stone-900 sm:font-light uppercase tracking-wider text-base transition-all duration-300 hover:bg-[#AB4D8C]  shadow-md hover:shadow-xl hover:text-stone-100"
                                >
                                    Réserver un rendez-vous
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>

                {/* Areas of Specialty Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="text-center mb-8 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-8 md:mb-12">
                                <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-gray-900 mb-4 md:mb-8">
                                    Motifs de consultation
                                </h2>
                                <div className="w-24 h-1 bg-[#AB4D8C]/60 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {specialtyAreas.map((area, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 md:p-8 md:pr-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: Math.min(index * 0.05, 0.3) // Limit maximum delay to 0.3s
                                        }}
                                        viewport={{ once: true, margin: "-50px" }} // Trigger animation earlier
                                    >
                                        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4">{area.title}</h3>
                                        <ul className="text-sm md:text-base text-gray-600 list-none space-y-2 text-left">
                                            {area.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="pl-0">{item}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>

                {/* Booking Section */}

                <BookingSection />

            </SnapScrollContainer>

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
