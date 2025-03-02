import React from 'react';

const LoadingFallback: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-stone-700 mb-4"></div>
                <p className="text-stone-700 text-lg">Chargement en cours...</p>
            </div>
        </div>
    );
};

export default LoadingFallback; 