import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description: "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
  ]);

  const movieContext = { movies, setMovies };

  return (
    <div className="page">
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isolée-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <Navbar />
      </Header>

      <main>
        <Outlet context={movieContext} />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2021 UGC Cinémas</p>
      </Footer>
    </div>
  );
};

export default App;