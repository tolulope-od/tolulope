import * as React from 'react';
import {
  any, bool, number,
  string, node,
} from 'prop-types';

/*
*  framer-motion and useInView here are
*  used to animate the sections
*  when we reach them in the viewport
*/

import {
  motion,
} from 'framer-motion';
import useInView from '../../hooks/useInView';

const MotionDiv = motion.div;

export default function FadeInUp({ children }) {
  const [ref, inView] = useInView(30);

  const variants = {
    hidden: { opacity: 0, y: '40%' },
    show: {
      y: 0,
      opacity: 1,
      transitionEnd: {
        y: inView && 0,
      },
    },
  };
  const transition = {
    type: 'spring', stiffness: 50, mass: 0.25, damping: 9,
  };

  return (
      <MotionDiv
        ref={ref} initial={'hidden'}
        animate={inView ? 'show' : 'hidden'}
        exit="hidden"
        variants={variants} transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        {children}
      </MotionDiv>
  );
}

FadeInUp.propTypes = {
  direction: string,
  offset: number,
  children: any,
};

export const FadeInUpReveal = ({ disabled, children }) => {
  if (disabled) {
    return <>{children}</>;
  }

  // eslint-disable-next-line no-param-reassign
  if (!Array.isArray(children)) children = [children];

  const childrenWithAnimation = children.map((child, i) => (
      <FadeInUp key={i}>
        {child}
      </FadeInUp>
  ));
  return <>{childrenWithAnimation}</>;
};

FadeInUpReveal.propTypes = {
  disabled: bool,
  children: node,
};
