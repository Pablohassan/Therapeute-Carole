import { useCallback, useRef, useState } from "react";

interface UseLongPressProps {
  onLongPress: () => void;
  onClick?: () => void;
  ms?: number;
}

export function useLongPress({
  onLongPress,
  onClick,
  ms = 500,
}: UseLongPressProps) {
  const [startLongPress, setStartLongPress] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const start = useCallback(() => {
    setStartLongPress(true);
    timerRef.current = setTimeout(() => {
      onLongPress();
      setStartLongPress(false);
    }, ms);
  }, [onLongPress, ms]);

  const stop = useCallback(() => {
    setStartLongPress(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      if (onClick) onClick();
    }
  }, [onClick]);

  return {
    onMouseDown: start,
    onTouchStart: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchEnd: stop,
    isLongPress: startLongPress,
  };
}
