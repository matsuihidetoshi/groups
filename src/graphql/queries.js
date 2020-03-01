/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        owner
      }
      nextToken
    }
  }
`;
export const getRank = /* GraphQL */ `
  query GetRank($id: ID!) {
    getRank(id: $id) {
      id
      name
      score
    }
  }
`;
export const listRanks = /* GraphQL */ `
  query ListRanks(
    $filter: ModelRankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        score
      }
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
      id
      score
      success
      owner
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        score
        success
        owner
      }
      nextToken
    }
  }
`;
