const objectIdSchema = require('./object-id.schema');
const abilityScoreSchema = require('./ability-score.schema');
const skillSchema = require('./skill.schema');
const characterSchema = require('./character.schema');
const querySchema = require('./query.schema');
const userSchema = require('./user.schema');

module.exports = [
  objectIdSchema,
  abilityScoreSchema,
  skillSchema,
  characterSchema,
  querySchema,
  userSchema
];