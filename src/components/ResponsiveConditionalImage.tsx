import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

interface ResponsiveConditionalImageProps {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    sizes?: string;
    priority?: boolean;
    breakpoint?: number;
    style?: React.CSSProperties;
}

/**
 * A responsive image component that conditionally renders different images based on screen size
 * Optimized for performance with lazy loading and proper sizing
 */
const ResponsiveConditionalImage: React.FC<ResponsiveConditionalImageProps> = ({
    desktopSrc,
    mobileSrc,
    alt,
    className = '',
    width = 800,
    height = 600,
    sizes = '(max-width: 768px) 100vw, 50vw',
    priority = false,
    breakpoint = 768,
    style,
}) => {
    const isMobile = useIsMobile(breakpoint);
    const imageSrc = isMobile ? mobileSrc : desktopSrc;

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            style={{
                maxWidth: '100%',
                height: 'auto',
                ...style
            }}
            // Add srcSet for responsive images if available
            srcSet={`${imageSrc} ${width}w`}
            sizes={sizes}
        />
    );
};

export default ResponsiveConditionalImage; 