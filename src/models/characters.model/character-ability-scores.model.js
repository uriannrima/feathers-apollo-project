module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const characterAbilityScore = new Schema({
    _id: { type: Schema.Types.ObjectId, ref: 'ability-scores', unique: true },
    base: { type: Number, default: 10 },
    modifiers: { type: [Number], default: [] }
  });

  return characterAbilityScore;
};