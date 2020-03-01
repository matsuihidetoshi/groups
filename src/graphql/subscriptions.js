/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      phone
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      phone
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      phone
      owner
    }
  }
`;
export const onCreateRank = /* GraphQL */ `
  subscription OnCreateRank {
    onCreateRank {
      id
      name
      score
    }
  }
`;
export const onUpdateRank = /* GraphQL */ `
  subscription OnUpdateRank {
    onUpdateRank {
      id
      name
      score
    }
  }
`;
export const onDeleteRank = /* GraphQL */ `
  subscription OnDeleteRank {
    onDeleteRank {
      id
      name
      score
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult($owner: String) {
    onCreateResult(owner: $owner) {
      id
      score
      success
      owner
    }
  }
`;
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult($owner: String) {
    onUpdateResult(owner: $owner) {
      id
      score
      success
      owner
    }
  }
`;
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult($owner: String) {
    onDeleteResult(owner: $owner) {
      id
      score
      success
      owner
    }
  }
`;
