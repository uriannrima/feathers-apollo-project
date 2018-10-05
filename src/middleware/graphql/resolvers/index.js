const userResolver = require('./user.resolver');
const queryResolver = require('./query.resolver');
const characterResolver = require('./character.resolver');
const abilityScoresResolver = require('./ability-scores.resolver');

module.exports = {
  createResolvers: function (app) {
    return Object.assign({},
      userResolver(app),
      queryResolver(app),
      characterResolver(app),
      abilityScoresResolver(app)
    );
  }
};