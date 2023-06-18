import { commentsSlice } from '.';
import { getCommentsForPost } from '../../../api';
import { getErrorMessage, makePause } from '../../../utils';
import { AppDispatch } from '../../store';

export const fetchComments =
  (postId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(commentsSlice.actions.commentsFetching());
      await makePause(500);
      const response = await getCommentsForPost(postId);
      dispatch(commentsSlice.actions.commentsFetchingSuccess(response));
    } catch (e) {
      dispatch(commentsSlice.actions.commentsFetchingError(getErrorMessage(e)));
    }
  };
