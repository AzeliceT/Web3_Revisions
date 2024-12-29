import { useNavigate, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieListPage = () => {
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
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Duration: {movie.duration} minutes</p>
            <img src={movie.imageUrl} alt={movie.title} width="200" />
            <p>{movie.description}</p>
            <p>Budget: ${movie.budget} million</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListPage;