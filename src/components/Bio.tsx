import { sectionIds } from "../constants/navigation";


const Bio = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-24 font-montserrat text-stone-800 font-light">
            {/* En-tête */}
            <div className="mb-16 text-center">
                <h1 className="text-4xl font-light uppercase tracking-wider text-stone-900 mb-4">
                    Carole Lagardère
                </h1>
                <h2 className="text-2xl text-stone-600 tracking-wide mb-6">
                    Thérapeute familiale et de couple
                </h2>
                <div className="border-b border-stone-300 pb-8 mb-12">
                    <p className="text-lg uppercase tracking-wide text-stone-500">
                        Thérapeute familiale systémique certifiée EFTA
                    </p>
                </div>
            </div>

            {/* Parcours professionnel */}
            <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-4">
                        <h3 className="text-xl uppercase tracking-wider text-stone-900 border-l-4 border-soft-beige pl-4">
                            Parcours & Certification
                        </h3>
                        <ul className="space-y-2 list-none pl-0 text-stone-600 leading-relaxed">
                            <li>→ Institut d'Étude Systémique de Bordeaux</li>
                            <li>→ Membre accrédité EFTA</li>
                            <li>→ Diplôme d'État d'Éducatrice Spécialisée</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl uppercase tracking-wider text-stone-900 border-l-4 border-soft-beige pl-4">
                            Expérience Professionnelle
                        </h3>
                        <div className="text-stone-600 leading-relaxed">
                            <p className="mb-2">20 ans d'accompagnement familial</p>
                            <p className="text-sm text-stone-500 tracking-wide">
                                Protection de l'enfance • Médiation intergénérationnelle • Guidance parentale
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spécialités */}
                <div className="space-y-20">
                    <div className="border-t border-stone-200 pt-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl uppercase tracking-wider text-stone-900 mb-6">
                                    Thérapie Familiale
                                </h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Approche contextuelle explorant les interactions familiales pour restaurer
                                    l'équilibre et mobiliser les ressources du système familial.
                                </p>
                                <ul className="list-none pl-0 space-y-2 text-stone-500 text-sm tracking-wide">
                                    <li>▸ Gestion des crises familiales</li>
                                    <li>▸ Rééquilibrage des dynamiques relationnelles</li>
                                    <li>▸ Valorisation des compétences parentales</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 bg-stone-50 p-8 border border-stone-200">
                                <p className="text-sm text-stone-500 italic">
                                    "Rechercher ensemble les clés d'une communication apaisée"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200 pt-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl uppercase tracking-wider text-stone-900 mb-6">
                                    Thérapie de Couple
                                </h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Espace de reconstruction relationnelle par l'écoute active et
                                    la compréhension mutuelle des besoins.
                                </p>
                                <ul className="list-none pl-0 space-y-2 text-stone-500 text-sm tracking-wide">
                                    <li>▸ Résolution des conflits récurrents</li>
                                    <li>▸ Renforcement de l'intimité émotionnelle</li>
                                    <li>▸ Alignement des projets de vie communs</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 bg-stone-50 p-8 border border-stone-200">
                                <p className="text-sm text-stone-500 italic">
                                    "Retrouver le dialogue et réinventer le lien conjugal"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200 pt-16">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl uppercase tracking-wider text-stone-900 mb-6">
                                    Thérapie Individuelle
                                </h3>
                                <p className="text-stone-600 mb-6 leading-relaxed">
                                    Exploration des schémas relationnels pour développer de
                                    nouveaux modes d'interaction sociale et personnelle.
                                </p>
                                <ul className="list-none pl-0 space-y-2 text-stone-500 text-sm tracking-wide">
                                    <li>▸ Rupture des schémas répétitifs</li>
                                    <li>▸ Gestion des conflits relationnels</li>
                                    <li>▸ Épanouissement personnel contextualisé</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 bg-stone-50 p-8 border border-stone-200">
                                <p className="text-sm text-stone-500 italic">
                                    "Décoder ses relations pour mieux se réaliser"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-24 border-t border-stone-200 pt-16">
                    <p className="text-lg uppercase tracking-wider text-stone-900 mb-8">
                        Vous souhaitez engager une démarche thérapeutique ?
                    </p>
                    <a
                        href={`#${sectionIds.booking}`}
                        className="inline-block border border-stone-800 px-12 py-3 
                         hover:bg-stone-800 text-stone-900 hover:text-stone-50 
                         uppercase tracking-wide transition-all duration-300 
                         text-lg font-light"
                    >
                        Prendre rendez-vous
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bio;
