import { BaseRoute } from './types.ts';

const PublicRoutesIdentifiers = <const>[
  'HOME',
  'USER',
  'ERROR'
];

type PublicRoutesType = typeof PublicRoutesIdentifiers[number];

/**
 * Public route paths
 */
export const Public = {
  HOME: {
    route: '/'
  },
  USER: {
    route: '/user/:userId',
    to: (userId: string) => `/user/${userId}` 
  },
  ERROR: {
    route: '/error'
  }
} satisfies Record<PublicRoutesType, BaseRoute>;
