import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface KeyboardNavigationHelperProps {
    autoHideDelay?: number; // Time in ms before auto-hiding
}

const KeyboardNavigationHelper: React.FC<KeyboardNavigationHelperProps> = ({
    autoHideDelay = 5000
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-hide after delay
    useEffect(() => {
        if (!isHovered && isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, autoHideDelay);

            return () => clearTimeout(timer);
        }
    }, [isVisible, isHovered, autoHideDelay]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="bg-stone-800/80 text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm max-w-xs">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium">Navigation au clavier</h3>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-stone-400 hover:text-white"
                                aria-label="Fermer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center">
                                <span className="inline-block bg-stone-700 px-2 py-1 rounded mr-2">↑</span>
                                <span>Section précédente</span>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block bg-stone-700 px-2 py-1 rounded mr-2">↓</span>
                                <span>Section suivante</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default KeyboardNavigationHelper; 