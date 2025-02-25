// src/components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="p-8 bg-soft-beige" id="about">


            <div className="mb-16 text-center space-y-8 mt-16">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-wider text-stone-900 mb-4"
                    style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                >
                    Carole Lagardère
                </h1>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-stone-600 tracking-wide mb-4"
                    style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                >
                    Thérapeute familiale et de couple
                </h2>


            </div>

            {/* Parcours professionnel */}
            <div className="space-y-16 flex flex-col items-center ">
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 mb-8 gap-y-8 sm:gap-y-2 sm:gap-x-8  md:gap-8 lg:gap-8">
                    <div className="space-y-4   ">
                        <h3 className="text-xl h-22 flex items-center uppercase tracking-wider text-stone-900  border-l-4 p-4 border-soft-beige "
                            style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)' }}
                        >
                            Parcours & Certification
                        </h3>
                        <ul className="space-y-2 text-md  list-none pl-4 text-stone-600 leading-relaxed mt-8"
                            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            <li>- Formation longue, thérapie familiale approche systémique (4 ans) à l’IDES Bordeaux
                                (Institut D’Etudes Systémique) 2014</li>
                            <li>- Diplôme d’état d’éducatrice spécialisée (DEES) 2006</li>

                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl uppercase tracking-wider text-stone-900 border-l-4 pl-4 p-4 border-soft-beige  "
                            style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)' }}
                        >
                            20 ANNEES D’EXPERIENCE DANS L’ACCOMPAGNEMENT DES FAMILLES
                        </h3>
                        <div className="text-stone-600 leading-relaxed"

                        >
                            <ul className="space-y-2 text-md list-none pl-4 mt-8 text-stone-600 leading-relaxed"
                                style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                            >
                                <li> - Entretien individuel : enfant, adolescent, parent</li>
                                <li> - Soutien à la parentalité / guidance parentale</li>
                                <li> - Entretiens familiaux : médiation, réaccordage parent, enfant</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-row-2 mt-16 mb-8 sm:gap-8  md:gap-8 lg:gap-8">

                <h3 className="text-lg font-montserrat font-light mb-4 text-justify mt-16">


                    <div className="text-md md:text-xl lg:text-2xl font-montserrat  text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16 mb-16 "
                        style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                        Vous vous êtes connectés à notre site par curiosité... Peut-être aussi est-ce par conscience
                        d&#39;un mal être qui vous perturbe et/ou perturbe votre entourage... </div>

                    <br />


                    <br />

                    <div className="text-md md:text-xl lg:text-2xl font-montserrat space-y-4  text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16 mb-16 "
                        style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}

                    >Si vous êtes sur ce site, c’est peut-être que vous cherchez à améliorer les relations avec vos
                        proches.</div>

                    <div className="text-sm  md:text-md lg:text-xl xl:text-xl font-montserrat font-light text-center text-justify italic px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 ">


                        <div className="text-xl md:text-3xl lg:text-5xl font-dancing font-light text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16 mb-16 "
                            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            « Que pouvons-nous faire ensemble ? »
                        </div>


                        Vous appréhendez le retour à la maison, les relations sont tendues, les conflits récurrents.
                        Le quotidien est pesant, chacun semble malheureux, isolé, déconnecté de l’autre. Votre vie
                        de famille, de couple est morose, traversée par de nombreuses tensions, des cris…
                        Vous vous questionnez sur la pertinence de vous engager dans un processus thérapeutique,
                        nous espérons par les contenus de ce site, pouvoir vous apporter quelques pistes
                        susceptibles de nourrir votre réflexion… et pourquoi pas, trouver l&#39;élan, faire le pas pour
                        nous rencontrer !
                    </div>
                </h3>


                <br />
                <div className="text-lg text-center md:text-2xl lg:text-3xl font-montserrat font-light  text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16  mt-8 "
                    style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                >
                    <p>
                        Et si on en parlait ?
                    </p>
                </div>

                <h3 className="text-xl font-light  text-justify px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
                    Je vous accueille dans un espace chaleureux, sécurisé, bienveillant et confidentiel. Je serai à
                    votre écoute et engagée à vos côtés pour vous aider à vous aider. Ensemble, pour
                    comprendre vos fonctionnements, faire émerger de nouvelles possibilités en remobilisant
                    vos ressources et compétences. Accompagner, verbaliser, expérimenter le changement au
                    sein de vos relations.
                </h3>

                <h3 className="text-xl font-light mb-4 text-justify  px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">

                    Educatrice spécialisée depuis 2006, 20 années de pratique en protection de l’enfance.
                    Expérience d’accompagnement des enfants, adolescents et leurs parents. Organiser des
                    rencontres, mener des entretiens familiaux, individuels, afin d’identifier les difficultés et
                    accompagner vers l’apaisement, le changement.

                </h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Ecoute active</h3>
                        <p>L'empathie et l'acceptation sont au cœur de chaque session.</p>
                    </div>
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Accompagnement personnalisé et créatif</h3>
                        <p>Nous adaptons les techniques thérapeutiques à vos dynamiques familiales uniques.</p>
                    </div>
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Engagement éthique</h3>
                        <p>Chaque étape de votre parcours est conçue avec vos besoins spécifiques en tête.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
