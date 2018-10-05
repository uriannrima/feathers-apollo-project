const assert = require('assert');
const app = require('../../src/app');

describe('\'ability-scores\' service', () => {
  it('registered the service', () => {
    const service = app.service('ability-scores');

    assert.ok(service, 'Registered the service');
  });
});
