import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blog = {
  __typename?: 'Blog';
  authorId: Scalars['Float'];
  blogType: Array<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  imageUrl?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  points: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BlogInput = {
  blogType: Array<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type BlogResponse = {
  __typename?: 'BlogResponse';
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Blog>>;
  errors?: Maybe<Array<FieldError>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  postBlog: BlogResponse;
  register: UserResponse;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationPostBlogArgs = {
  input: BlogInput;
};


export type MutationRegisterArgs = {
  options: UserCredInput;
};

export type Query = {
  __typename?: 'Query';
  getBlogs: BlogResponse;
  getUsers: UserResponse;
  me?: Maybe<User>;
  test: Scalars['String'];
};


export type QueryGetBlogsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserCredInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};

export type ErrorsFragmentFragment = { __typename?: 'FieldError', field: string, message: string };

export type ResponseFragmentFragment = { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> };

export type UserFragmentFragment = { __typename?: 'User', id: number, username: string };

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type CreateBlogsMutationVariables = Exact<{
  input: BlogInput;
}>;


export type CreateBlogsMutation = { __typename?: 'Mutation', postBlog: { __typename?: 'BlogResponse', blog?: Maybe<{ __typename?: 'Blog', link: string, title: string, text: string, id: number, createdAt: string, authorId: number }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerOptions: UserCredInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> } };

export type GetBlogQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetBlogQuery = { __typename?: 'Query', getBlogs: { __typename?: 'BlogResponse', blogs?: Maybe<Array<{ __typename?: 'Blog', id: number, title: string, text: string, link: string, blogType: Array<string>, imageUrl?: Maybe<string> }>> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', username: string, id: number }> };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
}
    `;
export const ErrorsFragmentFragmentDoc = gql`
    fragment ErrorsFragment on FieldError {
  field
  message
}
    `;
export const ResponseFragmentFragmentDoc = gql`
    fragment ResponseFragment on UserResponse {
  user {
    ...UserFragment
  }
  errors {
    ...ErrorsFragment
  }
}
    ${UserFragmentFragmentDoc}
${ErrorsFragmentFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    ...ResponseFragment
  }
}
    ${ResponseFragmentFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateBlogsDocument = gql`
    mutation CreateBlogs($input: BlogInput!) {
  postBlog(input: $input) {
    blog {
      link
      title
      text
      id
      createdAt
      authorId
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useCreateBlogsMutation() {
  return Urql.useMutation<CreateBlogsMutation, CreateBlogsMutationVariables>(CreateBlogsDocument);
};
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    user {
      ...UserFragment
    }
    errors {
      field
      message
    }
  }
}
    ${UserFragmentFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($registerOptions: UserCredInput!) {
  register(options: $registerOptions) {
    user {
      ...UserFragment
    }
    errors {
      field
      message
    }
  }
}
    ${UserFragmentFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetBlogDocument = gql`
    query GetBlog($limit: Int!) {
  getBlogs(limit: $limit) {
    blogs {
      id
      title
      text
      link
      blogType
      imageUrl
    }
  }
}
    `;

export function useGetBlogQuery(options: Omit<Urql.UseQueryArgs<GetBlogQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBlogQuery>({ query: GetBlogDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    username
    id
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};