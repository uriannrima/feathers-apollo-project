const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ObjectID
    firstName: String
    lastName: String
    email: String
    characters: [Character]
  }

  extend type Query {
    getUsers: [User]
  }
`;
