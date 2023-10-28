import { gql } from "graphql-tag"

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    name: String!
    email: String!
    phone: String!
    phoneVerificationCode: String
    phoneVerificationExpiry: Date
    isAdmin: Boolean
    isVerified: Boolean
    reviews: [Review]
    savedLocations: [Location]
    accessToken: String
    refreshToken: [String]
    provider: String
    brithday: String
    reviewCount: Int
    createdAtFormatted: String
  }

  type Query {
    getUserById(userId: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(
      name: String!
      email: String
      phone: String!
      birthday: String
    ): User
  }
`
