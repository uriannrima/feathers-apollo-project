const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
  }

  type Character {
    name: String
    userId: String
  }
  
  type Query {
    users: [User]
    characters: [Character]
  }
`;
