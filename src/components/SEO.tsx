import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    articlePublishedTime?: string;
    articleModifiedTime?: string;
    keywords?: string[];
    structuredData?: Record<string, unknown> | Record<string, unknown>[];
    lang?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    articlePublishedTime,
    articleModifiedTime,
    keywords = [],
    structuredData,
    lang = 'fr',
    author = 'Carole Lagardère',
}) => {
    const siteName = 'Carole Lagardère - Thérapeute Familiale';
    const fullTitle = `${title} | ${siteName}`;
    const defaultImage = '/carole-lagardere-therapeute-familiale.webp'; // Updated to use an existing image
    const domain = 'https://www.carole-lagardere.fr';
    const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${domain}${canonicalUrl}`) : undefined;
    const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`) : `${domain}${defaultImage}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang={lang} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Canonical URL */}
            {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
            {ogType === 'article' && articlePublishedTime && (
                <meta property="article:published_time" content={articlePublishedTime} />
            )}
            {ogType === 'article' && articleModifiedTime && (
                <meta property="article:modified_time" content={articleModifiedTime} />
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            <meta name="twitter:image:alt" content={title} />
            {fullCanonicalUrl && <meta name="twitter:url" content={fullCanonicalUrl} />}

            {/* Additional Meta Tags for SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="theme-color" content="#25926C" />

            {/* Structured Data */}
            {structuredData && Array.isArray(structuredData) ? (
                // If it's an array of structured data objects
                structuredData.map((data, index) => (
                    <script key={index} type="application/ld+json">
                        {JSON.stringify(data)}
                    </script>
                ))
            ) : structuredData ? (
                // If it's a single structured data object
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            ) : (
                // Default Local Business Structured Data if none provided
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Carole Lagardère - Thérapeute Familiale",
                        "image": fullOgImage,
                        "url": domain,
                        "telephone": "+33 7 78 24 09 60",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "184 cours du Maréchal Gallieni",
                            "addressLocality": "Talence",
                            "postalCode": "33400",
                            "addressCountry": "FR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 44.8078,
                            "longitude": -0.5917
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Tuesday",
                                "opens": "08:30",
                                "closes": "13:30"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Wednesday",
                                "opens": "08:30",
                                "closes": "19:30"
                            }
                        ],
                        "priceRange": "€€",
                        "description": description
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO; 