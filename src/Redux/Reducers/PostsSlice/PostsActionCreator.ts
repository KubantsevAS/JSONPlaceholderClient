import { AppDispatch } from '../../store';
import { getPosts } from '../../../api';
import { postsSlice } from './PostsSlice';
import { getErrorMessage, makePause } from '../../../utils';

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    await makePause(1000);
    const response = await getPosts();
    dispatch(postsSlice.actions.postsFetchingSuccess(response));
  } catch (e) {
    dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
  }
};
