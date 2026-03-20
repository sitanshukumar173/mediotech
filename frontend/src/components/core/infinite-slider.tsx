import { Children, type ReactNode, useEffect, useId, useMemo, useRef } from 'react';

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const sliderId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const trackRef = useRef<HTMLDivElement | null>(null);
  const distanceRef = useRef(0);
  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);
  const currentPositionRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);

  const childArray = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    currentSpeedRef.current = speed;
    targetSpeedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    if (!trackRef.current) return;

    const isHorizontal = direction === 'horizontal';

    const measure = () => {
      if (!trackRef.current) return;
      const firstSet = trackRef.current.querySelector('[data-slider-set="original"]') as HTMLElement | null;
      if (!firstSet) return;
      const rect = firstSet.getBoundingClientRect();
      const nextDistance = (isHorizontal ? rect.width : rect.height) + gap;
      if (!nextDistance) return;

      const previousDistance = distanceRef.current;
      distanceRef.current = nextDistance;

      if (reverse && previousDistance === 0) {
        currentPositionRef.current = -nextDistance;
      }
      if (reverse && currentPositionRef.current > 0) {
        currentPositionRef.current = -nextDistance;
      }
      if (reverse && currentPositionRef.current < -nextDistance) {
        currentPositionRef.current = -nextDistance;
      }
      if (!reverse && currentPositionRef.current <= -nextDistance) {
        currentPositionRef.current = 0;
      }
    };

    const applyTransform = (position: number) => {
      if (!trackRef.current) return;
      trackRef.current.style.transform = isHorizontal
        ? `translate3d(${position}px, 0, 0)`
        : `translate3d(0, ${position}px, 0)`;
    };

    const animate = (time: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = time;
      }

      const delta = Math.min((time - lastFrameRef.current) / 1000, 0.05);
      lastFrameRef.current = time;

      const desired = Math.max(targetSpeedRef.current, 0);
      const current = currentSpeedRef.current;
      currentSpeedRef.current = current + (desired - current) * Math.min(1, delta * 7);

      const distance = distanceRef.current;
      if (distance > 0) {
        const directionSign = reverse ? 1 : -1;
        currentPositionRef.current += directionSign * currentSpeedRef.current * delta;

        if (!reverse && currentPositionRef.current <= -distance) {
          currentPositionRef.current += distance;
        }
        if (reverse && currentPositionRef.current >= 0) {
          currentPositionRef.current -= distance;
        }

        applyTransform(currentPositionRef.current);
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    measure();
    applyTransform(currentPositionRef.current);

    const observer = new ResizeObserver(() => {
      measure();
      applyTransform(currentPositionRef.current);
    });

    observer.observe(trackRef.current);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
      lastFrameRef.current = null;
    };
  }, [direction, reverse, childArray, gap]);

  const isHorizontal = direction === 'horizontal';
  const trackClass = `infinite-slider-track-${sliderId}`;
  const setClass = `infinite-slider-set-${sliderId}`;

  return (
    <div
      className={`overflow-hidden ${className || ''}`.trim()}
      onMouseEnter={() => {
        targetSpeedRef.current = speedOnHover ?? speed;
      }}
      onMouseLeave={() => {
        targetSpeedRef.current = speed;
      }}
    >
      <style>{`
        .${trackClass} {
          gap: ${gap}px;
          will-change: transform;
        }
        .${setClass} {
          gap: ${gap}px;
        }
      `}</style>

      <div
        ref={trackRef}
        className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} w-max ${trackClass}`}
      >
        <div
          data-slider-set="original"
          className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${setClass}`}
        >
          {childArray}
        </div>

        <div
          data-slider-set="clone"
          className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${setClass}`}
          aria-hidden
        >
          {childArray}
        </div>
      </div>
    </div>
  );
}
