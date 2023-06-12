import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPosts } from './Redux/Reducer/ActionCreator';

function App() {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.postsReducer);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);
  console.log(posts);
  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        CLICKLE
      </button>
      <div>{JSON.stringify(posts, null, 2)}</div>
    </>
  );
}

export default App;
