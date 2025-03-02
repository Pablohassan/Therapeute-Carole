import React from 'react';
import { motion } from 'framer-motion';

const AboutSectionPart3: React.FC = () => {
    return (
        <section className="py-20 bg-soft-beige" id="about-part3">
            <div className="container mx-auto px-4 md:px-8">
                <div className="space-y-16 max-w-6xl mx-auto">
                    {/* Approach section */}
                    <motion.div
                        className="space-y-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-stone-600 leading-relaxed mt-16 font-light mb-16">
                            <h3 className="text- md:text-lg xl:text-xl  itallic "> Je vous accueille dans un espace chaleureux, sécurisé, bienveillant et confidentiel. </h3>
                            Je serai à votre écoute et engagée à vos côtés pour vous aider à vous aider. Ensemble, pour
                            comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant
                            vos ressources et compétences. Accompagner, verbaliser, expérimenter le changement au
                            sein de vos relations.
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
                        <div className="bg-white p-6 rounded-lg shadow-md flex-1 border-t-4 border-stone-400 hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Écoute active</h3>
                            <p className="text-stone-600">Etre
                                accueilli sans jugement,
                                être entendu et reconnu
                                dans l'expression de ses
                                émotions et de sa
                                souffrance.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md flex-1 border-t-4 border-stone-400 hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Accompagnement
                                personnalisé et créatif</h3>
                            <p className="text-stone-600">Analyser les dynamiques
                                familiales et de couple,
                                mobiliser les ressources
                                et les compétences de
                                chacun. Utiliser différents
                                outils et techniques
                                (génogramme,
                                métaphore, sculptures,
                                jeux de rôles…)</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md flex-1 border-t-4 border-stone-400 hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-xl mb-3 text-stone-700">Engagement éthique</h3>
                            <p className="text-stone-600">Proposer un cadre
                                sécurisant, bienveillant,
                                confidentiel et chaleureux</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionPart3; 