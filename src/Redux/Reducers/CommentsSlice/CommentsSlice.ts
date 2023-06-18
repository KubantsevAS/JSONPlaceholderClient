import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types';

interface ICommentsState {
  comments: IComment[][];
  isFetching: boolean;
  error: string;
}

const initialState: ICommentsState = {
  comments: [],
  isFetching: false,
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsFetching(state) {
      state.isFetching = true;
      state.error = '';
    },
    commentsFetchingSuccess(state, action: PayloadAction<IComment[]>) {
      state.isFetching = false;
      state.comments = [...state.comments, action.payload];
      state.error = '';
    },
    commentsFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export default commentsSlice.reducer;
