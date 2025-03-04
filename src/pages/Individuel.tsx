// src/pages/Individuel.tsx
import React from 'react';
import { motion } from 'framer-motion';
import homeindividuel from '../assets/homeindividuel.jpeg';
import psychologueImage from '../assets/psycho.webp';
import piedsImage from '../assets/pieds.webp';
import couplelaptopImage from '../assets/couplelaptop.webp';
import BookingSection from '../components/BookingSection';
import ResponsiveImage from '../components/ResponsiveImage';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import { individualSpecialtyAreas } from '../constants/specialtyAreas';
import SnapScrollContainer from '../components/SnapScrollContainer';
import SectionNavigation from '../components/SectionNavigation';
import { sectionIds } from '../constants/navigation';
import KeyboardNavigationHelper from '../components/KeyboardNavigationHelper';

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

    return (
        <>
            <SEO
                title="Thérapie Individuelle"
                description="Retrouvez votre équilibre personnel et développez votre potentiel. La thérapie individuelle vous accompagne dans votre cheminement vers le mieux-être."
                canonicalUrl="https://www.carole-lagardere.fr/individuel"
                ogImage="/images/individuel.webp"
                keywords={["thérapie individuelle", "psychothérapie", "développement personnel", "bien-être", "Bordeaux"]}
                structuredData={individualTherapyData}
            />

            <SectionNavigation totalSections={totalSections} sectionNames={sectionNames} />
            <KeyboardNavigationHelper autoHideDelay={8000} />

            <SnapScrollContainer preventFooterOverlap={true}>
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${homeindividuel})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
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

                        <p className="text-xl md:text-2xl text-sonte-900 font-light mb-8 md:mb-16 leading-relaxed"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Retrouvez votre équilibre personnel et développez votre potentiel. La thérapie individuelle vous accompagne dans votre cheminement vers le mieux-être.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <a
                                href={`#${sectionIds.booking}`}
                                className="inline-block bg-transparent border-2 border-[#FBC018] px-8 md:px-16 py-4 md:py-6 text-sonte-900 font-light uppercase tracking-wider text-md md:text-base transition-all duration-300 hover:bg-[#FBC018]/50 hover:text-stone-800 shadow-lg hover:shadow-xl"
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <section className="py-20 px-6 bg-stone-50 flex items-center">
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
                                        src={piedsImage}
                                        alt="Main réconfortante"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    « Vous traversez une période difficile <br /> et souhaitez être accompagné »
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Vos tentatives pour résoudre vos problèmes personnels n'ont-elles abouti qu'à des soulagements temporaires ? Vous sentez-vous démuni face aux solutions possibles ? Éprouvez-vous des difficultés à comprendre vos émotions et comportements ?
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    La thérapie individuelle peut être le soutien dont vous avez besoin pour surmonter vos blocages personnels. En tant que thérapeute, je vous accompagne pour :
                                </p>

                                <ul className="text-lg text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                                    <li>Explorer vos schémas de pensée et comportements</li>
                                    <li>Identifier les opportunités de développement personnel</li>
                                    <li>Développer votre capacité d'introspection et d'auto-compassion</li>
                                    <li>Guérir les blessures émotionnelles qui entravent votre épanouissement</li>
                                </ul>

                                <div className="pt-6">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className="inline-block bg-[#FBC018] px-8 py-3 text-sonte-900 font-light uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#FBC018]/50 hover:text-stone-800 shadow-md hover:shadow-lg"
                                    >
                                        Aller de l'avant
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Approach Section with Quote */}
                <section className="py-20 px-6 bg-amber-50 flex items-center">
                    <div className="container mx-auto max-w-5xl">
                        {/* Quote at the top of the Approach section */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-10 bg-yellow-950/60 text-sonte-900 mb-12">
                                <p className="mx-auto text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed">
                                    « Se comprendre pour mieux avancer »
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    Qu'est-ce que la thérapie individuelle ?
                                </h2>

                                <h3 className="text-xl italic text-gray-600 mb-4">
                                    Un espace sécurisé pour explorer votre monde intérieur
                                </h3>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    La thérapie individuelle offre un espace confidentiel et bienveillant où vous pouvez explorer librement vos pensées, émotions et comportements. C'est un lieu où vous êtes accueilli sans jugement, avec vos forces et vos vulnérabilités.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Contrairement aux conversations quotidiennes, la thérapie est entièrement centrée sur vous et vos besoins. Ensemble, nous explorerons votre histoire personnelle, vos schémas relationnels et vos mécanismes d'adaptation pour comprendre ce qui façonne votre expérience actuelle.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Notre objectif est de vous aider à développer une meilleure compréhension de vous-même, à renforcer vos ressources intérieures et à trouver des solutions adaptées à vos défis personnels.
                                </p>
                            </div>

                            <div className="lg:col-span-1 h-full">
                                <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                    <ResponsiveImage
                                        src={couplelaptopImage}
                                        alt="Personne en thérapie"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md rounded-sm"
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

                {/* Therapeutic Approach Section */}
                <section className="py-20 px-6 bg-white flex items-center">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-1 w-full h-full">
                                <div className="w-full h-full relative" style={{ minHeight: '400px' }}>
                                    <ResponsiveImage
                                        src={psychologueImage}
                                        alt="Accompagnement thérapeutique"
                                        className="absolute inset-0 h-full w-full object-cover shadow-md rounded-sm"
                                        width={800}
                                        height={800}
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={true}
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    Mon approche thérapeutique
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Ma pratique s'inspire de différentes approches thérapeutiques que j'adapte à vos besoins spécifiques. Je m'appuie notamment sur l'approche systémique, qui considère l'individu dans son contexte relationnel et social.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    En séance, je porte une attention particulière à vos ressentis, à vos modes de communication et à vos représentations du monde. Je vous accompagne dans l'exploration de vos ressources intérieures et dans le développement de nouvelles stratégies pour faire face aux défis que vous rencontrez.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Mon rôle est de créer un espace sécurisant où vous pouvez vous exprimer librement, tout en vous offrant un regard extérieur bienveillant et des outils concrets pour avancer vers vos objectifs personnels.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Specialty Areas Section */}
                <section className="py-20 px-6 bg-amber-50 flex items-center">
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
                                La thérapie individuelle peut vous aider dans de nombreuses situations.
                                Voici les principaux domaines dans lesquels j'interviens :
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {individualSpecialtyAreas.map((area, index: number) => (
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
                                Est-ce que la thérapie individuelle fonctionne ?
                            </h2>

                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                La thérapie individuelle est efficace pour ceux qui sont ouverts et prêts à s'engager dans un processus de changement. Bien que l'hésitation initiale soit normale, l'engagement dans le processus thérapeutique mène généralement à des transformations significatives.
                            </p>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Nous travaillerons ensemble à votre rythme, en respectant vos besoins et vos limites. La thérapie est un espace où vous pouvez explorer en toute sécurité, apprendre à mieux vous connaître et développer de nouvelles compétences pour faire face aux défis de la vie.
                            </p>

                            <div className="pt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block bg-stone-700 px-10 py-4 text-sonte-900 font-light uppercase tracking-wider text-base transition-all duration-300 hover:bg-stone-600 shadow-md hover:shadow-lg"
                                >
                                    Réserver un rendez-vous
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </SnapScrollContainer>

            <BookingSection />
        </>
    );
};

export default IndividuelPage;
