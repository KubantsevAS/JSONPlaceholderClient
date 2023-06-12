import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchComments } from '../../Redux/Reducers';
import { IPost } from '../../Redux/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const PostItem = ({ id, userId, body, title }: IPost) => {
  const dispatch = useAppDispatch();
  const { comments, error, isFetching } = useAppSelector(
    (state) => state.CommentsReducer
  );

  const [visibleComments, setVisibleComments] = useState(false);

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
      <Link to={`users/${userId}`}>
        <button>to User page</button>
      </Link>
      <button
        onClick={() => {
          setVisibleComments(true);
          dispatch(fetchComments(id));
        }}
      >
        Comments
      </button>
      {visibleComments && error && <h1>ERROR</h1>}
      {visibleComments && isFetching && <h2>Loading . . . </h2>}
      {visibleComments && (
        <div>
          {comments.map((elem) => (
            <div>{elem.email}</div>
          ))}
        </div>
      )}
    </div>
  );
};