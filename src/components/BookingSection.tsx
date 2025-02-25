// src/components/BookingSection.tsx
import React from 'react';
import { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

// Register French locale
registerLocale('fr', fr);



const BookingSection: React.FC = () => {
    return (
        <section id="rendez-vous" className="py-16 bg-purple-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Prenez Rendez-vous
                    </h2>
                    <p className="text-center mb-12 text-lg">
                        Choisissez une date et une heure qui vous conviennent pour votre consultation
                    </p>

                    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                        <div className="h-[800px]">
                            <InlineWidget
                                url="https://calendly.com/carolelagardere33/consultation/"
                                pageSettings={{
                                    backgroundColor: 'ffffff',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: '4a5568',
                                    textColor: '2d3748'
                                }}
                                utm={{
                                    utmCampaign: 'Website Booking',
                                    utmSource: 'Website',
                                    utmMedium: 'Embed'
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
