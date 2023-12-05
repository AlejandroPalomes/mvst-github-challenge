import { useLocation, useNavigate } from 'react-router-dom';

export interface LocationState {
  canGoBack?: boolean;
}

export interface NavigationOptions {
  replace?: boolean;
  canGoBack?: boolean;
}

interface UseRouterResult {
  navigate: (to: string, options?: NavigationOptions) => void;
  goBack: (defaultGoBackRoute?: string) => void;
  pathname: string;
  search: string;
}

export const useRouter = (): UseRouterResult => {
  const baseNavigate = useNavigate();
  const { state, pathname, search } = useLocation();

  const navigate = (to: string, options: NavigationOptions = {}) => {
    const { replace, canGoBack } = options;
    baseNavigate(to, {
      ...(replace && { replace: true }),
      state: {
        canGoBack: (canGoBack || (state as LocationState)?.canGoBack),
      }
    });
  };

  const goBack = (defaultGoBackRoute?: string) => {
    baseNavigate(defaultGoBackRoute as any || -1);
  };


  return {
    navigate,
    goBack,
    pathname,
    search
  };
};
