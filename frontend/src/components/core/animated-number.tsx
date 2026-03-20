import { useEffect, useRef, useState } from 'react';

type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: {
    duration?: number;
    bounce?: number;
  };
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValueRef = useRef(0);

  useEffect(() => {
    const startValue = previousValueRef.current;
    const endValue = value;
    const duration = Math.max(springOptions?.duration ?? 1200, 100);
    const startTime = performance.now();
    let rafId = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const next = Math.round(startValue + (endValue - startValue) * eased);
      setDisplayValue(next);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        previousValueRef.current = endValue;
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [value, springOptions?.duration]);

  return <span className={className}>{displayValue}</span>;
}
