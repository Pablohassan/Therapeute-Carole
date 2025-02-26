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
    structuredData?: Record<string, unknown>;
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
}) => {
    const siteName = 'Carole Lagardère - Thérapeute Familiale';
    const fullTitle = `${title} | ${siteName}`;
    const defaultImage = '/images/og-default.jpg'; // Create a default OG image

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage || defaultImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
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
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO; 