const { ApolloServer } = require('apollo-server-express');
const { authenticate } = require('@feathersjs/authentication').express;

const typeDefs = require('./schemas');
const { createResolvers } = require('./resolvers');

const createContext = ({ req }) => {
  return new Promise((resolve) => {
    const resolveContext = () => {
      const context = Object.assign({}, req.feathers, { headers: req.headers });
      resolve(context);
    };

    try {
      authenticate('jwt')(req, {}, () => {
        resolveContext();
      });
    } catch (error) {
      resolveContext();
    }
  });
};

module.exports = function (app) {
  const resolvers = createResolvers(app);
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext
  });
};
