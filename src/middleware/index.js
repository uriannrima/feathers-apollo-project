// eslint-disable-next-line no-unused-vars
const createGraphQLServer = require('./graphql');
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  const graphQLServer = createGraphQLServer(app);
  graphQLServer.applyMiddleware({ app });
};
