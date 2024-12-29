import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cinema">Cinema</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;