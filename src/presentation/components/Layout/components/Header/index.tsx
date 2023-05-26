import React, { FC, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { ReactComponent as LogoColored } from './assets/LogoColored.svg';
import { HeaderProps } from './types';
import './styles.sass';

const Header: FC<HeaderProps> = ({ withShowcase = false, isReady = true }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [headerTopClass, setHeaderTopClass] = useState<string>('header__top');
  const [tabIsVisible, setTabIsVisible] = useState(true);
  const iconDark = !isInView || !withShowcase;
  let mixedClassName = 'header';

  if (!withShowcase) {
    mixedClassName += ' header_without-showcase';
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        setTabIsVisible(false);
      } else {
        setTabIsVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!isInView || !withShowcase) {
      setHeaderTopClass('header__top header__top_not-in-view');

      return;
    }

    setHeaderTopClass('header__top');
  }, [isInView, withShowcase]);

  return (
    <header className={mixedClassName} ref={ref}>
      <div className="showcase__animation-col_step-11"></div>
      <div className="showcase__animation-col_step-21"></div>
      <div className="showcase__animation-col_step-31"></div>
      <div className="showcase__animation-col_step-41"></div>
      <div className="showcase__animation-col_step-51"></div>
      {withShowcase && tabIsVisible && isReady && (
        <Showcase />
      )}
      <div className={headerTopClass}>
        {withShowcase ? (
          (isInView ? (
            <Logo className="header__logo" onClick={() => navigate(ROUTES.home)} />
          ) : (
            <LogoColored className="header__logo" onClick={() => navigate(ROUTES.home)} />
          ))
        ) : (
          <LogoColored className="header__logo" onClick={() => navigate(ROUTES.home)} />
        )}
        <Navigation iconDark={iconDark} />
      </div>
    </header>
  );
};

export default Header;
