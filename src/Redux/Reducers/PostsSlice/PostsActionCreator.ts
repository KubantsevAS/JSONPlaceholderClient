import { AppDispatch } from '../../store';
import { getPosts } from '../../../api/api';
import { postsSlice } from './PostsSlice';

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    await sleep(2000);
    const response = await getPosts();
    dispatch(postsSlice.actions.postsFetchingSuccess(response));
  } catch (e) {
    dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
  }
};
