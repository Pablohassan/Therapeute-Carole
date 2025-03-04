// src/pages/Family.tsx
import React from 'react';
import SEO from '../components/SEO';
import { therapyServiceData } from '../constants/structuredData';
import BookingSection from '../components/BookingSection';
import { sectionIds } from '../constants/navigation';
import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ResponsiveImage';
import livingroomImage from '../assets/livingroom.webp';
import couplelaptopImage from '../assets/couplelaptop.webp';
import homefamily from '../assets/familyhome.jpeg';
import famille from '../assets/famille-therapie-talence.webp';
import SnapScrollContainer from '../components/SnapScrollContainer';
import SectionNavigation from '../components/SectionNavigation';

const FamilyPage: React.FC = () => {
    // Create specific service data for family therapy
    const familyTherapyData = {
        ...therapyServiceData,
        name: "Thérapie Familiale Systémique",
        serviceType: "Thérapie Familiale",
        description: "La thérapie familiale a pour but l'amélioration du fonctionnement familial à différents niveaux, la revalorisation de la compréhension mutuelle et du soutien émotionnel entre les membres de la famille."
    };

    const totalSections = 7;
    const sectionNames = ['Accueil', 'Introduction', 'Communication', 'Approche', 'Informations', 'Domaines', 'Réservation'];

    return (
        <>
            <SEO
                title="Thérapie Familiale Systémique"
                description="Retrouvez le lien familial, reprenez du plaisir ensemble, valorisez-vous mutuellement. La thérapie familiale permet d'améliorer la communication et de résoudre les conflits."
                canonicalUrl="https://www.carole-lagardere.de/family"
                ogImage="/images/family.webp"
                keywords={["thérapie familiale", "thérapie systémique", "conflits familiaux", "communication famille", "Bordeaux"]}
                structuredData={familyTherapyData}
            />

            <SectionNavigation totalSections={totalSections} sectionNames={sectionNames} />

            <SnapScrollContainer>
                {/* Hero Section */}
                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${homefamily})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0  bg-opacity-100"></div>

                    <motion.div
                        className="relative container mx-auto px-4 md:px-8 text-center z-10 max-w-4xl py-4 md:py-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-wider text-stone-900 mb-8 md:mb-16"
                            style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)' }}
                        >
                            Thérapie Familiale Systémique
                        </h1>

                        <p className="text-md md:text-2xl text-stone- mb-12 italic font-light leading-relaxed"
                            style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)' }}
                        >
                            « La thérapie familiale a pour but l'amélioration du fonctionnement familial à différents niveaux,
                            la revalorisation de la compréhension mutuelle et du soutien émotionnel entre les membres de
                            la famille, le développement des compétences afin de résoudre les problèmes auxquels la
                            famille est confrontée. » EFTA
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <a
                                href={`#${sectionIds.booking}`}
                                className="inline-block bg-transparent border-2 border-[#AB4D8C] px-12 sm:px-16 py-4 md:py-6 mt-8 text-stone-900 uppercase tracking-wider text-sm md:text-base hover:scale-105 transition-all duration-300 hover:bg-[#AB4D8C]/40 hover:text-stone-800 shadow-lg hover:shadow-xl "
                            >
                                Réserver un rendez-vous
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <section className="py-20 px-4 md:px-8 bg-stone-50 flex items-center  pt-[10%] mt-8 md:mt-16">
                    <div className="container h-full mx-auto max-w-5xl">
                        <motion.div
                            className="grid  grid-cols-1 lg:grid-cols-3 gap-12 items-center "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full w-full relative " style={{ minHeight: '400px' }}>
                                <ResponsiveImage
                                    src={famille}
                                    alt="Communication familiale"
                                    className="absolute inset-0 h-full w-full object-cover shadow-md rounded-sm"
                                    width={800}
                                    height={600}
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority={true}
                                />
                            </div>

                            <div className="lg:col-span-2 space-y-6 font-light">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-6">
                                    La relation est au cœur de la thérapie
                                </h2>

                                <p className="text-lg text-gray-600 italic mb-4">
                                    Retrouver le lien familial, reprendre du plaisir ensemble,
                                    se valoriser mutuellement, valoriser ses enfants.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    C'est souvent avec les personnes qui sont le plus proches de nous que nous éprouvons une
                                    forme d'appréhension à parler de nos émotions, de nos sentiments profonds. Peut-être parce
                                    que nous avons peur de les blesser, de leur faire du mal.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    La thérapie permet de faire vivre à la famille des échanges différents de ceux qui ont cours à la
                                    maison et de permettre à chacun de s'exprimer, de se sentir entendu sans pour cela nier l'autre.
                                </p>

                                <div className="pt-6">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className="inline-block bg-stone-700 px-8 py-3 text-stone- font-light uppercase tracking-wider text-sm transition-all duration-300 hover:bg-stone-600 "
                                    >
                                        Faire le premier pas
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Quote Section */}


                {/* Therapeutic Approach Section */}
                <section className="py-8 md:py-20 px-6 bg-white flex items-center">
                    <div className="container mx-auto max-w-6xl">

                        <motion.div
                            className="py-16 px-6 text-stone- flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="container mx-auto p-4 md:p-6 max-w-[98%]  md:max-w-[80%] bg-stone-700 text-center">
                                <p className=" mx-auto text-xl md:text-2xl lg:text-3xl italic font-light leading-relaxed">
                                    « En séance, le thérapeute porte une attention particulière aux besoins de chacun »
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
                            <div className="lg:col-span-1">
                                <img
                                    src={livingroomImage}
                                    alt="Espace thérapeutique"
                                    className="w-full h-auto object-cover  shadow-md"
                                    loading="lazy"
                                    width="600"
                                    height="800"
                                />
                            </div>

                            <div className="lg:col-span-2 space-y-6 font-light">
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        En séance, le thérapeute porte une attention particulière aux besoins de chacun, à leurs
                                        expressions, à la manière dont la parole circule, son contenu, son adresse, son intention. Il
                                        s'agit de faire un état des lieux et engager une réflexion sur les places et les rôles de chacun.
                                    </p>

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Chaque famille est unique, il n'existe pas de technique généralisée applicable à n'importe quelle
                                        famille. Le thérapeute s'adapte à chaque famille, et tente de repérer et mobiliser les ressources,
                                        en faisant preuve de souplesse et de créativité.
                                    </p>

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        La thérapie familiale est un espace de rencontre entre les individus, le système, le thérapeute. Il
                                        se crée un lieu, un univers unique, entre représentations, modèles internes, valeurs,
                                        construction du monde, résonnances. Le thérapeute accueille cette complexité tout en assurant
                                        un cadre contenant et rassurant.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <a
                                        href={`#${sectionIds.booking}`}
                                        className="inline-block items-center bg-stone-700 px-8 py-3 text-stone- font-light uppercase tracking-wider text-sm transition-all duration-300 hover:bg-stone-600 "
                                    >
                                        Aller de l'avant
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Alternative Communication Section */}
                <section className="py-20 px-4 md:px-8 bg-amber-50 flex items-center  pt-[10%] mt-8 md:mt-16">
                    <div className="container h-screen mx-auto font-light max-w-4xl">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:col-span-2 space-y-4 md:space-y-8 order-2 lg:order-1">
                                <h2 className="text-2xl md:text-3xl uppercase text-gray-900 font-light tracking-wide mb-8">
                                    Parfois les mots sont usés...
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Ils ont été trop entendus par la famille et ne provoquent plus de
                                    réaction. Le problème forme une boucle. Il est à ce moment-là important de créer la surprise et
                                    de changer les habitudes de communication, soit en invitant la famille à se raconter autrement
                                    ou en utilisant d'autres moyens d'expression, comme le langage du corps, le jeu.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Outils de médiation, intermédiaire, le jeu en thérapie permet de créer des liens entre les
                                    membres de la famille, de renforcer le sentiment d'appartenance, d'expliciter des émotions, des
                                    ressentis, des représentations.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    L'idée est de créer une expérience d'interaction positive permettant de se vivre, de vivre les
                                    autres et de vivre la famille différemment de ce dont elle a l'habitude.
                                </p>
                            </div>

                            <div className="lg:col-span-1 order-1 lg:order-2 h-full">
                                <div className="h-full w-full relative" style={{ minHeight: '400px' }}>
                                    <ResponsiveImage
                                        src={couplelaptopImage}
                                        alt="Communication familiale"
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


                {/* Practical Information Section */}
                <section className="py-20 px-6 bg-stone-100 flex items-center mt-[10@] pt-8 md:pt-16">
                    <div className="container h-screen mx-auto max-w-4xl">
                        <motion.div
                            className="space-y-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-12 mt-8 md:mt-16">
                                <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-6">
                                    Concrètement
                                </h2>
                                <div className="w-20 h-1 bg-stone-400 mx-auto"></div>
                            </div>

                            <div className="bg-white p-8 rounded-sm shadow-md">
                                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                                    Une séance de thérapie familiale dure entre 60 et 90 minutes; l'intervalle entre les séances
                                    varie de une à plusieurs semaines en fonction des problèmes présentés, des besoins des
                                    membres de la famille, de l'étape du traitement et d'autres variables. Les décisions sur ces
                                    points sont négociées entre les clients et le thérapeute. Bien que ce soit difficile à estimer et que
                                    cela diffère largement, la durée moyenne du traitement pour une thérapie familiale se situe entre
                                    6 et 20 séances. Vous pouvez cependant décider d'y mettre fin quand vous le souhaitez.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Les séances regroupent plusieurs membres de la famille mais les séances individuelles ou les
                                    rencontres avec les parents (sans leur enfant par exemple) sont également proposées si cela
                                    se révèle nécessaire. Tant la longueur que la configuration de la thérapie familiale est le résultat
                                    d'une collaboration et d'un accord mutuel entre le thérapeute et la famille.
                                </p>
                            </div>

                            <div className="text-center mt-12">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="inline-block bg-stone-700 px-10 py-4 text-stone- font-light uppercase tracking-wider text-base transition-all duration-300 hover:bg-stone-600  shadow-md hover:shadow-lg"
                                >
                                    Réserver un rendez-vous
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Areas of Specialty Section */}
                <section className="py-20 px-6 bg-amber-50 flex items-center">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            className="space-y-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-light uppercase tracking-wide text-gray-900 mb-8 mt-8 md:mt-16">
                                    Domaines d'intervention
                                </h2>
                                <div className="w-20 h-1 bg-stone-400 mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {specialtyAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow  hover:scale-105 transition-all duration-500 ease-in-out"
                                    >
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">{area.title}</h3>
                                        <p className="text-gray-600">{area.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Booking Section */}
                <BookingSection />
            </SnapScrollContainer>
        </>
    );
};

// Sample specialty areas data
const specialtyAreas = [
    {
        title: "Conflits familiaux",
        description: "Résolution des tensions et amélioration de la communication entre les membres de la famille."
    },
    {
        title: "Difficultés parentales",
        description: "Soutien à la parentalité et développement de stratégies éducatives adaptées."
    },
    {
        title: "Crises d'adolescence",
        description: "Accompagnement des familles face aux défis spécifiques de l'adolescence."
    },
    {
        title: "Recompositions familiales",
        description: "Aide à l'intégration et à l'adaptation lors de la formation de familles recomposées."
    },
    {
        title: "Deuil et séparations",
        description: "Soutien lors des transitions difficiles et des périodes de deuil familial."
    },
    {
        title: "Problèmes de comportement",
        description: "Intervention sur les comportements problématiques des enfants et adolescents."
    }
];

export default FamilyPage;
