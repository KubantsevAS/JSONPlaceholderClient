export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
