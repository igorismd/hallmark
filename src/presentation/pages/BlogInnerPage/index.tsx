import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../application/router/routes';
import usePost from '../../../application/hooks/usePost';
import usePostsList from '../../../application/hooks/usePostsList';
import Layout from '../../components/Layout';
import { Button, Typo } from '../../ui-kit';
import './styles.sass';

const BlogInnerPage: FC = () => {
  const navigate = useNavigate();
  const { isPending, post } = usePost();
  const { isPending: isListPending, postsList } = usePostsList();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  if (isPending || isListPending || !post) {
    return null; // or render a loading state
  }

  return (
    <Layout>
      <div className="blog-inner-page__wrapper">
        <div>
          <section className="blog-inner-page__post">
            <article>
              <Typo.BlInH1>{post.title}</Typo.BlInH1>
              {post.date && <div className="blog-inner-page__date">{post.date}</div>}
              {post.featuredImage && (
                <img src={post.featuredImage} alt={post.title} className="blog-inner-page__image" width="100%" />
              )}
              {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
            </article>
          </section>
          <section className="blog-inner-page__call-action">
            <div>
              <a className="button" href="#footer">
                GET A QUOTE
              </a>
            </div>
          </section>
        </div>
        <section className="blog-inner-page__list">
          <h3 className="blog-inner-page__list-header">Read more from Hallmark Hardware</h3>
          <div className="blog-inner-page__posts">
            {postsList.slice(0, 3).map((post) => (
              <a href={`${ROUTES.blog}/${post.slug}`} key={post.id} onClick={onAnchorClick} className="blog-inner-page__list-post-link">
                <article>
                  {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="blog-inner-page__list-image" />}
                  {post.title && <h4 className="blog-inner-page__list-title">{post.title}</h4>}
                </article>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogInnerPage;
