// Initializes the `ability-scores` service on path `/ability-scores`
const createService = require('feathers-mongoose');
const createModel = require('../../models/ability-scores.model');
const hooks = require('./ability-scores.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ability-scores', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('ability-scores');

  service.hooks(hooks);
};
