import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Typo } from '../../../../ui-kit';
import about1 from './assets/about1.webp';
import about2 from './assets/about2.webp';
import './styles.sass';

const About: FC = () => {
  const transition = { duration: 0.7 };

  return (
    <section className="about">
      <motion.div
        style={{ originY: 0 }}
        transition={transition}
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
        <Typo.H1 className="about__title">About us</Typo.H1>
        <Typo.P className="about__txt">
          We specialize in supply, installation and maintenance of architectural doors,
          hardware and automatic door operators for residential, commercial, institutional
          and detention construction industries in Canada. Being proud member of Doors
          and Hardware Institute, Hallmark Hardware offers advanced technical experience
          in doors and hardware, as well as extended knowledge of construction industry.
        </Typo.P>
      </motion.div>
      <motion.div
        className="about__img-block"
        transition={transition}
        initial={{
          '--perspective': '150px',
          '--rotateY': '70deg',
        } as any}
        whileInView={{
          '--perspective': '150px',
          '--rotateY': '0deg',
        } as any}
        viewport={{ once: true }}
      >
        <img
          src={about1}
          alt="About us"
          className="about__img1"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        />
        <img
          src={about2}
          alt="About us"
          className="about__img2"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        />
      </motion.div>
    </section>
  );
};

export default About;
