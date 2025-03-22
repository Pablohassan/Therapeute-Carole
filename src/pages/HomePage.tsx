// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import SEO from '../components/SEO';
import { showFooter } from '../components/Layout';
import { therapyPracticeData } from '../constants/structuredData';

const HomePage: React.FC = () => {
    const [isSmallHeight, setIsSmallHeight] = useState(false);

    // Check if screen height is small
    useEffect(() => {
        const checkScreenHeight = () => {
            setIsSmallHeight(window.innerHeight < 600);
        };

        // Check on initial load
        checkScreenHeight();

        // Check on resize
        window.addEventListener('resize', checkScreenHeight);
        return () => window.removeEventListener('resize', checkScreenHeight);
    }, []);

    // Force footer to be visible after a delay - shorter delay for small height screens
    useEffect(() => {
        const timer = setTimeout(() => {
            showFooter();
        }, isSmallHeight ? 500 : 1000);

        return () => clearTimeout(timer);
    }, [isSmallHeight]);

    return (
        <div className="bg-[#FCF6E9]">
            <SEO
                title="Thérapeute Familiale et de Couple à Talence | Carole Lagardère"
                description="Carole Lagardère, thérapeute familiale systémique certifiée EFTA à Talence (Bordeaux). Consultations en thérapie familiale, de couple et individuelle avec une approche bienveillante et personnalisée."
                canonicalUrl="https://www.carole-lagardere.fr/"
                ogImage="/carole-lagardere-therapeute-familiale.webp"
                keywords={[
                    "thérapeute familiale Talence",
                    "thérapie familiale Bordeaux",
                    "thérapie de couple Talence",
                    "thérapie individuelle Bordeaux",
                    "thérapie systémique Talence",
                    "thérapie familiale EFTA",
                    "thérapeute couple Bordeaux",
                    "problèmes relationnels",
                    "conflits familiaux",
                    "soutien à la parentalité Talence"
                ]}
                structuredData={therapyPracticeData}
            />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <BookingSection calendlyUrl="https://calendly.com/carolelagardere33" />
        </div>
    );
};

export default HomePage;
