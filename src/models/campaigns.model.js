// campaigns-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const uniqueArrayPlugin = require('mongoose-unique-array');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const campaigns = new Schema({
    name: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: 'characters', unique: true }]
  }, { timestamps: true });
  campaigns.plugin(uniqueArrayPlugin);

  return mongooseClient.model('campaigns', campaigns);
};
