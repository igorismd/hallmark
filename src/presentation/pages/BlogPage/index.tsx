import React, { FC } from 'react';
import Layout from '../../components/Layout';
import PostsList from './components/PostsList';

const BlogPage: FC = () => (
  <Layout>
    <PostsList />
  </Layout>
);

export default BlogPage;
