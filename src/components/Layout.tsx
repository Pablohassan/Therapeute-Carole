import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import CookieConsent from './Cookieconsent';

interface LayoutProps {
    children: React.ReactNode;
    isHomePage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isHomePage = false }) => {
    return (
        <ParallaxProvider>
            <CookieConsent />
            <div className="relative bg-orange-100/60">
                {isHomePage ? (
                    // For HomePage, Navbar is positioned absolutely over the HeroSection
                    <div className="relative min-h-screen">
                        {children}
                        <div className="absolute top-0 left-0 right-0 z-10">
                            <Navbar />
                        </div>
                    </div>
                ) : (
                    // For other pages, Navbar is fixed at the top with content below
                    <>
                        <Navbar />
                        <div className=" bg-blue-900/30">{children}</div>
                    </>
                )}
                <Footer />
            </div>
        </ParallaxProvider>
    );
};

export default Layout; 