import { AppDispatch } from '../../store';
import { getPosts } from '../../../api';
import { postsSlice } from './PostsSlice';
import { getErrorMessage, makePause } from '../../../utils';

interface IFetchPostsParams {
  userId?: number;
  title?: string;
}

export const fetchPosts =
  ({ userId, title }: IFetchPostsParams) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(postsSlice.actions.postsFetching());
      await makePause(500);
      const response = await getPosts(userId);
      if (title) {
        dispatch(
          postsSlice.actions.postsFetchingSuccess(
            response.filter((elem) => elem.title.includes(title))
          )
        );
      } else {
        dispatch(postsSlice.actions.postsFetchingSuccess(response));
      }
    } catch (e) {
      dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
    }
  };

export const sortPostsUp = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsSortByTitleUp());
  } catch (e) {
    dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
  }
};

export const sortPostsDown = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsSortByTitleDown());
  } catch (e) {
    dispatch(postsSlice.actions.postsFetchingError(getErrorMessage(e)));
  }
};
