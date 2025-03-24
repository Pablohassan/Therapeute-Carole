// src/components/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import cabinetImage2 from '../assets/carole-lagardere-therapeute-talence-cabinet.jpeg';
// Import icons
import { FaChild, FaUser, FaUsers, FaHeart } from 'react-icons/fa';

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
        <section className="py-16 md:py-24 bg-[#25926C]/50" id="about">
            <div className="container mx-auto px-4 md:px-6 ">
                {/* Main headline with elegant animation */}
                <motion.div
                    className="text-center mb-4 md:mb-20 px-2 md:px-6"
                    {...scaleIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className=" text-2xl md:text-2xl lg:text-3xl font-medium tracking-wide font-medium max-w-4xl mx-auto px-2 md:px-16"
                        style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    >
                        Vous cherchez à améliorer les relations avec vos proches ?
                    </p>
                </motion.div>

                {/* Context section with improved layout */}

                <motion.div
                    className="mb-16 md:mb-20 py-4 md:py-8"
                    {...fadeInUp}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="max-w-4xl mx-auto px-4 md:px-6 bg-gradient-to-br from-[#FCF6E9] to-[#f5efe0] rounded-lg py-6 md:py-12 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-stone-900/30 border border-stone-200/50">
                        <motion.h3
                            className="mb-8 md:mb-10 text-center text-lg md:text-2xl font-medium text-stone-800"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0,0,0,0.1)' }}
                        >
                            Que cela concerne votre contexte familial :
                        </motion.h3>

                        {/* Vue Desktop : grille avec cartes animées */}
                        <div className="hidden md:grid grid-cols-2 gap-6 mb-10 px-4">
                            {[
                                { text: "Votre jeune enfant", icon: <FaChild className="text-[#25926C] text-xl" /> },
                                { text: "Votre adolescent", icon: <FaUser className="text-[#25926C] text-xl" /> },
                                { text: "Un adulte ou vous-même", icon: <FaUser className="text-[#25926C] text-xl" /> },
                                { text: "Votre couple (conjugalité)", icon: <FaHeart className="text-[#25926C] text-xl" /> },
                                { text: "La relation avec vos enfants (parentalité)", icon: <FaUsers className="text-[#25926C] min-w-10  text-xl" /> }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer group"
                                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.9)" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25926C]/10 mr-3 group-hover:bg-[#25926C]/20 transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-stone-700 text-lg font-medium group-hover:text-[#25926C] transition-colors duration-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Vue Mobile : liste verticale avec animations subtiles */}
                        <div className="block md:hidden space-y-3 mb-8">
                            {[
                                { text: "Votre jeune enfant", icon: <FaChild className="text-[#25926C] text-lg" /> },
                                { text: "Votre adolescent", icon: <FaUser className="text-[#25926C] text-lg" /> },
                                { text: "Un adulte ou vous-même", icon: <FaUser className="text-[#25926C] text-lg" /> },
                                { text: "Votre couple (conjugalité)", icon: <FaHeart className="text-[#25926C] text-lg" /> },
                                { text: "La relation avec vos enfants (parentalité)", icon: <FaUsers className="text-[#25926C] min-w-8  text-lg" /> }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center bg-white/60 p-4 rounded-md shadow-sm active:bg-white/90"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25926C]/10 mr-3">
                                        {item.icon}
                                    </div>
                                    <span className="text-stone-800 text-base font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-center  text-lg md:text-2xl font-medium pt-4 px-2 sm:px-4 text-stone-700"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Ou que cela concerne votre contexte professionnel ou social, je peux vous accompagner.
                        </motion.p>
                    </div>
                </motion.div>


                {/* Approach section with improved typography and spacing */}
                <motion.div
                    className=" mx-auto mb-16 md:mb-20  md:px-6"
                    {...fadeIn}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {/* Image grid with responsive behavior */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 mt-6 pt-2 md:pt-8">
                        <div className="overflow-hidden sm:aspect-16/9 hover:shadow-lg transition-shadow duration-300 sm:col-span-2">
                            <img
                                src={cabinetImage2}
                                alt="Cabinet de thérapie familiale à Talence"
                                className="w-full h-auto object-cover"
                                width="800"
                                height="450"
                                loading="lazy"
                                fetchPriority="low"
                            />
                        </div>
                    </div>
                    <p className="text-sm sm:text-lg text-center  text-stone-900  leading-relaxed sm:col-span-1 w-full px-2 md:px-4 pt-2 mb-8">
                        Je vous accueille dans un espace chaleureux, confidentiel, sécurisé et bienveillant.<br />Je serai à
                        votre écoute et engagée à vos côtés.
                    </p>
                </motion.div>

                {/* Section title with consistent styling */}
                <motion.div
                    className="text-center mb-8 sm:mb-16"
                    {...fadeIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className=" text-2xl md:text-2xl lg:text-3xl font-medium tracking-wide  max-w-4xl mx-auto md:px-16"
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
                        <div className="bg-[#FCF6E9] p-8 rounded-lg shadow-md shadow-md  transition-transform duration-500 hover:shadow-lg hover:shadow-stone-900/40">
                            <h3 className="text-xl uppercase tracking-wider text-stone-800 border-l-4 pl-4 py-2 border-[#25926C] mb-6 text-center md:text-left"
                                style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                            >
                                Parcours & Certification
                            </h3>
                            <ul className="space-y-4 list-none text-stone-600 leading-relaxed ">
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg ">•</span>
                                    <span>Formation longue, thérapie familiale approche systémique (4 ans) à l'IDES Bordeaux (Institut D'Etudes Systémique) 2014</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#25926C] mr-3 mt-1 text-lg">•</span>
                                    <span>Diplôme d'état d'éducatrice spécialisée (DEES) 2006</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FCF6E9] p-8 rounded-lg shadow-md  transition-transform duration-500 hover:shadow-lg hover:shadow-stone-900/40">
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
                        <h2 className="text-2xl md:text-2xl lg:text-3xl font-medium text-stone-900 pt-4"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                        >
                            Mes compétences
                        </h2>
                    </motion.div>

                    {/* Value cards with improved design */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                        {...fadeInUp}
                        transition={{ duration: 0.8, delay: 0.6, staggerChildren: 0.2 }}
                    >
                        {/* Value Card 1 */}
                        <div className="bg-[#FCF6E9] p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/70 shadow-md  transition-transform duration-500 hover:shadow-lg hover:shadow-stone-900/40 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Écoute active</h3>
                            <p className="text-stone-600">
                                Etre accueilli sans jugement, être entendu et reconnu dans l'expression de ses émotions et de sa souffrance.
                            </p>
                        </div>

                        {/* Value Card 2 */}
                        <div className="bg-[#FCF6E9] p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/70 shadow-md  transition-transform duration-500 hover:shadow-lg hover:shadow-stone-900/40 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Accompagnement personnalisé et créatif</h3>
                            <p className="text-stone-600">
                                Analyser les dynamiques familiales et de couple. Mobiliser les ressources et les compétences de chacun. Utiliser différents outils et techniques (génogramme, métaphores, sculptures, jeux de rôles…)
                            </p>
                        </div>

                        {/* Value Card 3 */}
                        <div className="bg-[#FCF6E9] p-6 rounded-lg shadow-md flex-1 border-t-4 border-[#25926C]/70 shadow-md  transition-transform duration-500 hover:shadow-lg hover:shadow-stone-900/40 text-center md:text-left">
                            <h3 className="font-semibold text-xl mb-4 text-stone-700">Engagement éthique</h3>
                            <p className="text-stone-600">
                                Proposer un cadre sécurisant, bienveillant, confidentiel et chaleureux
                            </p>
                        </div>
                    </motion.div>

                    {/* Closing quote with elegant styling */}
                    <motion.div
                        className="text-center "
                        {...scaleIn}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic text-stone-900 pt-16"
                            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}
                        >
                            Que pouvons-nous faire ensemble ?
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
