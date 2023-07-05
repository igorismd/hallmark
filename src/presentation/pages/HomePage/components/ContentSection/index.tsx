import React, { FC, ReactNode } from 'react';
import { Typo } from '../../../../ui-kit';
import DoorImg from '../../components/DoorImg';
import ContentAppear from '../../../../components/ContentAppear';
import './styles.sass';

export type ContentSectionData = {
  title: ReactNode;
  image: string;
  text: string;
  pdfUrl?: string;
}[];

interface ContentSectionProps {
  title: string;
  data: ContentSectionData;
  className?: string;
}

const ContentSection: FC<ContentSectionProps> = ({ title, data, className }) => {
  let mixedClassName = 'content-section';

  if (className) {
    mixedClassName += ` ${className}`;
  }

 

  return (
    <section className={mixedClassName}>
      <ContentAppear>
        <Typo.H1>{title}</Typo.H1>
      </ContentAppear>
      <div className="content-section__article-container">
        {data.map(({ title, image, text, pdfUrl }, index) => (
          <article className="content-section__article" key={image}>
            <DoorImg src={image} alt="Our Products" delay={index} />
            <ContentAppear>
              <Typo.H2 className="content-section__article-title">{title}</Typo.H2>
              <Typo.P className="content-section__text">{text}</Typo.P>
              {pdfUrl && (
                <a
                  className="button content-section__button"
                  href=''
                  download="https://hallmarkhardware.ca/catalog/Hallmark_Hardware_Detention_Products_Catalog.pdf"
                  target="_blank"
                >
                  DOWNLOAD PRODUCT CATALOG
                </a>
              )}
            </ContentAppear>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
