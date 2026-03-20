type MeteorsProps = {
  number?: number;
  className?: string;
};

const METEOR_STYLES = [
  'left-[4%] top-[-120px] w-[90px] [animation:meteor-fall_5.2s_linear_infinite] [animation-delay:0.3s]',
  'left-[10%] top-[-150px] w-[120px] [animation:meteor-fall_6.1s_linear_infinite] [animation-delay:1.4s]',
  'left-[16%] top-[-110px] w-[140px] [animation:meteor-fall_6.4s_linear_infinite] [animation-delay:2.1s]',
  'left-[22%] top-[-145px] w-[110px] [animation:meteor-fall_5.0s_linear_infinite] [animation-delay:0.8s]',
  'left-[28%] top-[-100px] w-[150px] [animation:meteor-fall_6.7s_linear_infinite] [animation-delay:2.9s]',
  'left-[34%] top-[-130px] w-[100px] [animation:meteor-fall_5.3s_linear_infinite] [animation-delay:0.6s]',
  'left-[40%] top-[-160px] w-[130px] [animation:meteor-fall_7.0s_linear_infinite] [animation-delay:2.4s]',
  'left-[46%] top-[-120px] w-[115px] [animation:meteor-fall_5.8s_linear_infinite] [animation-delay:3.5s]',
  'left-[52%] top-[-152px] w-[145px] [animation:meteor-fall_6.8s_linear_infinite] [animation-delay:1.2s]',
  'left-[58%] top-[-108px] w-[105px] [animation:meteor-fall_4.9s_linear_infinite] [animation-delay:3.1s]',
  'left-[64%] top-[-140px] w-[125px] [animation:meteor-fall_6.0s_linear_infinite] [animation-delay:0.2s]',
  'left-[70%] top-[-102px] w-[155px] [animation:meteor-fall_6.5s_linear_infinite] [animation-delay:2.2s]',
  'left-[76%] top-[-132px] w-[95px] [animation:meteor-fall_5.6s_linear_infinite] [animation-delay:1.0s]',
  'left-[82%] top-[-162px] w-[135px] [animation:meteor-fall_7.2s_linear_infinite] [animation-delay:3.3s]',
  'left-[88%] top-[-118px] w-[118px] [animation:meteor-fall_5.7s_linear_infinite] [animation-delay:2.7s]',
  'left-[8%] top-[-168px] w-[108px] [animation:meteor-fall_6.6s_linear_infinite] [animation-delay:4.0s]',
  'left-[14%] top-[-96px] w-[146px] [animation:meteor-fall_5.9s_linear_infinite] [animation-delay:4.6s]',
  'left-[20%] top-[-156px] w-[102px] [animation:meteor-fall_4.8s_linear_infinite] [animation-delay:5.8s]',
  'left-[26%] top-[-126px] w-[132px] [animation:meteor-fall_6.9s_linear_infinite] [animation-delay:5.1s]',
  'left-[32%] top-[-164px] w-[112px] [animation:meteor-fall_5.2s_linear_infinite] [animation-delay:6.3s]',
  'left-[38%] top-[-104px] w-[148px] [animation:meteor-fall_7.1s_linear_infinite] [animation-delay:6.8s]',
  'left-[44%] top-[-138px] w-[122px] [animation:meteor-fall_6.0s_linear_infinite] [animation-delay:5.4s]',
  'left-[50%] top-[-94px] w-[92px] [animation:meteor-fall_4.7s_linear_infinite] [animation-delay:7.1s]',
  'left-[56%] top-[-158px] w-[138px] [animation:meteor-fall_6.2s_linear_infinite] [animation-delay:6.0s]',
  'left-[62%] top-[-114px] w-[116px] [animation:meteor-fall_5.6s_linear_infinite] [animation-delay:4.5s]',
  'left-[68%] top-[-150px] w-[152px] [animation:meteor-fall_6.7s_linear_infinite] [animation-delay:7.4s]',
  'left-[74%] top-[-98px] w-[98px] [animation:meteor-fall_5.0s_linear_infinite] [animation-delay:5.0s]',
  'left-[80%] top-[-142px] w-[128px] [animation:meteor-fall_6.1s_linear_infinite] [animation-delay:6.5s]',
  'left-[86%] top-[-116px] w-[142px] [animation:meteor-fall_6.4s_linear_infinite] [animation-delay:7.0s]',
  'left-[92%] top-[-166px] w-[106px] [animation:meteor-fall_5.4s_linear_infinite] [animation-delay:4.2s]',
] as const;

export function Meteors({ number = 30, className = '' }: MeteorsProps) {
  const meteorCount = Math.max(1, Math.min(number, METEOR_STYLES.length));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {METEOR_STYLES.slice(0, meteorCount).map((meteorClass, index) => (
        <span
          key={index}
          className={`absolute block h-[2px] rotate-[35deg] rounded-full bg-gradient-to-l from-white/95 via-white/70 to-white/0 opacity-85 shadow-[0_0_10px_rgba(255,255,255,0.65)] will-change-transform ${meteorClass}`}
        />
      ))}
    </div>
  );
}
