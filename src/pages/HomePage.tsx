// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import SEO from '../components/SEO';
import { showFooter } from '../components/Layout';

const HomePage: React.FC = () => {
    // Force footer to be visible after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            showFooter();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SEO
                title="Carole Lagardère - Thérapeute Familiale Talence"
                description="Carole Lagardère, thérapeute familiale systémique certifiée EFTA à Talence (Bordeaux). Consultations en thérapie familiale, de couple et individuelle. Approche bienveillante et solution-focused."
                canonicalUrl="https://www.carole-lagardere.fr/"
                keywords={["thérapeute familiale Talence", "thérapie familiale Bordeaux", "thérapie de couple Talence", "thérapie individuelle Talence", "thérapie systémique", "thérapie familiale EFTA", "therapeute Bordeaux"]}
            />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <BookingSection />

        </>
    );
};

export default HomePage;
