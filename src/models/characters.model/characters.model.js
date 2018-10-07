// characters-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const uniqueArrayPlugin = require('mongoose-unique-array');
const characterSkill = require('./character-skills.model');
const characterAbilityScore = require('./character-ability-scores.model');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const minimumAbilityScores = 6;
  const characters = new Schema({
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users', index: true },
    abilityScores: {
      type: [characterAbilityScore(app)],
      required: true,
      default: undefined,
      validate: function () {
        return this.abilityScores.length >= minimumAbilityScores;
      }
    },
    skills: {
      type: [characterSkill(app)]
    }
  }, { timestamps: true });
  characters.plugin(uniqueArrayPlugin);

  return mongooseClient.model('characters', characters);
};
