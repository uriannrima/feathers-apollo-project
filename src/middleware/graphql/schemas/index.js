const abilityScoreSchema = require('./ability-score.schema');
const characterSchema = require('./character.schema');
const querySchema = require('./query.schema');
const userSchema = require('./user.schema');

module.exports = [
  abilityScoreSchema,
  characterSchema,
  querySchema,
  userSchema
];