const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schemas');
const { createResolvers } = require('./resolvers');

module.exports = function (app) {
  const resolvers = createResolvers(app);
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return Object.assign({}, req.feathers, { headers: req.headers });
    }
  });
};
