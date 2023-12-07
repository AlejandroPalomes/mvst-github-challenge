export interface Repository {
  name: string;
  primaryLanguage?: RepositoryPrimaryLanguage;
  owner: RepositoryOwner;
  description?: string;
  createdAt: string;
}

export interface RepositoryPrimaryLanguage {
  id: string;
  name: string;
}

interface RepositoryOwner {
  login: string;
}