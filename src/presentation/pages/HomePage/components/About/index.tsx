import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Typo } from '../../../../ui-kit';
import about1 from './assets/about1.webp';
import about2 from './assets/about2.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        We specialize in supply, installation and maintenance of architectural doors, hardware and automatic door operators for residential, commercial, institutional and detention construction industries. Being proud member of Doors and Hardware Institute, Hallmark Hardware offers advanced technical experience in doors and hardware, as well as extended knowledge of construction industry. Founded in 2019, we has been grown dramatically and are now serving a wide variety of projects across Canada.
        </Typo.P>
        <a className="about__link--block" href="http://discovery.ariba.com/profile/AN11181747435" target="__blank"> 
          <img className="about__img--size" src="https://service.ariba.com/an/p/Ariba/badge_245x100.jpg" alt="View Hallmark Hardware Corporation profile on Ariba Discovery" />
        </a>
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
        <LazyLoadImage src={about1}
          alt="About us"
          className="about__img1"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        />
        <LazyLoadImage src={about2}
          alt="About us"
          className="about__img2"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        />
        {/* <img
          src={about1}
          alt="About us"
          className="about__img1"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        /> */}
        {/* <img
          src={about2}
          alt="About us"
          className="about__img2"
          style={{
            transform: 'perspective(var(--perspective)) rotateY(var(--rotateY))',
            transformOrigin: 'left', 
          }}
        /> */}
      </motion.div>
    </section>
  );
};

export default About;
