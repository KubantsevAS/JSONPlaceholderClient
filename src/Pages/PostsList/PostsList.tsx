import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts, sortPostsDown, sortPostsUp } from '../../Redux/Reducers';
import { PostItem } from '../../components';

export const PostsList = () => {
  const dispatch = useAppDispatch();
  const { posts, isFetching, error } = useAppSelector(
    (state) => state.PostsReducer
  );

  const sortingHandler = (arg: boolean) => {
    if (arg) {
      dispatch(sortPostsUp());
    } else {
      dispatch(sortPostsDown());
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        <input type={'text'} placeholder={'Post title'} />
        <button onClick={() => sortingHandler(true)}>Sort by title UP</button>
        <button onClick={() => sortingHandler(false)}>Sort by title DO</button>
      </div>
      {isFetching && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {posts.map((elem) => (
        <PostItem
          body={elem.body}
          title={elem.title}
          userId={elem.userId}
          id={elem.id}
          key={elem.id}
        />
      ))}
    </>
  );
};
