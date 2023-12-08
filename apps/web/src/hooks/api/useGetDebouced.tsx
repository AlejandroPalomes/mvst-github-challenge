import { useState, useEffect } from 'react';
import { useGet } from './useGet.tsx';
import { useDebounce } from '../helpers/useDebounce.ts';

export interface UseGetResult<T> {
  data?: T;
  isLoading: boolean;
  error: any;
}

interface GithubResponse {}

interface VariablesI {
  username?: string;
  repoName?: string;
  language?: string;
}

/**
 * Debounced version of useGet (500ms debounce)
 * 
 * @param api - Function to call GitHub API. Must be from API.ts file
 * @param variables - Search params
 * @returns Response from GitHubAPI v4
 */
export const useGetDebounced = <T extends GithubResponse>(api: any, variables: VariablesI = {}): UseGetResult<T> => {
  const { repoName: repoNameOriginal, username: usernameOriginal, language: languageOriginal } = variables;

  const [repoName, setRepoName] = useState<string | undefined>(repoNameOriginal);
  const [username, setUsername] = useState<string | undefined>(usernameOriginal);
  const [language, setLanguage] = useState<string | undefined>(languageOriginal);

  const useGetResult = useGet<T>(api, { repoName, username, language });

  const debouncedCallback = useDebounce((usernameDebounced?: string, repoNameDebounced?: string, languageDebounced?: string) => {
    setRepoName(repoNameDebounced);
    setUsername(usernameDebounced);
    setLanguage(languageDebounced);
  });

  useEffect(() => {
    debouncedCallback(usernameOriginal, repoNameOriginal, languageOriginal);
  }, [debouncedCallback, usernameOriginal, repoNameOriginal, languageOriginal]);

  return useGetResult;
};
