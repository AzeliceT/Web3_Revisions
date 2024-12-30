import { useContext, useState } from 'react';
import { BooksContext } from 'contexts/BooksContext';

const BooksPage = () => {
  const { books, updateBookState } = useContext(BooksContext);
  const [selectedState, setSelectedState] = useState({});

  const handleStateChange = (id, state) => {
    setSelectedState((prevState) => ({ ...prevState, [id]: state }));
  };

  const handleUpdateClick = (id) => {
    updateBookState(id, selectedState[id]);
  };

  return (
    <div>
      <h1>Gestion de livres</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <select
              value={selectedState[book.id] || book.state}
              onChange={(e) => handleStateChange(book.id, e.target.value)}
            >
              <option value="lu">lu</option>
              <option value="à lire">à lire</option>
              <option value="en cours de lecture">en cours de lecture</option>
            </select>
            <button onClick={() => handleUpdateClick(book.id)}>Mettre à jour l’état</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;