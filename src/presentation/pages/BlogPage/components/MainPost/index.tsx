import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';
import Post from '../../../../../domain/Post';
import { Button, Typo } from '../../../../ui-kit';
// import image from './assets/image.jpg';
import './styles.sass';

const MainPost: FC<{ post: Post }> = ({ post }) => {
  // const title = '17 Best Door Examples that Architects could use in their floor plans';
  const navigate = useNavigate();

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(new URL(e.currentTarget.href).pathname);

    return false;
  };

  return (
    <div className="main-post">
      <img src={post.featuredImage} alt={post.title} className="main-post__image" />
      <Typo.BlH1 className="main-post__title"><a href={`${ROUTES.blog}/${post.slug}`} onClick={onAnchorClick}>{post.title}</a></Typo.BlH1>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <div className="main-post__button-container">
        <Button className="main-post__button" onClick={() => navigate(`${ROUTES.blog}/${post.slug}`)}>Read now</Button>
      </div>
    </div>
  );
};

export default MainPost;
