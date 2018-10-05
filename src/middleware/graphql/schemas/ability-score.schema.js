const { gql } = require('apollo-server');

module.exports = gql`
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
`;
