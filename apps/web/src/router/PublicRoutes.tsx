import { FC } from 'react';
import { BaseRoutes } from './BaseRoutes.tsx';
import { LazyLoader } from '../utils/LazyLoader.ts';
import { Public } from './routes/Public.ts';
import { Route } from 'react-router-dom';

const Home = LazyLoader(() => import('../pages/home/Home.page.tsx'));
const User = LazyLoader(() => import('../pages/user-detail/User.page.tsx'));

export const PublicRoutes: FC = (props) => {
  return <BaseRoutes>
    <Route path={Public.HOME.route} element={<Home/>} {...props}/>
    <Route path={Public.USER.route} element={<User/>} {...props}/>
  </BaseRoutes>;
};
