import { useParams } from 'react-router-dom';

export const UserPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>IT'S USER PAGE</h1>
      <div>{userId}</div>
    </>
  );
};
