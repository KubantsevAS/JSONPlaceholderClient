import axios from 'axios';
import { IComment, IPost } from '../Redux/types';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const request = await instance.get<IPost[]>('posts').then((response) => {
    return response.data;
  });
  return request;
};

export const getCommentsForPost = async (id: number) => {
  const request = await instance
    .get<IComment[]>('comments', { params: { postId: id } })
    .then((response) => {
      return response.data;
    });
  return request;
};

export const getUserInfo = async (userId: number) => {
  const request = await instance
    .get('users', { params: { id: userId } })
    .then((response) => {
      return response.data;
    });
  return request;
};
