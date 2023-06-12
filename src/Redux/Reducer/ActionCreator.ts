import { AppDispatch } from './../store';
import { getPosts } from '../../api/api';
import { postsSlice } from './PostsSlice';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await getPosts();
    console.log(response);
    dispatch(postsSlice.actions.postsFetchingSuccess(response));
  } catch (e) {
    dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
  }
};
