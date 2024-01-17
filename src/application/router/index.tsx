

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogInnerPage from '../../presentation/pages/BlogInnerPage';
import BlogPage from '../../presentation/pages/BlogPage';
import HomePage from '../../presentation/pages/HomePage';
import ROUTES from './routes';

const CustomRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={`${ROUTES.blog}/:slug`} element={<BlogInnerPage />} />
      <Route path={ROUTES.blog} element={<BlogPage />} />
    </Routes>
  </Router>
);

export default CustomRouter;
