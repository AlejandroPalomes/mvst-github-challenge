import { GithubIcon } from '@mvst-ui';
import React, { type FC } from 'react';
import { UserSearcher } from '../components/UserSearcher.tsx';

interface HeaderTemplateProps {
  children: React.ReactNode;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({ children }) => {
  return (
      <div className="h-screen">
        <div className="h-14 border-b border-solid border-gray-700 z-50 w-full flex items-center px-4 gap-4">
          <GithubIcon size={32}/>
          <UserSearcher/>
        </div>
        <div className="h-full">
          {children}
        </div>
      </div>
  );
};
