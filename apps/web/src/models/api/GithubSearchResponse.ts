import { GithubEdge } from "./atoms/GithubEdge.ts"
import { GithubError } from "./atoms/GithubError.ts"

export interface GithubSearchResponse<T> {
  data: {
    search: {
      edges: GithubEdge<T>[]
    }
  },
  errors?: GithubError[]
}