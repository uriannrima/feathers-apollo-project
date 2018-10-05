const { findMapper } = require('./utils');

module.exports = function (app) {
  return {
    Query: {
      users: (root, args, context) => {
        return findMapper(app, 'users', context);
      },
      characters: (root, args, context) => {
        return findMapper(app, 'characters', context);
      },
      abilityScores: (root, args, context) => {
        return findMapper(app, 'ability-scores', context);
      }
    }
  };
};