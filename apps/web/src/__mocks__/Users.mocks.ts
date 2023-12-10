import { User } from "../models/User.ts";

export const UsersMocks: User[] = [
  {
    login: 'JohnDoe',
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    email: 'john.doe@email.com',
    websiteUrl: 'https://www.johnDoe.com',
    bio: 'Nice anonymous user',
    status: {
      message: 'Hello world!',
      emoji: ':the-horns:',
    },
    location: 'Barcelona',
    company: 'Unknown Company',
    followers: {
      totalCount: 666,
    },
    following: {
      totalCount: 666,
    },
    repositories: {
      totalCount: 2,
      nodes: [
        {
          name: 'demo-repo-1',
          description: 'demo repository description',
          createdAt: '2021-01-16T11:15:54Z'
        },
        {
          name: 'demo-repo-2',
          description: 'demo repository description 2',
          createdAt: '2022-02-16T11:15:54Z'
        }
      ]
    }
  },
  {
    login: 'JohnIncmpleted',
    name: 'John Incompleted',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    bio: 'Nice anonymous user',
    followers: {
      totalCount: 0,
    },
    following: {
      totalCount: 0,
    },
    repositories: {
      totalCount: 2,
      nodes: [
        {
          name: 'demo-repo-1',
          description: 'demo repository description',
          createdAt: '2021-01-16T11:15:54Z'
        },
        {
          name: 'demo-repo-2',
          description: 'demo repository description 2',
          createdAt: '2022-02-16T11:15:54Z'
        }
      ]
    }
  }
]