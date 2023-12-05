import { User } from "../models/User.ts";
import { UserQueries } from "./api/queries/UserQueries.ts";
import { doGet, githubSearchResponseParser } from "./helpers.ts";

export const API = {
  repositories: {
   find: (username: string, query: string) => `
{
  search(query: "user:${username} ${query}", type: REPOSITORY, first: 5) {
    edges {
      node {
        ... on Repository {
          name
          owner {
            login
          }
          description
          createdAt
        }
      }
    }
  }
}`
  },
  users: {
    find: (username: string) => `
{
  search(query: "${username} type:user", type: USER, first: 5) {
    edges {
      node {
        ... on User {
          login
          name
          avatarUrl
          bio
          location
          company
          repositories {
            totalCount
          }
        }
      }
    }
  }
}`,
  findByUsername: (param: string = '') =>
    doGet<User>(UserQueries.findByName(param), githubSearchResponseParser)
  },
};
