const { ApolloServer, gql } = require('apollo-server');

// Sample data
const books = [
  { title: 'Clean Code', author: 'Robert Martin', published: 2008, genres: ['programming', 'refactoring'] },
  { title: 'Agile Software Development', author: 'Robert Martin', published: 2002, genres: ['programming'] },
  { title: 'Refactoring', author: 'Martin Fowler', published: 1999, genres: ['programming', 'refactoring'] },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', published: 1866, genres: ['fiction'] },
  { title: 'The Idiot', author: 'Fyodor Dostoevsky', published: 1869, genres: ['fiction'] },
  { title: 'Refactoring to Patterns', author: 'Joshua Kerievsky', published: 2004, genres: ['programming', 'refactoring'] },
  { title: 'Practical Object-Oriented Design', author: 'Sandi Metz', published: 2012, genres: ['programming', 'refactoring'] },
];

const authors = [
  { name: 'Robert Martin', born: 1952 },
  { name: 'Martin Fowler', born: 1963 },
  { name: 'Fyodor Dostoevsky', born: 1821 },
  { name: 'Joshua Kerievsky', born: null },
  { name: 'Sandi Metz', born: null },
];

// Type definitions
const typeDefs = gql`
  type Book {
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  }

  type Author {
    name: String!
    born: Int
    bookCount: Int!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book!
    editAuthor(
      name: String!
      setBornTo: Int!
    ): Author
  }
`;

// Resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (root, args) => {
      let filteredBooks = books;
      if (args.author) {
        filteredBooks = filteredBooks.filter(book => book.author === args.author);
      }
      if (args.genre) {
        filteredBooks = filteredBooks.filter(book => book.genres.includes(args.genre));
      }
      return filteredBooks;
    },
    allAuthors: () => authors.map(author => ({
      name: author.name,
      born: author.born,
      bookCount: books.filter(book => book.author === author.name).length
    })),
  },
  Mutation: {
    addBook: (root, args) => {
      const newBook = { title: args.title, author: args.author, published: args.published, genres: args.genres };
      books.push(newBook);

      if (!authors.find(author => author.name === args.author)) {
        authors.push({ name: args.author, born: null });
      }

      return newBook;
    },
    editAuthor: (root, args) => {
      const author = authors.find(author => author.name === args.name);
      if (!author) {
        return null;
      }

      author.born = args.setBornTo;
      return author;
    }
  }
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});