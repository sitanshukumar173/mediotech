import { motion } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

type TextEffectProps = {
  children: string;
  per?: 'word' | 'char';
  as?: ElementType;
  preset?: 'slide';
  className?: string;
};

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  preset = 'slide',
  className,
}: TextEffectProps) {
  const Component = as;
  const tokens = per === 'char' ? children.split('') : children.split(' ');

  const getToken = (token: string): ReactNode => {
    if (per === 'char') {
      return token === ' ' ? '\u00A0' : token;
    }
    return token;
  };

  return (
    <Component className={className}>
      {tokens.map((token, index) => (
        <motion.span
          key={`${token}-${index}`}
          initial={preset === 'slide' ? { opacity: 0, y: 18 } : { opacity: 0 }}
          whileInView={preset === 'slide' ? { opacity: 1, y: 0 } : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.35, delay: index * 0.035 }}
          className="inline-block"
        >
          {getToken(token)}
          {per === 'word' && index < tokens.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  );
}
