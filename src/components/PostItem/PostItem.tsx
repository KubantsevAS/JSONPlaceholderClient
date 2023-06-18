import { Link } from 'react-router-dom';
import { IPost } from '../../Redux/types';
import styles from './PostItem.module.css';
import { Comments } from '..';
import { useAppSelector } from '../../hooks/redux';

export const PostItem = ({ id, userId, body, title }: IPost) => {
  const { comments } = useAppSelector((state) => state.commentsReducer);
  const localComments = comments.find((item) => item[0].postId === id);
  return (
    <div className={styles['post']}>
      <div>
        <span>{userId}</span>
        <span> --- </span>
        <span>{title}</span>
      </div>
      <div>
        <span>{id}</span>
        <span> --- </span>
        <span>{body}</span>
      </div>

      <Link to={`/${userId}`}>
        <button>to User page</button>
      </Link>

      {comments && <Comments id={id} comments={localComments} key={id} />}
    </div>
  );
};
