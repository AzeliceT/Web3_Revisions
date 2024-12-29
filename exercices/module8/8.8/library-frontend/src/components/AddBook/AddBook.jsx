import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, ALL_BOOKS, ALL_AUTHORS } from '../../queries';

const AddBook = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
    onCompleted: () => {
      onBookAdded();
    }
  });

  const submit = async (event) => {
    event.preventDefault();

    addBook({
      variables: { title, author, published: parseInt(published), genres }
    });

    setTitle('');
    setAuthor('');
    setPublished('');
    setGenres([]);
    setGenre('');
  };

  const addGenre = () => {
    setGenres(genres.concat(genre));
    setGenre('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={submit}>
        <div>
          Title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          Published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button type="button" onClick={addGenre}>Add Genre</button>
        </div>
        <div>
          Genres: {genres.join(', ')}
        </div>
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};

export default AddBook;