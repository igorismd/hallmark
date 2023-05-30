import React, { FC } from 'react';
import { Typo } from '../../../../ui-kit';
import ContentAppear from '../../../ContentAppear';
import stampIba from './assets/stamp-iba.svg';
import stampDhi from './assets/stamp-dhi.svg';
// import stamp from './assets/stamp-colored.svg';
import stampColored from './assets/stamp-colored.svg';
import stampGreen from './assets/stamp-green.png';
import Contacts from './components/Contacts';
import ContactUsForm from './components/ContactUsForm';
// import Form from './components/ContactUsForm';
import './styles.sass';

const Footer: FC = () => (
  <div className="footer__wrapper">
    <footer className="footer">
      <div className="footer__wrp">
        <div className="footer__content">
          <ContentAppear>
            <div className="footer__blockText">
              <Typo.H1 className="footer__title">Contact us</Typo.H1>
              <Typo.P className="footer__text">Doors and Hardware for residential, commercial, institutional and detention construction industries</Typo.P>
            </div>
            <div className="footer__picture picture__destop">
              <a href="https://icba.ca" target="_target">
                <img src={stampIba} alt="icba" className="footer__stamp-iba" />
              </a>
              <a href="https://www.dhi.org" target="_target">
                <img src={stampDhi} alt="stampDhi" className="footer__stamp-dhi" />
              </a>
              <span>
                <img src={stampColored} alt="Hallmark" className="footer__stamp-colored" />
              </span>
              <a href="https://businessinsurrey.com" target="_target">
                <img src={stampGreen} alt="stampGreen" className="footer__stamp-green" />
              </a>
            </div>
          </ContentAppear>
          
        </div>
        
        <ContactUsForm />
 

        <div className="footer__picture pictury__table">
          <a href="https://icba.ca" target="_target">
            <img src={stampIba} alt="icba" className="footer__stamp-iba" />
          </a>
          <a href="https://www.dhi.org" target="_target">
            <img src={stampDhi} alt="stampDhi" className="footer__stamp-dhi" />
          </a>
          <span>
            <img src={stampColored} alt="Hallmark" className="footer__stamp-colored" />
          </span>
          <a href="https://businessinsurrey.com" target="_target">
            <img src={stampGreen} alt="stampGreen" className="footer__stamp-green" />
          </a>
        </div>


      </div>
      
      <Contacts />
      
    </footer>
  </div>
);

export default Footer;
