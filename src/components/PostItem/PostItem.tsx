import { fetchComments } from '../../Redux/Reducers';
import { IPost } from '../../Redux/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const PostItem: any = ({ id, userId, body, title }: IPost) => {
  const dispatch = useAppDispatch();
  const { comments, error } = useAppSelector((state) => state.CommentsReducer);
  return (
    <div>
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
      <button
        onClick={() => {
          dispatch(fetchComments(id));
        }}
      >
        Comments
      </button>
      {error && <h1>ERROR</h1>}
      {comments.length && (
        <div>
          {comments.map((elem) => (
            <div>{elem.email}</div>
          ))}
        </div>
      )}
    </div>
  );
};
