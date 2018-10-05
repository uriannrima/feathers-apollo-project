const { findMapper } = require('./utils');

module.exports = function (app) {
  return {
    Query: {
      getUsers: (root, args, context) => {
        return findMapper(app, 'users', context);
      },
      getCharacters: (root, args, context) => {
        return findMapper(app, 'characters', context);
      },
      getAbilityScores: (root, args, context) => {
        return findMapper(app, 'ability-scores', context);
      },
      getViewer: (root, args, { user }) => {
        return user;
      }
    }
  };
};