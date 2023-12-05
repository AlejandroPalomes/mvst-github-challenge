import { GithubError } from "./atoms/GithubError.ts"

const GithubModels = <const>['user', 'repository'];
export type GithubModelType = typeof GithubModels[number];

export interface GithubGetResponse<T> {
  data: {
    [key in GithubModelType]: T
  },
  errors?: GithubError[]
}