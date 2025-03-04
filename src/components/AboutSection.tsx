// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#25926C]/10" id="about">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header with elegant animation */}
                {/* Inspirational quote */}
                <motion.div
                    className="text-center my-16 mt-32"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-stone-700 max-w-4xl  mx-auto"
                        style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                    >
                        Vous cherchez à améliorer les relations avec vos proches ?
                    </p>
                </motion.div>

                {/* Context section */}
                <motion.div
                    className="my-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-lg text-stone-800 max-w-4xl mx-auto mb-8">
                        <p className="mb-4 font-montserrat font-medium text-xl">Que cela concerne votre contexte familial :</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 pl-6"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            <li className="flex items-center">
                                <span className="text-stone-400 mr-2">•</span>
                                <span>Votre jeune enfant</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-stone-400 mr-2">•</span>
                                <span>Votre adolescent</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-stone-400 mr-2">•</span>
                                <span>Un adulte ou vous-même</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-stone-400 mr-2">•</span>
                                <span>Votre couple (conjugalité)</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-stone-400 mr-2">•</span>
                                <span>La relation avec vos enfants (parentalité)</span>
                            </li>
                        </ul>
                        <p>Ou que cela concerne votre contexte professionnel ou social, je peux vous accompagner.</p>
                    </div>


                </motion.div>


                {/* Approach section */}
                <motion.div
                    className="space-y-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Je vous accueille dans un espace chaleureux, confidentiel, sécurisé et bienveillant. Je serai à
                        votre écoute et engagée à vos côtés pour vous aider à vous aider. Ensemble, pour
                        comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant
                        vos ressources et compétences. Accompagner, verbaliser, expérimenter le changement au
                        sein de vos relations.
                    </p>

                </motion.div>

                <motion.div>
                    <div className="text-center font-light  my-16">
                        <p className="text-xl md:text-3xl lg:text-4xl  text-stone-900"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            Mon parcours
                        </p>
                    </div>
                </motion.div>



                {/* Professional background with subtle animations */}
                <div className="space-y-16 max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6 bg-white/90 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-stone-400"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                            >
                                Parcours & Certification
                            </h3>
                            <ul className="space-y-4 text-md list-none pl-4 text-stone-600 leading-relaxed">
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

                        <div className="space-y-6 bg-white/90 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-stone-400"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                            >
                                20 années d'expérience dans l'accompagnement des familles
                            </h3>
                            <ul className="space-y-4 text-md list-none pl-4 text-stone-600 leading-relaxed">
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


                    {/* Quote with elegant styling */}
                    <motion.div
                        className="my-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl  font-light italic text-stone-700 space-y-8 mb-16"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            Mes valeurs
                        </p>

                    </motion.div>



                    {/* Value proposition cards */}
                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-stretch gap-4 mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/60 hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Écoute active</h3>
                            <p className="text-stone-600">Etre
                                accueilli sans jugement,
                                être entendu et reconnu
                                dans l’expression de ses
                                émotions et de sa
                                souffrance.</p>
                        </div>

                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/60 hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Accompagnement
                                personnalisé et créatif</h3>
                            <p className="text-stone-600">Analyser les dynamiques
                                familiales et de couple.
                                Mobiliser les ressources
                                et les compétences de
                                chacun. Utiliser différents
                                outils et techniques
                                (génogramme,
                                métaphores, sculptures,
                                jeux de rôles…)</p>
                        </div>

                        <div className="bg-white/90 p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/60  hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Engagement éthique</h3>
                            <p className="text-stone-600">Proposer un cadre
                                sécurisant, bienveillant,
                                confidentiel et chaleureux</p>
                        </div>
                    </motion.div>
                    {/* Approach section */}
                    <motion.div
                        className="space-y-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg md:text-xl text-stone-600 italic leading-relaxed pt-8 md:pt-16 text-center">
                            Vous vous questionnez sur la pertinence de vous engager dans un processus thérapeutique,
                            j’espère par les contenus de ce site, pouvoir vous apporter quelques pistes susceptibles de
                            nourrir votre réflexion… et pourquoi pas, trouver l&#39;élan, faire le pas pour nous rencontrer !
                        </p>

                        {/* <p className="text-lg text-stone-600 leading-relaxed">
                            Educatrice spécialisée depuis 2006, 20 années de pratique en protection de l'enfance.
                            Expérience d'accompagnement des enfants, adolescents et leurs parents. Organiser des
                            rencontres, mener des entretiens familiaux, individuels, afin d'identifier les difficultés et
                            accompagner vers l'apaisement, le changement.
                        </p>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            L’enfant, l’adolescent et la famille ont toujours été au cœur de mes préoccupations
                            professionnelles.
                        </p> */}
                    </motion.div>

                    <motion.div
                        className="my-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl font-dancing font-light italic text-stone-700 space-y-8 mb-16"
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
