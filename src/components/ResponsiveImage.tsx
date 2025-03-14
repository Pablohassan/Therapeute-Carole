import React from 'react';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    sizes?: string;
    priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    src,
    alt,
    className = '',
    width = 800,
    height = 600,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // sizes = '(max-width: 768px) 100vw, 50vw',
    priority = false,
}) => {
    // Simplified approach - directly use the provided image
    return (
        <picture>
            <img
                src={src}
                alt={alt}
                className={`${className} transition-opacity duration-300`}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                style={{ opacity: priority ? 1 : 0 }}
            />
        </picture>
    );
};

export default ResponsiveImage; 