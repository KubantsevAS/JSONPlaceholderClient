import { getUserInfo } from '../../../api';
import { getErrorMessage, makePause } from '../../../utils';
import { AppDispatch } from '../../store';
import {
  userInfoFetching,
  userInfoFetchingError,
  userInfoFetchingSuccess,
} from './UserSlice';

export const fetchUserInfo =
  (userId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userInfoFetching());
      await makePause(500);
      const response = await getUserInfo(userId);
      dispatch(userInfoFetchingSuccess(response));
    } catch (e) {
      dispatch(userInfoFetchingError(getErrorMessage(e)));
    }
  };
