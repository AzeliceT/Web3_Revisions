const { ApolloServer, gql } = require('apollo-server');

// Sample data
const books = [
  { title: 'Book 1', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' },
  { title: 'Book 3', author: 'Author 1' },
  { title: 'Book 4', author: 'Author 3' },
  { title: 'Book 5', author: 'Author 4' },
  { title: 'Book 6', author: 'Author 5' },
  { title: 'Book 7', author: 'Author 2' },
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
  type Query {
    bookCount: Int!
    authorCount: Int!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});