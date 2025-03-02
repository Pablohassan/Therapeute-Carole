// src/pages/Couple.tsx
import React from 'react';
import { motion } from 'framer-motion';
import hand from '../assets/hand.webp';
import genealogieImage from '../assets/genealogie.webp';
import therapistImage from '../assets/therapist.webp';
import abstrait1 from '../assets/abstrait1.webp';
// import { CheckIcon } from '@heroicons/react/24/outline';
import { sectionIds } from '../constants/navigation';
import BookingSection from '../components/BookingSection';
import ResponsiveImage from '../components/ResponsiveImage';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import { coupleSpecialtyAreas } from '../constants/specialtyAreas';

const CouplePage: React.FC = () => {
    // Create specific service data for couple therapy
    const coupleTherapyData = {
        ...therapyServiceData,
        name: "Thérapie de Couple",
        serviceType: "Thérapie de Couple",
        description: "La thérapie de couple vise à transformer votre relation pour vous permettre de vous sentir plus satisfait et épanoui. Elle aide à améliorer la communication et à résoudre les conflits."
    };

    return (
        <>
            <SEO
                title="Thérapie de Couple"
                description="Transformez votre relation afin de vous permettre de vous sentir plus satisfait et épanoui. La thérapie de couple permet d'améliorer la communication et de résoudre les conflits."
                canonicalUrl="https://www.carole-lagardere.fr/couple"
                ogImage="/images/couple.webp"
                keywords={["thérapie de couple", "problèmes de couple", "communication couple", "crise relationnelle", "Bordeaux"]}
                structuredData={coupleTherapyData}
            />

            <div className="font-sans text-gray-700">
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${abstrait1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>

                    <motion.div
                        className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-white mb-8 md:mb-16"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Thérapie de Couple
                        </h1>

                        <p className="text-xl md:text-2xl text-white font-light mb-8  md:mb-16 leading-relaxed"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
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
                                className="inline-block bg-transparent border-2 border-white px-8 md:px-16 py-4 md:py-6 text-white font-light uppercase tracking-wider text-md md:text-base transition-all duration-300 hover:bg-white hover:text-stone-800 shadow-lg hover:shadow-xl "
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <section className="py-20 px-6 bg-stone-50">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                    <img
                                        src={hand}
                                        alt="Mains de couple"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md "
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    « Vous traversez chacun, et ensemble, <br /> une période douloureuse »
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    En thérapie, l'objectif n'est pas de déterminer qui a tort ou qui a raison, ni de faire changer
                                    l'autre mais d'arriver à une collaboration afin de modifier le fonctionnement du « système
                                    couple » et ainsi de supprimer ou d'atténuer la souffrance.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Pour cela, le thérapeute accueille le couple, observe le fonctionnement, interroge ce qui a
                                    provoqué la crise et le choix du moment pour amorcer une thérapie. Il est essentiel que
                                    chacun s'engage dans le travail thérapeutique.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Il s'agit d'offrir la possibilité à chacun d'exposer sa perception de la situation, son vécu et ses
                                    attentes et aussi d'entendre et de reconnaître la perception de l'autre. Identifier les besoins
                                    d'attachement, la construction du monde de chacun nous permettra d'éclairer les liens du
                                    couple dans le présent.
                                </p>

                                <div className="pt-6">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className="inline-block bg-stone-700 px-8 py-3 text-white font-light uppercase tracking-wider text-sm transition-all duration-300 hover:bg-stone-600 shadow-md hover:shadow-lg"
                                    >
                                        Aller de l'avant
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quote Section */}
                <motion.div
                    className="py-16 px-6 text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto p-16 max-w-[80%] bg-yellow-950/60 text-center">
                        <p className="mx-auto text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed">
                            « Réencrer le système couple dans l'histoire de chacun »
                        </p>
                    </div>
                </motion.div>

                {/* Genealogy Section */}
                <section className="py-20 px-6 bg-amber-50">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    Réencrer le « système couple » dans l'histoire de chacun...
                                </h2>

                                <h3 className="text-xl italic text-gray-600 mb-4">
                                    en analysant les liens transgénérationnels, en utilisant par exemple le génogramme.
                                </h3>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Comprendre les règles de fonctionnement du couple, son histoire spécifique au-delà de deux
                                    histoires individuelles d'assouplir la structure qui le maintient pour permettre un
                                    remaniement des places et des attentes de chacun.
                                </p>
                            </div>

                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                    <ResponsiveImage
                                        src={genealogieImage}
                                        alt="Génogramme"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md "
                                        width={800}
                                        height={600}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Therapist Approach Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                    {/* Direct image tag as fallback */}
                                    {/* <img
                                        src={therapistImage}
                                        alt="Thérapeute"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md rounded-lg"
                                        loading="lazy"
                                    /> */}


                                    <ResponsiveImage
                                        src={therapistImage}
                                        alt="Thérapeute"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md rounded-sm"
                                        width={800}
                                        height={600}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true} // Try setting priority to true
                                    />

                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    La posture du thérapeute en séance :
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    La simple présence du thérapeute produit du neuf. Il
                                    impacte le couple avec tout son être, il est partie prenante du système. Il met ses
                                    résonnances au service du couple et partage ses hypothèses, ses observations. Il est attentif
                                    aux sensations corporelles, manifestations émotionnelles dans l'ici et maintenant et aux faits
                                    extérieurs ou antérieurs. Il favorise les échanges, pointe les évitements de contact, les
                                    refuges dans le passé ou l'irresponsabilité.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    La reconstruction passe par un réaménagement du connu, de nouvelles manières de
                                    communiquer, moins défensives.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Specialty Areas Section */}
                <section className="py-20 px-6 bg-amber-50">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                Domaines d'intervention
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                La thérapie de couple peut vous aider dans de nombreuses situations.
                                Voici les principaux domaines dans lesquels j'interviens :
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coupleSpecialtyAreas.map((area, index: number) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">{area.title}</h3>
                                    <p className="text-gray-600">{area.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Effectiveness Section */}
                <section className="py-20 px-6 bg-stone-50">
                    <div className="container mx-auto max-w-3xl">
                        <motion.div
                            className="text-center space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                Est-ce que la thérapie de couple fonctionne ?
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Effective pour ceux qui sont ouverts et prêts à engager le traitement. Bien que l'hésitation
                                soit normale, l'engagement dans le processus mène à un changement significatif.
                            </p>

                            <div className="pt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block bg-stone-700 px-10 py-4 text-white font-light uppercase tracking-wider text-base transition-all duration-300 hover:bg-stone-600 shadow-md hover:shadow-lg"
                                >
                                    Réserver un rendez-vous
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            <BookingSection />
        </>
    );
};

export default CouplePage;
