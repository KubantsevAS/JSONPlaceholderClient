import { getCommentsForPost } from '../../../api';
import { getErrorMessage, makePause } from '../../../utils';
import { AppDispatch } from '../../store';
import {
  commentsFetching,
  commentsFetchingError,
  commentsFetchingSuccess,
} from './CommentsSlice';

export const fetchComments =
  (postId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(commentsFetching());
      await makePause(500);
      const response = await getCommentsForPost(postId);
      dispatch(commentsFetchingSuccess(response));
    } catch (e) {
      dispatch(commentsFetchingError(getErrorMessage(e)));
    }
  };
