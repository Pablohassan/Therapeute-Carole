// src/pages/Couple.tsx
import React from 'react';
import { motion } from 'framer-motion';
import hand from '../assets/hand.webp';
import therapistImage from '../assets/therapist.webp';
import homecouple from '../assets/carole-lagardere-therapeute-talence-couple.jpeg';

// Import mobile-optimized images

import homecoupleMobile from '../assets/carole-lagardere-therapeute-couple-talence-mobile.jpeg'; // You'll need to create this mobile version
// import { CheckIcon } from '@heroicons/react/24/outline';
import { sectionIds } from '../constants/navigation';
import BookingSection from '../components/BookingSection';
import { useIsMobile } from '../hooks/useIsMobile';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import { coupleSpecialtyAreas } from '../constants/specialtyAreas';
import SnapScrollContainer from '../components/SnapScrollContainer';
import SectionNavigation from '../components/SectionNavigation';
import ResponsiveImage from '../components/ResponsiveImage';

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

// import KeyboardNavigationHelper from '../components/KeyboardNavigationHelper';

const CouplePage: React.FC = () => {
    // Create specific service data for couple therapy
    const coupleTherapyData = {
        ...therapyServiceData,
        name: "Thérapie de Couple",
        serviceType: "Thérapie de Couple",
        description: "La thérapie de couple vise à transformer votre relation pour vous permettre de vous sentir plus satisfait et épanoui. Elle aide à améliorer la communication et à résoudre les conflits."
    };

    const totalSections = 7;
    const sectionNames = ['Accueil', 'Introduction', 'Généalogie', 'Approche', 'Domaines', "Effectivité", 'Réservation'];
    const isMobile = useIsMobile();

    return (
        <div className="bg-[#EC6849]/20">
            <SEO
                title="Thérapie de Couple à Talence"
                description="Consultations de couple à Talence (Bordeaux). Retrouvez l'harmonie dans votre relation, améliorez votre communication et résolvez les conflits avec une approche systémique bienveillante."
                canonicalUrl="https://www.carole-lagardere.fr/couple"
                ogImage="/images/couple.webp"
                keywords={["thérapie couple Talence", "thérapie conjugale Bordeaux", "problèmes de couple", "communication couple", "conflits conjugaux", "conseil conjugal Talence", "thérapeute couple Bordeaux"]}
                structuredData={coupleTherapyData}
            />

            <SectionNavigation totalSections={totalSections} sectionNames={sectionNames} />
            {/* <KeyboardNavigationHelper autoHideDelay={8000} /> */}

            <SnapScrollContainer preventFooterOverlap={true}>
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden "
                    style={{
                        backgroundImage: `url(${isMobile ? homecoupleMobile : homecouple})`,
                        backgroundSize: 'cover',
                        backgroundPosition: isMobile ? 'center center' : 'center'
                    }}
                >
                    <div className="absolute inset-0"></div>

                    <motion.div
                        className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl mb-24 md:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light font-bebas uppercase tracking-wider my-2 md:my-8 text-stone-900 mb-8 md:mb-16"
                            style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)' }}
                        >
                            Thérapie de Couple
                        </h1>

                        <p className="text-lg md:text-2xl text-stone- mb-8 md:mb-12 italic font-light leading-relaxed px-2 md:px-0"
                            style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                        >
                            Transformez votre relation afin de vous permettre de vous sentir plus satisfait et de vous sentir plus rempli.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <a
                                href={`#${sectionIds.booking}`}
                                className="inline-block bg-white/70 md:bg-transparent md:border-2 border-1 border-[#EC6849] md:border-[#EC6849] px-12 sm:px-12 md:px-16 py-5 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-lg  text-stone-900 md:text-base hover:scale-105 transition-all duration-300 hover:bg-[#EC6849]/40 hover:text-stone-900 hover:font-semibold shadow-lg hover:shadow-xl"
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative rounded-md overflow-hidden" style={{ minHeight: '450px' }}>
                                    <ResponsiveImage
                                        src={hand}
                                        alt="Main réconfortante"
                                        className="absolute inset-0 h-full w-full object-cover shadow-xl"
                                        width={800}
                                        height={1000}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 space-y-4 md:space-y-6 px-2 md:px-4">
                                <h2 className="text-xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-4 md:mb-6 text-center lg:text-left">
                                    « Vous traversez chacun, et ensemble, <br className="hidden md:block" /> une période douloureuse »
                                </h2>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    En thérapie, l'objectif n'est pas de déterminer qui a tort ou qui a raison, ni de faire changer
                                    l'autre mais d'arriver à une collaboration afin de modifier le fonctionnement du « système
                                    couple » et ainsi de supprimer ou d'atténuer la souffrance.
                                </p>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    Pour cela, le thérapeute accueille le couple, observe le fonctionnement, interroge ce qui a
                                    provoqué la crise et le choix du moment pour amorcer une thérapie. Il est essentiel que
                                    chacun s'engage dans le travail thérapeutique.
                                </p>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    Il s'agit d'offrir la possibilité à chacun d'exposer sa perception de la situation, son vécu et ses
                                    attentes et aussi d'entendre et de reconnaître la perception de l'autre. Identifier les besoins
                                    d'attachement, la construction du monde de chacun nous permettra d'éclairer les liens du
                                    couple dans le présent.
                                </p>

                                <div className="pt-4 md:pt-6 text-center ">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className="inline-block bg-[#EC6849] px-6 px-12 md:px-12 py-4 md:py-5 text-stone-900 font-light uppercase tracking-wider text-xl md:text-lg transition-all duration-300 hover:bg-white hover:text-stone-800 border-2 border-[#EC6849] shadow-md hover:shadow-lg"
                                    >
                                        Faire le premier pas
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>



                {/* Therapist Approach Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative rounded-md overflow-hidden" style={{ minHeight: '450px' }}>
                                    <ResponsiveImage
                                        src={therapistImage}
                                        alt="Thérapeute"
                                        className="absolute inset-0 h-full w-full object-cover shadow-xl"
                                        width={800}
                                        height={1000}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 space-y-4 md:space-y-6 px-2 md:px-4">
                                <h2 className="text-xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-4 md:mb-6 text-center lg:text-left">
                                    La posture du thérapeute en séance :
                                </h2>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    La simple présence du thérapeute produit du neuf. Il
                                    impacte le couple avec tout son être, il est partie prenante du système. Il met ses
                                    résonnances au service du couple et partage ses hypothèses, ses observations. Il est attentif
                                    aux sensations corporelles, manifestations émotionnelles dans l'ici et maintenant et aux faits
                                    extérieurs ou antérieurs. Il favorise les échanges, pointe les évitements de contact, les
                                    refuges dans le passé ou l'irresponsabilité.
                                </p>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    La reconstruction passe par un réaménagement du connu, de nouvelles manières de
                                    communiquer, moins défensives.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </MobileOptimizedSection>

                {/* Specialty Areas Section */}
                <MobileOptimizedSection>
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="text-center mb-8 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-gray-900 mb-4 md:mb-6">
                                Motifs de consultation
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-4 md:mb-8"></div>

                            <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                La thérapie de couple peut vous aider dans de nombreuses situations.

                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 maw-w-2xl gap-6 md:gap-8">
                            {coupleSpecialtyAreas.map((area, index: number) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: Math.min(index * 0.05, 0.3) // Limit maximum delay to 0.3s
                                    }}
                                    viewport={{ once: true, margin: "-50px" }} // Trigger animation earlier
                                >
                                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4">{area.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600">{area.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </MobileOptimizedSection>

                {/* Effectiveness Section */}
                <MobileOptimizedSection className="bg-stone-50">
                    <div className="container mx-auto max-w-3xl">
                        <motion.div
                            className="text-center space-y-4 md:space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >

                            <div className="pt-4 md:pt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block bg-white border-2 border-[#EC6849] px-8 md:px-10 py-3 md:py-4 text-stone-900 font-light uppercase tracking-wider text-sm md:text-base transition-all duration-300 hover:bg-[#EC6849]/50 hover:text-stone-800 shadow-md hover:shadow-lg"
                                >
                                    Réserver un rendez-vous
                                </a>
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

export default CouplePage;
