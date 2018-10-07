// ability-scores-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const abilityScores = new Schema({
    name: { type: String, required: true },
    identifier: { type: String, required: true, index: true, unique: true },
    description: { type: String },
  }, { timestamps: true });

  return mongooseClient.model('ability-scores', abilityScores);
};
