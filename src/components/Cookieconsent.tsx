// src/components/CookieConsent.tsx
import React, { useState, useEffect } from "react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  // const handleDecline = () => {
  //   localStorage.setItem("cookieConsent", "rejected");
  //   setIsVisible(false);
  // };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-600/90 ">
          <div className="mx-auto max-w-6xl px-4 py-3 ">
            <div className="flex flex-col gap-4  md:flex-row items-center justify-between">
              <p className="text-sm text-justify text-gray-600 mb-2 md:mb-0 md:mr-6">
                Ce site utilise des cookies strictement nécessaires au bon fonctionnement
                de son système de rendez-vous. Ils assurent la sécurité des transactions
                et la mémorisation de vos préférences de réservation.
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-1 text-blue-600 hover:underline font-medium"
                >
                  Consulter notre politique de confidentialité
                </button>
              </p>

              <button
                onClick={handleAccept}
                className="min-w-48 px-4 py-3 text-sm bg-green-600 border border-green-500/80 text-white rounded-sm hover:bg-green-700 shadow-sm"
              >
                Accepter les cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white shadow-xl max-w-2xl w-full p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Politique de gestion des cookies
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <section>
                <h4 className="font-semibold text-gray-700 mb-2">
                  1. Cookies techniques obligatoires
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Session utilisateur :</span>
                    Maintien de votre connexion sécurisée pendant la réservation
                    (durée : 24 heures)
                  </li>
                  <li>
                    <span className="font-medium">Préférences calendrier :</span>
                    Mémorisation de votre fuseau horaire et format de date
                    (durée : 7 jours)
                  </li>
                  <li>
                    <span className="font-medium">Token CSRF :</span>
                    Protection contre les attaques intersites lors de la soumission
                    de formulaires (durée : session navigateur)
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-gray-700 mb-2">
                  2. Finalités des données
                </h4>
                <p>
                  Les données collectées via ces cookies techniques sont exclusivement
                  utilisées pour :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Garantir la sécurité des transactions en ligne</li>
                  <li>Optimiser les fonctionnalités du calendrier de rendez-vous</li>
                  <li>Prévenir les utilisations frauduleuses du service</li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-gray-700 mb-2">
                  3. Gestion des préférences
                </h4>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de modification
                  et de suppression des données via notre
                  <a
                    href="/privacy"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    portail de gestion de la vie privée
                  </a>.
                </p>
              </section>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
              >
                Fermer cet avertissement
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;