import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../../ui-kit';
import ROUTES from '../../../../../../../application/router/routes';
import NavButton from './components/NavButton';
import MenuIcon from './components/MenuIcon';
import { ReactComponent as Logo } from '../../assets/LogoColored.svg';
import { ReactComponent as Close } from './assets/Close.svg';
import { NavigationProps } from './types'; 
import './styles.sass';

 



const Navigation: FC<NavigationProps> = ({ iconDark }) => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const portalElement = document.getElementById('portal');

  const onBlockLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const navRoutes = [
    // {
    //   route: ROUTES.blog,
    //   name: 'Our blog'
    // },
    {
      href: 'https://www.linkedin.com/company/hallmark-hardware/jobs/',
      target: '_blank',
      name: 'Open postions'
    },
    {
      name: 'Contact us'
    },
  ] as const;

  const toggleOpened = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('fixedPos');
    } else {
      document.body.classList.remove('fixedPos');
    }

    return () => {
      document.body.classList.remove('fixedPos');
    };
  }, [isOpened]);

  return (
    <>
      {isOpened && portalElement ? (
        (createPortal(
          <div className="navigation">
            <div className="navigation__top">
              <Logo className="navigation__logo" onClick={() => navigate(ROUTES.home)} />
              <div className="navigation__right">
                <div className="navigation__right-phone">Phone: (604) 371-0717</div>
                <Close onClick={toggleOpened} />
              </div>
            </div>
            <nav className="navigation__center">
              {navRoutes.map((item) => (
                <NavButton
                  key={item.name}
                  onClick={toggleOpened}
                  {...item}
                />
              ))}
            </nav>
            <div className="navigation__bottom">Phone: (604) 371-0717</div>
          </div>,
          portalElement
        ))
      ) : (
        <div className="navigation__menu">
 
 
 
          <a
            href={ROUTES.blog}
            className={`navigation__top-link
            ${(iconDark && ' navigation__top-link_dark')}`}
            onClick={onBlockLinkClick}
          >
            {/* Our Blog */}
          </a>
 
          <a href="https://www.linkedin.com/company/hallmark-hardware/jobs/" className={`navigation__top-link ${(iconDark && ' navigation__top-link_dark')}`} target="_blank" rel="noreferrer">Open positions</a>
          
          
          <div className={`navigation__menu-phone ${(iconDark && ' navigation__menu-phone_dark')}`}>Phone: (604) 371-0717</div>
          <Button className={`navigation__contact-us btn-scroll ${(iconDark && ' navigation__contact-us_dark')}`} onClick={handleClickScroll}>Contact us</Button>
          <MenuIcon fill={iconDark ? 'black' : 'white'} onClick={toggleOpened} />
        </div>
      )}
    </>
  );
};

export default Navigation;
