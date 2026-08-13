import { Variants, Transition } from 'framer-motion';

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 280,
  damping: 26,
  mass: 0.8,
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const scaleHoverVariant: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.025, transition: { duration: 0.2, ease: 'easeOut' } },
  tap: { scale: 0.97 },
};

export const cardHoverVariant: Variants = {
  initial: { y: 0, borderColor: 'rgba(255, 255, 255, 0.08)' },
  hover: {
    y: -4,
    borderColor: 'rgba(16, 185, 129, 0.35)',
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};
