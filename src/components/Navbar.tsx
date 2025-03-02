// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isSignedIn } = useUser();
    const snapScrollContainerRef = useRef<HTMLElement | null>(null);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Handle scroll events
    useEffect(() => {
        // Find the snap scroll container
        const findSnapContainer = () => {
            // Look for the snap-y container
            const snapContainer = document.querySelector('.snap-y.snap-mandatory') as HTMLElement;
            if (snapContainer) {
                snapScrollContainerRef.current = snapContainer;
                return true;
            }
            return false;
        };

        const handleScroll = () => {
            // If we have a snap container, use its scroll position
            if (snapScrollContainerRef.current) {
                setIsScrolled(snapScrollContainerRef.current.scrollTop > 80);
            } else {
                // Otherwise use window scroll position
                setIsScrolled(window.scrollY > 80);
            }
        };

        // Initial check
        const hasSnapContainer = findSnapContainer();
        handleScroll();

        // Add event listeners to the appropriate scroll target
        if (hasSnapContainer && snapScrollContainerRef.current) {
            snapScrollContainerRef.current.addEventListener('scroll', handleScroll);
        } else {
            window.addEventListener('scroll', handleScroll);
        }

        // Set up a MutationObserver to detect when the snap container is added to the DOM
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if any of the added nodes contain our snap container
                    if (findSnapContainer()) {
                        // Remove the old scroll listener from window
                        window.removeEventListener('scroll', handleScroll);

                        // Add the listener to the new snap container
                        if (snapScrollContainerRef.current) {
                            snapScrollContainerRef.current.addEventListener('scroll', handleScroll);
                            // Initial check with the new container
                            handleScroll();
                        }
                    }
                }
            }
        });

        // Start observing the document body for changes
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            // Clean up all event listeners
            if (snapScrollContainerRef.current) {
                snapScrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    // Close mobile menu on resize (if screen becomes large)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all font-montserrat font-light duration-300 ${isScrolled ? 'bg-stone-700/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                    className={`text-xl sm:text-xl lg:text-2xl tracking-wider ${isScrolled ? 'text-slate-100' : 'text-slate-200'
                        }`}
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
                >
                    <Link to="/home" className="flex flex-col">
                        <span className="font-light uppercase">Carole Lagardère</span>
                        <span className="text-sm sm:text-base font-light opacity-90">Thérapeute Familiale</span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <NavLink to="/home" isScrolled={isScrolled}>Accueil</NavLink>
                    <NavLink to="/family" isScrolled={isScrolled}> Famille</NavLink>
                    <NavLink to="/couple" isScrolled={isScrolled}> Couple</NavLink>
                    <NavLink to="/individuel" isScrolled={isScrolled}> Individuel</NavLink>
                    <NavLink to="/apropos" isScrolled={isScrolled}>À Propos</NavLink>

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-3 ml-4">
                        {isSignedIn ? (
                            <UserButton afterSignOutUrl="/" />
                        ) : (
                            <>
                                <SignInButton mode="modal">
                                    <button className="bg-stone-600 hover:bg-stone-500 text-white px-4 py-2 rounded-sm text-sm transition-all duration-300 hover:shadow-md">
                                        Se connecter
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="bg-slate-200 hover:bg-white text-stone-700 px-4 py-2 rounded-sm text-sm transition-all duration-300 hover:shadow-md">
                                        S'inscrire
                                    </button>
                                </SignUpButton>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden menu-button p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="relative w-6 h-5">
                        <span
                            className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                                }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-6 bg-white top-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-stone-700/95 backdrop-blur-sm shadow-lg py-4 px-4 flex flex-col space-y-4">
                            <MobileNavLink to="/home" onClick={() => setIsMobileMenuOpen(false)}>
                                Accueil
                            </MobileNavLink>
                            <MobileNavLink to="/family" onClick={() => setIsMobileMenuOpen(false)}>
                                Famille
                            </MobileNavLink>
                            <MobileNavLink to="/couple" onClick={() => setIsMobileMenuOpen(false)}>
                                Couple
                            </MobileNavLink>
                            <MobileNavLink to="/individuel" onClick={() => setIsMobileMenuOpen(false)}>
                                Individuel
                            </MobileNavLink>
                            <MobileNavLink to="/apropos" onClick={() => setIsMobileMenuOpen(false)}>
                                À Propos
                            </MobileNavLink>

                            {/* Auth buttons */}
                            <div className="flex flex-col space-y-2 pt-2 border-t border-stone-600/30">
                                {isSignedIn ? (
                                    <div className="flex justify-center py-2">
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                ) : (
                                    <>
                                        <SignInButton mode="modal">
                                            <button className="w-full bg-stone-600 hover:bg-stone-500 text-white py-2 rounded-sm text-sm transition-all duration-300">
                                                Se connecter
                                            </button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <button className="w-full bg-slate-200 hover:bg-white text-stone-700 py-2 rounded-sm text-sm transition-all duration-300">
                                                S'inscrire
                                            </button>
                                        </SignUpButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Desktop navigation link component
const NavLink: React.FC<{ to: string; isScrolled: boolean; children: React.ReactNode }> = ({
    to,
    isScrolled,
    children
}) => (
    <Link
        to={to}
        className={`uppercase tracking-wide text-sm lg:text-base ${isScrolled ? 'text-slate-300' : 'text-slate-200'
            } hover:text-white transition-colors relative group`}
    >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
);

// Mobile navigation link component
const MobileNavLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({
    to,
    onClick,
    children
}) => (
    <Link
        to={to}
        className="text-slate-200 uppercase tracking-wide py-3 text-center border-b border-stone-600/30 hover:bg-stone-600/30 transition-colors"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Navbar;
