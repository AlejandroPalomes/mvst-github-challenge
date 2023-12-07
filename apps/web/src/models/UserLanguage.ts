export interface UserLanguage {
    name: string;
    repositories: {
      nodes: UserLanguageRepository[]
    }
}

interface UserLanguageRepository {
  languages: {
    nodes: { name: string }[]
  }
}
