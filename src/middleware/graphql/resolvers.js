module.exports = function (app) {
  return {
    Query: {
      users: () => {
        const Users = app.service('users');
        return Users.find().then(result => result.data);
      },
      characters: () => {
        const Characters = app.service('characters');
        return Characters.find().then(result => result.data);
      }
    }
  };
};