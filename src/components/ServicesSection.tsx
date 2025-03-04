// src/components/ServicesSection.tsx
import React from 'react';
import { FaUsers, FaHeart, FaUser } from 'react-icons/fa';
import tachevertefamille from '../assets/tachevertefamille.jpeg';
import { Link } from 'react-router';

const ServicesSection: React.FC = () => {
    return (
        <section className="px-8abstract" id="services">

            <div className="max-w-5xl  mx-auto">
                <h2 className="text-3xl font-bold text-center mt-16 mb-8 py-8 ">Vous souhaitez engager une démarche thérapeutique ?

                </h2>
                <div className=" grid md:grid-cols-3 gap-8">
                    <div className="bg-stone-200/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <img src={tachevertefamille} alt="Tache verte famille" className="w-1/3 h-full object-cover rounded-lg" />
                        <Link to="/family" className="font-semibold text-xl mb-2">Thérapie Familiale</Link>
                        <p className="text-center">
                            Accompagner le changement pour retrouver une forme d'équilibre et restaurer les relations au sein de la famille.
                        </p>
                    </div>
                    <div className="bg-stone-300/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <FaHeart className="text-3xl text-calming-blue mb-4" />
                        <Link to="/couple" className="font-semibold text-xl mb-2 ">Thérapie de Couple</Link>
                        <p className="text-center">
                            Explorer l'histoire du couple, améliorer la communication, favoriser l'écoute pour renforcer la relation au sein du couple.
                        </p>
                    </div>
                    <div className="bg-stone-300/40 shadow hover:shadow-xl rounded p-6 flex flex-col items-center hover:scale-105 transition-all duration-500">
                        <FaUser className="text-3xl text-calming-blue mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Thérapie Individuelle</h3>
                        <p className="text-center">
                            Explorer l'ensemble de vos relations passées et présentes pour vous accompagner vers une meilleure compréhension de vous-même.
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
