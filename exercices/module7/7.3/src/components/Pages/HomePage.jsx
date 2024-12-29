import { Link, useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <h1>Favorite Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;