// src/components/HeroSection.tsx
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/familytogether.webp';
import { sectionIds } from '../constants/navigation';


const HeroSection: React.FC = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();

    // Transform values for parallax effect
    const y = useTransform(scrollY, [0, windowHeight], [0, 150]);
    const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);

    useEffect(() => {
        // Get window height for parallax calculations
        setWindowHeight(window.innerHeight);

        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y }}
            >
                <img
                    src={heroImage}
                    alt="Famille souriante"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-opacity-40"></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="relative container mx-auto px-4 text-center text-slate-100 max-w-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ opacity }}
            >
                <h1 className="text-lg md:text-2xl  lg:text-4xl md:text-3xl font-light  tracking-wider mb-48 sm:mb-16 leading-tight"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                >
                    Redécouvrez le plaisir d’être ensemble, en famille, en couple
                </h1>
                <p className="text- md:text-xl mb-32 sm:mb-16 font-light   tracking-wide max-w-2xl mx-auto"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
                >
                    Retrouvez le lien familial pour reprendre du plaisir ensemble, se valoriser mutuellement,
                    valoriser ses enfants.
                </p>
                {/* <motion.a
                    href="#services"
                    className="inline-block border border-white px-16 py-4  hover:bg-soft-beige text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl transform   hover:bg-stone-100/90  hover:text-stone-900"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Découvrir Nos Services
                </motion.a> */}


                <a
                    href={`#${sectionIds.booking}`}
                    className="text-lg sm:text-lg inline-block border border-white px-8 sm:px-16 sm:py-4 py-2 hover:bg-soft-beige text-slate-100 font-light uppercase tracking-wide transition-colors text-lg shadow-lg hover:shadow-xl hover:scale-105 transform hover:duration-500 hover:ease-in-out   hover:bg-stone-100/90  hover:text-stone-900"

                >
                    Réserver un rendez-vous
                </a>
            </motion.div>
        </section>
    );
};

export default HeroSection;
