import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>
        <button>Posts</button>
      </Link>
      <Link to={'aboutMe/'}>
        <button>About Me</button>
      </Link>

      <h2>NavBarEnd</h2>
    </nav>
  );
};
