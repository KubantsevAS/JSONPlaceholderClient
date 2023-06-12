import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IPosts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface IUserState {
  posts: IPosts[];
  isFetching: boolean;
  error: string;
}

const initialState: IUserState = {
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
    },
    postsFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
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

export const { postsFetching, postsFetchingSuccess, postsFetchingError } =
  postsSlice.actions;

export default postsSlice.reducer;
