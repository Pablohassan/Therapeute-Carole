// src/components/WelcomePage.tsx
import React from 'react';
import { Link } from 'react-router';

const WelcomePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-montserrat mb-4">Bienvenue Carole</h1>
                <p className="text-xl text-gray-600 mb-8">Merci de votre visite</p>
            </div>
            <div className="flex gap-4">
                <Link to="/home">
                    <button className="bg-green-800 hover:bg-natural-green/80 text-white px-6 py-3 rounded-md text-lg">
                        Accéder au site
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage; 