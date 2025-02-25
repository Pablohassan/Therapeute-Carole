// src/pages/Family.tsx
import React from 'react';
import Layout from '../components/Layout';
import BookingSection from '../components/BookingSection';
import { sectionIds } from '../constants/navigation';


const FamilyPage: React.FC = () => {
    return (
        <Layout>
            <div className="font-sans text-gray-700  ">
                {/* Hero Section */}
                <section className="bg-purple-50 py-20 gap-4 bg-[url('src/assets/abstrait2.jpg')] bg-cover ">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl  bg-cover bg-center lg:text-6xl font-montserrat py-4 text-stone-200 mt-36 mb-8"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            THERAPIE FAMILIALE SYSTEMIQUE
                        </h1>
                        <p className="text-xl text-stone-200 mb-8 italic font-light py-4"
                            style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.8)' }}
                        >
                            « La thérapie familiale a pour but l’amélioration du fonctionnement familial à différents niveaux,
                            la revalorisation de la compréhension mutuelle et du soutien émotionnel entre les membres de
                            la famille, le développement des compétences afin de résoudre les problèmes auxquels la
                            famille est confrontée. » EFTA
                        </p>
                        <div className="flex justify-center mt-16">
                            <a
                                href={`#${sectionIds.booking}`}
                                className="text-lg sm:text-lg bg-stone-100/20 inline-block border border-stone-100/40 px-12 sm:px-16 sm:py-4 py-4 hover:bg-soft-beige text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl hover:scale-105 transform hover:duration-500 hover:ease-in-out   hover:bg-stone-100/90  hover:text-stone-900"
                                style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.9)' }}
                            >
                                Réserver un rendez-vous
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-purple-50 py-20 px-4 ">
                    <div className="max-w-3xl grid grid-cols-3 mx-auto ">
                        <img
                            src={('./src/assets/livingroom.jpg')}
                            alt="Couple"
                            className="h-[80%] p-4 object-cover "
                        />
                        <div className="max-w-3xl flex gap-4 flex flex-col col-span-2 p-4 px-12">
                            <h1 className="text-2xl md:text-3xl uppercase text-gray-900 text-justify mb-6 uppercase mb-4 ">
                                La relation est au <br /> cœur de la thérapie
                            </h1>
                            <p className="text-md text-gray-600  justify-center text-justify  italic ">
                                Retrouver le lien familial, reprendre du plaisir ensemble,
                                se valoriser mutuellement, valoriser ses enfants.
                            </p>

                            <p className="text-md text-gray-600   justify-center text-justify  ">
                                C’est souvent avec les personnes qui sont le plus proches de nous que nous éprouvons une
                                forme d’appréhension à parler de nos émotions, de nos sentiments profonds. Peut-être parce
                                que nous avons peur de les blesser, de leur faire du mal.
                            </p>
                            <p className="text-md text-gray-600 mb-16 justify-center text-justify   ">
                                La thérapie permet de faire vivre à la famille des échanges différents de ceux qui ont cours à la
                                maison et de permettre à chacun de s’exprimer, de se sentir entendu sans pour cela nier l’autre.
                            </p>



                            <div className="flex justify-center gap-4 mt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="text-lg sm:text-lg bg-blue-900/20 inline-block border border-stone-100/40 px-12 sm:px-16 sm:py-4 py-2 hover:bg-blue-900/30 text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl   hover:text-stone-900"
                                    style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.9)' }}
                                >
                                    Aller de l'avant
                                </a>
                            </div>
                        </div>


                    </div>
                </section>
                <section className="bg-yellow-500/90 py-20 px-12 ">
                    <div className="max-w-3xl grid grid-cols-3 gap-4 mx-auto text-center h-screen" >




                        <div className="flex   gap-4 flex flex-col col-span-2 p-4">
                            <h1 className="text-2xl md:text-3xl uppercase text-gray-900 mb-8 mt-8">
                                Car parfois les mots <br /> sont usés...
                            </h1>

                            <p className="text-md text-gray-600  justify-center text-justify px-12 ">
                                Ont été trop entendu par la famille, et ne provoquent plus de
                                réaction. Le problème forme une boucle, il est à ce moment-là important de créer la surprise et
                                de changer les habitudes de communication, soit en invitant la famille à se raconter autrement
                                ou en utilisant d’autres moyens d’expression, comme le langage du corps, le jeu.
                            </p>

                            <p className="text-md text-gray-600   justify-center text-justify px-12 ">Outils de médiation, intermédiaire, le jeu en thérapie permet de créer des liens entre les
                                membres de la famille, de renforcer le sentiment d’appartenance, d’expliciter des émotions, des
                                ressentis, des représentations. </p>
                            <p className="text-md text-gray-600 mb-4 justify-center text-justify px-12 ">L’idée est de créer une expérience d’interaction positive permettant de se vivre, de vivre les
                                autres et de vivre la famille différemment de ce dont elle a l’habitude.
                            </p>



                        </div>
                        <img src={('./src/assets/couplelaptop.jpg')} alt="Couple" className=" h-[80%] p-2 object-cover mt-12" />
                    </div>
                </section>
                <div className="text-lg max-w-[80%] bg-purple-200 mx-auto translate-y-[-100px] overflow-y-[100px] z-10  md:text-2xl xl:text-3xl italic font-light text-gray-900 text-center uppercase p-20 italic">     « En séance, le thérapeute porte une attention particulière  aux besoins de chacun »  </div>
                <section className=" px-4 mb-20 h-screen">

                    <div className="max-w-4xl grid grid-cols-3 mx-auto text-center">
                        <img
                            src={('./src/assets/livingroom.jpg')}
                            alt="Couple"
                            className="h-full p-4 object-cover "
                        />
                        <div className="flex  gap-1 flex flex-col col-span-2 p-4 text-justify">
                            {/* <h1 className="text-lg md:text-xl xl:text-2xl italic font-light text-gray-900 mb-6 uppercase mb-4 ">
                                « En séance, le thérapeute porte une attention particulière  aux besoins de chacun »
                            </h1> */}
                            <p className="text-md text-gray-600 mb-4  justify-center text-justify px-12  ">
                                En séance, le thérapeute porte une attention particulière aux besoins de chacun, à leurs
                                expressions, à la manière dont la parole circule, son contenu, son adresse, son intention. Il
                                s’agit de faire un état des lieux et engager une réflexion sur les places et les rôles de chacun.
                            </p>

                            <p className="text-md text-gray-600 mb-4 justify-center text-justify px-12 ">
                                Chaque famille est unique, il n’existe pas de technique généralisée applicable à n’importe quelle
                                famille. Le thérapeute s’adapte à chaque famille, et tente de repérer et mobiliser les ressources,
                                en faisant preuve de souplesse et de créativité.
                            </p>
                            <p className="text-md text-gray-600 mb-16 justify-center text-justify px-12 ">
                                La thérapie familiale est un espace de rencontre entre les individus, le système, le thérapeute. Il
                                se crée un lieu, un univers unique, entre représentations, modèles internes, valeurs,
                                construction du monde, résonnances. Le thérapeute accueille cette complexité tout en assurant
                                un cadre contenant et rassurant.
                            </p>



                            <div className="flex justify-center gap-4 mt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="text-lg sm:text-lg bg-blue-900/20 inline-block border border-stone-100/40 px-12 sm:px-16 sm:py-4 py-2 hover:bg-blue-900/30 text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl   hover:text-stone-900"
                                    style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.9)' }}
                                >
                                    Aller de l'avant
                                </a>
                            </div>
                        </div>


                    </div>
                </section>




                <div className="h-[1px] bg-gray-900/20 mx-auto ">

                </div>

                {/* Effectiveness Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center max-w-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Concretement :
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 font-light mb-6 text-justify max-w-2xl mx-auto">
                            Une séance de thérapie familiale dure entre 60 et 90 minutes; l’intervalle entre les séances
                            varie de une à plusieurs semaines en fonction des problèmes présentés, des besoins des
                            membres de la famille, de l’étape du traitement et d’autres variables. Les décisions sur ces
                            points sont négociées entre les clients et le thérapeute. Bien que ce soit difficile à estimer et que
                            cela diffère largement, la durée moyenne du traitement pour une thérapie familiale se situe entre
                            6 et 20 séances. Vous pouvez cependant décider d’y mettre fin quand vous le souhaitez.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 font-light mb-6 text-justify max-w-2xl mx-auto">
                            Les séances regroupent plusieurs membres de la famille mais les séances individuelles ou les
                            rencontres avec les parents (sans leur enfant par exemple) sont également proposées si cela
                            se révèle nécessaire. Tant la longueur que la configuration de la thérapie familiale est le résultat
                            d’une collaboration et d’un accord mutuel entre le thérapeute et la famille.
                        </p>
                        <div className="space-y-4 max-w-2xl mx-auto">

                            <button className="bg-purple-600 text-white px-12 py-3  mt-16 hover:bg-purple-700">
                                Réserver un rendez-vous
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <BookingSection />
        </Layout>
    );
};

export default FamilyPage;
