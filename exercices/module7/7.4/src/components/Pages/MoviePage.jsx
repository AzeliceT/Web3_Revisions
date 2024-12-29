import { useParams, useOutletContext } from 'react-router-dom';

const MoviePage = () => {
  const { movieId } = useParams();
  const { movies } = useOutletContext();
  const movie = movies.find(m => m.id === parseInt(movieId));

  if (!movie) {
    console.log(movie, "movie");
    
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Duration:</strong> {movie.duration} minutes</p>
      <img src={movie.imageUrl} alt={movie.title} width="200" />
      <p>{movie.description}</p>
      <p><strong>Budget:</strong> ${movie.budget} million</p>
    </div>
  );
};

export default MoviePage;