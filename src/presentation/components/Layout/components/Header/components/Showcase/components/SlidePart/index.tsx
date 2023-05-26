import React, {FC} from 'react';
import {motion} from 'framer-motion';

interface SlidePartProps {
  index: number;
  delay: number;
  colWidth: number;
  picture: string;
  display?: string;
  isWrapped?: boolean;
  onAnimationComplete?: () => void;
}

const SlidePart: FC<SlidePartProps> = ({
  index,
  delay,
  colWidth,
  picture,
  display = 'block',
  isWrapped = false,
  onAnimationComplete,
}) => {
  return (
    <motion.div
      className="showcase__animation-col"
      style={{
        width: `${isWrapped ? 100 : 25}%`, // TODO: move to CSS
        left: `${isWrapped ? 'auto' : index * 25}%`,
        display,
      }}
      initial={{transform: (isWrapped ? `translateY(${100 * (index % 2 === 0 ? 1 : -1)}%)` : 'translateY(0px)')}}
      animate={{transform: (isWrapped ? 'translateY(8.4%)' : `translateY(${50 * (index % 2 === 0 ? 1 : -1)}px)`)}}
      transition={{
        delay: delay,
        duration: (isWrapped ? 1 : 0.7),
      }}
      onAnimationComplete={index === 3 ? onAnimationComplete : undefined}
    >
      <div
        className="showcase__animation-col-picture"
        style={{
          background: `url(${picture}) no-repeat`,
          backgroundPositionX: `calc(50% - ${index * colWidth}px)`,
          backgroundSize: 'cover',
        }}
      />
    </motion.div>
  );
};

export default SlidePart;
