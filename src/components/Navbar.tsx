// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';


const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                <div className={`text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-dancing tracking-wider ${isScrolled ? 'invisible opacity-0' : 'text-slate-200'}`}>
                    <Link to="/"> Carole Lagradere</Link>
                    <br />
                    <span className="f font-dancing">Therapeute Familiale</span>
                </div>
                <div className="flex items-center ml-auto space-x-3 md:space-x-4 lg:space-x-6 text-md sm:text-lg lg:text-xl text-slate-200">
                    <Link
                        to="/couple"
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
                        to="/bio"
                        className={`uppercase hidden sm:block tracking-wide ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                            } hover:text-natural-green transition-colors`}
                    >
                        A Propos
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
