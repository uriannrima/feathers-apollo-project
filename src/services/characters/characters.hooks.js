const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');

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
