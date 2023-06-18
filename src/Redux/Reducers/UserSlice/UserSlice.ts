import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types';

interface IUserState {
  userInfo: IUserInfo[];
  isFetching: boolean;
  error: string;
}

const initialState: IUserState = {
  userInfo: [],
  isFetching: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfoFetching(state) {
      state.isFetching = true;
      state.error = '';
    },
    userInfoFetchingSuccess(state, action: PayloadAction<IUserInfo[]>) {
      state.isFetching = false;
      state.userInfo = action.payload;
      state.error = '';
    },
    userInfoFetchingError(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  userInfoFetching,
  userInfoFetchingSuccess,
  userInfoFetchingError,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
