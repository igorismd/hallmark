// usePost.ts

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../domain/Post';
import PostFetcher from '../../infrastructure/PostFetcher';

const usePost = () => {
  const { slug } = useParams();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);

        if (!slug) {
          throw new Error('Undefined Post Slug');
        }

        const postFetcher = new PostFetcher();
        const fetchedPost = await postFetcher.getBySlug(slug);

        setPost(fetchedPost);
        setIsPending(false);
      } catch (error) {
        // Handle the error (e.g., set an error state)
        setPost(null);
        setIsPending(false);
      }
    };

    fetchData();
  }, [slug]);

  return { isPending, post };
};

export default usePost;
