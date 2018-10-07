const users = require('./users/users.service.js');
const characters = require('./characters/characters.service.js');
const abilityScores = require('./ability-scores/ability-scores.service.js');
const campaigns = require('./campaigns/campaigns.service.js');
const skills = require('./skills/skills.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(characters);
  app.configure(abilityScores);
  app.configure(campaigns);
  app.configure(skills);
};
