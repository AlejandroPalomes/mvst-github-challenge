import { FC, Suspense } from 'react';
import { PublicRoutes } from './PublicRoutes.tsx';
import { LoadingPage } from '../pages/Loading.page.tsx';
import { HeaderTemplate } from '../templates/HeaderTemplate.tsx';

export const Router: FC = () => {
  return (
      <Suspense fallback={<LoadingPage/>}>
        <HeaderTemplate>
          <PublicRoutes/>
        </HeaderTemplate>
      </Suspense>
  );
};
