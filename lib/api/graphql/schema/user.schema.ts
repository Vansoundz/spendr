import gql from "graphql-tag";

const category = gql`
  type User {
    email: String!
    email_verified: Boolean!
    name: String!
    nickname: String!
    picture: String!
    sub: ID!
    updated_at: String!
    id: ID!
    token: String!
    user_id: ID!
    last_ip: String!
    last_login: String!
    logins_count: Int!
  }

  input UserInput {
    email: String
    email_verified: Boolean
    name: String
    nickname: String
    picture: String
  }
`;

export default category;
