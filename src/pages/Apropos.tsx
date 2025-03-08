// src/pages/BlogPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { sectionIds } from '../constants/navigation';
import SEO from '../components/SEO';
import therapistImage from '../assets/carole-lagardere-therapeute-familiale-talence.webp'; // Assuming you have this image
import { showFooter } from '../components/Layout';

const AproposPage: React.FC = () => {
    // Force footer to be visible after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            showFooter();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SEO
                title="À Propos de Carole Lagardère"
                description="Découvrez Carole Lagardère, thérapeute familiale systémique certifiée EFTA à Talence. Formation, approche thérapeutique et philosophie de soins. Consultations accessibles à tous."
                canonicalUrl="https://www.carole-lagardere.fr/apropos"
                ogImage="/carole-lagardere-therapeute-familiale.webp"
                keywords={["thérapeute familiale Talence", "Carole Lagardère thérapeute", "thérapie systémique Bordeaux", "thérapie familiale EFTA", "thérapeute certifiée Talence", "consultation thérapie Bordeaux", "approche systémique"]}
            />

            <main className="font-montserrat text-stone-800 font-light">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center py-32 bg-[#25926C]/20">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="max-w-5xl mx-auto text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-stone-800 mb-6">
                                Carole Lagardère
                            </h1>
                            <p className="text-xl md:text-2xl xl:text-3xl font-light text-stone-900 mb-4">
                                Thérapeute familiale et de couple
                            </p>
                            <div className="w-24 h-1 bg-[#25926C]/60 mx-auto my-8"></div>
                            <p className="text-lg md:text-xl xl:text-2xl text-stone-600 italic max-w-2xl mx-auto font-light"
                                style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)' }}
                            >
                                "Accompagner le changement pour retrouver une forme d'équilibre et restaurer les relations"
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Bio Section with Photo */}
                <section className="py-20 px-6 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Photo Column */}
                            <div className="lg:col-span-5 lg:sticky lg:top-24">
                                <div className="relative aspect-[3/4] w-full overflow-hidden shadow-xl">
                                    <img
                                        src={therapistImage}
                                        alt="Carole Lagardère, Thérapeute familiale"
                                        className="object-cover w-full h-full rounded-sm"

                                    />
                                </div>

                                <div className="mt-8 bg-stone-50 p-6 border-l-4 border-stone-400">
                                    <h3 className="text-xl uppercase tracking-wider text-stone-800 mb-4">
                                        Certifications
                                    </h3>
                                    <ul className="space-y-3 text-stone-600">
                                        <li className="flex items-start">
                                            <span className="text-stone-400 mr-2">•</span>
                                            <span>Thérapeute familiale systémique certifiée EFTA</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-stone-400 mr-2">•</span>
                                            <span>Institut d'Étude Systémique de Bordeaux</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-stone-400 mr-2">•</span>
                                            <span>Diplôme d'État d'Éducatrice Spécialisée</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bio Content Column */}
                            <div className="lg:col-span-7 space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl uppercase text-stone-800 font-light tracking-wide mb-6 border-b border-stone-200 pb-3">
                                        Mon parcours
                                    </h2>
                                    <div className="space-y-4 text-stone-600 leading-relaxed">
                                        <p>
                                            Je me suis formée à l'institut d'étude systémique de Bordeaux, membre de l'EFTA (Association
                                            Européenne de Thérapie Familiale).
                                        </p>
                                        <p>
                                            Éducatrice spécialisée de formation initiale, j'ai exercé pendant 20 ans auprès de familles dans
                                            le cadre de la protection de l'enfance. J'y ai mené des entretiens familiaux (soutien à la parentalité,
                                            accompagnement des relations parents / enfants), des entretiens individuels (adultes, enfants et adolescents).
                                        </p>
                                        <p>
                                            Au cabinet, je reçois les familles, les adultes, les adolescents et les enfants pour des thérapies
                                            familiales, de couple ou individuelles en fonction de vos besoins.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <h2 className="text-2xl md:text-3xl uppercase text-stone-800 font-light tracking-wide mb-6 border-b border-stone-200 pb-3">
                                        Mes approches thérapeutiques
                                    </h2>

                                    <div className="space-y-8">
                                        <div className="bg-[#25926C]/10 p-6 border-l-4 border-[#25926C]/80">
                                            <h3 className="text-xl font-medium text-stone-800 mb-3">
                                                Thérapie Familiale
                                            </h3>
                                            <p className="text-stone-600 leading-relaxed mb-4">
                                                Elle prend en compte l'individu dans son contexte, en explorant les fonctionnements, les
                                                interactions entre les membres de la famille. Elle accompagne le changement pour retrouver une forme
                                                d'équilibre et restaurer les relations au sein de la famille.
                                            </p>
                                            <p className="text-stone-600 leading-relaxed">
                                                La thérapie familiale s'appuie sur les ressources de la famille, les compétences parentales.
                                                C'est une approche utile pour surmonter des crises, tensions ou blocages au sein de la famille.
                                            </p>
                                        </div>

                                        <div className="bg-[#EC6849]/20 p-6 border-l-4 border-[#EC6849]/80">
                                            <h3 className="text-xl font-medium text-stone-800 mb-3">
                                                Thérapie de Couple
                                            </h3>
                                            <p className="text-stone-600 leading-relaxed">
                                                Il s'agit d'explorer l'histoire du couple, de travailler sur la communication, de favoriser l'écoute et
                                                de percevoir les attentes de chacun. Cette approche est utile pour améliorer la communication,
                                                apaiser les conflits, renforcer la relation au sein du couple.
                                            </p>
                                        </div>

                                        <div className="bg-[#FBC018]/10 p-6 border-l-4 border-[#FBC018]/80">
                                            <h3 className="text-xl font-medium text-stone-800 mb-3">
                                                Thérapie Individuelle
                                            </h3>
                                            <p className="text-stone-600 leading-relaxed mb-4">
                                                La thérapie individuelle systémique permet d'explorer l'ensemble des relations de la personne
                                                (familiales, amicales, professionnelles). Par une écoute active, l'utilisation d'outils systémiques et
                                                en s'appuyant sur ses ressources, il s'agit d'accompagner la personne vers une meilleure
                                                compréhension d'elle-même.
                                            </p>
                                            <p className="text-stone-600 leading-relaxed">
                                                Cette approche est utile pour ceux qui rencontrent des problèmes relationnels, des conflits
                                                familiaux, des répétitions de schémas de vie.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <h2 className="text-2xl md:text-3xl uppercase text-stone-800 font-light tracking-wide mb-6 border-b border-[#25926C]/80 pb-3">
                                        Ma philosophie
                                    </h2>
                                    <div className="space-y-4 text-stone-600 leading-relaxed">
                                        <p>
                                            L'approche systémique invite à la créativité, en offrant des méthodes et des outils différents des
                                            thérapies traditionnelles.
                                        </p>
                                        <p>
                                            Je vous assure un cadre bienveillant et sécurisant. Je suis pleinement engagée à vos côtés
                                            pour vous permettre de révéler votre potentiel, trouver vos solutions et renouer avec des
                                            relations plus harmonieuses.
                                        </p>
                                        <p>
                                            Afin de rendre les consultations accessibles à tous, un tarif réduit est proposé aux étudiants,
                                            aux demandeurs d'emploi et personnes en situation de précarité.
                                            N'hésitez pas à me contacter pour en discuter.
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    className="pt-12 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <a
                                        href={`#${sectionIds.contact}`}
                                        className="inline-block bg-[#25926C] px-10 py-4 text-white font-light uppercase tracking-wider text-base transition-all duration-300 hover:scale-105 hover:font-medium shadow-md hover:shadow-lg"
                                    >
                                        Me contacter
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 px-6 bg-soft-beige">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl uppercase text-stone-800 font-light tracking-wide mb-6">
                                Mes valeurs
                            </h2>
                            <div className="w-20 h-1 bg-stone-400 mx-auto mb-8"></div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, staggerChildren: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 rounded-sm shadow-sm shadow-[#25926C]/20 border-t-4 border-[#25926C]/80 hover:shadow-md hover:shadow-[#25926C]/20 transition-all">
                                <h3 className="text-xl font-medium text-stone-800 mb-4">Bienveillance</h3>
                                <p className="text-stone-600">
                                    Un espace d'accueil chaleureux et sécurisant où chacun peut s'exprimer librement sans jugement.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-sm shadow-sm shadow-[#25926C]/20 border-t-4 border-[#25926C]/80 hover:shadow-md hover:shadow-[#25926C]/20 transition-all">
                                <h3 className="text-xl font-medium text-stone-800 mb-4">Engagement</h3>
                                <p className="text-stone-600">
                                    Un accompagnement personnalisé et engagé pour vous aider à révéler votre potentiel et trouver vos solutions.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-sm shadow-sm shadow-[#25926C]/20 border-t-4 border-[#25926C]/80 hover:shadow-md hover:shadow-[#25926C]/20 transition-all">
                                <h3 className="text-xl font-medium text-stone-800 mb-4">Créativité</h3>
                                <p className="text-stone-600">
                                    Une approche qui favorise l'innovation et l'adaptation pour répondre aux besoins spécifiques de chaque situation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact & Social Media Section */}
                <section id={sectionIds.contact} className="py-20 px-6 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl uppercase text-stone-800 font-light tracking-wide mb-6">
                                Contact & Réseaux Sociaux
                            </h2>
                            <div className="w-20 h-1 bg-[#25926C]/80 mx-auto mb-8"></div>
                            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                                N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <motion.div
                                className="bg-stone-50 border-1 border-[#25926C]/10 p-8 rounded-sm shadow-sm shadow-[#25926C]/10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-medium text-stone-800 mb-6 border-b border-stone-200 pb-3">
                                    Coordonnées
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start hover:scale-105 transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-stone-800">Adresse</p>
                                            <a
                                                href="https://maps.google.com/?q=184+cours+du+Maréchal+Gallieni+33400+Talence+France"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-stone-600 hover:text-stone-800 transition-colors"
                                            >
                                                <p>Cabinet de thérapie familiale</p>
                                                <p>184 cours du Maréchal Gallieni</p>
                                                <p>33400 Talence</p>
                                            </a>
                                            <a
                                                href="https://www.google.com/search?q=carole+lagardere+talence+therapeute"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-3 rounded-md px-3 py-2 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                                            >
                                                <div className="flex items-center">
                                                    {/* Google "G" logo */}
                                                    <svg className="h-4 w-4 mr-2 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                    </svg>

                                                    <span className="font-medium text-sm md:text-base text-gray-700 mr-2 hover:text-stone-800 " style={{ fontFamily: "'Product Sans', Arial, sans-serif" }}>
                                                        Laissez un avis Google
                                                    </span>

                                                    {/* 4 Golden Stars */}
                                                    <div className="flex">
                                                        {[...Array(4)].map((_, i) => (
                                                            <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start hover:scale-105 transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-stone-800">Email</p>
                                            <a
                                                href="mailto:therapie@carole-lagardere.fr"
                                                className="text-stone-600 hover:text-stone-800 transition-colors inline-flex items-center hover:bg-stone-100 px-2 py-1 rounded-sm"
                                            >
                                                <span>therapie@carole-lagardere.fr</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start hover:scale-105  transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-stone-800 hover:text-stone-800 transition-colors ">Téléphone</p>
                                            <a href="tel:+33612345678" className="text-stone-600 hover:text-stone-800 transition-colors hover:scale-105 hover:rounded-sm hover:bg-transparent ">
                                                +33 7 78 24 09 60
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-stone-800">Horaires</p>
                                            <p className="text-stone-600">Mardi : 8h30 - 13h30</p>
                                            <p className="text-stone-600">Mercredi : 8h30 - 19h30</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Social Media */}
                            <motion.div
                                className="bg-stone-50 border-1 border-[#25926C]/10 p-8 rounded-sm shadow-sm shadow-[#25926C]/10"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-medium text-stone-800 mb-6 border-b border-stone-200 pb-3">
                                    Réseaux Sociaux
                                </h3>

                                <p className="text-stone-600 mb-8">
                                    Suivez-moi sur les réseaux sociaux pour des conseils, des articles et des informations sur la thérapie familiale et de couple.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-stone-200 rounded-sm hover:shadow-md transition-shadow"
                                    >
                                        <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-stone-800">Facebook</span>
                                    </a>

                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-stone-200 rounded-sm hover:shadow-md transition-shadow"
                                    >
                                        <svg className="w-6 h-6 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-stone-800">Instagram</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/carole-lagardere-ba828b33a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-stone-200 rounded-sm hover:shadow-md transition-shadow"
                                    >
                                        <svg className="w-6 h-6 text-blue-700 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span className="text-stone-800">LinkedIn</span>
                                    </a>

                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-stone-200 rounded-sm hover:shadow-md transition-shadow"
                                    >
                                        <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                        <span className="text-stone-800">Twitter</span>
                                    </a>
                                </div>

                                <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-200 rounded-sm">
                                    <p className="text-stone-700">
                                        <span className="font-medium">Conseil :</span> Le moyen le plus rapide de me contacter est par téléphone ou par email.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AproposPage;
