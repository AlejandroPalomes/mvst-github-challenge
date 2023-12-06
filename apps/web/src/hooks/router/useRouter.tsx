import { useLocation, useNavigate } from 'react-router-dom';

export interface LocationState {
  canGoBack?: boolean;
}

interface UseRouterResult {
  navigate: (to: string) => void;
  goBack: (defaultGoBackRoute?: string) => void;
  pathname: string;
  search: string;
}

export const useRouter = (): UseRouterResult => {
  const baseNavigate = useNavigate();
  const { pathname, search } = useLocation();

  const navigate = (to: string) => {
    baseNavigate(to);
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
