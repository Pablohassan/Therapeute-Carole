import React, { ReactNode, useEffect } from 'react';

interface SnapScrollContainerProps {
    children: ReactNode;
    smoothScrolling?: boolean;
}

const SnapScrollContainer: React.FC<SnapScrollContainerProps> = ({
    children,
    smoothScrolling = true
}) => {
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

    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
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
    );
};

export default SnapScrollContainer; 