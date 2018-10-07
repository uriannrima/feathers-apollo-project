const mongoose = require('mongoose');

module.exports = function (app) {

  const mongodb = app.get('mongodb');
  const fallback = app.get('fallback');
  let connectionString = mongodb;
  ['DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT', 'DB_NAME'].map(parameter => {
    connectionString = connectionString.replace(parameter, process.env[parameter]);
  });

  mongoose.connect(connectionString, { useNewUrlParser: true }).then().catch(() => {
    return mongoose.connect(fallback, { useNewUrlParser: true });
  });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
