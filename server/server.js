const { typeDefs, resolvers } = require('./schema/book_neo4j.js');
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});