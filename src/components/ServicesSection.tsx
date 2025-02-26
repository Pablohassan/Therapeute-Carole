// src/components/ServicesSection.tsx
import React from 'react';
import { FaUsers, FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router';

const ServicesSection: React.FC = () => {
    return (
        <section className="px-8abstract" id="services">

            <div className="max-w-5xl  mx-auto">
                <h2 className="text-3xl font-bold text-center mt-16 mb-8 py-8 ">Vous souhaitez engager une démarche thérapeutique ?

                </h2>
                <div className=" grid md:grid-cols-3 gap-8">
                    <div className="bg-stone-300/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <FaUsers className="text-3xl text-calming-blue mb-4" />
                        <Link to="/family" className="font-semibold text-xl mb-2">Thérapie Familiale</Link>
                        <p className="text-center">
                            Résolution des conflits familiaux, amélioration de la communication
                            et renforcement des liens dans un environnement bienveillant.
                        </p>
                    </div>
                    <div className="bg-stone-300/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <FaHeart className="text-3xl text-calming-blue mb-4" />
                        <Link to="/couple" className="font-semibold text-xl mb-2 ">Thérapie de Couple</Link>
                        <p className="text-center">
                            Retrouvez la confiance, approfondissez l'intimité et résolvez
                            les problèmes récurrents grâce à des méthodes éprouvées.
                        </p>
                    </div>
                    <div className="bg-stone-300/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <FaUser className="text-3xl text-calming-blue mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Therapie Individuelle</h3>
                        <p className="text-center">
                            Développement personnel et découverte de soi pour vous épanouir
                            dans tous les aspects de votre vie.
                        </p>
                    </div>
                </div>
                <section className="mt-12 mb-16 p-6 bg-stone-300/40 rounded-lg shadow-md">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-calming-blue">Tarifs</h3>
                        <div className="text-xl font-semibold mb-3">
                            70€ la séance d'une heure
                        </div>
                        <p className="text-gray-700">
                            Afin de rendre les consultations accessibles à tous, un tarif réduit est proposé aux étudiants,
                            aux demandeurs d'emploi et personnes en situation de précarité.
                            <span className="block mt-2 font-medium">N'hésitez pas à me contacter pour en discuter.</span>
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ServicesSection;
