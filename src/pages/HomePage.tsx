// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import FaqAndBlogSection from '../components/FaqAndBlogSection';
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
                description="Carole Lagardère est une thérapeute familiale, spécialisée dans la thérapie familiale, de couple et individuelle à  Talence - Bordeaux."
                canonicalUrl="https://www.carole-lagardere.fr/"
                keywords={["thérapeute familiale", "thérapie familiale", "thérapie de couple", "thérapie individuelle", "Bordeaux", "Talence"]}
            />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <BookingSection />
            <FaqAndBlogSection />
        </>
    );
};

export default HomePage;
