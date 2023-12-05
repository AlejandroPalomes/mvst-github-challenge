export interface User {
    login: string,
    name: string,
    avatarUrl: string,
    bio: string,
    location?: string,
    company?: string,
    repositories: {
      totalCount: number
    }
}