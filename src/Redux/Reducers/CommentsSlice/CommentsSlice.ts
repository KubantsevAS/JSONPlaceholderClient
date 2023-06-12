import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types';

interface ICommentsState {
  comments: IComment[];
  error: string;
}

const initialState: ICommentsState = {
  comments: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsFetching(state, action: PayloadAction<IComment[]>) {
      state.comments = action.payload;
      state.error = '';
    },
    commentsFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
