import React, { FC } from 'react';
import Layout from '../../components/Layout';
import About from './components/About';
import BenefitsGallery from './components/BenefitsGallery';
import CallAction from './components/CallAction';
import ContentSection from './components/ContentSection';
import Offer from './components/Offer';
import products from './components/ContentSection/data/products';
import services from './components/ContentSection/data/services';
import ProjectsGallery from './components/ProjectsGallery';
import './styles.sass';

const HomePage: FC = () => {
  return (
    <Layout withShowcase>
      <About />
      <BenefitsGallery />
      <Offer />
      <ContentSection title="Our Products" data={products} className="home-page__products" />
      <CallAction />
      <ContentSection title="Our Services" data={services} className="home-page__services" />
      <ProjectsGallery />
    </Layout>
  );
};

export default HomePage;
