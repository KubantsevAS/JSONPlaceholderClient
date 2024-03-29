import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../Redux/Reducers';
import { useEffect } from 'react';
import { PostItem } from '../../components';

export const UserPage = () => {
  const { userId } = useParams();
  const userIdNumber = Number(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ userId: userIdNumber }));
  }, [dispatch, userIdNumber]);

  const { posts, isFetching, error } = useAppSelector(
    (state) => state.postsReducer
  );

  return (
    <>
      <h1>IT'S USER PAGE</h1>
      <div>USER ID: {userIdNumber}</div>
      <h2>Here will be User Info</h2>
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
