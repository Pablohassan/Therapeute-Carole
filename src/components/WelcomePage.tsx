// src/components/WelcomePage.tsx
import React from 'react';
import { SignInButton } from "@clerk/clerk-react";

const WelcomePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-montserrat mb-4">Bienvenue Carole</h1>
                <p className="text-xl text-gray-600 mb-8">Click sur le bouton entre ton mail et le mot de passe que je t'ai envoyé</p>
            </div>
            <div className="flex gap-4">
                <SignInButton mode="modal">
                    <button className="bg-green-800 hover:bg-natural-green/80 text-white px-6 py-3 rounded-md text-lg">
                        Connecte toi
                    </button>
                </SignInButton>
            </div>
        </div>
    );
};

export default WelcomePage; 