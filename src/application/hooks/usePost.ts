import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Post from '../../domain/Post';
import PostFetcher from '../../infrastructure/PostFetcher';

const usePost = () => {
  const {postId} = useParams();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [post, setPost] = useState(new Post());

  useEffect(() => {
    setIsPending(true);

    (async () => {
      if (!postId) {
        throw new Error('Undefined Post ID');
      }

      const postFetcher = new PostFetcher();
      const post = await postFetcher.getById(postId);

      setPost(post);
      setIsPending(false);
    })();
  }, [postId]);

  return {isPending, post};
};

export default usePost;
