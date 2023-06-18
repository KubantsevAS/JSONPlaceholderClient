import { AppDispatch } from '../../store';
import { getPosts } from '../../../api';
import {
  postsFetching,
  postsFetchingError,
  postsFetchingSuccess,
  postsSortByTitleDown,
  postsSortByTitleUp,
} from './PostsSlice';
import { getErrorMessage, makePause } from '../../../utils';

interface IFetchPostsParams {
  userId?: number;
  title?: string;
}

export const fetchPosts =
  ({ userId, title }: IFetchPostsParams) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(postsFetching());
      await makePause(500);
      const response = await getPosts(userId);
      if (title) {
        dispatch(
          postsFetchingSuccess(
            response.filter((elem) => elem.title.includes(title))
          )
        );
      } else {
        dispatch(postsFetchingSuccess(response));
      }
    } catch (e) {
      dispatch(postsFetchingError(getErrorMessage(e)));
    }
  };

export const sortPostsUp = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSortByTitleUp());
  } catch (e) {
    dispatch(postsFetchingError(getErrorMessage(e)));
  }
};

export const sortPostsDown = () => (dispatch: AppDispatch) => {
  try {
    dispatch(postsSortByTitleDown());
  } catch (e) {
    dispatch(postsFetchingError(getErrorMessage(e)));
  }
};
