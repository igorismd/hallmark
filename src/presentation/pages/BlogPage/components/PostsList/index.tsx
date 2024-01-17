import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import usePostsList from '../../../../../application/hooks/usePostsList';
import { Typo } from '../../../../ui-kit';
import MainPost from '../MainPost';
import './styles.sass';

const PostsList: FC = () => {
  const navigate = useNavigate();
  const {isPending, postsList} = usePostsList();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  if (isPending) {
    return null;
  }

  return (
    <section className="posts-list">
      <MainPost post={postsList[0]} />
      {postsList.slice(1, 8).map((post) => (
        <article key={post.id}>
          <a href={`${ROUTES.blog}/${post.slug}`} onClick={onAnchorClick}>
            <img className="posts-list__image" src={post.featuredImage} alt={post.title} />
            <Typo.BlH2 className="posts-list__title">{post.title}</Typo.BlH2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </a>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
