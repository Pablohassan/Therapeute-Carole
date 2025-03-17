// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router';
import { sectionIds } from '../constants/navigation';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-800 text-stone-300 font-montserrat font-light">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl text-white uppercase tracking-wider mb-6">Carole Lagardère</h3>
                        <p className="mb-4">Thérapeute spécialisée dans la thérapie familiale, de couple et individuelle.</p>
                        <p className="text-sm">
                            Cabinet de thérapie familiale<br />
                            184 cours du Maréchal Gallieni<br />
                            33400 Talence
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl text-white uppercase tracking-wider mb-6">Liens Rapides</h3>
                        <ul className="space-y-3">



                            <li>
                                <Link to="/conditions-generales" className="hover:text-white transition-colors">
                                    Conditions Générales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Social */}
                    <div>
                        <h3 className="text-xl text-white uppercase tracking-wider mb-6">Contact & Réseaux</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+33778240960" className="hover:text-white transition-colors">
                                    +33 7 78 24 09 60
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a
                                    href="mailto:therapie@carole-lagardere.fr"
                                    className="hover:text-white transition-colors"
                                >
                                    therapie@carole-lagardere.fr
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                <a
                                    href={`/apropos#${sectionIds.contact}`}
                                    className="hover:text-white transition-colors"
                                >
                                    A propos
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex space-x-4">



                            <a
                                href="https://www.google.com/search?q=carole+lagardere+talence+therapeute"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-stone-700 hover:bg-stone-600 p-2 rounded-full transition-colors"
                                aria-label="Google Reviews"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/carole-lagardere-ba828b33a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-stone-700 hover:bg-stone-600 p-2 rounded-full transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-stone-700 mt-12 pt-8 text-center text-sm">
                    <p>© {currentYear} Carole Lagardère - Tous droits réservés</p>
                    <p className="mt-2">
                        <a
                            href="https://www.google.com/search?q=carole+lagardere+talence+therapeute"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-stone-400 hover:text-white transition-colors mt-2"
                        >
                            <span className="mr-2">Laissez un avis sur Google</span>
                            <span className="flex">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
