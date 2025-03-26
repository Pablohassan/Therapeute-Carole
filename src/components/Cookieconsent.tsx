// src/components/CookieConsent.tsx
import React, { useState, useEffect } from "react";

// Add type declaration for Google Tag Manager
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      config: {
        [key: string]: string | boolean;
      }
    ) => void;
  }
}

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

    // Enable Google Analytics and Calendly cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);

    // Disable Google Analytics and Calendly cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-2 bg-white border-t border-gray-600/90 shadow-lg">
          <div className="mx-auto max-w-6xl px-2 py-1">
            <div className="flex flex-row items-center justify-between gap-2">
              <p className="text-xs text-gray-600 line-clamp-2 flex-1">
                Ce site utilise des cookies pour améliorer votre expérience.
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-1 text-blue-600 hover:underline font-medium inline-block"
                >
                  En savoir plus
                </button>
              </p>

              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-3 py-1 text-sm bg-stone-200 border-1 border-stone-300/90 text-gray-800 rounded-sm hover:bg-gray-300"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-3 py-1 text-sm bg-green-600 border-1 border-green-500/90 text-white rounded-sm hover:bg-green-700"
                >
                  Accepter
                </button>
              </div>
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
                  Cookies tiers utilisés
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Google Analytics :</span> Pour analyser l'utilisation du site et améliorer son contenu. Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.
                  </li>
                  <li>
                    <span className="font-medium">Calendly :</span> Notre système de prise de rendez-vous utilise Calendly, qui possède sa propre politique de cookies. Lorsque vous utilisez le widget Calendly, celui-ci vous demandera séparément votre consentement pour ses propres cookies.
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Finalités des cookies
                </h4>
                <p>
                  Les cookies tiers sont utilisés exclusivement pour :
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Analyser l'audience du site pour améliorer son contenu</li>
                  <li>Faciliter la prise de rendez-vous en ligne via Calendly (qui a sa propre gestion des cookies)</li>
                  <li>Aucune donnée personnelle n'est stockée sur notre serveur</li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Vos droits
                </h4>
                <p>
                  Conformément au RGPD, vous pouvez accepter ou refuser ces cookies. Votre choix sera enregistré pour une durée de 6 mois. Notez que le refus des cookies peut limiter certaines fonctionnalités, notamment pour la prise de rendez-vous.
                </p>
              </section>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;