import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from '../../queries';

const Books = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.allBooks.map(book => (
          <li key={book.title}>
            <strong>Title:</strong> {book.title}<br />
            <strong>Author:</strong> {book.author}<br />
            <strong>Published:</strong> {book.published}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;