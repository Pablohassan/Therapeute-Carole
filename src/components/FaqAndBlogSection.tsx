// src/components/FaqAndBlogSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const faqData = [
    {
        question: 'Qu\'est-ce que la thérapie familiale ?',
        answer: 'La thérapie familiale est une forme de counseling qui traite des problèmes spécifiques affectant la santé et le fonctionnement d\'une famille.',
    },
    {
        question: 'Combien de temps dure la thérapie ?',
        answer: 'La durée varie selon les besoins individuels : certaines familles voient des améliorations en quelques semaines, d\'autres poursuivent pendant plusieurs mois.',
    },
];

const FaqAndBlogSection: React.FC = () => {
    return (
        <section className="p-8 bg-white" id="faq-blog">
            <div className="max-w-5xl mx-auto">
                {/* FAQ */}
                <h2 className="text-3xl font-bold mb-4 text-center">Questions Fréquemment Posées</h2>
                <div className="space-y-4 mb-8">
                    {faqData.map((faq, i) => (
                        <motion.div
                            key={i}
                            className="p-4 border rounded shadow-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold mb-2">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Blog Preview */}
            </div>
        </section>
    );
};

export default FaqAndBlogSection;
