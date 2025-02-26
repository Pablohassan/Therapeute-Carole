import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import CookieConsent from './Cookieconsent';

interface LayoutProps {
    children: React.ReactNode;
    isHomePage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isHomePage = false }) => {
    // Add debugging code to check for multiple instances
    useEffect(() => {
        console.log('Layout component mounted');
        return () => {
            console.log('Layout component unmounted');
        };
    }, []);

    return (
        <ParallaxProvider>
            <CookieConsent />
            <div className="relative flex flex-col min-h-screen">
                {isHomePage ? (
                    // For HomePage, Navbar is positioned absolutely over the HeroSection
                    <div className="relative flex-grow">
                        {children}
                        <div className="absolute top-0 left-0 right-0 z-10">
                            <Navbar />
                        </div>
                    </div>
                ) : (
                    // For other pages, Navbar is fixed at the top with content below
                    <>
                        <Navbar />
                        <div className="flex-grow">{children}</div>
                    </>
                )}
                <Footer />
            </div>
        </ParallaxProvider>
    );
};

export default Layout; 