const { ApolloServer, gql } = require('apollo-server');

// Sample data
const books = [
  { title: 'Clean Code', author: 'Robert Martin', published: 2008, genres: ['programming'] },
  { title: 'Agile Software Development', author: 'Robert Martin', published: 2002, genres: ['programming'] },
  { title: 'Refactoring', author: 'Martin Fowler', published: 1999, genres: ['programming'] },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', published: 1866, genres: ['fiction'] },
  { title: 'The Idiot', author: 'Fyodor Dostoevsky', published: 1869, genres: ['fiction'] },
  { title: 'Refactoring to Patterns', author: 'Joshua Kerievsky', published: 2004, genres: ['programming'] },
  { title: 'Practical Object-Oriented Design', author: 'Sandi Metz', published: 2012, genres: ['programming'] },
];

const authors = [
  { name: 'Robert Martin' },
  { name: 'Martin Fowler' },
  { name: 'Fyodor Dostoevsky' },
  { name: 'Joshua Kerievsky' },
  { name: 'Sandi Metz' },
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
    bookCount: Int!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks: [Book!]!
    allAuthors: [Author!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: () => books,
    allAuthors: () => authors.map(author => ({
      name: author.name,
      bookCount: books.filter(book => book.author === author.name).length
    })),
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});