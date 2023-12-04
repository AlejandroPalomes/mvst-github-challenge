// import { MutationStatus, QueryKey, RefetchOptions, useQuery, UseQueryOptions } from 'react-query';
// import { isAClientError, isUnauthorizedError } from '../../lib/network/helpers';
import axios from 'axios';

const MAX_RETRY = 3;

const GTIHUB_BASE_URL = 'https://api.github.com/graphql';

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

  const response = axios;

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
    data: response
    // isLoading,
    // error,
    // refetch,
    // isError,
    // status
  };
};
