import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchComments } from '../../Redux/Reducers';
import { IComment } from '../../Redux/types';

interface ICommentsProps {
  id: number;
  comments?: IComment[];
}

export const Comments = ({ id, comments }: ICommentsProps) => {
  const dispatch = useAppDispatch();
  const [visibleComments, setVisibleComments] = useState<boolean>(false);

  const onClickHandler = () => {
    setVisibleComments(!visibleComments);
    dispatch(fetchComments(id));
  };
  return (
    <div>
      <button onClick={onClickHandler}>GET COMMENTS</button>
      <div>
        {visibleComments && (
          <>
            {!comments && <h2>Loading...</h2>}
            {comments &&
              comments.map((elem: IComment) => (
                <div key={elem.id}>
                  <div>{elem.email}</div>
                  <div>{elem.body}</div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
