export interface User {
    login: string;
    name: string;
    avatarUrl: string;
    email?: string;
    websiteUrl?: string;
    bio: string;
    status?: {
      message?: string;
      emoji?: string;
    };
    location?: string;
    company?: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
      nodes: UserRepository[];
    }
}

interface UserRepository {
  name: string;
  description: string;
  createdAt: string;
}