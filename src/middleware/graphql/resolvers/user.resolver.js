const { findMapper } = require('./utils');

module.exports = function (app) {
  return {
    User: {
      characters: ({ _id: userId }) => {
        const Characters = app.service('characters');
        return Characters.find({
          query: {
            userId,
            $populate: 'abilityScores._id'
          }
        }).then(({ data }) => {
          console.log(data[0].abilityScores);
          return data;
        });
        // return findMapper(app, 'characters', { query: { userId, $populate: 'abilityScores' } });
      }
    }
  };
};