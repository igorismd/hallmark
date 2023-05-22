import React, {FC, useMemo, useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import data from './data';
import './styles.sass';

const Offer: FC = () => {
  const [activeItem, setActiveItem] = useState<number>(data[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const orderedData = useMemo(() => {
    const result = [];

    for (let i = activeItem, j = 0; j < data.length; j++) {
      let index = (i <= data.length ? i : i - data.length) - 1;

      result.push(data[index]);

      i++;
    }

    return result;
  }, [activeItem]);

  const onItemMoveComplete = () => {
    setActiveItem(activeItem % data.length + 1);
  };

  return (
    <section className="offer" ref={ref}>
      <div className="offer__content">
        <h2 className="offer__title">What do we offer?</h2>
        <p className="offer__text">At Hallmark Hardware, we only work with the most reputable suppliers so our customers feel confident knowing that when aligned with us, they are getting the best. Our warehouse carries a stock of doors, frames and hardware to serve needs of our clients quickly and efficiently.</p>
      </div>
      {isInView ? (
        <motion.div
          className="offer__carousel"
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          initial={{
            '--move': '0px',
          } as any}
          animate={{
            '--move': 'calc(-100% - 1px)',
          } as any}
          onUpdate={(latest) => {
            if (latest['--move'] === 'calc(-100% - 1px)') {
              onItemMoveComplete();
            }
          }}
          viewport={{ once: true }}
        >
          {orderedData.map(({ id, image }) => (
            <div
              key={id}
              className="offer__carousel-item"
              style={{
                transform: 'translateX(var(--move))',
              }}
            >
              <img src={image} alt={`${id}`} />
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="offer__carousel" />
      )}
    </section>
  );
};

export default Offer;
