import {useEffect, useState} from 'react';
import Post from '../../domain/Post';
import PostFetcher from '../../infrastructure/PostFetcher';

const usePostsList = () => {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [postsList, setPostsList] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const postFetcher = new PostFetcher();
      const postsList = await postFetcher.getLastPosts();

      setPostsList(postsList);
      setIsPending(false);
    })();
  }, []);

  return {isPending, postsList};
};

export default usePostsList;
