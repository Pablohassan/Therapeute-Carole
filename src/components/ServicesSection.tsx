// src/components/ServicesSection.tsx
import React from 'react';
import logofamille from '../assets/logofamille.jpeg';
import logocouple from '../assets/logocouple.jpeg';
import logoindividuel from '../assets/logoindividuel.jpeg';
import { LongPressHover } from './LongPressHover';

const ServicesSection: React.FC = () => {
    return (
        <section className="px-4 bg-[#25926C]/50 pb-8" id="services">

            <div className="max-w-5xl mx-auto">
                {/* <h2 className="text-3xl font-bold text-center mt-16 mb-8 py-8 ">Vous souhaitez engager une démarche thérapeutique ?

                </h2> */}
                <div className=" grid md:grid-cols-3 gap-4">
                    <LongPressHover
                        className="bg-stone-100 border-1 border-[#25926C]/20 shadow-xl rounded-xl p-8 flex flex-col items-center transition-all duration-500"
                        hoverClassName="scale-105 shadow-2xl"
                        onClick={() => window.location.href = '/family'}
                    >
                        <div className="h-32 flex items-center justify-center mb-4">
                            <img src={logofamille} alt="Logo famille" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div className="font-semibold text-xl mb-2">Thérapie Familiale</div>
                        <p className="text-center">
                            Accompagner le changement pour retrouver une forme d'équilibre et restaurer les relations au sein de la famille.
                        </p>
                    </LongPressHover>
                    <LongPressHover
                        className="bg-stone-100 border-1 border-[#EC6849]/20 shadow-xl rounded-xl p-8 flex flex-col items-center transition-all duration-500"
                        hoverClassName="scale-105 shadow-2xl"
                        onClick={() => window.location.href = '/couple'}
                    >
                        <div className="h-32 flex items-center justify-center mb-4">
                            <img src={logocouple} alt="Logo couple" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div className="font-semibold text-xl mb-2">Thérapie de Couple</div>
                        <p className="text-center">
                            Explorer l'histoire du couple, améliorer la communication, favoriser l'écoute pour renforcer la relation au sein du couple.
                        </p>
                    </LongPressHover>
                    <LongPressHover
                        className="bg-stone-100 border-1 border-[#FBC018]/20 shadow-xl rounded-xl p-8 flex flex-col items-center transition-all duration-500"
                        hoverClassName="scale-105 shadow-2xl"
                        onClick={() => window.location.href = '/individuel'}
                    >
                        <div className="h-32 flex items-center justify-center mb-4">
                            <img src={logoindividuel} alt="Logo individuel" className="max-h-full max-w-full object-contain rounded-lg" />
                        </div>
                        <div className="font-semibold text-xl mb-2">Thérapie Individuelle</div>
                        <p className="text-center">
                            Explorer l'ensemble de vos relations passées et présentes pour vous accompagner vers une meilleure compréhension de vous-même.
                        </p>
                    </LongPressHover>
                </div>
                <section className="mt-12 mb-16 p-6 bg-stone-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
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
