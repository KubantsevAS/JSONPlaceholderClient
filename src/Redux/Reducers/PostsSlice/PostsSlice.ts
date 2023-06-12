import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../types';

interface IPostState {
  posts: IPost[];
  isFetching: boolean;
  error: string;
}

const initialState: IPostState = {
  posts: [],
  isFetching: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsFetching(state) {
      state.isFetching = true;
      state.error = '';
    },
    postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
      state.isFetching = false;
      state.error = '';
      state.posts = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
