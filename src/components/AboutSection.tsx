// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import cabinetImage2 from '../assets/carole-lagardere-therapeute-talence-cabinet2carre.webp';
import cabinetImage3 from '../assets/carole-lagardere-therapeute-talence-cabinet3carre.webp';


const AboutSection: React.FC = () => {
    // Animation variants for consistent animations throughout the component
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const scaleIn = {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <section className="py-16 md:py-24 bg-[#25926C]/20" id="about">
            <div className="container mx-auto px-4 md:px-8">
                {/* Main headline with elegant animation */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    {...scaleIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="uppercase text-xl md:text-2xl lg:text-3xl tracking-wide italic text-stone-700 max-w-4xl mx-auto md:px-16"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Vous cherchez à améliorer les relations avec vos proches ?
                    </p>
                </motion.div>

                {/* Context section with improved layout */}

                <motion.div
                    className="mb-16 md:mb-20"
                    {...fadeInUp}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto px-4 md:px-6  bg-white/60 rounded-lg p-4">
                        <h3 className="mb-6 md:mb-8 text-center text-lg md:text-xl font-medium uppercase"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.1)' }}
                        >
                            Que cela concerne votre contexte familial :
                        </h3>

                        {/* Vue Desktop : grille en deux colonnes avec effet de survol */}
                        <ul
                            className="hidden  md:grid grid-cols-2 gap-6 mb-8 px-4 font-medium uppercase"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.1)' }}
                        >
                            {[
                                "Votre jeune enfant",
                                "Votre adolescent",
                                "Un adulte ou vous-même",
                                "Votre couple (conjugalité)",
                                "La relation avec vos enfants (parentalité)"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center hover:scale-105 transition-transform duration-200"
                                >
                                    <span className="text-[#25926C] mr-3 text-2xl">•</span>
                                    <span className="text-stone-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Vue Mobile : liste verticale pour une meilleure lisibilité */}
                        <ul
                            className="block md:hidden space-y-4 mb-8 "
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.1)' }}
                        >
                            {[
                                "Votre jeune enfant",
                                "Votre adolescent",
                                "Un adulte ou vous-même",
                                "Votre couple (conjugalité)",
                                "La relation avec vos enfants (parentalité)"
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex  items-center hover:scale-105 transition-transform duration-200"
                                >
                                    <span className="text-[#25926C] mr-3 text-xl">•</span>
                                    <span className="text-stone-700 text-base">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-center text-lg text-stone-700 mb-4">
                            Ou que cela concerne votre contexte professionnel ou social, je peux vous accompagner.
                        </p>
                    </div>
                </motion.div>


                {/* Approach section with improved typography and spacing */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16 md:mb-20 px-2 md:px-6"
                    {...fadeIn}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >


                    <p className="text-lg text-stone-700 leading-relaxed text-justify px-2 md:px-6 mb-8">
                        Je vous accueille dans un espace chaleureux, confidentiel, sécurisé et bienveillant. Je serai à
                        votre écoute et engagée à vos côtés pour vous aider à vous aider. Ensemble, pour
                        comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant
                        vos ressources et compétences. Accompagner, verbaliser, expérimenter le changement au
                        sein de vos relations.
                    </p>

                    {/* Image grid with responsive behavior */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-2 md:px-6">
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={cabinetImage2}
                                alt="Accompagnement thérapeutique"
                                className="w-full h-auto object-cover aspect-square"
                                loading="lazy"
                            />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={cabinetImage3}
                                alt="Espace thérapeutique"
                                className="w-full h-auto object-cover aspect-square"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </motion.div>

                {/* Section title with consistent styling */}
                <motion.div
                    className="text-center mb-16"
                    {...fadeIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="uppercase text-xl md:text-2xl lg:text-3xl tracking-wide italic text-stone-700 max-w-4xl mx-auto md:px-16"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Mon parcours
                    </h2>
                </motion.div>

                {/* Professional background with improved card design */}
                <div className="space-y-16 max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                        {...fadeIn}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Card 1 */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-[#25926C] mb-6 text-center md:text-left"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                Parcours & Certification
                            </h3>
                            <ul className="space-y-4 list-none text-stone-600 leading-relaxed">
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Formation longue, thérapie familiale approche systémique (4 ans) à l'IDES Bordeaux (Institut D'Etudes Systémique) 2014</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Diplôme d'état d'éducatrice spécialisée (DEES) 2006</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/90 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-[#25926C] mb-6 text-center md:text-left"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                20 années d'expérience dans l'accompagnement des familles
                            </h3>
                            <ul className="space-y-4 list-none text-stone-600 leading-relaxed">
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Entretien individuel : enfant, adolescent, parent</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Soutien à la parentalité / guidance parentale</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Entretiens familiaux : médiation, réaccordage parent, enfant</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Values section with improved typography */}
                    <motion.div
                        className="text-center mb-12"
                        {...fadeIn}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-900"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                        >
                            Mes valeurs
                        </h2>
                    </motion.div>

                    {/* Value cards with improved design */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                        {...fadeInUp}
                        transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.2 }}
                    >
                        {/* Value Card 1 */}
                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C] hover:shadow-lg transition-all duration-300 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Écoute active</h3>
                            <p className="text-stone-600">
                                Etre accueilli sans jugement, être entendu et reconnu dans l'expression de ses émotions et de sa souffrance.
                            </p>
                        </div>

                        {/* Value Card 2 */}
                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C] hover:shadow-lg transition-all duration-300 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Accompagnement personnalisé et créatif</h3>
                            <p className="text-stone-600">
                                Analyser les dynamiques familiales et de couple. Mobiliser les ressources et les compétences de chacun. Utiliser différents outils et techniques (génogramme, métaphores, sculptures, jeux de rôles…)
                            </p>
                        </div>

                        {/* Value Card 3 */}
                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C] hover:shadow-lg transition-all duration-300 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Engagement éthique</h3>
                            <p className="text-stone-600">
                                Proposer un cadre sécurisant, bienveillant, confidentiel et chaleureux
                            </p>
                        </div>
                    </motion.div>

                    {/* Final message with improved styling */}
                    <motion.div
                        className="max-w-4xl mx-auto mb-16"
                        {...fadeIn}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-lg lg:text-xl text-stone-700 italic leading-relaxed text-center">
                            Vous vous questionnez sur la pertinence de vous engager dans un processus thérapeutique?


                        </p>

                        <p className="text-lg lg:text-xl text-stone-700 italic leading-relaxed text-center">
                            J'espère  pouvoir vous apporter quelques pistes susceptibles de
                            nourrir votre réflexion… Et pourquoi pas, trouver l&#39;élan, faire le pas pour nous rencontrer !

                        </p>
                    </motion.div>

                    {/* Closing quote with elegant styling */}
                    <motion.div
                        className="text-center mb-8"
                        {...scaleIn}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-3xl md:text-3xl lg:text-4xl font-light italic text-stone-900"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            « Que pouvons-nous faire ensemble ? »
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
