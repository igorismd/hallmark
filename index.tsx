import { motion, useInView } from 'framer-motion';
import React, { FC, useEffect, useRef, useState} from 'react';
import { Typo } from '../../../../ui-kit';
import data from './data';
import './styles.sass';

const BenefitsGallery: FC = () => {
  const ref = useRef(null);
  const [activeImage, setActiveImage] = useState<number>(data[0].id);
  const [classNameContainer, setClassNameContainer] = useState('benefits-gallery__active-image-container');
  const [imageMainClass, setImageMainClass] = useState('benefits-gallery__image-main');
  const [imageClass, setImageClass] = useState('benefits-gallery__image');
  const [timeoutId, setTimeoutId] = useState<number|undefined>(undefined);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      return;
    }

    window.clearTimeout(timeoutId);
    setActiveImage(data[0].id);
    setImageMainClass('benefits-gallery__image-main');
    setImageClass('benefits-gallery__image');
    setOrderedMain(orderMain(data[0].id));
    setImageMainClass('benefits-gallery__image-main');
    setOrderedData(orderData(data[0].id));
    setTimeoutId(undefined);
  }, [isInView, timeoutId]);

  useEffect(() => {
    const currentTimeoutlId = window.setTimeout(() => {
      const nextImage = activeImage % data.length + 1;

      doChangeImage(nextImage);
    }, 2500);

    setTimeoutId(currentTimeoutlId);

    return () => window.clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, activeImage]);

  const orderData = (activeImage: number): typeof data => {
    const result = [];

    for (let i = activeImage, j = 0; j < data.length; j++) {
      result.push(data[i % data.length]);

      i++;
    }

    return result;
  };

  const [orderedData, setOrderedData] = useState<typeof data>(orderData(data[0].id));

  const orderMain = (activeImage: number) => {
    const result = [];

    for (let i = activeImage, j = 0; j < data.length; j++) {
      result.push(data[(i - 1) % data.length]);

      i++;
    }

    return result;
  };

  const [orderedMain, setOrderedMain] = useState<typeof data>(orderMain(data[0].id));

  const doChangeImage = (id: number) => {
    setActiveImage(id);
    setImageMainClass('benefits-gallery__image-main benefits-gallery__image-main_move');
    setImageClass('benefits-gallery__image benefits-gallery__image_move');
    window.setTimeout(() => {
      setOrderedMain(orderMain(id));
      setImageMainClass('benefits-gallery__image-main');
      setOrderedData(orderData(id));
      setImageClass('benefits-gallery__image');
    }, 750);
  };

  const onCompleteDoor = () => {
    setClassNameContainer('benefits-gallery__active-image-container benefits-gallery__active-image-container_completed');
    window.clearTimeout(timeoutId);
    setTimeoutId(undefined);

    const currentTimeoutlId = window.setTimeout(() => {
      const nextImage = activeImage < data.length ? activeImage + 1 : 1;
      
      doChangeImage(nextImage);
    }, 1800);

    setTimeoutId(currentTimeoutlId);
  };
  
  const onStartDoor = () => {
    window.clearTimeout(timeoutId);
    setTimeoutId(undefined);
    setClassNameContainer('benefits-gallery__active-image-container');
  };

  return (
    <section className="benefits-gallery banner" ref={ref}>
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
        <Typo.H1 className="benefits-gallery__title">Our benefits</Typo.H1>
        <ol className="benefits-gallery__switcher">
          {data.map(({ id, name }) => {
            let className = 'benefits-gallery__switcher-item';

            if (id === activeImage && isInView) {
              className = 'benefits-gallery__switcher-item benefits-gallery__switcher-item_active';
            }

            return (
              <li
                key={id}
                className={className}
              >{name}</li>
            );
          })}
        </ol>
      </motion.div>
      <div className="benefits-gallery__images">
        <div className="benefits-gallery__images-inner">
          <motion.div
            className={classNameContainer}
            transition={{ duration: 0.7 }}
            initial={{
              '--perspective': '150px',
              '--rotateY': '70deg',
            } as any}
            whileInView={{
              '--perspective': '150px',
              '--rotateY': '0deg',
            } as any}
            onAnimationStart={onStartDoor}
            onAnimationComplete={onCompleteDoor}
            viewport={{ once: true }}
          >
            {orderedMain.map(({ id, name, image }) => {
              return (
                <img
                  key={id}
                  src={image}
                  alt={name}
                  className={imageMainClass}
                />
              );
            })}
          </motion.div>
          <div className="benefits-gallery__image-small">
            {orderedData.map(({ id, name, image }) => {
              return (
                <img
                  key={id}
                  src={image}
                  alt={name}
                  className={imageClass}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGallery;
