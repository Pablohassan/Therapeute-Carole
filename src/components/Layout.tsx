import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import CookieConsent from './Cookieconsent';

interface LayoutProps {
    children: React.ReactNode;
    isHomePage?: boolean;
}

// Create custom events for showing/hiding footer
export function showFooter() {
    window.dispatchEvent(new Event('show-footer'));
}

export function hideFooter() {
    window.dispatchEvent(new Event('hide-footer'));
}

const Layout: React.FC<LayoutProps> = ({ children, isHomePage = false }) => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [isSmallHeight, setIsSmallHeight] = useState(false);

    // Check screen height
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

    // Add debugging code to check for multiple instances
    useEffect(() => {
        console.log('Layout component mounted');

        // Listen for footer visibility events
        const handleShowFooter = () => {
            console.log('Show footer event received');
            setIsFooterVisible(true);
        };

        const handleHideFooter = () => {
            console.log('Hide footer event received');
            setIsFooterVisible(false);
        };

        window.addEventListener('show-footer', handleShowFooter);
        window.addEventListener('hide-footer', handleHideFooter);

        return () => {
            console.log('Layout component unmounted');
            window.removeEventListener('show-footer', handleShowFooter);
            window.removeEventListener('hide-footer', handleHideFooter);
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
                        <div className={`absolute top-0 left-0 right-0 z-10 ${isSmallHeight ? 'pt-1' : ''}`}>
                            <Navbar />
                        </div>
                    </div>
                ) : (
                    // For other pages, Navbar is fixed at the top with content below
                    <>
                        <Navbar />
                        <div className={`flex-grow ${isSmallHeight ? 'pt-16' : 'pt-20'}   bg-[#FCF6E9]`}>
                            {children}
                        </div>
                    </>
                )}
                {isFooterVisible && (
                    <div className={isSmallHeight ? 'mt-2' : 'mt-4'}>
                        <Footer />
                    </div>
                )}
            </div>
        </ParallaxProvider>
    );
};

export default Layout; 