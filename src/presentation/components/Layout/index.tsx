import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ withShowcase = false, children }) => {
  const { pathname } = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <>
      <Loader setShowContent={setShowHeader} />
      <Header withShowcase={withShowcase} isReady={showHeader} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
