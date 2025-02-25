// src/pages/Couple.tsx
import React from 'react';
import Layout from '../components/Layout';
// import { CheckIcon } from '@heroicons/react/24/outline';
import { sectionIds } from '../constants/navigation';
import BookingSection from '../components/BookingSection';

const CouplePage: React.FC = () => {
    return (
        <Layout>
            <div className="font-sans text-gray-700">
                {/* Hero Section */}
                <section className="bg-purple-50 py-20 px-4 bg-[url('src/assets/abstrait1.png')] bg-cover ">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl  bg-cover bg-center lg:text-6xl  text-stone-200 mt-36 mb-6"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Therapie de Couple
                        </h1>
                        <p className="text-xl text-stone-200 mb-8"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Transformez votre relation afin de vous permettre de vous sentir plus satisfait et de vous sentir plus rempli.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href={`#${sectionIds.booking}`}
                                className="text-lg sm:text-lg bg-stone-100/20 inline-block border border-stone-100/40 px-8 sm:px-16 sm:py-4 py-2 hover:bg-soft-beige text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl hover:scale-105 transform hover:duration-500 hover:ease-in-out   hover:bg-stone-100/90  hover:text-stone-900"
                                style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.9)' }}
                            >
                                Réserver un rendez-vous
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-purple-50 py-20 px-4 ">
                    <div className="max-w-3xl grid grid-cols-3 mx-auto text-center">
                        <img
                            src={('./src/assets/hand.jpg')}
                            alt="Couple"
                            className="h-[105%] p-4 object-cover "
                        />
                        <div className="flex justify-center gap-4 flex flex-col col-span-2 px-12">
                            <h1 className="text-xl md:text-3xl uppercase text-gray-900  mb-8 ">
                                « Vous traversez chacun, et ensemble, <br /> une période douloureuse »
                            </h1>

                            <p className="text-md text-gray-600   justify-center text-justify  ">
                                En thérapie, l’objectif n’est pas de déterminer qui a tort ou qui a raison, ni de faire changer
                                l’autre mais d’arriver à une collaboration afin de modifier le fonctionnement du « système
                                couple » et ainsi de supprimer ou d’atténuer la souffrance.
                            </p>
                            <p className="text-md text-gray-600   justify-center text-justify  ">

                                Pour cela, le thérapeute accueille le couple, observe le fonctionnement, interroge ce qui a
                                provoqué la crise et le choix du moment pour amorcer une thérapie. Il est essentiel que
                                chacun s’engage dans le travail thérapeutique.
                            </p>
                            <p className="text-md text-gray-600   justify-center text-justify  ">

                                Il s’agit d’offrir la possibilité à chacun d’exposer sa perception de la situation, son vécu et ses
                                attentes et aussi d’entendre et de reconnaître la perception de l’autre. Identifier les besoins
                                d’attachement, la construction du monde de chacun nous permettra d’éclairer les liens du
                                couple dans le présent.
                            </p>


                            <div className="flex justify-center gap-4 mt-8">
                                <a
                                    href={`#${sectionIds.booking}`}
                                    className="text-lg sm:text-lg bg-blue-900/20 inline-block border border-stone-100/40 px-8 sm:px-16 sm:py-4 py-2 hover:bg-blue-900/30 text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl   hover:text-stone-900"
                                    style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.9)' }}
                                >
                                    Aller de l'avant
                                </a>
                            </div>
                        </div>


                    </div>
                </section>
                <section className="bg-yellow-500/90  py-20 px-4   ">
                    <div className="max-w-3xl grid grid-cols-3 mx-auto  h-screen " >




                        <div className="flex gap-4  flex flex-col col-span-2 px-12 ">
                            <h1 className="text-xl md:text-2xl lg:text-3xl uppercase text-gray-900 mt-8">
                                Réencrer le « système couple » dans l’histoire de chacun...

                            </h1>
                            <h2 className="text-md sm:text-lg xl:text-xl italic text-gray-600 mb-4 justify-center   " >
                                en analysant les liens
                                transgénérationnels, en utilisant par exemple le génogramme.
                            </h2>



                            <p className="text-lg text-gray-600 mb-4 justify-center text-justify ">
                                Comprendre les règles de fonctionnement du couple, son histoire spécifique au-delà de deux
                                histoires individuelles d’assouplir la structure qui le maintient pour permettre un
                                remaniement des places et des attentes de chacun.
                            </p>




                        </div>
                        <div className="rounded-xl">
                            <img src={('./src/assets/genealogie.jpg')} alt="Couple" className=" h-[60%]  p-2 object-cover mt-12" />
                        </div>
                    </div>
                </section>

                <section className="bg-purple-50 py-20 px-4 ">
                    <div className="max-w-3xl grid grid-cols-3 mx-auto text-center">
                        <img src={('./src/assets/therapist.jpg')} alt="Couple" className=" h-full p-2 object-cover mt-12" />
                        <div className="flex justify-center gap-4 flex flex-col col-span-2  px-12">
                            <h1 className="text-xl md:text-2xl lg:text-3xl uppercase text-gray-900  mt-8">
                                La posture du thérapeute en séance :
                            </h1>

                            <p className="text-md text-gray-600 mb-4 justify-center text-justify ">
                                La simple présence du thérapeute produit du neuf. <br /> Il
                                impacte le couple avec tout son être, il est partie prenante du système. Il met ses
                                résonnances au service du couple et partage ses hypothèses, ses observations. Il est attentif
                                aux sensations corporelles, manifestations émotionnelles dans l’ici et maintenant et aux faits
                                extérieurs ou antérieurs. Il favorise les échanges, pointe les évitements de contact, les
                                refuges dans le passé ou l’irresponsabilité.
                            </p>

                            <p className="text-md text-gray-600 mb-4 justify-center text-justify  ">
                                La reconstruction passe par un réaménagement du connu, de nouvelles manières de
                                communiquer, moins défensives.
                            </p>
                        </div>


                    </div>
                </section>




                {/* Therapy Approaches Section */}
                {/* <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Therapeutic Approaches
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-purple-600">
                                    Psychodynamic Couples Therapy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A depth-based, insight-oriented approach to relational healing that analyzes
                                    conscious and unconscious behaviors, thoughts, and feelings impacting the couple.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-purple-600">
                                    Emotionally Focused Therapy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Focused on creating and strengthening emotional bonds between partners through
                                    structured, evidence-based interventions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Areas of Specialty Section */}
                {/* <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Areas of Specialty
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {[
                                    'Anxiety, depression, or stage-of-life transitions',
                                    'Difficulty identifying or expressing thoughts and feelings',
                                    'Managing needs of the couple amidst parenting',
                                    'Navigating challenging family dynamics',
                                    'Understanding impact of sexuality and gender'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {[
                                    'Improving physical, sexual, and emotional intimacy',
                                    'Exploring monogamy and ethical non-monogamy',
                                    'Root causes of hard-to-change behavior patterns',
                                    'Making good relationships feel great',
                                    'Addressing communication breakdowns'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Effectiveness Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Est-ce que la thérapie de couple fonctionne ?
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Effective pour ceux qui sont ouverts et prêts à engager le traitement. Bien que l'hésitation
                            soit normale, l'engagement dans le processus mène à un changement significatif.
                        </p>
                        <div className="space-y-4 max-w-2xl mx-auto">


                        </div>
                    </div>
                </section>
            </div>
            <BookingSection />
        </Layout>
    );
};

export default CouplePage;
