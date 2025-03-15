'use client';

// src/components/HeroSection.tsx
import { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
// import heroImage from '../assets/familytogether.webp';
import fondHome from '../assets/carole-lagardere-therapeute-talence-home.jpeg';
import fondHomeMobile from '../assets/carole-lagardere-therapeute-talence-home-mobile.jpeg';
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
    const isMobile = useIsMobile();

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
        <section className="relative h-screen bg-[#FCF6E9] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    y,
                    opacity: backgroundOpacity,
                    backgroundImage: `url(${isMobile ? fondHomeMobile : fondHome})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: isMobile ? 'center center' : 'center'
                }}
            >
                <div className="absolute inset-0 "></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="relative container mx-auto px-4 text-center text-slate-900 max-w-7xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-900 font-bebas tracking-wider mb-8 md:mb-16 leading-tight"
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    {...contentAnimations}
                    transition={{ duration: 0.8 }}
                >
                    Thérapie familiale, de couple et individuelle
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl text-stone-950  mb-8 md:mb-12 italic font-medium sm:font-light leading-relaxed px-2 md:px-16"
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}

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
                        className="inline-block bg-[#FCF6E9] rounded-sm font-medium  md:bg-[#FCF6E9]/50 md:border-2 border-1 border-[#25926C] md:border-[#25926C] px-4  md:px-16 py-4 md:py-6 mt-4 md:mt-8 md:text-stone-950 uppercase tracking-wider text-md  text-stone-900 md:text-base hover:scale-105 transition-all duration-300 hover:bg-[#25926C]/40 hover:text-stone-900 hover:font-semibold shadow-lg hover:shadow-xl"
                    >
                        Réserver un rendez-vous
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
