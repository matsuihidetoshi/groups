/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      phone
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      phone
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      phone
      owner
    }
  }
`;
export const createRank = /* GraphQL */ `
  mutation CreateRank(
    $input: CreateRankInput!
    $condition: ModelRankConditionInput
  ) {
    createRank(input: $input, condition: $condition) {
      id
      name
      score
    }
  }
`;
export const updateRank = /* GraphQL */ `
  mutation UpdateRank(
    $input: UpdateRankInput!
    $condition: ModelRankConditionInput
  ) {
    updateRank(input: $input, condition: $condition) {
      id
      name
      score
    }
  }
`;
export const deleteRank = /* GraphQL */ `
  mutation DeleteRank(
    $input: DeleteRankInput!
    $condition: ModelRankConditionInput
  ) {
    deleteRank(input: $input, condition: $condition) {
      id
      name
      score
    }
  }
`;
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
      id
      scores
      successes
      owner
    }
  }
`;
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
      id
      scores
      successes
      owner
    }
  }
`;
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
      id
      scores
      successes
      owner
    }
  }
`;
