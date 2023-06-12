import { commentsSlice } from '.';
import { getCommentsForPost } from '../../../api/api';
import { getErrorMessage } from '../../../utils';
import { AppDispatch } from '../../store';

export const fetchComments =
  (postId: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await getCommentsForPost(postId);
      dispatch(commentsSlice.actions.commentsFetching(response));
    } catch (e) {
      dispatch(commentsSlice.actions.commentsFetchingError(getErrorMessage(e)));
    }
  };
