const objectIdResolver = require('./object-id.resolver');
const userResolver = require('./user.resolver');
const queryResolver = require('./query.resolver');
const characterResolver = require('./character.resolver');
const abilityScoreResolver = require('./ability-score.resolver');
const skillResolver = require('./skill.resolver');

module.exports = {
  createResolvers: function (app) {
    return Object.assign({},
      objectIdResolver,
      userResolver(app),
      queryResolver(app),
      characterResolver(app),
      abilityScoreResolver(app),
      skillResolver(app)
    );
  }
};