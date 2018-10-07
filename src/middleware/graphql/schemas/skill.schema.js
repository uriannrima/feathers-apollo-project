const { gql } = require('apollo-server');

module.exports = gql`
  interface ISkill {
    _id: ObjectID
    name: String
    description: String
  }

  type Skill implements ISkill {
    _id: ObjectID
    name: String
    description: String
  }

  type CharacterSkill implements ISkill {
    _id: ObjectID
    name: String
    description: String
    classSkill: Boolean
    subValues: [String]
    rank: Int
    miscModifier: Int
    hiddenModifier: Int
  }

  extend type Query {
    getSkills: [Skill]
  }
`;
