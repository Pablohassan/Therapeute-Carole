// src/components/BookingSection.tsx
import React from 'react';
import { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { useIsMobile } from '../hooks/useIsMobile';

// Register French locale
registerLocale('fr', fr);

const BookingSection: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <section id="rendez-vous" className={`w-full ${isMobile ? 'h-screen' : 'py-32'} bg-stone-50`}>
            <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto w-full"
                >
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-center mb-4 md:mb-6">
                        Prenez Rendez-vous
                    </h2>

                    <div className="w-20 h-1 bg-stone-400 mx-auto mb-6 md:mb-8"></div>

                    <p className="text-center mb-6 md:mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
                        Si vous ne trouvez aucun créneau adapté, je vous propose de prendre rendez-vous par téléphone ou par mail.
                    </p>

                    <div className="bg-white rounded-lg shadow-xl p-4 md:p-6">
                        <div className="h-[500px] md:h-[600px]">
                            <InlineWidget
                                url="https://calendly.com/carolelagardere33/consultation/"
                                pageSettings={{
                                    backgroundColor: 'ffffff',
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    primaryColor: '4a5568',
                                    textColor: '2d3748'
                                }}
                                styles={{
                                    height: '100%',
                                    width: '100%',
                                }}
                                utm={{
                                    utmCampaign: 'Website Booking',
                                    utmSource: 'Website',
                                    utmMedium: 'Embed'
                                }}
                            />
                        </div>
                    </div>

                    <div className="mt-4 md:mt-6 text-center text-gray-600 text-sm">
                        <p>Si vous préférez prendre rendez-vous par téléphone, vous pouvez me joindre au</p>
                        <p className="font-medium text-base mt-1">+33 7 78 24 09 60</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
