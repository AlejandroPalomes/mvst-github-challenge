import { FC, Suspense } from 'react';
import { PublicRoutes } from './PublicRoutes.tsx';
import { LoadingPage } from '../pages/Loading.page.tsx';

export const Router: FC = () => {
  return (
      <Suspense fallback={<LoadingPage/>}>
        <PublicRoutes/>
      </Suspense>
  );
};
