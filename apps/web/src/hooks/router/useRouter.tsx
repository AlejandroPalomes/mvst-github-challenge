import { useNavigate } from 'react-router-dom';

interface UseRouterResult {
  navigate: (to: string) => void;
  goBack: (defaultGoBackRoute?: string) => void;
}
/**
 * Wrapper for useNavigate.
 * It extracts the basic methods needed to navigate
 * through the React app
 * @returns {UseRouterResult} - Navigation methods
 */
export const useRouter = (): UseRouterResult => {
  const baseNavigate = useNavigate();

  const navigate = (to: string) => {
    baseNavigate(to);
  };

  const goBack = (defaultGoBackRoute?: string) => {
    baseNavigate(defaultGoBackRoute as any || -1);
  };

  return {
    navigate,
    goBack
  };
};
