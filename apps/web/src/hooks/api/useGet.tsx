import { useCallback, useState, useEffect } from 'react';

export type Fetcher<T> = () => Promise<T>;

export interface UseGetResult<T> {
  data?: T;
  isLoading: boolean;
  error: any;
}

interface GithubResponse {}

interface APIVariables {
  username?: string;
  repoName?: string;
  language?: string;
}

/**
 * Agnostic hook to perform GET calls to GitHub API
 * @param api - Function to call GitHub API. Must be from API.ts file
 * @param variables - Search params
 * @returns Response from GitHubAPI v4
 */
export const useGet = <T extends GithubResponse>(api: any, variables: APIVariables = {}): UseGetResult<T> => {

  const [data, setData] = useState<T | undefined>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { username, repoName, language } = variables;

  const doAPICall = useCallback(async (): Promise<void> => {
    try {
      const response = await api({ username, repoName, language })();
      setData(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, username, repoName, language])

  useEffect(() => {
    doAPICall();
  }, [doAPICall]);

  return { data, isLoading, error };
};
