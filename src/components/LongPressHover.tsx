import React from 'react';
import { useLongPress } from '../hooks/useLongPress';

interface LongPressHoverProps {
    children: React.ReactNode;
    className?: string;
    hoverClassName?: string;
    onClick?: () => void;
}

export const LongPressHover: React.FC<LongPressHoverProps> = ({
    children,
    className = '',
    hoverClassName = '',
    onClick,
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const longPressProps = useLongPress({
        onLongPress: () => setIsHovered(true),
        onClick: () => {
            setIsHovered(false);
            onClick?.();
        },
    });

    return (
        <div
            {...longPressProps}
            className={`${className} ${isHovered ? hoverClassName : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}; 