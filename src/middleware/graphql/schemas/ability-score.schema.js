const { gql } = require('apollo-server');

module.exports = gql`
  interface IAbilityScore {
    _id: ObjectID
    name: String
    identifier: String
    description: String
  }

  type AbilityScore implements IAbilityScore {
    _id: ObjectID
    name: String
    identifier: String
    description: String
  }

  type CharacterAbilityScore implements IAbilityScore {
    _id: ObjectID
    name: String
    identifier: String
    description: String
    base: Int
    modifiers: [Int]
  }

  extend type Query {
    getAbilityScores: [AbilityScore]
  }
`;
