import React from 'react';
import { motion } from 'framer-motion';

const AboutSectionPart4: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-full bg-stone-100" id="about-part4">
            <div
                className="container mx-auto px-4 md:px-8 py-8"
                style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.01) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.01) 2%, transparent 0%)',
                    backgroundSize: '100px 100px'
                }}
            >
                <div className="space-y-12 max-w-7xl mx-auto">
                    {/* Approach section */}
                    <motion.div
                        className="space-y-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/70 p-12 rounded-lg shadow-sm space-y-6">
                            <motion.p
                                className="text-lg text-stone-600 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl md:text-2xl xl:text-3xl font-light itallic mb-8">Vous vous questionnez sur la pertinence de vous engager dans un processus thérapeutique ?</h3>
                                j'espère par les contenus de ce site, pouvoir vous apporter quelques pistes susceptibles de
                                nourrir votre réflexion… et pourquoi pas, trouver l&#39;élan, faire le pas pour nous rencontrer !
                            </motion.p>

                            <motion.p
                                className="text-lg text-stone-600 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Educatrice spécialisée depuis 2006, 20 années de pratique en protection de l'enfance.
                                Expérience d'accompagnement des enfants, adolescents et leurs parents. Organiser des
                                rencontres, mener des entretiens familiaux, individuels, afin d'identifier les difficultés et
                                accompagner vers l'apaisement, le changement.
                            </motion.p>

                            <motion.p
                                className="text-lg text-stone-600 leading-relaxed font-medium"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                L'enfant, l'adolescent et la famille ont toujours été au cœur de mes préoccupations
                                professionnelles.
                            </motion.p>
                        </div>

                        <motion.div
                            className="text-center mt-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="#section-3" // Direct link to the booking section
                                className="inline-block bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-stone-300"
                            >
                                Prendre rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionPart4; 