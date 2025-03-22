'use client';

// src/components/HeroSection.tsx
import { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
// import heroImage from '../assets/familytogether.webp';
import fondHome from '../assets/carole-lagardere-therapeute-talence-home.jpeg';
import fondHomeMobile from '../assets/carole-lagardere-therapeute-talence-home-mobile.jpeg';
import { sectionIds } from '../constants/navigation';
import { LongPressHover } from './LongPressHover';

const HeroSection = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [isSmallHeight, setIsSmallHeight] = useState(false);
    const { scrollY } = useScroll();

    // Create transform functions outside of callbacks
    const y = useTransform(scrollY, [0, windowHeight], [0, 200]);
    const backgroundOpacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);
    // Button subtle movement for parallax effect
    const buttonY = useTransform(scrollY, [0, windowHeight], [0, 105]);

    // Memoized callback for resize handler
    const handleResize = useCallback(() => {
        setWindowHeight(window.innerHeight);
        setIsSmallHeight(window.innerHeight < 600);
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

    // Adjust margin and padding based on screen height
    const titleMargin = isSmallHeight ? 'mb-2 md:mb-4' : 'mb-8 md:mb-16';
    const textMargin = isSmallHeight ? 'mb-2 md:mb-4' : 'mb-8 md:mb-12';
    const buttonMargin = isSmallHeight ? 'mt-2 md:mt-4' : 'mt-4 md:mt-8';
    const buttonPadding = isSmallHeight ? 'py-2 md:py-3' : 'py-4 md:py-6';

    return (
        <section className={`relative ${isSmallHeight ? 'min-h-[90vh]' : 'h-screen min-h-[70vh]'} bg-[#FCF6E9] flex items-center justify-center overflow-hidden`}>
            {/* Background Color that appears when scrolling */}
            <div className="absolute inset-0 w-full h-full bg-[#25926C]/50 z-0"></div>

            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0 w-full h-full z-10"
                style={{
                    y,
                    opacity: backgroundOpacity,
                    backgroundImage: `url(${isMobile ? fondHomeMobile : fondHome})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: isMobile ? 'center center' : 'center'
                }}
                aria-hidden="true"
            >
                <div className="absolute inset-0"></div>
            </motion.div>

            {/* Preload hero images */}
            <link rel="preload" as="image" href={fondHome} />
            <link rel="preload" as="image" href={fondHomeMobile} />

            {/* Hero Content */}
            <motion.div
                className={`relative container mx-auto px-4 text-center text-slate-900 max-w-7xl ${isSmallHeight ? 'pt-16' : ''} z-10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className={`${isSmallHeight ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'} font-light text-stone-900 font-bebas tracking-wider ${titleMargin} leading-tight`}
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                    {...contentAnimations}
                    transition={{ duration: 0.8 }}
                >
                    Thérapie familiale, de couple et individuelle
                </motion.h1>
                <motion.p
                    className={`${isSmallHeight ? 'text-base md:text-xl' : 'text-lg md:text-2xl'} text-stone-950 ${textMargin} italic font-medium sm:font-light leading-relaxed px-2 md:px-16`}
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)' }}
                    {...contentAnimations}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {isSmallHeight ? (
                        <>
                            Carole Lagardère, thérapeute familiale et de couple certifiée.
                            Je vous accueille sur rendez-vous à Talence.
                        </>
                    ) : (
                        <>
                            Carole Lagardère, thérapeute familiale et de couple certifiée.
                            Je suis à votre écoute et engagée à vos côtés.
                            Je vous accueille sur rendez-vous au sein de mon cabinet à Talence.
                        </>
                    )}
                </motion.p>

                <motion.div
                    {...contentAnimations}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ y: buttonY }}
                >
                    <LongPressHover
                        className={`inline-block bg-[#FCF6E9] w-full md:w-1/2 lg:w-1/3 rounded-sm font-medium md:bg-[#FCF6E9]/90 md:border-2 border-1 border-[#25926C] md:border-[#25926C] px-4 md:px-16 ${buttonPadding} ${buttonMargin} md:text-stone-950 uppercase tracking-wider ${isSmallHeight ? 'text-sm' : 'text-md'} text-stone-900 md:text-base transition-all duration-300 shadow-lg hover:bg-[#25926C]/10 hover:text-stone-950 hover:font-semibold hover:scale-105 shadow-lg hover:shadow-xl`}
                        hoverClassName="scale-105 bg-[#25926C]/40 text-stone-900 font-semibold shadow-xl"
                        onClick={() => window.location.href = `#${sectionIds.booking}`}
                    >
                        Réserver un rendez-vous
                    </LongPressHover>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;