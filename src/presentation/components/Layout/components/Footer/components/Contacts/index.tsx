import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../../../application/router/routes';
import { Typo } from '../../../../../../ui-kit';
import stamp from '../../assets/stamp-colored.svg';
import './styles.sass';

const Contacts: FC = () => {
  const navigate = useNavigate();

  const goToBlog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(ROUTES.blog);
  };

  return (
    <section className="contacts">
      <div className="contacts__data">
        <div className="contacts__warehouse">
          <h3 className="contacts__title">Warehouse</h3>
          <Typo.P className="contacts__text">
            Hallmark Hardware Corporation<br />
            Unit 203 - 9775 188 Surrey, BC, V4N 3N2<br />
            Canada
          </Typo.P>
        </div>
        <div className="contacts__phone-email">
          <div>
            <h3 className="contacts__title">Phone</h3>
            <Typo.P className="contacts__text">(604) 371-0717</Typo.P>
          </div>
          <div>
            <h3 className="contacts__title">Email</h3>
            <Typo.P className="contacts__text">
              <a href="mailto:info@hallmarkhardware.ca">info@hallmarkhardware.ca</a>
            </Typo.P>
          </div>
        </div>
      </div>
      <div className="contacts__nav">
        <div className="contacts__nav-links">
          <a href={ROUTES.blog} onClick={goToBlog}>Our Blog</a>
          <a href="https://google.com" target="_blank" rel="noreferrer">Open positions</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <img src={stamp} alt="Hallmark" className="contacts__stamp" />
        </div>
        <div className="contacts__copy">
          © 2023 Hallmark Hardware Corporation
        </div>
      </div>
    </section>
  );
};

export default Contacts;
