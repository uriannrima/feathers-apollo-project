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

  return characterSkill;
};