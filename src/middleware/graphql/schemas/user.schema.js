const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
    characters: [Character]
  }
`;
