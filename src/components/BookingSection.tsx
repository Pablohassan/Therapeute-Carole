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

interface BookingSectionProps {
    calendlyUrl: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ calendlyUrl }) => {
    const isMobile = useIsMobile();

    return (
        <section id="rendez-vous" className="w-full bg-[#FCF6E9] relative mt-2">
            {/* Visual separator at the top of the section */}


            <div className={`container mx-auto  sm:px-6 ${isMobile ? 'py-16' : 'py-32'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto w-full"
                >
                    <h2 className="text-2xl md:text-4xl font-medium  tracking-wide text-center mb-4 md:mb-6">
                        Prenez Rendez-vous
                    </h2>



                    <p className="text-center mb-6 md:mb-8 text-sm md:text-base text-gray-600 max-w-2xl px-4 mx-auto">
                        Si vous ne trouvez aucun créneau adapté, je vous propose de prendre rendez-vous par téléphone ou par mail.
                    </p>

                    <div className="bg-[#FCF6E9]/80 rounded-md shadow-xl  md:p-6">
                        <div className="h-[500px] md:h-[600px]">
                            <InlineWidget
                                url={calendlyUrl}
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
