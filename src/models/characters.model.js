// characters-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const uniqueArrayPlugin = require('mongoose-unique-array');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const characterSkill = new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'skills' },
    classSkill: { type: Boolean, default: false },
    subValues: { type: [String], default: [] },
    rank: { type: Number, default: 0 },
    miscModifier: { type: Number, default: 0 },
    hiddenModifier: { type: Number, default: 0 }
  });

  const characterAbilityScore = new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'ability-scores', unique: true },
    base: { type: Number, default: 0 },
    modifiers: { type: [Number], default: [] }
  });

  const minimumAbilityScores = 6;
  const characters = new Schema({
    name: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users', index: true },
    abilityScores: {
      type: [characterAbilityScore],
      required: true,
      default: undefined,
      validate: function () {
        return this.abilityScores.length >= minimumAbilityScores;
      }
    },
    skills: {
      type: [characterSkill]
    }
  }, { timestamps: true });
  characters.plugin(uniqueArrayPlugin);

  return mongooseClient.model('characters', characters);
};
