// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isSignedIn } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full transition-all font-montserrat font-light  duration-300 ${isScrolled
            ? 'bg-stone-700/80 shadow-md py-2'
            : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto flex items-center justify-between px-2 lg:px-4"
                style={{ textShadow: '2px 1px 2px rgba(0, 0, 0, 0.34)' }}
            >
                <div className={`text-xl sm:text-xl lg:text-2xl xl:text-3xl font-montserrat tracking-wider ${isScrolled ? 'invisible opacity-0' : 'text-slate-200'}`}>
                    <Link to="/home"> Carole Lagardère</Link>
                    <br />
                    <span className="font-montserrat">Thérapeute Familiale</span>
                </div>
                <div className="flex items-center ml-auto space-x-3 md:space-x-4 lg:space-x-6 text-md sm:text-lg lg:text-xl text-slate-200">
                    <Link
                        to="/family"
                        className={`uppercase tracking-wide ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                            } hover:text-natural-green transition-colors`}
                    >
                        Famille
                    </Link>
                    <Link
                        to="/couple"
                        className={`uppercase tracking-wide ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                            } hover:text-natural-green transition-colors`}
                    >
                        Couples
                    </Link>

                    <Link
                        to="/ponctuel"
                        className={`uppercase tracking-wide ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                            } hover:text-natural-green transition-colors`}
                    >
                        Ponctuelle
                    </Link>
                    <Link
                        to="/bio"
                        className={`uppercase hidden sm:block tracking-wide ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                            } hover:text-natural-green transition-colors`}
                    >
                        A Propos
                    </Link>

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-2">
                        {isSignedIn ? (
                            <UserButton afterSignOutUrl="/" />
                        ) : (
                            <>
                                <SignInButton mode="modal">
                                    <button className="bg-natural-green hover:bg-natural-green/80 text-white px-4 py-2 rounded-md">
                                        Se connecter
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="bg-slate-200 hover:bg-slate-300 text-stone-700 px-4 py-2 rounded-md">
                                        S'inscrire
                                    </button>
                                </SignUpButton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
