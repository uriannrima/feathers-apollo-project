const findMapper = (app, service, context, method = 'find') => {
  return app.service(service)[method](context).then(({ data }) => data);
};

module.exports = function (app) {
  return {
    User: {
      characters: ({ _id: userId }) => {
        return findMapper(app, 'characters', { query: { userId } });
      }
    },
    Query: {
      users: (root, args, context) => {
        return findMapper(app, 'users', context);
      },
      characters: (root, args, context) => {
        return findMapper(app, 'characters', context);
      }
    }
  };
};