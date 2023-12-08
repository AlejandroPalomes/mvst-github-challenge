export interface Repository {
  name: string;
  primaryLanguage?: RepositoryPrimaryLanguage;
  owner: RepositoryOwner;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RepositoryPrimaryLanguage {
  id: string;
  name: string;
  color: string;
}

interface RepositoryOwner {
  login: string;
}