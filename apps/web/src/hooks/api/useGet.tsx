import { useCallback, useState, useEffect } from 'react';

export type Fetcher<T> = () => Promise<T>;

export interface UseGetResult<T> {
  data?: T;
  isLoading: boolean;
  error: any;
  refetch: () => void;
}

type FetcherType<T> = (param?: string) => Promise<T>

interface TempGithubResponse {}

export const useGet = <T extends TempGithubResponse>(fetcher: FetcherType<T>, params: string): UseGetResult<T> => {

  const [data, setData] = useState<T | undefined>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doAPICall = useCallback(async (): Promise<void> => {
    try {
      const response = await fetcher(params);
      setData(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [fetcher, params])

  useEffect(() => {
    doAPICall();
  }, [doAPICall]);

  const refetch = () => {
    setLoading(true);
    doAPICall();
  }

  return { data, isLoading, error, refetch };
};
