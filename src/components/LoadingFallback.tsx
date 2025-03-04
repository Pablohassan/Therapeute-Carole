import React from 'react';

const LoadingFallback: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-100">
            <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-stone-300 mb-4"></div>
                <div className="h-4 w-32 bg-stone-300 rounded"></div>
            </div>
        </div>
    );
};

export default LoadingFallback; 