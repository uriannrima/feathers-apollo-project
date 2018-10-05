const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const createResolvers = require('./resolvers');

module.exports = function (app) {
  const resolvers = createResolvers(app);
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      feathers: req.feathers
    })
  });
};
