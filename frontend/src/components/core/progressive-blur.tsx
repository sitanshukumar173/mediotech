import { useId } from 'react';

type ProgressiveBlurProps = {
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
};

export function ProgressiveBlur({
  className,
  direction = 'left',
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const blurId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const blurClass = `progressive-blur-${blurId}`;

  const masks: Record<NonNullable<ProgressiveBlurProps['direction']>, string> = {
    left: 'linear-gradient(to right, black 0%, transparent 100%)',
    right: 'linear-gradient(to left, black 0%, transparent 100%)',
    top: 'linear-gradient(to bottom, black 0%, transparent 100%)',
    bottom: 'linear-gradient(to top, black 0%, transparent 100%)',
  };

  return (
    <>
      <style>{`
        .${blurClass} {
          backdrop-filter: blur(${Math.max(blurIntensity, 0) * 10}px);
          -webkit-backdrop-filter: blur(${Math.max(blurIntensity, 0) * 10}px);
          mask-image: ${masks[direction]};
          -webkit-mask-image: ${masks[direction]};
        }
      `}</style>
      <div aria-hidden className={`${className || ''} ${blurClass}`.trim()} />
    </>
  );
}
