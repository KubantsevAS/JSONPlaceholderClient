// import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './Reducers/PostsSlice/PostsSlice';
import CommentsReducer from './Reducers/CommentsSlice/CommentsSlice';

const rootReducer = combineReducers({
  PostsReducer,
  CommentsReducer,
});

export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
