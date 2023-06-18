import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchPosts, sortPostsDown, sortPostsUp } from '../../Redux/Reducers';

export const SortAndFilterMenu = () => {
  const dispatch = useAppDispatch();
  const [filterValue, setFilterValue] = useState('');

  const sortingHandler = (arg: boolean) => {
    if (arg) {
      dispatch(sortPostsUp());
    } else {
      dispatch(sortPostsDown());
    }
  };

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    dispatch(fetchPosts({ title: e.target.value }));
  };
  return (
    <div>
      <input
        type={'text'}
        placeholder={'Post title'}
        onChange={filterHandler}
        value={filterValue}
      />
      <button onClick={() => sortingHandler(true)}>Sort by title UP</button>
      <button onClick={() => sortingHandler(false)}>Sort by title DO</button>
    </div>
  );
};
