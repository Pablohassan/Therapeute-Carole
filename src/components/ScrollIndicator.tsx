import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <p className="text-white text-sm mb-2 font-light tracking-wider">Défiler vers le bas</p>
            <motion.div
                className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-1 shadow-lg"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                <motion.div
                    className="w-2 h-3 bg-white rounded-full"
                    animate={{
                        y: [0, 14, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator; 