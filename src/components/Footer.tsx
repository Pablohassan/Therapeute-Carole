// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="p-8 bg-calming-blue text-white">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="font-semibold">© {new Date().getFullYear()} FamilyTherapy</p>
                    <p>Bordeaux, France - contact@familytherapy.com</p>
                </div>
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    {/* Social Icons Placeholder */}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-soft-beige">
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-soft-beige">
                        Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-soft-beige">
                        Twitter
                    </a>
                </div>
                <div>
                    <a href="#!" className="hover:underline mr-4">Legal Mentions</a>
                    <a href="#!" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
