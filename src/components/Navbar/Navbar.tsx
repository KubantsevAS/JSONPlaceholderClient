import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to={'aboutMe/'}>
        <button>About Me</button>
      </Link>
      <Link to={'posts/'}>
        <button>Posts</button>
      </Link>
    </nav>
  );
};
