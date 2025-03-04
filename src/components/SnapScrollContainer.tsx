import React, { ReactNode, useEffect, useRef, useState } from 'react';

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

    // Add smooth scrolling behavior to the document
    useEffect(() => {
        if (smoothScrolling) {
            // Save the original style
            const originalStyle = document.documentElement.style.scrollBehavior;

            // Apply smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';

            // Cleanup function to restore original style
            return () => {
                document.documentElement.style.scrollBehavior = originalStyle;
            };
        }
    }, [smoothScrolling]);

    // Handle keyboard navigation
    useEffect(() => {
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
    }, [currentSection, childCount]);

    // Track scroll position to update current section
    useEffect(() => {
        if (!containerRef.current) return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollPosition = containerRef.current.scrollTop;
            const windowHeight = window.innerHeight;
            const newSection = Math.round(scrollPosition / windowHeight);

            if (newSection !== currentSection && newSection >= 0 && newSection < childCount) {
                setCurrentSection(newSection);
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentSection, childCount]);

    return (
        <div
            className={`w-full relative ${preventFooterOverlap ? 'h-screen' : ''}`}
        >
            <div
                ref={containerRef}
                className="h-screen w-full overflow-y-scroll snap-y snap-mandatory absolute inset-0 scroll-smooth"
                tabIndex={0} // Make the container focusable for keyboard events
            >
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className="snap-start w-full h-screen overflow-y-auto"
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