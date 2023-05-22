import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TitleAnimation: FC = () => {
  const controls = useAnimationControls();
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    controls.start({ transform: `translateY(-${100 * counter}%)` });

    window.setTimeout(() => setCounter(counter + 1), 3000);
  }, [counter, controls]);

  return (
    <div className="showcase__title">
      <div>Doors and</div>
      <div>hardware for</div>
      <div className="showcase__title-animation">
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          residential
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          commercial
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          institutional
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          detention
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          industrial
        </motion.div>
        <motion.div
          animate={controls}
          transition={{ duration: 1 }}
        >
          residential
        </motion.div>
      </div>
      <div>construction</div>
      <div>industries</div>
    </div>
  );
};

export default TitleAnimation;
