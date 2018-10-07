const { findMapper } = require('./utils');

module.exports = function (app) {
  return {
    User: {
      characters: ({ _id: userId }) => {
        return findMapper(app, 'characters', { query: { userId } });
      }
    }
  };
};