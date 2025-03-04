'use client';

// src/components/HeroSection.tsx
import { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import heroImage from '../assets/familytogether.webp';
import fondHome from '../assets/fondhome.jpeg';
import { sectionIds } from '../constants/navigation';

const HeroSection = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();

    // Create transform functions outside of callbacks
    const y = useTransform(scrollY, [0, windowHeight], [0, 150]);
    const backgroundOpacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);

    // Memoized callback for resize handler
    const handleResize = useCallback(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        // Get window height for parallax calculations
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    // Memoized animation variants
    const contentAnimations = useMemo(() => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }), []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    y,
                    opacity: backgroundOpacity
                }}
            >
                <img
                    src={fondHome}
                    alt="Famille souriante"
                    className="object-cover w-full h-full"
                    loading="eager" // Critical above-the-fold image
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0"></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="relative container mx-auto px-4 text-center text-slate-900 max-w-7xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-900 font-bebas tracking-wider  mb-8 md:mb-16 leading-tight"
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
                    {...contentAnimations}
                    transition={{ duration: 0.8 }}
                >
                    Thérapie familiale et thérapie de couple
                </motion.h1>
                <motion.p
                    className="text- md:text-xl mb-32 sm:mb-16 font-light tracking-wide max-w-2xl mx-auto"
                    style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
                    {...contentAnimations}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Carole Lagardère, thérapeute familiale et de couple certifiée.
                    Je suis à votre écoute et engagée à vos côtés.
                    Je vous accueille sur rendez-vous au sein de mon cabinet à Talence.
                </motion.p>


                <motion.div
                    {...contentAnimations}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <a
                        href={`#${sectionIds.booking}`}
                        className="text-lg sm:text-lg inline-block border border-[#25926C] px-8 sm:px-16 sm:py-4 py-2 text-slate-900 uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#25926C]/30 hover:bg-opacity-80 hover:text-stone-900 hover:border-[#25926C]/10"
                    >
                        Je prends rendez-vous
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
