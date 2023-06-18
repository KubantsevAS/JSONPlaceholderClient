import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../Redux/Reducers';
import { PostItem, SortAndFilterMenu } from '../../components';

export const PostsList = () => {
  const dispatch = useAppDispatch();
  const { posts, isFetching, error } = useAppSelector(
    (state) => state.PostsReducer
  );

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  return (
    <>
      <SortAndFilterMenu />
      {isFetching && <h1>Loading Posts...</h1>}
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
