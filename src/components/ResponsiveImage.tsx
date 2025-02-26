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
    sizes = '(max-width: 768px) 100vw, 50vw',
    priority = false,
}) => {
    // Extract file extension and path
    const extension = src.split('.').pop()?.toLowerCase();
    const basePath = src.substring(0, src.lastIndexOf('.'));

    // Only create WebP source if original isn't already WebP
    const hasWebPAlternative = extension !== 'webp';

    return (
        <picture>
            {hasWebPAlternative && (
                <>
                    <source
                        srcSet={`${basePath}.webp`}
                        type="image/webp"
                        sizes={sizes}
                    />
                    <source
                        srcSet={src}
                        type={`image/${extension === 'jpg' ? 'jpeg' : extension}`}
                        sizes={sizes}
                    />
                </>
            )}
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