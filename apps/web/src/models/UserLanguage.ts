export interface UserLanguage {
    repositories: {
      nodes: UserLanguageRepository[]
    }
}

interface UserLanguageRepository {
  languages: {
    nodes: { name: string }[]
  }
}