// src/components/WhyChooseUsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Jane D.',
        text: 'Our family has never been closer. The guidance we received was truly life-changing!',
    },
    {
        name: 'Mark & Susan',
        text: 'We learned how to communicate better and resolved conflicts that felt impossible before.',
    },
];

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="bg-white p-8" id="why-choose-us">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Pourquoi nous choisir ?</h2>
                <div className="md:flex md:justify-center md:items-start gap-8">
                    {/* Testimonials */}
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">Ce que nos clients disent</h3>
                        <div className="space-y-4">
                            {testimonials.map((testimonial, i) => (
                                <motion.div
                                    key={i}
                                    className="p-4 border rounded shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="italic mb-2">&quot;{testimonial.text}&quot;</p>
                                    <p className="font-semibold">- {testimonial.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Approaches */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold mb-4">Holistic Therapy Approaches</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Thérapie Systémique :</strong> Comprendre et améliorer les systèmes familiaux.</li>
                            <li><strong>EMDR :</strong> Traiter le traumatisme et l'anxiété avec des techniques probées.</li>
                            <li><strong>Mindfulness :</strong> Cultiver la présence, réduire le stress et renforcer la conscience de soi.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
