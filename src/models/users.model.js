// users-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const users = new Schema({
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String }
  }, { timestamps: true });

  return mongooseClient.model('users', users);
};
