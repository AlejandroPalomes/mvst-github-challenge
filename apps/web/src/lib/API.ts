import { Repository } from "../models/Repository.ts";
import { User } from "../models/User.ts";
import { UserLanguage } from "../models/UserLanguage.ts";
import { RepositoryQueries } from "./api/queries/RepositoryQueries.ts";
import { UserQueries } from "./api/queries/UserQueries.ts";
import { doGet, githubGetResponseParser, githubSearchResponseParser } from "./helpers.ts";

/**
 * API methods source file
 */
export const API = {
  repositories: {
    findBy: (variables: { username: string, repoName: string, language?: string }) => () =>
      doGet<Repository>(
        RepositoryQueries.findBy.query,
        githubSearchResponseParser,
        { query: RepositoryQueries.findBy.parseVariables(variables) }
      ),
    findAllLanguages: (variables: { username: string }) => () =>
      doGet<UserLanguage>(RepositoryQueries.findAllLanguages.query, githubGetResponseParser('user'), variables)
    },
  users: {
    findByUsername: (variables: { username: string }) => () =>
      doGet<User>(UserQueries.findByName(), githubSearchResponseParser, { query: `${variables.username} type:user`}),
    getInfoById: (variables: { username: string }) => () =>
      doGet<User>(UserQueries.getInfoById(), githubGetResponseParser('user'), variables)
    }
};
