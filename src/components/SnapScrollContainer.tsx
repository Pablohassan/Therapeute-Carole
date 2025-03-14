import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { showFooter, hideFooter } from './Layout';

interface SnapScrollContainerProps {
    children: ReactNode;
    smoothScrolling?: boolean;
    preventFooterOverlap?: boolean;
}

const SnapScrollContainer: React.FC<SnapScrollContainerProps> = ({
    children,
    smoothScrolling = true,
    preventFooterOverlap = true
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);
    const childCount = React.Children.count(children);
    const isMobile = useIsMobile();
    const lastScrollTop = useRef(0);

    // Add smooth scrolling behavior to the document
    useEffect(() => {
        if (smoothScrolling && !isMobile) {
            // Save the original style
            const originalStyle = document.documentElement.style.scrollBehavior;

            // Apply smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';

            // Cleanup function to restore original style
            return () => {
                document.documentElement.style.scrollBehavior = originalStyle;
            };
        }
    }, [smoothScrolling, isMobile]);

    // Handle keyboard navigation (only on desktop)
    useEffect(() => {
        if (isMobile) return; // Skip keyboard navigation on mobile

        const handleKeyDown = (e: KeyboardEvent) => {
            // Only handle arrow keys
            if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', 'Space'].includes(e.key)) {
                return;
            }

            // Prevent default scrolling behavior
            e.preventDefault();

            if (!containerRef.current) return;

            const container = containerRef.current;
            const windowHeight = window.innerHeight;

            // Calculate next section based on key pressed
            let nextSection = currentSection;

            if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Space') {
                nextSection = Math.min(currentSection + 1, childCount - 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                nextSection = Math.max(currentSection - 1, 0);
            } else if (e.key === 'Home') {
                nextSection = 0;
            } else if (e.key === 'End') {
                nextSection = childCount - 1;
            }

            // Update current section
            if (nextSection !== currentSection) {
                setCurrentSection(nextSection);

                // Scroll to the section
                container.scrollTo({
                    top: nextSection * windowHeight,
                    behavior: 'smooth'
                });
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection, childCount, isMobile]);

    // Track scroll position to update current section and footer visibility
    useEffect(() => {
        if (!containerRef.current) return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const scrollPosition = container.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollHeight = container.scrollHeight;

            // Detect scroll direction
            const scrollingUp = scrollPosition < lastScrollTop.current;
            lastScrollTop.current = scrollPosition;

            // Calculate current section (on desktop only)
            if (!isMobile) {
                const newSection = Math.round(scrollPosition / windowHeight);
                if (newSection !== currentSection && newSection >= 0 && newSection < childCount) {
                    setCurrentSection(newSection);
                }
            }

            // Determine if we should show the footer
            // Show footer only when scrolled to the bottom (with a small threshold)
            const scrolledToBottom = scrollHeight - scrollPosition - windowHeight < 5;

            // Control footer visibility
            if (scrolledToBottom && !scrollingUp) {
                console.log('Showing footer from SnapScrollContainer');
                showFooter();
            } else if (scrollingUp) {
                console.log('Hiding footer from SnapScrollContainer');
                hideFooter();
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
            hideFooter(); // Hide footer when unmounting
        };
    }, [currentSection, childCount, isMobile]);

    return (
        <div
            className={`w-full relative ${preventFooterOverlap ? 'h-screen' : ''}`}
        >
            <div
                ref={containerRef}
                className={`h-screen w-full overflow-y-scroll ${isMobile ? 'scroll-smooth snap-y snap-mandatory' : 'scroll-auto'} absolute inset-0`}
                tabIndex={0} // Make the container focusable for keyboard events
                data-snap-container="true" // Add a data attribute for easier identification
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={`w-full ${isMobile ? 'min-h-screen snap-start' : 'h-auto'} ${isMobile ? 'overflow-visible' : 'overflow-visible'}`}
                        id={`section-${index}`}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SnapScrollContainer; 