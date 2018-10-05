const findMapper = (app, service, context, method = 'find') => {
  return app.service(service)[method](context).then(({ data }) => data);
};

module.exports = {
  findMapper
};
