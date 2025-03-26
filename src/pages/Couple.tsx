// src/pages/Couple.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import hand from '../assets/carole-lagardere-therapeute-talence-couple-premiere.jpg';
import homecouple from '../assets/carole-lagardere-therapeute-talence-couple.jpeg';
import posture from '../assets/carole-lagardere-therapeute-talence-posturetherapeute.jpg';

// Import mobile-optimized images

import homecoupleMobile from '../assets/carole-lagardere-therapeute-couple-talence-mobile.jpeg'; // You'll need to create this mobile version
// import { CheckIcon } from '@heroicons/react/24/outline';
import { sectionIds } from '../constants/navigation';
import BookingSection from '../components/BookingSection';
import { useIsMobile } from '../hooks/useIsMobile';
import SEO from '../components/SEO';
import { coupleTherapyServiceData } from '../constants/structuredData';
import { coupleSpecialtyAreas } from '../constants/specialtyAreas';
import ResponsiveImage from '../components/ResponsiveImage';
import { LongPressHover } from '../components/LongPressHover';


// import KeyboardNavigationHelper from '../components/KeyboardNavigationHelper';

// Standardize section padding and margins
const sectionClasses = "py-12 md:py-20 px-4 md:px-8 mx-auto";
const containerClasses = "container mx-auto max-w-5xl";

const CouplePage: React.FC = () => {
    // Use the imported coupleTherapyServiceData directly
    const isMobile = useIsMobile();
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();

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

    return (
        <div className="bg-[#EC6849]/30">
            <SEO
                title="Thérapie de Couple à Talence | Carole Lagardère"
                description="Consultations de couple à Talence près de Bordeaux. Retrouvez l'harmonie dans votre relation, améliorez votre communication et résolvez les conflits avec une approche systémique bienveillante et personnalisée."
                canonicalUrl="https://www.carole-lagardere.fr/couple"
                ogImage="/carole-lagardere-therapeute-talence-couple.jpeg"
                keywords={[
                    "thérapie couple Talence",
                    "thérapie conjugale Bordeaux",
                    "problèmes de couple résolution",
                    "communication couple amélioration",
                    "conflits conjugaux",
                    "conseil conjugal Talence",
                    "thérapeute couple Bordeaux",
                    "crise de couple",
                    "relation amoureuse difficultés",
                    "médiation conjugale Talence",
                    "thérapie systémique couple"
                ]}
                structuredData={coupleTherapyServiceData}
            />


            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        y,
                        opacity: backgroundOpacity,
                        backgroundImage: `url(${isMobile ? homecoupleMobile : homecouple})`,
                        backgroundSize: 'cover',
                        backgroundPosition: isMobile ? 'center center' : 'center'
                    }}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0"></div>
                </motion.div>

                <motion.div
                    className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl mb-24 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-900 font-bebas tracking-wider mb-8 md:mb-16 leading-tight"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Thérapie de Couple
                    </h1>

                    <p className="text-lg md:text-2xl text-stone-900 mb-8 md:mb-12 italic font-medium sm:font-light leading-relaxed px-4 md:px-0"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Améliorer la communication, apaiser les conflits, renforcer la relation au sein de votre couple...
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ y: buttonY }}
                    >
                        <LongPressHover
                            className="inline-block w-full md:w-2/3 md:max-w-md font-medium rounded-sm bg-[#FCF6E9]/70  md:border-2 border-1 border-[#EC6849] md:border-[#EC6849] px-4 md:px-16 py-4 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-stone-900 md:text-base transition-all duration-300 hover:bg-[#EC6849]/10 hover:text-stone-950 hover:font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                            hoverClassName="scale-105 bg-white text-stone-900 font-semibold shadow-xl"
                            onClick={() => window.location.href = `#${sectionIds.booking}`}
                        >
                            Réserver un rdv au cabinet
                        </LongPressHover>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ y: buttonY }}
                    >
                        <LongPressHover
                            className="inline-block w-full md:w-2/3 md:max-w-md font-medium rounded-sm bg-[#FCF6E9]/70  md:border-2 border-1 border-[#EC6849] md:border-[#EC6849] px-4 md:px-16 py-4 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-stone-900 md:text-base transition-all duration-300 hover:bg-[#EC6849]/10 hover:text-stone-950 hover:font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                            hoverClassName="scale-105 bg-white text-stone-900 font-semibold shadow-xl"
                            onClick={() => window.open('https://calendly.com/carolelagardere33/consultation-en-visio', '_blank')}
                        >
                            Réserver une visio
                        </LongPressHover>
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className={sectionClasses}>
                <div className={containerClasses}>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="lg:col-span-1 h-full rounded-lg">
                            <div className="h-full mx-auto relative  overflow-hidden" style={{ minHeight: '450px' }}>
                                <ResponsiveImage
                                    src={hand}
                                    alt="Main réconfortante"
                                    className="absolute inset-0 h-full  object-contain "

                                    height={1000}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority={true}
                                />

                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-4 md:space-y-6 px-0 md:px-4">
                            <h2 className="text-xl md:text-3xl  text-gray-900  font-light tracking-wide mb-4 md:mb-6 font-medium text-center lg:text-left">
                                Vous traversez chacun, et ensemble, <br className="hidden md:block" /> une période douloureuse
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left  ">
                                En thérapie, l'objectif n'est pas de déterminer qui a tort ou qui a raison, ni de faire changer
                                l'autre mais d'arriver à une collaboration afin de modifier le fonctionnement du « système
                                couple »
                            </p>



                            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left  md:px-2">
                                Il s'agit d'offrir la possibilité à chacun d'exposer sa perception de la situation, son vécu et ses
                                attentes et aussi d'entendre et de reconnaître la perception de l'autre. Identifier les besoins
                                d'attachement, la construction du monde de chacun pour éclairer les liens du
                                couple.
                            </p>

                            <div className="pt-4 md:pt-6 text-center ">
                                <LongPressHover
                                    className="inline-block bg-[#EC6849] w-full max-w-sm px-8 px-12 md:px-12 py-4 md:py-5 text-stone-100 font-medium rounded-md uppercase tracking-wider text-xl md:text-lg transition-all duration-300 border-2 border-[#EC6849] shadow-md"
                                    hoverClassName="bg-[#FCF6E9] text-[#EC6849] shadow-lg hover:text-[#EC6849]"
                                    onClick={() => window.location.href = `#${sectionIds.booking}`}
                                >
                                    Faire le premier pas
                                </LongPressHover>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Therapist Approach Section */}
            <section className={sectionClasses}>
                <div className={containerClasses}>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="lg:col-span-1 h-full">
                            <div className="h-full w-full relative rounded-lg overflow-hidden border-2 border-[#EC6849]/30" style={{ minHeight: '450px' }}>
                                <ResponsiveImage
                                    src={posture}
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
                        <div className="lg:col-span-2 space-y-4 md:space-y-6 md:px-4">
                            <h2 className="text-xl md:text-3xl  text-gray-900 font-light tracking-wide mb-4 md:mb-6  font-medium text-left">
                                La posture du thérapeute en séance
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left lg:text-left">
                                La simple présence du thérapeute produit du neuf. <br />Il
                                impacte le couple avec tout son être, il est partie prenante du système. Il met ses
                                résonnances au service du couple et partage ses hypothèses, ses observations.

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed  pt-4 lg:text-left">
                                    Il est attentif
                                    aux sensations corporelles, manifestations émotionnelles dans l'ici et maintenant et aux faits
                                    extérieurs ou antérieurs.
                                </p>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed pt-4 lg:text-left">
                                    Il favorise les échanges, pointe les évitements de contact, les
                                    refuges dans le passé ou l'irresponsabilité.
                                </p>
                            </p>


                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specialty Areas Section */}
            <section className={sectionClasses}>
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-8 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-light font-medium tracking-wide text-gray-900 mb-4 md:mb-6">
                            Motifs de consultation
                        </h2>

                        <div className="w-20 h-1 bg-[#EC6849] mx-auto mb-4 md:mb-8"></div>

                        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            La thérapie de couple peut vous aider dans de nombreuses situations.

                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 maw-w-2xl gap-6 md:gap-8  md:px-4">
                        {coupleSpecialtyAreas.map((area, index: number) => (
                            <motion.div
                                key={index}
                                className="bg-[#FCF6E9] p-4 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
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
            </section>



            {/* Booking Section */}

            <BookingSection calendlyUrl="https://calendly.com/carolelagardere33/therapie-de-couple" />



        </div>
    );
};

export default CouplePage;
