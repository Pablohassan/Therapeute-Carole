// src/pages/Couple.tsx
import React from 'react';
import Layout from '../components/Layout';
import { CheckIcon } from '@heroicons/react/24/outline';
import { sectionIds } from '../constants/navigation';
import BookingSection from '../components/BookingSection';

const CouplePage: React.FC = () => {
    return (
        <Layout>
            <div className="font-sans text-gray-700">
                {/* Hero Section */}
                <section className="bg-purple-50 py-20 px-4 bg-[url('src/assets/plane.jpg')] bg-cover ">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl  bg-cover bg-center lg:text-6xl font-dancing text-stone-200 mt-36 mb-6"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                        >
                            Relations et Therapie de Couple
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

                <section className="bg-purple-50 py-20 px-4">
                    <div className="max-w-4xl grid grid-cols-3 mx-auto text-center h-screen">
                        <img
                            src={('./src/assets/hand.jpg')}
                            alt="Couple"
                            className="h-full p-4 object-cover "
                        />
                        <div className="flex justify-center gap-4 flex flex-col col-span-2">
                            <h1 className="text-2xl md:text-4xl uppercase text-gray-900 mb-6">
                                Reconstruire et renforcer <br /> votre relation
                            </h1>

                            <p className="text-md text-gray-600 mb-8 justify-center text-justify p-16 ">
                                Vos tentatives pour résoudre vos problèmes de couple n'ont-elles abouti qu'à des soulagements temporaires ? Vous sentez-vous démunis face aux solutions possibles ? Éprouvez-vous des difficultés à communiquer de manière à ce que chacun se sente écouté et compris ?
                                La thérapie de couple en ligne peut être le soutien dont vous avez besoin pour surmonter vos blocages relationnels. En tant que thérapeute, je vous accompagne pour :

                                Décoder votre dynamique de communication
                                Identifier les opportunités d'engagement personnel plus profond
                                Développer votre capacité d'introspection et d'empathie
                                Guérir les blessures émotionnelles qui entravent la confiance et le sentiment de sécurité

                                Je vous accueille dans votre relation exactement là où vous en êtes. Ensemble, nous valoriserons vos forces existantes tout en explorant des stratégies concrètes pour faire évoluer votre relation.
                                Retrouvez une connexion authentique et épanouissante avec votre partenaire grâce à un accompagnement personnalisé et bienveillant.
                            </p>

                            <div className="flex justify-center gap-4">
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
                <section className="bg-yellow-500/90 py-20 px-4 ">
                    <div className="max-w-4xl grid grid-cols-3 mx-auto text-center h-screen" >




                        <div className="flex justify-center gap-4 flex flex-col col-span-2">
                            <h1 className="text-2xl md:text-4xl uppercase text-gray-900  mt-8">
                                Qu'est-ce que la thérapie de couple en ligne ?

                            </h1>

                            <p className="text-md text-gray-600 mb-8 justify-center text-justify p-16 ">
                                La relation au cœur de la thérapie
                                La thérapie de couple en ligne offre une expérience transformatrice où votre relation devient le centre de l'attention thérapeutique, vous permettant de construire une vie commune plus épanouissante et satisfaisante.
                                Contrairement à la thérapie individuelle où la personne est le client, en thérapie de couple, c'est votre relation qui est considérée comme une entité à part entière, plus riche que la simple addition de vos deux individualités.
                                Ensemble, nous explorerons comment chacun de vous perçoit et vit cette relation. Nous analyserons avec soin votre histoire commune et vos dynamiques actuelles pour comprendre ce qui façonne et maintient votre relation aujourd'hui.
                                Notre objectif est d'optimiser le fonctionnement de votre relation tout en soutenant l'épanouissement de chacun dans ce cadre partagé. Cette approche équilibrée permet de renforcer tant le lien qui vous unit que votre bien-être individuel.
                            </p>



                        </div>
                        <img src={('./src/assets/couplelaptop.jpg')} alt="Couple" className=" h-[80%] p-2 object-cover mt-12" />
                    </div>
                </section>





                {/* Therapy Approaches Section */}
                <section className="py-16 px-4 bg-white">
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
                </section>

                {/* Areas of Specialty Section */}
                <section className="py-16 px-4 bg-gray-50">
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
                </section>

                {/* Effectiveness Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Does Couples Therapy Work?
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Effective for those open and willing to engage in treatment. While initial hesitation
                            is normal, commitment to the process leads to meaningful change.
                        </p>
                        <div className="space-y-4 max-w-2xl mx-auto">
                            <p className="text-gray-600"

                            >
                                We focus on building trust and safety while honoring each individual's history
                                and experiences that shape the relationship.
                            </p>
                            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
                                Begin Your Journey
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <BookingSection />
        </Layout>
    );
};

export default CouplePage;
