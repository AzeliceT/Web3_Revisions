import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import HomePage from './components/Pages/HomePage';
import MovieListPage from './components/Pages/MovieListPage';
import CinemaPage from './components/Pages/CinemaPage';
import AddMoviePage from './components/Pages/AddMoviePage';
import MoviePage from './components/Pages/MoviePage';
import './index.css';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MovieListPage />} />
          <Route path="movies/:movieId" element={<MoviePage />} />
          <Route path="cinema" element={<CinemaPage />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);