import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { showFooter } from '../components/Layout';

const ConditionsGenerales: React.FC = () => {
    // Force footer to be visible after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            showFooter();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SEO
                title="Conditions Générales | Carole Lagardère"
                description="Conditions générales d'utilisation et de service pour les consultations avec Carole Lagardère, thérapeute à Bordeaux."
                canonicalUrl="https://www.carole-lagardere.fr/conditions-generales"
                keywords={["conditions générales", "thérapeute", "Carole Lagardère", "Bordeaux", "consultation"]}
            />

            <div className="pt-24 pb-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-700">Conditions Générales</h1>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Préambule</h2>
                            <p className="mb-4">
                                Les présentes conditions générales régissent les relations entre MADAME Carole Lagardère,
                                thérapeute exerçant en libéral, SIREN 749 979 225, ci-après dénommée "le Praticien",
                                et toute personne physique, ci-après dénommée "le Client", souhaitant bénéficier des
                                services proposés.
                            </p>
                            <p className="mb-4">
                                Le site internet est hébergé on premise sur Bordeaux Metropole, pour toute question relative au site internet vous pouvez écrire à l'adresse suivante : pablohaussman@gmail.com
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 1 - Services proposés</h2>
                            <p className="mb-4">
                                Le Praticien propose des consultations thérapeutiques individuelles, en couple ou familiales,
                                dans un local professionnel dédié. Ces consultations visent à accompagner le Client dans
                                une démarche de mieux-être psychologique et émotionnel.
                            </p>
                            <p className="mb-4">
                                Les services proposés ne constituent en aucun cas des actes médicaux et ne se substituent
                                pas à un suivi médical. Le Praticien n'établit pas de diagnostic médical et ne prescrit
                                pas de médicaments.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 2 - Prise de rendez-vous</h2>
                            <p className="mb-4">
                                La prise de rendez-vous s'effectue via le calendrier en ligne disponible sur le site internet
                                du Praticien. Le Client s'engage à fournir des informations exactes lors de la prise de rendez-vous.
                            </p>
                            <p className="mb-4">
                                La confirmation de rendez-vous sera envoyée par email à l'adresse fournie par le Client.
                                Il appartient au Client de vérifier la bonne réception de cette confirmation.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 3 - Tarifs et paiement</h2>
                            <p className="mb-4">
                                Les tarifs des consultations sont indiqués sur le site internet du Praticien et peuvent
                                être modifiés à tout moment. Le tarif applicable est celui en vigueur au jour de la prise
                                de rendez-vous.
                            </p>
                            <p className="mb-4">
                                Le paiement s'effectue à la fin de chaque séance, par carte bancaire, espèces ou chèque.
                                Une facture peut être délivrée sur demande.
                            </p>
                            <p className="mb-4">
                                Les consultations ne sont pas prises en charge par la Sécurité Sociale mais peuvent,
                                dans certains cas, faire l'objet d'un remboursement partiel par certaines mutuelles.
                                Il appartient au Client de se renseigner auprès de sa mutuelle.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 4 - Annulation et report</h2>
                            <p className="mb-4">
                                Toute annulation ou demande de report doit être effectuée au moins 48 heures avant l'heure
                                du rendez-vous. En cas d'annulation tardive ou d'absence non justifiée, la séance sera
                                considérée comme due et facturée.
                            </p>
                            <p className="mb-4">
                                Le Praticien se réserve le droit d'annuler ou de reporter un rendez-vous en cas de force
                                majeure. Dans ce cas, le Client sera prévenu dans les meilleurs délais et un nouveau
                                rendez-vous lui sera proposé.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 5 - Confidentialité</h2>
                            <p className="mb-4">
                                Le Praticien s'engage à respecter le secret professionnel et la confidentialité des
                                échanges avec le Client. Aucune information concernant le Client ne sera divulguée à
                                des tiers, sauf obligation légale.
                            </p>
                            <p className="mb-4">
                                Nous attachons une importance particulière à la protection de vos données personnelles. Dans le cadre de la prise de rendez-vous en ligne, aucune donnée client n'est conservée sur notre site. L'ensemble des informations nécessaires à la réservation (nom, prénom, adresse e-mail, etc.) est directement collecté et traité par notre prestataire tiers Calendly, conformément à sa propre politique de confidentialité. Nous n'avons pas accès à vos informations de paiement ni à d'autres données sensibles. En utilisant notre service de prise de rendez-vous, vous acceptez les conditions générales de Calendly, disponibles sur leur site. Pour toute question relative à vos droits en matière de protection des données, nous vous invitons à contacter Calendly ou à consulter leur politique de confidentialité.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 6 - Responsabilité</h2>
                            <p className="mb-4">
                                Le Praticien s'engage à mettre en œuvre tous les moyens à sa disposition pour accompagner
                                le Client dans sa démarche thérapeutique. Toutefois, il ne peut garantir de résultats
                                spécifiques, ceux-ci dépendant de nombreux facteurs, notamment de l'implication du Client.
                            </p>
                            <p className="mb-4">
                                Le Client reconnaît que les consultations proposées ne constituent pas un traitement
                                médical et ne se substituent en aucun cas à un suivi médical. Le Client est seul
                                responsable de ses décisions et actions.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 7 - Propriété intellectuelle</h2>
                            <p className="mb-4">
                                L'ensemble des éléments constituant le site internet du Praticien (textes, images, logo, etc.)
                                est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction ou
                                représentation, totale ou partielle, est strictement interdite sans autorisation préalable.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 8 - Droit applicable et litiges</h2>
                            <p className="mb-4">
                                Les présentes conditions générales sont soumises au droit français. En cas de litige,
                                les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                            </p>
                            <p className="mb-4">
                                À défaut d'accord amiable, tout litige relatif à l'interprétation ou à l'exécution des
                                présentes conditions générales sera de la compétence exclusive des tribunaux du ressort
                                du domicile du Praticien.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">Article 9 - Modification des conditions générales</h2>
                            <p className="mb-4">
                                Le Praticien se réserve le droit de modifier les présentes conditions générales à tout moment.
                                Les conditions générales applicables sont celles en vigueur à la date de la prise de rendez-vous.
                            </p>
                            <p className="mb-4">
                                Dernière mise à jour : 01 mars 2025
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ConditionsGenerales;




