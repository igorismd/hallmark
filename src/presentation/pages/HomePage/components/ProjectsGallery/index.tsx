import React, { FC, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Button, Typo } from '../../../../ui-kit';
import ContentAppear from '../../../../components/ContentAppear';
import data from './data'; 
import { ReactComponent as Arrow } from './assets/arrow.svg';
import './styles.sass';

const ProjectsGallery: FC = () => {
  const [activeImage, setActiveImage] = useState<number>(data[0].id);
  const [topTitleClass, setTopTitleClass] = useState<string>('');
  const [prevTitle, setPrevTitle] = useState<string>(data[0].title);
  const [nextTitle, setNextTitle] = useState<string>('');
  const controls = useAnimationControls();
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const onClick = (direction: 'left' | 'right') => {


    return () => {
      setDirection(direction);
      if ((direction === 'left' && activeImage === data[0].id)
        || (direction === 'right' && activeImage === data[data.length - 1].id)
      ) {
        return;
      }

      let mult = -activeImage;

      if (direction === 'left') {
        mult = -(activeImage - 2);
      }

      window.setTimeout(() => {
        controls.start({
          transform: `translateX(calc(${mult * 100}% + ${mult * 8}px))`,
        } as any);
      }, 0);
      
      const nextActive = direction === 'right' ? activeImage + 1 : activeImage - 1;

      setTopTitleClass('');
      if (nextTitle) {
        setPrevTitle(nextTitle);
      }

      setNextTitle(data[nextActive - 1].title);
      setActiveImage(nextActive);
      window.setTimeout(() => setTopTitleClass('projects-gallery__title-animation-top'), 100);
    };
  };

  return (
    <section className="projects-gallery">
      <ContentAppear>
        <Typo.H1 className="projects-gallery__title">Our ProJects</Typo.H1>
      </ContentAppear>
      <div className="projects-gallery__images">
        {data.map(({ id, image, title }, index) => {
          let className = 'projects-gallery__image-container';
          
          if (id === activeImage) {
            className += ' projects-gallery__image-container_active';
          }

          const delay =  0.1 * (direction === 'right' ? index : (data.length - index % data.length));

          return (
            <motion.div
              key={image}
              className={className}
              animate={controls}
              transition={{
                delay,
                type: 'linear',
                duration: 0.7,
              }}
              viewport={{ once: true }}
            >
              <img src={image} alt={title} />
               
            </motion.div>
          );
        })}
        <div className="projects-gallery__title-animation-container">
          <div className="projects-gallery__title-animation-first">
            <div className={topTitleClass}>
              <h2>{prevTitle}</h2>
            </div>
            <div className={topTitleClass}>
              <h2>{nextTitle}</h2>
            </div>
          </div>
          <div className="projects-gallery__title-animation-second">
            <div className={topTitleClass}>
              <h2>{prevTitle}</h2>
            </div>
            <div className={topTitleClass}>
              <h2>{nextTitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-gallery__controls">
        <div className="projects-gallery__count">0{activeImage} — 0{data.length}</div>
        <div className="projects-gallery__buttons">
          <Button theme="circle" onClick={onClick('left')}>
            <Arrow />
          </Button>
          <Button theme="circle" onClick={onClick('right')}>
            <Arrow />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
