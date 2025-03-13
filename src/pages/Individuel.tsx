
import React from 'react';
import { motion } from 'framer-motion';
import homeindividuel from '../assets/carole-lagardere-therapeute-talence-individuel.jpeg';
import homeindividuelmobile from '../assets/carole-lagardere-therapeute-talence-ndividuel-mobile.jpeg';
import escalierImage from '../assets/escalier.webp';
import piedsImage from '../assets/pieds.webp';
import couplelaptopImage from '../assets/couplelaptop.webp';
import tacheImage from '../assets/logofamille.jpeg'
import BookingSection from '../components/BookingSection';
import ResponsiveImage from '../components/ResponsiveImage';
import SEO from '../components/SEO';
import { useIsMobile } from '../hooks/useIsMobile';
import { therapyServiceData } from '../constants/structuredData';
import { individualSpecialtyAreas } from '../constants/specialtyAreas';
import SnapScrollContainer from '../components/SnapScrollContainer';
import SectionNavigation from '../components/SectionNavigation';
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

// // Function to get the appropriate icon for each specialty area
// function getSpecialtyIcon(title: string) {
//     switch (title) {
//         case "Soutien à la parentalité":
//             return <FaChild className="text-stone-500 text-lg" />;
//         case "Dépression":
//             return <FaSadTear className="text-stone-500 text-lg" />;
//         case "Transitions de vie":
//             return <FaExchangeAlt className="text-stone-500 text-lg" />;
//         case "Estime de soi":
//             return <FaHeart className="text-stone-500 text-lg" />;
//         case "Deuil et pertes":
//             return <FaPray className="text-stone-500 text-lg" />;
//         case "Difficultés relationnelles":
//             return <FaUsers className="text-stone-500 text-lg" />;
//         default:
//             return <FaHeart className="text-stone-500 text-lg" />; // Default icon
//     }
// }

const IndividuelPage: React.FC = () => {
    // Create specific service data for individual therapy
    const individualTherapyData = {
        ...therapyServiceData,
        name: "Thérapie Individuelle",
        serviceType: "Thérapie Individuelle",
        description: "La thérapie individuelle vous aide à explorer vos pensées, émotions et comportements pour surmonter les difficultés personnelles et développer votre potentiel."
    };

    const totalSections = 7;
    const sectionNames = ['Accueil', 'Introduction', 'Approche', 'Thérapeutique', 'Domaines', 'Fonctionnement', 'Réservation'];
    const isMobile = useIsMobile();
    return (
        <div className="bg-[#FBC018]/20">
            <SEO
                title="Thérapie Individuelle à Talence"
                description="Consultations individuelles à Talence (Bordeaux). Retrouvez votre équilibre personnel, développez votre potentiel et surmontez vos difficultés avec un accompagnement personnalisé."
                canonicalUrl="https://www.carole-lagardere.fr/individuel"
                ogImage="/images/individuel.webp"
                keywords={["thérapie individuelle Talence", "psychothérapie Bordeaux", "développement personnel", "thérapie systémique", "soutien psychologique Talence", "bien-être émotionnel", "thérapeute Bordeaux"]}
                structuredData={individualTherapyData}
            />

            <SectionNavigation totalSections={totalSections} sectionNames={sectionNames} />
            {/* <KeyboardNavigationHelper autoHideDelay={8000} /> */}

            <SnapScrollContainer preventFooterOverlap={true}>
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${isMobile ? homeindividuelmobile : homeindividuel})`,
                        backgroundSize: 'cover',
                        backgroundPosition: isMobile ? 'center center' : 'center'
                    }}
                >
                    <div className="absolute inset-0 "></div>

                    <motion.div
                        className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-sonte-900 mb-8 md:mb-16"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Thérapie Individuelle
                        </h1>

                        <p className="text-lg md:text-2xl text-stone- mb-8 md:mb-12 italic font-light leading-relaxed px-2 md:px-0"
                            style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                        >
                            Une thérapie individuelle systémique est une approche thérapeutique qui applique les
                            principes de la thérapie systémique à un travail en individuel. Elle considère que les
                            difficultés d&#39;une personne sont influencées par les systèmes relationnels dans lesquels elle
                            évolue (famille, couple, travail, société) et ne se limitent pas à son seul fonctionnement
                            psychique interne.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <a
                                href={`#${sectionIds.booking}`}
                                className="inline-block bg-white/70 border-2 border-[#FBC018] px-8 md:px-16 py-4 md:py-6 text-sonte-900  uppercase tracking-wider text-md md:text-base transition-all duration-300 hover:bg-[#FBC018]/50 hover:text-stone-800 shadow-lg hover:shadow-xl"
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <section className="py-24 md:py-28 px-6 flex items-center bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative rounded-md overflow-hidden" style={{ minHeight: '450px' }}>
                                    <ResponsiveImage
                                        src={piedsImage}
                                        alt="Pieds dans le sable"
                                        className="absolute inset-0 h-full w-full object-cover shadow-xl"
                                        width={800}
                                        height={1000}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-8 mt-8 lg:mt-0">
                                <motion.h2
                                    className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide relative inline-block"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    Principes clés de la thérapie individuelle systémique
                                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FBC018]"></span>
                                </motion.h2>

                                <ul className="text-lg text-gray-700 leading-relaxed space-y-4">
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                        <span className="font-medium">Une vision contextuelle</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                        <span>Ne pas se focaliser uniquement sur les symptômes du patient, mais explorer ses interactions
                                            avec son environnement et les rôles qu'il y joue.</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                        <span>Analyser les relations passées et présentes pour comprendre comment elles influencent les
                                            comportements et les émotions actuels.</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                        <span>Travailler sur les schémas relationnels pour identifier les patterns répétitifs
                                            qui posent problème (par exemple, des conflits récurrents avec les figures
                                            d'autorité, des difficultés à poser des limites, etc.).</span>
                                    </motion.li>
                                </ul>

                                <motion.p
                                    className="text-lg text-gray-700 leading-relaxed bg-amber-50 p-6 border-l-4 border-[#FBC018] italic"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    Plutôt que de se concentrer uniquement sur l'introspection, le thérapeute aide le patient à expérimenter de nouveaux modes de communication et de relation avec son entourage.
                                </motion.p>

                                <motion.div
                                    className="pt-6 text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className=" md:inline-block bg-[#FBC018]/80 px-12 md:px-12 py-3 sm:text-md text-xl py-5 md:py-4 text-stone-900 border-1 border-[#FBC018]/40  uppercase tracking-wider  transition-all duration-300 hover:bg-[#FBC018] hover:text-stone-950 hover:font-semibold "
                                        style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)' }}
                                    >
                                        Faire le premier pas
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Approach Section with Quote */}
                < section className="py-20 px-6 bg-gradient-to-b from-white to-stone-50" >
                    <div className="container mx-auto max-w-5xl">
                        {/* Quote at the top of the Approach section */}

                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2">
                                <div className="bg-white p-8 rounded-lg shadow-md border border-stone-100">
                                    <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-8">
                                        Comment fonctionne la thérapie individuelle systémique ?
                                    </h2>

                                    <h3 className="text-xl italic text-gray-600 mb-6 border-l-4 border-[#FBC018] pl-4">
                                        En thérapie individuelle systémique nous utilisons des techniques issues de la thérapie
                                        familiale systémique, comme par exemple :
                                    </h3>

                                    <div className="space-y-6 mt-8">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900 mb-2">Le génogramme</h4>
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    Représentation graphique des relations familiales pour repérer les
                                                    influences transgénérationnelles.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900 mb-2">Les questions circulaires</h4>
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    Pour aider à voir un problème sous différents angles et prendre du
                                                    recul.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-gray-900 mb-2">La mise en scène</h4>
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    Visualisation ou jeux de rôle pour mieux comprendre les interactions et
                                                    tester de nouvelles postures.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-1 h-full">
                                <div className="sticky top-24">
                                    <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                        <ResponsiveImage
                                            src={couplelaptopImage}
                                            alt="Personne en thérapie"
                                            className="absolute inset-0 h-full w-full object-cover shadow-md rounded-lg"
                                            width={800}
                                            height={600}
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            priority={true}
                                        />
                                    </div>
                                    <div className="bg-stone-100 p-6 rounded-lg mt-6">
                                        <p className="text-gray-700 italic">
                                            "La thérapie systémique considère l'individu dans son contexte relationnel et familial,
                                            permettant une compréhension plus globale des difficultés."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section >

                {/* Therapeutic Approach Section */}
                < section className="py-20 px-6 bg-white" >
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                Dans quels cas est-elle utilisée ?
                            </h2>
                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative rounded-md overflow-hidden" style={{ minHeight: '450px' }}>
                                    <ResponsiveImage
                                        src={escalierImage}
                                        alt="Accompagnement thérapeutique"
                                        className="absolute inset-0 h-full w-full object-cover shadow-xl"
                                        width={800}
                                        height={800}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white p-8 rounded-lg shadow-md border border-stone-100">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        La thérapie individuelle systémique s'adresse à toutes les personnes qui traversent des
                                        difficultés, des situations de tension, d'incompréhension ou de souffrance.
                                    </p>

                                    <h3 className="text-xl font-medium text-gray-900 mb-6 border-b border-stone-200 pb-3">
                                        Elle est particulièrement indiquée pour :
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-[#FBC018]">
                                            <div className="flex items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FBC018] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                <h4 className="text-lg font-medium text-gray-900">Schémas de répétition</h4>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                Toujours tomber dans le même type de relations toxiques.
                                            </p>
                                        </div>

                                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-[#FBC018]">
                                            <div className="flex items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FBC018] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                                <h4 className="text-lg font-medium text-gray-900">Difficultés à poser des limites</h4>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                Problèmes pour établir des frontières saines dans vos relations.
                                            </p>
                                        </div>

                                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-[#FBC018]">
                                            <div className="flex items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FBC018] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <h4 className="text-lg font-medium text-gray-900">Positionnement dans un groupe</h4>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                Difficultés à se positionner dans un groupe ou une famille.
                                            </p>
                                        </div>

                                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-[#FBC018]">
                                            <div className="flex items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FBC018] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <h4 className="text-lg font-medium text-gray-900">Questionnements identitaires</h4>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                Mal être et questionnements influencés par l'histoire familiale.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section >

                {/* Approach Section with Quote */}
                < section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white" >
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                Entretien de soutien à la parentalité
                            </h2>
                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2">
                                <div className="bg-white p-8 rounded-lg shadow-[#FBC018]/20 shadow-md border border-stone-100 mb-8">
                                    <motion.div
                                        className="text-center mb-16"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="p-10 bg-[#FBC018] text-stone-900 mb-12 shadow-md rounded-sm">
                                            <p className="mx-auto text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed">
                                                « Je recois tout parent qui s'inquiète des difficultés de son enfant ou adolescent »
                                            </p>
                                        </div>
                                    </motion.div>

                                    <div className="flex items-center mb-6">

                                        <h3 className="text-xl font-medium text-gray-900">Une approche flexible :</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-lg   ml-4 md:ml-16 text-gray-600 leading-relaxed italic">
                                            Il n'est pas toujours nécessaire de s'engager dans un travail thérapeutique. En tant que
                                            parent, nous pouvons simplement avoir besoin d'échanger autour d'une situation précise,
                                            d'évoquer une thématique liée à l'éducation d'un enfant.
                                        </p>

                                        <p className="text-lg font-semibold sm:font-normal   ml-0 md:ml-16 text-gray-600 leading-relaxed italic">
                                            Je propose des entretiens ponctuels de guidance parentale.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-[#FBC018]/20 shadow-md border border-stone-100">
                                    <h3 className="text-xl font-medium text-gray-900 mb-6 border-b border-stone-200 pb-3">
                                        Qu'est-ce que la guidance parentale ?
                                    </h3>

                                    <ul className="space-y-4">


                                        <li className="flex items-start">
                                            <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                Accompagner et soutenir les parents, les écouter, les conseiller.
                                            </p>
                                        </li>

                                        <li className="flex items-start">
                                            <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                Proposer une écoute active aux parents afin qu'ils puissent évoquer les difficultés qu'ils
                                                rencontrent et les accompagner dans la mobilisation de leurs ressources.
                                            </p>
                                        </li>


                                        <li className="flex items-start">
                                            <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                Accompagner les parents dans les taches éducatives du quotidien pour les rendre disponibles à leur parentalité.
                                            </p>
                                        </li>

                                        <li className="flex items-start">
                                            <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                Un soutien psycho éducatif qui peut aider à améliorer la relation
                                                avec l'enfant en évaluant au plus juste les problèmes rencontrés.
                                            </p>
                                        </li>



                                        <li className="flex items-start">
                                            <span className="text-[#FBC018] mr-3 mt-1">•</span>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                Fournir aux parents des informations éclairées sur les sujets du quotidien qui les
                                                préoccupent : éducation, limites éducatives, sécurité, importance du jeu, interactions,
                                                attachement, violences éducatives, addictions, exposition aux écrans, etc.
                                            </p>
                                        </li>




                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-1 h-full">
                                <div className="sticky top-24">
                                    <div className="h-full w-full  relative" style={{ minHeight: '400px' }}>
                                        <img
                                            src={tacheImage}
                                            alt="Soutien à la parentalité"
                                            className="absolute inset-0 h-full w-full object-contain shadow-md rounded-lg"

                                            sizes="(max-width: 1024px) 100vw, 33vw"

                                        />
                                    </div>
                                    <div className="bg-[#FBC018]/10 p-6 rounded-lg mt-6 border-l-4 border-[#FBC018]">
                                        <p className="text-gray-700 italic">
                                            "Je m'adapte à chaque situation, conseille les parents sans leur imposer de règles de conduite
                                            mais plutôt en leur proposant des éléments de compréhension au sujet de leur enfant."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section >

                {/* Specialty Areas Section */}
                < section className="py-20 px-6 bg-gradient-to-b from-[#FBC018]/10 to-[#FBC018]/40" >
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                Motif de consultation
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>


                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {individualSpecialtyAreas.map((area, index: number) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out flex flex-col h-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-6 flex-grow">
                                        <div className="flex items-center mb-4">
                                            {/* <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mr-4">
                                                {getSpecialtyIcon(area.title)}
                                            </div> */}
                                            <h3 className="text-xl font-medium text-gray-900">{area.title}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {area.description.split(',').map((item, i) => (
                                                <span key={i} className="block mb-2">
                                                    • {item.trim()}
                                                </span>
                                            ))}
                                        </p>
                                    </div>


                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Effectiveness Section */}
                < section className="py-20 px-6 bg-stone-50" >
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                L'entretien de soutien à la parentalité
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8 border-l-4 border-[#FBC018]">
                                <div className="flex items-start mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FBC018]/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <FaUsers className="text-[#FBC018] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-3">Un facteur d'apaisement</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Tant pour les enfants que pour les parents, le fait de venir rencontrer une tierce personne
                                            qui comprend les difficultés qu'ils rencontrent, constitue déjà un facteur d'apaisement et
                                            contribue à installer un sentiment de sécurité et de confiance dans la relation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#FBC018]/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <FaExchangeAlt className="text-[#FBC018] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 mb-3">Une première étape</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
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
                                className="inline-block bg-[#FBC018]/80 px-10 py-4 text-stone-900 font-medium uppercase tracking-wider text-base transition-all duration-300 hover:bg-[#FBC018] hover:text-stone-950 hover:font-semibold shadow-md hover:shadow-lg hover:scale-105 "
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </div>
                </section >

                {/* Booking Section */}
                < section id="rendez-vous" className="h-screen flex items-center" >
                    <BookingSection />
                </section >
            </SnapScrollContainer >
        </div >
    );
};

export default IndividuelPage;
