import { Outlet } from 'react-router-dom';
import { Navbar } from './components/index.ts';

function App() {
  // const dispatch = useAppDispatch();
  // const { posts, isFetching, error } = useAppSelector(
  //   (state) => state.postsReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  return (
    <>
      <h1>TItle</h1>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
