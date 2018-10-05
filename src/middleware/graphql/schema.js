const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
    characters: [Character]
  }

  type Character {
    _id: String
    name: String
    userId: String
    abilityScores: [CharacterAbilityScore]
  }

  interface IAbilityScore {
    _id: String
    name: String
    identifier: String
    description: String
  }

  type AbilityScore implements IAbilityScore {
    _id: String
    name: String
    identifier: String
    description: String
  }

  type CharacterAbilityScore implements IAbilityScore {
    _id: String
    name: String
    identifier: String
    description: String
    base: Int
    modifiers: [Int]
  }
  
  type Query {
    users: [User]
    characters: [Character]
    abilityScores: [AbilityScore]
  }
`;
