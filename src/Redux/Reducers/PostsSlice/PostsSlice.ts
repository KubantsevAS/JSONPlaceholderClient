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

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsFetching(state) {
      state.isFetching = true;
      state.posts = [];
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
    postsSortByTitleUp(state) {
      state.posts = [
        ...state.posts.sort((item1, item2) =>
          item1.title > item2.title ? 1 : -1
        ),
      ];
    },
    postsSortByTitleDown(state) {
      state.posts = [
        ...state.posts.sort((item1, item2) =>
          item1.title > item2.title ? -1 : 1
        ),
      ];
    },
  },
});

export const {
  postsFetching,
  postsFetchingSuccess,
  postsFetchingError,
  postsSortByTitleUp,
  postsSortByTitleDown,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
