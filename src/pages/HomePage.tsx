// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import FaqAndBlogSection from '../components/FaqAndBlogSection';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <BookingSection />
            <FaqAndBlogSection />
        </>
    );
};

export default HomePage;
