import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

interface ConditionalImageProps {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    breakpoint?: number;
    style?: React.CSSProperties;
}

/**
 * Component that renders different images based on screen size
 * Uses standard img tag for optimal compatibility
 */
const ConditionalImage: React.FC<ConditionalImageProps> = ({
    desktopSrc,
    mobileSrc,
    alt,
    className = '',
    width,
    height,
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
            style={style}
        />
    );
};

/**
 * Component that renders different images based on screen size
 * Uses standard img tag for cases where Next.js Image isn't suitable
 */
export const ConditionalImgTag: React.FC<Omit<ConditionalImageProps, 'sizes' | 'loading'> & { style?: React.CSSProperties }> = ({
    desktopSrc,
    mobileSrc,
    alt,
    className = '',
    width,
    height,
    priority,
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
            style={style}
        />
    );
};

export default ConditionalImage; 