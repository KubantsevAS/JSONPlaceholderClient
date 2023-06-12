import { createBrowserRouter } from 'react-router-dom';
import { AboutMe, PostsList, UserPage } from '../Pages';
import App from '../App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>OOPS, wrong route</h1>,
    children: [
      {
        path: '/',
        element: <PostsList />,
      },
      {
        path: 'aboutMe/',
        element: <AboutMe />,
      },
      {
        path: 'users/:userId',
        element: <UserPage />,
      },
    ],
  },
]);
