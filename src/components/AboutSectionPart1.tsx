import React from 'react';
import { motion } from 'framer-motion';

const AboutSectionPart1: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-full bg-soft-beige" id="about-part1">
            <div
                className="container mx-auto px-4 md:px-8 py-8"
                style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.02) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.02) 2%, transparent 0%)',
                    backgroundSize: '100px 100px'
                }}
            >
                {/* Header with elegant animation */}
                <motion.div
                    className="mb-8 text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider text-stone-800"
                        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                    >
                        Carole Lagardère
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-600 tracking-wide"
                        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                    >
                        Thérapeute familiale et de couple
                    </h2>
                </motion.div>

                {/* Professional background with subtle animations */}
                <div className="space-y-16 max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4 bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-stone-400"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                            >
                                Parcours & Certification
                            </h3>
                            <ul className="space-y-3 text-md list-none pl-4 text-stone-600 leading-relaxed">
                                <li className="flex items-start">
                                    <span className="text-stone-400 mr-2">•</span>
                                    <span>Formation longue, thérapie familiale approche systémique (4 ans) à l'IDES Bordeaux (Institut D'Etudes Systémique) 2014</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-stone-400 mr-2">•</span>
                                    <span>Diplôme d'état d'éducatrice spécialisée (DEES) 2006</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4 bg-white/70 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-stone-400"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                            >
                                20 années d'expérience dans l'accompagnement des familles
                            </h3>
                            <ul className="space-y-3 text-md list-none pl-4 text-stone-600 leading-relaxed">
                                <li className="flex items-start">
                                    <span className="text-stone-400 mr-2">•</span>
                                    <span>Entretien individuel : enfant, adolescent, parent</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-stone-400 mr-2">•</span>
                                    <span>Soutien à la parentalité / guidance parentale</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-stone-400 mr-2">•</span>
                                    <span>Entretiens familiaux : médiation, réaccordage parent, enfant</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Inspirational quote */}
                    <motion.div
                        className="text-center mt-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-stone-700 max-w-4xl mx-auto mt-24"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            Si vous êtes sur ce site, c'est peut-être que vous cherchez à améliorer les relations avec vos proches.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionPart1; 