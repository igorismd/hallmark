import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentAppearProps {
  children: ReactNode;
}

const ContentAppear: FC<ContentAppearProps> = ({ children }) => (
  <motion.div
    style={{ originY: 0 }}
    transition={{ duration: 0.7 }}
    initial={{
      opacity: 0,
      transform: 'scaleY(1.2)',
    }}
    whileInView={{
      opacity: 1,
      transform: 'scaleY(1)',
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default ContentAppear;
