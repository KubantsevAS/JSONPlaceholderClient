import { createBrowserRouter } from 'react-router-dom';
import { AboutMe } from '../../Pages/index.ts';
import App from '../../App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>OOPS</h1>,
    children: [
      {
        path: 'aboutMe/',
        element: <AboutMe />,
      },
      {
        path: 'posts/',
        element: <h1>POSTS LIST</h1>,
      },
    ],
  },
]);
