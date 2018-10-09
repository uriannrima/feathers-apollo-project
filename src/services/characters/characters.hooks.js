const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');
// const { fastJoin } = require('feathers-hooks-common');

const RELATION = {
  userField: '_id',
  characterField: 'userId'
};

const restrictHook = [
  restrictToOwner({
    idField: RELATION.userField,
    ownerId: RELATION.characterField
  })
];

// const postResolvers = {
//   joins: {
//     abilityScores: (...args) => async (character, { app }) => {
//       const { abilityScores } = character;
//       const scoreService = app.service('ability-scores');
//       character.abilityScores = await Promise.all(abilityScores.map(async charScore => {
//         const { _id } = charScore;
//         const dbScore = await scoreService.get(_id);
//         return { ...dbScore, ...charScore };
//       }));
//     }
//   }
// };

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [...restrictHook],
    get: [...restrictHook],
    create: [
      associateCurrentUser({
        idField: RELATION.userField,
        as: RELATION.characterField
      })
    ],
    update: [...restrictHook],
    patch: [...restrictHook],
    remove: [...restrictHook]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
