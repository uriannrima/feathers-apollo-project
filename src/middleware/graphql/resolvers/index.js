const userResolver = require('./user.resolver');
const queryResolver = require('./query.resolver');
const characterResolver = require('./character.resolver');
const abilityScoreResolver = require('./ability-score.resolver');

module.exports = {
  createResolvers: function (app) {
    return Object.assign({},
      userResolver(app),
      queryResolver(app),
      characterResolver(app),
      abilityScoreResolver(app)
    );
  }
};