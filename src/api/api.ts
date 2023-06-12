import axios from 'axios';
import { IPosts } from '../Redux/Reducers/PostsSlice/PostsSlice';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const request = await instance.get<IPosts[]>('posts').then((response) => {
    return response.data;
  });
  return request;
};
