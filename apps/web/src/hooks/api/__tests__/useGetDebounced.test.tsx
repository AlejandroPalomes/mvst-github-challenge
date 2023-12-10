// import { renderHook } from '@testing-library/react-hooks';
import { renderHook, waitFor } from '@testing-library/react';
import { useGetDebounced } from '../useGetDebounced.tsx';

class Promiser<T> {
  promise: Promise<T>;
  resolve: any;
  reject: any;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

export const useHook = (api: any) =>
  useGetDebounced(() => api.promise, {
    username: 'johnDoe'
  });

describe('useGet', () => {
  describe('with success', () => {
    const apiResponse = [{ name: 'John' }];

    it('should return in data the api response', async () => {
      const api = new Promiser();
      const { result } = renderHook(() => useHook(api));

      api.resolve(apiResponse);
      await waitFor(() => expect(result.current.data).toBe(apiResponse));
    });

    it('should return false in the isLoading', async () => {
      const api = new Promiser();
      const { result } = renderHook(() => useHook(api));

      api.resolve(apiResponse);
      await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    });

    it('should return false in the isError', async () => {
      const api = new Promiser();
      const { result } = renderHook(() => useHook(api));

      api.resolve(apiResponse);
      await waitFor(() => expect(result.current.error).toBeFalsy());
    });
  });

  describe('with errors', () => {
    const apiError = { error: 'Not found', code: 123 };
    it('should return in error the api error', async () => {
      const api = new Promiser();
      const { result } = renderHook(() => useHook(api));

      api.reject(apiError);
      await waitFor(() => expect(result.current.error).toBe(apiError));
    });

    it('should return false in the isLoading', async () => {
      const api = new Promiser();
      const { result } = renderHook(() => useHook(api));

      api.reject(apiError);
      await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    });
  });
});
