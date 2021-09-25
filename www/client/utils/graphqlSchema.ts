export const REGISTER_MUTATION = `
mutation Mutation($username: String!,$password:String!) {
  register(options:{username:$username, password :$password}) {
    user {
      username,createdAt
    }
    errors {
      field,message
    }
  }
}
`

export const LOGIN_MUTATION = `
mutation Mutation($username: String!,$password:String!) {
  login(options:{username:$username, password :$password}) {
    user {
      username,createdAt
    }
    errors {
      field,message
    }
  }
}
`
