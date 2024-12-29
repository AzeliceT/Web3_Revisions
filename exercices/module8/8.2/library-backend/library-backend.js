const { ApolloServer, gql } = require('apollo-server');

// Sample data
const books = [
  { title: 'Book 1', author: 'Author 1', published: 2001, genres: ['fiction'] },
  { title: 'Book 2', author: 'Author 2', published: 2002, genres: ['non-fiction'] },
  { title: 'Book 3', author: 'Author 1', published: 2003, genres: ['fiction', 'mystery'] },
  { title: 'Book 4', author: 'Author 3', published: 2004, genres: ['fiction'] },
  { title: 'Book 5', author: 'Author 4', published: 2005, genres: ['non-fiction', 'history'] },
  { title: 'Book 6', author: 'Author 5', published: 2006, genres: ['fiction', 'fantasy'] },
  { title: 'Book 7', author: 'Author 2', published: 2007, genres: ['non-fiction', 'self-help'] },
];

const authors = [
  { name: 'Author 1' },
  { name: 'Author 2' },
  { name: 'Author 3' },
  { name: 'Author 4' },
  { name: 'Author 5' },
];

// Type definitions
const typeDefs = gql`
  type Book {
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks: [Book!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: () => books,
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});