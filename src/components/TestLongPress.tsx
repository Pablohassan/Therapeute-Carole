import React from 'react';
import { useLongPress } from '../hooks/useLongPress';

const TestLongPress: React.FC = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const longPressProps = useLongPress({
        onLongPress: () => setIsHovered(true),
        onClick: () => {
            setIsHovered(false);
            console.log('Clicked!');
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Test Long Press Hover</h2>
                    <p className="text-gray-600 mb-8">
                        Try long-pressing the button on mobile or hovering on desktop
                    </p>
                </div>

                <div
                    {...longPressProps}
                    className={`
                        p-6 rounded-lg shadow-md transition-all duration-300
                        ${isHovered
                            ? 'bg-blue-500 text-white scale-105 shadow-xl'
                            : 'bg-white text-gray-800'
                        }
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="text-center">
                        <p className="text-lg font-medium mb-2">
                            {isHovered ? 'Hovered/Pressed!' : 'Press or Hover me'}
                        </p>
                        <p className="text-sm opacity-75">
                            {isHovered
                                ? 'Release to see the effect disappear'
                                : 'Long press on mobile or hover on desktop'
                            }
                        </p>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Current State:</h3>
                    <pre className="text-sm bg-gray-100 p-2 rounded">
                        {JSON.stringify({ isHovered }, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default TestLongPress; 