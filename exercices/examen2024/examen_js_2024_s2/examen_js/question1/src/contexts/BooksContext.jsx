import React, { createContext, useState, useEffect } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    setBooks(data);
  };

  const updateBookState = async (id, state) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state }),
    });
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, updateBookState }}>
      {children}
    </BooksContext.Provider>
  );
};