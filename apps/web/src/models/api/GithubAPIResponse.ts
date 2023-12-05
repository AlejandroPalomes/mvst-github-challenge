import { GithubGetResponse } from "./GithubGetResponse.ts";
import { GithubSearchResponse } from "./GithubSearchResponse.ts";

export type GithubAPIResponse<T> = GithubSearchResponse<T> | GithubGetResponse<T>;