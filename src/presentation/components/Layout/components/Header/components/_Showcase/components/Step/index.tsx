import React, {FC} from 'react';
import {motion} from 'framer-motion';
import SlidePart from '../SlidePart';

interface StepProps {
  display: string;
  colWidth: number;
  picture1: string;
  picture2: string;
  onAnimationComplete: () => void;
  delay: number;
}

const Step: FC<StepProps> = ({
  display,
  colWidth,
  picture1,
  picture2,
  onAnimationComplete = () => null,
  delay = 0,
}) => {
  return (
    <>
      {[...(function* () {
        for (let i = 0; i < 4; i++) {
          yield (
            <SlidePart
              key={`step1_${i}`}
              index={i}
              delay={delay}
              colWidth={colWidth}
              picture={picture1}
              display={display}
            />
          );
        }
      })()]}
      {[...(function* () {
        for (let i = 0; i < 4; i++) {
          yield (
            <motion.div
              key={`step2_${i}`}
              className="showcase__animation-col-wrap"
              style={{
                left: `${i * 25}%`,
                display,
              }}
              initial={{transform: `translateY(${100 * (i % 2 === 0 ? -1 : 1)}%)`}}
              animate={{transform: 'translateY(-7%)'}}
              transition={{
                delay,
                duration: 1,
              }}
            >
              <SlidePart
                index={i}
                delay={delay}
                colWidth={colWidth}
                picture={picture2}
                isWrapped={true}
                onAnimationComplete={onAnimationComplete}
              />
            </motion.div>
          );
        }
      })()]}
    </>
  );
};

export default Step;
