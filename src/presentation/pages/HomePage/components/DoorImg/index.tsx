import React, { FC } from 'react';
import { motion } from 'framer-motion';
import './styles.sass';

interface DoorImgProps {
  src: string;
  alt: string;
  delay?: number;
}

const DoorImg: FC<DoorImgProps> = ({ src, alt, delay = 0 }) => (
  <motion.img
    src={src}
    alt={alt}
    className="door-img"
    transition={{
      delay: delay * 0.2,
      duration: 0.7,
    }}
    initial={{
      transform: 'perspective(150px) rotateY(70deg)',
      transformOrigin: 'left',
    } as any}
    whileInView={{
      transform: 'perspective(150px) rotateY(0deg)',
      transformOrigin: 'left',
    }}
    viewport={{ once: true }}
  />
);

export default DoorImg;
