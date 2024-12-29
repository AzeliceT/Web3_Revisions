import { useNavigate, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { movies } = useOutletContext();
  const navigate = useNavigate();

  const handleAddMovieClick = () => {
    navigate('/add-movie');
  };

  return (
    <div>
      <h1>Movie List</h1>
      <button onClick={handleAddMovieClick}>Add Movie</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;