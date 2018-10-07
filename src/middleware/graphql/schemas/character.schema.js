const { gql } = require('apollo-server');

module.exports = gql`
  type Character {
    _id: ObjectID
    name: String
    userId: String
    abilityScores: [CharacterAbilityScore]
    skills: [CharacterSkill]
  }
  
  extend type Query {
    getCharacters: [Character]
  }
`;
