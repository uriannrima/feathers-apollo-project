const { gql } = require('apollo-server');

module.exports = gql`  
  type Query {
    getUsers: [User]
    getCharacters: [Character]
    getAbilityScores: [AbilityScore]
  }
`;
