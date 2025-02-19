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
                <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold mb-2">Blog</h3>
                    <p>Explorez nos articles sur la communication, les relations et le bien-être mental.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Cartes de blog exemple */}
                    {/* <div className="bg-white rounded shadow-sm p-4">
                        <h4 className="font-semibold text-lg mb-2">Le Pouvoir de l'Écoute Active</h4>
                        <p className="text-sm mb-2">
                            Découvrez comment une écoute véritable peut désamorcer les conflits et renforcer les liens.
                        </p> */}
                    <Link to="/blog" className="text-calming-blue hover:underline">
                        Lire la suite...
                    </Link>
                    {/* </div> */}
                    <div className="bg-white rounded shadow-sm p-4">
                        <h4 className="font-semibold text-lg mb-2">Établir des Limites Saines</h4>
                        <p className="text-sm mb-2">
                            Apprenez l'importance de fixer et de respecter des limites personnelles au sein des familles.
                        </p>
                        <Link to="/blog" className="text-calming-blue hover:underline">
                            Lire la suite...
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqAndBlogSection;
