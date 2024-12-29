import { useNavigate, useOutletContext } from 'react-router-dom';
import AddMovieForm from '../AddMovieForm/AddMovieForm';

const AddMoviePage = () => {
  const { movies, setMovies } = useOutletContext();
  const navigate = useNavigate();

  const handleMovieAdded = (newMovie) => {
    setMovies([...movies, newMovie]);
    navigate('/movies');
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <AddMovieForm onMovieAdded={handleMovieAdded} />
    </div>
  );
};

export default AddMoviePage;