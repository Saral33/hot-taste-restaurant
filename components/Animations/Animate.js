import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Animate = ({
  children,
  type,
  delay,
  duration,
  className,
  initx,
  finalx,
  inity,
  finaly,
  style,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const leftRightVariants = {
    hidden: { opacity: 0, x: initx },
    visible: {
      opacity: 1,
      x: finalx,
      transition: {
        delay: 0.4,
        type: 'spring',
        duration: 1.5,
        bounce: 0.5,
      },
    },
  };

  const fadeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        delay,
        duration,
      },
    },
  };
  return (
    <motion.div
      style={{ ...style }}
      ref={ref}
      variants={type === 'left-right' ? leftRightVariants : fadeVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
