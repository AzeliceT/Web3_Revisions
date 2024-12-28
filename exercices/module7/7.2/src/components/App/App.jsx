import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../Pages/HomePage';
import MovieListPage from '../Pages/MovieListPage';
import CinemaPage from '../Pages/CinemaPage';
import AddMoviePage from '../Pages/AddMoviePage';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 20,
    },
  ]);

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route element={<Outlet context={{ movies, setMovies }} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MovieListPage />} />
              <Route path="/cinema" element={<CinemaPage />} />
              <Route path="/add-movie" element={<AddMoviePage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;