// import { MutationStatus, QueryKey, RefetchOptions, useQuery, UseQueryOptions } from 'react-query';
// import { isAClientError, isUnauthorizedError } from '../../lib/network/helpers';
import axios from 'axios';

// const MAX_RETRY = 3;

// const GTIHUB_BASE_URL = 'https://api.github.com/graphql';

export type Fetcher<T> = () => Promise<T>;

// export type UseGetOptions = UseQueryOptions;

export interface UseAPIResult<T> {
  data?: T;
  // isLoading: boolean;
  // error: any;
  // isError: boolean;
  // refetch: (options?: RefetchOptions) => Promise<any>;
  // status: MutationStatus;
}

interface TempGithubResponse {}

// export const useGet = <T extends any>(uniqueKey: QueryKey, fetcher: Fetcher<T>, options?: UseGetOptions): UseAPIResult<T> => {
export const useGet = <T extends TempGithubResponse>(): UseAPIResult<T> => {

  //TODO Move this to a file named API > API.users.find, and both variables need to be params from that
  const username = 'AlejandroPalomes';
  const partialString = 'mvst'
  const query = `
{
  search(query: "user:${username} ${partialString}", type: REPOSITORY, first: 5) {
    edges {
      node {
        ... on Repository {
          name
          owner {
            login
          }
          description
          createdAt
        }
      }
    }
  }
}
`;

let data;
  axios.post('https://api.github.com/graphql', {
    query: query
  }, {
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      const repositories = response.data.data.search.edges.map((edge: any) => edge.node); //TODO Remove any type
      data = repositories;
      console.log(repositories);
    })
    .catch(error => {
      console.error('Error:', error.response ? error.response.data : error.message);
    });

  // const { isLoading, error, isError, data, refetch, status } = useQuery<T>(uniqueKey, fetcher, {
  //   notifyOnChangeProps: ['data', 'error'],
  //   retry: (failureCount: number, error) => {
  //     if (error && isAClientError(error)) {
  //       return false;
  //     }

  //     if (error && isUnauthorizedError(error)) {
  //       return false;
  //     }

  //     return failureCount < MAX_RETRY;
  //   },
  //   ...options as any
  // });

  // query PostsForAuthor {
  //   author(id: 1) {
  //     firstName
  //     posts {
  //       title
  //       votes
  //     }
  //   }
  // }



  // const { logout } = useAuth();

  // if (error) {
  //   if (isUnauthorizedError(error)) {
  //     console.log('Error force logout!!');
  //     logout().catch(console.error);
  //   }
  // }

  return {
    data
    // isLoading,
    // error,
    // refetch,
    // isError,
    // status
  };
};
