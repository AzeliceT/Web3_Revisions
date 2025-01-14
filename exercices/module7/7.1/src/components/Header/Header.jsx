import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/cinema">Cinema</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;