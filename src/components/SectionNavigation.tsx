import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sectionIds } from '../constants/navigation';

interface SectionNavigationProps {
    totalSections: number;
    sectionNames?: string[];
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({
    totalSections,
    sectionNames = ['Accueil', 'À propos 1', 'À propos 2', 'À propos 3', 'À propos 4', 'Services', 'Réservation', 'FAQ & Blog']
}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const snapScrollContainerRef = useRef<HTMLElement | null>(null);

    // Track scroll position to update active section
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
            // Check if booking section is visible (it's outside the snap container)
            const bookingSection = document.getElementById(sectionIds.booking);
            if (bookingSection) {
                const bookingRect = bookingSection.getBoundingClientRect();
                if (bookingRect.top < window.innerHeight && bookingRect.bottom > 0) {
                    // Booking section is visible, set it as active
                    setActiveSection(totalSections - 1);
                    return;
                }
            }

            // Check if we have a snap container or need to find one
            if (!snapScrollContainerRef.current) {
                findSnapContainer();
            }

            if (snapScrollContainerRef.current) {
                // For snap scroll pages, calculate which section is in view based on scroll position
                const scrollPosition = snapScrollContainerRef.current.scrollTop;
                const windowHeight = window.innerHeight;
                const currentSection = Math.floor(scrollPosition / windowHeight);

                // Ensure we don't go out of bounds
                if (currentSection >= 0 && currentSection < totalSections - 1) {
                    setActiveSection(currentSection);
                }
            } else {
                // For regular pages, use window.scrollY
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const currentSection = Math.floor(scrollPosition / windowHeight);

                // Ensure we don't go out of bounds
                if (currentSection >= 0 && currentSection < totalSections - 1) {
                    setActiveSection(currentSection);
                }
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
        // This helps when navigating between pages
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
    }, [totalSections]);

    // Navigate to a specific section
    const navigateToSection = (index: number) => {
        // Special case for the last section (Booking)
        if (index === totalSections - 1) {
            // Navigate to the booking section which is outside the snap container
            const bookingSection = document.getElementById(sectionIds.booking);
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // For other sections, use the section-X ID pattern
        const sectionElement = document.getElementById(`section-${index}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Group the sections for better organization
    const renderSectionDots = () => {
        return Array.from({ length: totalSections }).map((_, index) => (
            <div key={index} className="relative">
                <motion.button
                    className={`w-3 h-3 rounded-full border border-white ${activeSection === index
                        ? 'bg-white scale-125'
                        : 'bg-transparent'
                        } shadow-md hover:scale-125 transition-all duration-200`}
                    onClick={() => navigateToSection(index)}
                    onMouseEnter={() => setHoveredSection(index)}
                    onMouseLeave={() => setHoveredSection(null)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Navigate to ${sectionNames[index] || `section ${index + 1}`}`}
                />

                {/* Tooltip */}
                {hoveredSection === index && (
                    <motion.div
                        className="absolute right-6 top-0 bg-white/90 text-stone-800 px-2 py-1 rounded text-xs whitespace-nowrap shadow-md"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {sectionNames[index] || `Section ${index + 1}`}
                    </motion.div>
                )}
            </div>
        ));
    };

    return (
        <motion.div
            className="fixed right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 bg-stone-800/20 p-2 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            {renderSectionDots()}
        </motion.div>
    );
};

export default SectionNavigation; 