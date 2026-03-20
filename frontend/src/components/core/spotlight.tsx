type SpotlightProps = {
  className?: string;
  fill?: 'white';
};

export function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
  const fillClass =
    fill === 'white'
      ? 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0.10)_44%,rgba(255,255,255,0.03)_58%,transparent_74%)]'
      : 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.26)_24%,rgba(255,255,255,0.10)_44%,rgba(255,255,255,0.03)_58%,transparent_74%)]';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute h-[32rem] w-[32rem] rounded-full blur-3xl [animation:spotlight-float_9s_ease-in-out_infinite_alternate] ${fillClass} ${className}`}
    />
  );
}
