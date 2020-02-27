/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
