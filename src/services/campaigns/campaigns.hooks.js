const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, restrictToOwner } = require('feathers-authentication-hooks');

const restrictHook = [
  restrictToOwner({
    idField: '_id',
    ownerField: 'ownerId'
  })
];

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [...restrictHook],
    get: [...restrictHook],
    create: [
      associateCurrentUser({
        idField: '_id',
        as: 'ownerId'
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
