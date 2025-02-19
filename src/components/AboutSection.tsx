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
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-stone-600 tracking-wide mb-6"
                    style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                >
                    Thérapeute familiale et de couple
                </h2>


            </div>

            {/* Parcours professionnel */}
            <div className="space-y-16 flex flex-col items-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-16 mb-8 sm:gap-8  md:gap-16 lg:gap-24">
                    <div className="space-y-4 mb-16  ">
                        <h3 className="text-xl uppercase tracking-wider text-stone-900  border-l-4 p-4 border-soft-beige "
                            style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)' }}
                        >
                            Parcours & Certification
                        </h3>
                        <ul className="space-y-2 text-md list-none pl-0 text-stone-600 leading-relaxed"
                            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            <li>→ Institut d'Étude Systémique de Bordeaux</li>
                            <li>→ Membre accrédité EFTA</li>
                            <li>→ Diplôme d'État d'Éducatrice Spécialisée</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl uppercase tracking-wider text-stone-900 border-l-4 pl-4 p-4 border-soft-beige "
                            style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)' }}
                        >
                            Plus de 20 ans d'accompagnement familial
                        </h3>
                        <div className="text-stone-600 leading-relaxed"

                        >
                            <ul className="space-y-2 text-md list-none pl-8 mt-8 text-stone-600 leading-relaxed"
                                style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                            >
                                <li> - Protection de l'enfance</li>
                                <li> - Médiation intergénérationnelle</li>
                                <li> - Guidance parentale</li>
                            </ul>
                        </div>
                    </div>
                </div>




                <h3 className="text-lg font-montserrat font-light mb-4 text-justify">


                    <div className="text-md md:text-xl lg:text-2xl font-montserrat font-light text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16 mb-16 "
                        style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                        Vous êtes peut-être sur ce site parce que vous vous cherchez à améliorer les relations avec vos proches. </div>

                    <br />

                    <div className="text-sm  md:text-md lg:text-xl xl:text-xl font-montserrat font-light text-center text-justify italic px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 ">


                        <div className="text-xl md:text-3xl lg:text-5xl font-dancing font-light text-center italic space-x-4 sm:space-x-16 md:space-x-20 lg:space-x-16 xl:space-x-16 mb-16 "
                            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            " Faites le premier pas"
                        </div>


                        Mes clients se sentent en sécurité et soutenu , trouvant du soulagement
                        dès la première séance. Leur désespoir se dissipe à mesure qu'ils apprennent des compétences concrètes et faciles à mettre
                        en œuvre qu'ils peuvent utiliser pour enfin recommencer à profiter des moments en famille. Nos thérapeutes ont des créneaux
                        disponibles dans leurs emplois du temps pour vous rencontrer.
                        Remplissez notre formulaire de contact pour faire le premier pas vers des moments familiaux à nouveau agréables.
                    </div>
                </h3>

                <h3 className="text-xl font-light mb-16 text-justify py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
                    Je crois en la puissance de l'écoute bienveillante, du soutien personnalisé et
                    de la thérapie holistique pour rapprocher les familles. Mon objectif est de vous
                    guider vers un foyer harmonieux où l'empathie et la compréhension s'épanouissent.
                </h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Compassion</h3>
                        <p>L'empathie et l'acceptation sont au cœur de chaque session.</p>
                    </div>
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Guidance</h3>
                        <p>Nous adaptons les techniques thérapeutiques à vos dynamiques familiales uniques.</p>
                    </div>
                    <div className="bg-stone-200/20 p-4 border border-stone-200/80 rounded shadow-sm w-72">
                        <h3 className="font-semibold text-lg mb-2">Support Personnalisé</h3>
                        <p>Chaque étape de votre parcours est conçue avec vos besoins spécifiques en tête.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
