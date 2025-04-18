// src/components/ServicesSection.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logofamille from '../assets/logo-famille.jpeg';
import logocouple from '../assets/logocouple.jpeg';
import logoindividuel from '../assets/logoindividuel.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    href: string;
    borderColor: string;
    textColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    image,
    href,
    borderColor,
    textColor,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const handleClick = () => {
        window.location.href = href;
    };

    return (
        <motion.div
            className={`bg-stone-100 border-1 ${borderColor} shadow-xl rounded-xl p-8 flex flex-col items-center transition-all duration-500 relative`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={isMobile ? undefined : handleClick}
        >
            <div className="h-32 flex items-center justify-center mb-4">
                <img src={image} alt={`Logo ${title}`} className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
            <div className={`font-semibold text-xl mb-2 ${textColor}`}>{title}</div>
            <p className="text-center mb-8">
                {description}
            </p>

            {/* Desktop hover message */}
            <AnimatePresence>
                {isHovered && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 left-0 right-0 flex justify-center text-shadow-md"
                    >
                        <span className={`text-md font-medium ${textColor}`}>
                            Cliquez pour en savoir plus
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile explicit button */}
            {isMobile && (
                <motion.button
                    className={`mt-2 py-2 px-4 rounded-sm bg-${textColor.replace('text-', '')} text-white font-medium shadow-md`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                >
                    En savoir plus
                </motion.button>
            )}
        </motion.div>
    );
};

const ServicesSection: React.FC = () => {
    const navigate = useNavigate();

    const handlePricingClick = () => {
        navigate('/apropos', { state: { scrollToContact: true } });
    };

    return (
        <section className="px-4 bg-[#25926C]/50 pb-8" id="services">
            <div className="max-w-5xl mx-auto">
                {/* <h2 className="text-3xl font-bold text-center mt-16 mb-8 py-8 ">Vous souhaitez engager une démarche thérapeutique ?

                </h2> */}
                <div className="grid md:grid-cols-3 gap-4">
                    <ServiceCard
                        title="Thérapie Familiale"
                        description="Accompagner le changement pour retrouver une forme d'équilibre et restaurer les relations au sein de la famille."
                        image={logofamille}
                        href="/family"
                        borderColor="border-[#AB4D8C]/20"
                        textColor="text-[#AB4D8C] text-shadow-md"
                    />
                    <ServiceCard
                        title="Thérapie de Couple"
                        description="Explorer l'histoire du couple, améliorer la communication, favoriser l'écoute pour renforcer la relation au sein du couple."
                        image={logocouple}
                        href="/couple"
                        borderColor="border-[#EC6849]/20"
                        textColor="text-[#EC6849] text-shadow-md"
                    />
                    <ServiceCard
                        title="Thérapie Individuelle"
                        description="Explorer l'ensemble de vos relations passées et présentes pour vous accompagner vers une meilleure compréhension de vous-même."
                        image={logoindividuel}
                        href="/individuel"
                        borderColor="border-[#FBC018]/20"
                        textColor="text-[#FBC018] text-shadow-md"
                    />
                </div>
                <section
                    className="mt-12 mb-16 p-6 bg-stone-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={handlePricingClick}
                >
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
