import React, { useState } from 'react';
import Books from './components/Books/Books';
import Authors from './components/Authors/Authors';
import AddBook from './components/AddBook/AddBook';

const App = () => {
  const [view, setView] = useState('books');

  const handleBookAdded = () => {
    setView('books');
  };

  return (
    <div>
      <button onClick={() => setView('books')}>Books</button>
      <button onClick={() => setView('authors')}>Authors</button>
      <button onClick={() => setView('addBook')}>Add Book</button>
      {view === 'books' && <Books />}
      {view === 'authors' && <Authors />}
      {view === 'addBook' && <AddBook onBookAdded={handleBookAdded} />}
    </div>
  );
};

export default App;