// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSmallHeight, setIsSmallHeight] = useState(false);

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
            // Look for the SnapScrollContainer using the data attribute
            const snapContainer = document.querySelector('[data-snap-container="true"]') as HTMLElement;
            if (snapContainer) {
                snapScrollContainerRef.current = snapContainer;
                return true;
            }
            // If no snap container is found, reset the ref
            snapScrollContainerRef.current = null;
            return false;
        };

        const handleScroll = () => {
            // Always check if the snap container still exists
            const hasSnapContainer = findSnapContainer();

            // If we have a snap container, use its scroll position
            if (hasSnapContainer && snapScrollContainerRef.current) {
                setIsScrolled(snapScrollContainerRef.current.scrollTop > 80);
            } else {
                // Otherwise use window scroll position
                setIsScrolled(window.scrollY > 20);
            }
        };

        // Initial check
        findSnapContainer();
        handleScroll();

        // Add event listeners to the appropriate scroll target
        if (snapScrollContainerRef.current) {
            snapScrollContainerRef.current.addEventListener('scroll', handleScroll);
        }

        // Always add window scroll listener as a fallback
        window.addEventListener('scroll', handleScroll);

        // Check for changes in the DOM that might affect our scroll container
        const checkForChanges = () => {
            // Clean up old listeners
            if (snapScrollContainerRef.current) {
                snapScrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }

            // Check for snap container
            const hasSnapContainer = findSnapContainer();

            // Set up appropriate listeners
            if (hasSnapContainer && snapScrollContainerRef.current) {
                snapScrollContainerRef.current.addEventListener('scroll', handleScroll);
            }

            // Run initial check
            handleScroll();
        };

        // Set up a MutationObserver to detect when the snap container is added to or removed from the DOM
        const observer = new MutationObserver((mutations) => {
            // Check if the DOM has changed significantly
            let shouldRecheck = false;

            for (const mutation of mutations) {
                if (mutation.type === 'childList' &&
                    (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
                    shouldRecheck = true;
                    break;
                }
            }

            if (shouldRecheck) {
                checkForChanges();
            }
        });

        // Start observing the document body for changes
        observer.observe(document.body, { childList: true, subtree: true });

        // Also check periodically for changes that the MutationObserver might miss
        const intervalId = setInterval(checkForChanges, 1000);

        return () => {
            // Clean up all event listeners
            if (snapScrollContainerRef.current) {
                snapScrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            clearInterval(intervalId);
        };
    }, []);

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

    // Determine padding based on scroll state and screen height
    const navPadding = isScrolled
        ? 'py-1'
        : (isSmallHeight ? 'py-2' : 'py-4');

    return (
        <nav
            className={`fixed w-full text-stone-900 z-50 transition-all font-montserrat font-light duration-300 ${isScrolled ? 'bg-stone-700/60 backdrop-blur-sm shadow-md z-20' : 'bg-transparent z-20'
                } ${navPadding}`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 z-20">
                {/* Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                    className={`${isSmallHeight ? 'text-base sm:text-lg' : 'text-xl sm:text-xl lg:text-2xl'} tracking-wider ${isScrolled ? 'text-slate-100' : 'text-slate-950'
                        }`}
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)' }}
                >
                    <Link to="/home" className="flex flex-col">
                        <span className="font-light uppercase">Carole Lagardère</span>
                        <span className={`${isSmallHeight ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'} font-light opacity-90`}>
                            Thérapeute Familiale
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className={`hidden lg:flex items-center space-x-8 ${isScrolled ? 'md:text-slate-100' : 'md:text-slate-950'
                    }`}
                    style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)' }}
                >
                    <NavLink to="/home" isScrolled={isScrolled} underlineColor="bg-[#25926C]/90" isSmallHeight={isSmallHeight}>Accueil</NavLink>
                    <NavLink to="/family" isScrolled={isScrolled} underlineColor="bg-[#AB4D8C]/90" isSmallHeight={isSmallHeight}>Famille</NavLink>
                    <NavLink to="/couple" isScrolled={isScrolled} underlineColor="bg-[#EC6849]/80" isSmallHeight={isSmallHeight}>Couple</NavLink>
                    <NavLink to="/individuel" isScrolled={isScrolled} underlineColor="bg-[#FBC018]/80" isSmallHeight={isSmallHeight}>Individuel</NavLink>
                    <NavLink to="/apropos" isScrolled={isScrolled} underlineColor="bg-[#25926C]/15" isSmallHeight={isSmallHeight}>À Propos</NavLink>
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
                            className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                                }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-6 bg-black top-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden mobile-menu text-stone-900 text-slate-900"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-stone-600/80 py-4 px-4 flex flex-col space-y-4"
                            style={{ textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2)' }}
                        >
                            <MobileNavLink to="/home" onClick={() => setIsMobileMenuOpen(false)} underlineColor="bg-[#25926C]/90">
                                Accueil
                            </MobileNavLink>
                            <MobileNavLink to="/family" onClick={() => setIsMobileMenuOpen(false)} underlineColor="bg-[#AB4D8C]/90">
                                Famille
                            </MobileNavLink>
                            <MobileNavLink to="/couple" onClick={() => setIsMobileMenuOpen(false)} underlineColor="bg-[#EC6849]/90">
                                Couple
                            </MobileNavLink>
                            <MobileNavLink to="/individuel" onClick={() => setIsMobileMenuOpen(false)} underlineColor="bg-[#FBC018]/90">
                                Individuel
                            </MobileNavLink>
                            <MobileNavLink to="/apropos" onClick={() => setIsMobileMenuOpen(false)} underlineColor="bg-[#25926C]/30">
                                À Propos
                            </MobileNavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

// Desktop navigation link component
const NavLink: React.FC<{
    to: string;
    isScrolled: boolean;
    isSmallHeight?: boolean;
    children: React.ReactNode;
    underlineColor?: string;
}> = ({
    to,
    isScrolled,
    isSmallHeight = false,
    children,
    underlineColor = 'bg-slate-100'
}) => {
        const handleClick = () => {
            // First try to find the snap container
            const snapContainer = document.querySelector('.snap-y.snap-mandatory') as HTMLElement;

            if (snapContainer) {
                // If we have a snap container, scroll it to the top
                snapContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Also scroll the window to the top as a fallback
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Add a small delay to ensure the scroll happens after navigation
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
            }, 100);
        };

        return (
            <Link
                to={to}
                className={`uppercase tracking-wide ${isSmallHeight ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'
                    } ${isScrolled ? 'text-slate-100' : 'text-slate-950'
                    } hover:${isScrolled ? 'text-slate-300' : 'text-slate-800'
                    } transition-colors relative group`}
                onClick={handleClick}
            >
                {children}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
        );
    };

// Mobile navigation link component
const MobileNavLink: React.FC<{
    to: string;
    onClick: () => void;
    children: React.ReactNode;
    underlineColor?: string; // Add optional underline color prop
}> = ({
    to,
    onClick,
    children,
    underlineColor = 'bg-slate-200' // Default color if not provided
}) => {
        const handleClick = () => {
            // First close the mobile menu
            onClick();

            // Try to find the snap container
            const snapContainer = document.querySelector('.snap-y.snap-mandatory') as HTMLElement;

            if (snapContainer) {
                // If we have a snap container, scroll it to the top
                snapContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Also scroll the window to the top as a fallback
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Add a small delay to ensure the scroll happens after navigation
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
            }, 100);
        };

        return (
            <Link
                to={to}
                className="text-slate-200 uppercase tracking-wide py-3 text-center border-b border-stone-600/30 hover:bg-stone-600/30 transition-colors relative group "
                onClick={handleClick}
            >
                {children}
                <span className={`absolute bottom-0 left-[37%] w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-1/4 `}></span>
            </Link>
        );
    };

export default Navbar;
