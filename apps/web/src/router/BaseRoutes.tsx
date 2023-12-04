import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Public } from './routes/Public.ts';
import { ErrorPage } from '../pages/Error.page.tsx';
import { NotFound404Page } from '../pages/NotFound404.page.tsx';

interface BaseRoutesProps {
  children: React.ReactNode;
}

export const BaseRoutes: FC<BaseRoutesProps> = ({ children }) => {
  return <Routes>
    {children}
    <Route path={Public.ERROR.route} element={<ErrorPage/>}/>
    <Route path="*" element={<NotFound404Page/>}/>
  </Routes>;
};
