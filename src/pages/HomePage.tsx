// src/pages/HomePage.tsx
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import BookingSection from '../components/BookingSection';
import FaqAndBlogSection from '../components/FaqAndBlogSection';

const HomePage: React.FC = () => {
    return (
        <Layout isHomePage>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <BookingSection />
            <FaqAndBlogSection />
        </Layout>
    );
};

export default HomePage;
