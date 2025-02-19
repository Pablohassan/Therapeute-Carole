// src/pages/Family.tsx
import React from 'react';
import Layout from '../components/Layout';
import { CheckIcon } from '@heroicons/react/24/outline';
const FamilyPage: React.FC = () => {
    return (
        <Layout>
            <div className="font-sans text-gray-700">
                {/* Hero Section */}
                <section className="bg-purple-50 py-20 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            What is Online Couples Therapy?
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            The transformative experience of your relationship becoming the client,
                            so you can feel more satisfied and fulfilled.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
                                Start Healing
                            </button>
                            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Therapy Approaches Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Therapeutic Approaches
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-purple-600">
                                    Psychodynamic Couples Therapy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A depth-based, insight-oriented approach to relational healing that analyzes
                                    conscious and unconscious behaviors, thoughts, and feelings impacting the couple.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-purple-600">
                                    Emotionally Focused Therapy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Focused on creating and strengthening emotional bonds between partners through
                                    structured, evidence-based interventions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Areas of Specialty Section */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Areas of Specialty
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {[
                                    'Anxiety, depression, or stage-of-life transitions',
                                    'Difficulty identifying or expressing thoughts and feelings',
                                    'Managing needs of the couple amidst parenting',
                                    'Navigating challenging family dynamics',
                                    'Understanding impact of sexuality and gender'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {[
                                    'Improving physical, sexual, and emotional intimacy',
                                    'Exploring monogamy and ethical non-monogamy',
                                    'Root causes of hard-to-change behavior patterns',
                                    'Making good relationships feel great',
                                    'Addressing communication breakdowns'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Effectiveness Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Does Couples Therapy Work?
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Effective for those open and willing to engage in treatment. While initial hesitation
                            is normal, commitment to the process leads to meaningful change.
                        </p>
                        <div className="space-y-4 max-w-2xl mx-auto">
                            <p className="text-gray-600">
                                We focus on building trust and safety while honoring each individual's history
                                and experiences that shape the relationship.
                            </p>
                            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
                                Begin Your Journey
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default FamilyPage;
