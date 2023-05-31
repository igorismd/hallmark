import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './styles.sass';

interface DoorImgProps {
  src: string;
  alt: string;
  delay?: number;
}

const DoorImg: FC<DoorImgProps> = ({ src, alt, delay = 0 }) => (
  <motion.div
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
  >
    <LazyLoadImage
      src={src}
      alt={alt}
    />
  </motion.div>
);

export default DoorImg;


 
