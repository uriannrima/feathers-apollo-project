const { gql } = require('apollo-server');

module.exports = gql`
  type Character {
    _id: String
    name: String
    userId: String
    abilityScores: [CharacterAbilityScore]
  }
`;
