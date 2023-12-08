import { GithubIcon } from '@mvst/ui';
import React, { type FC } from 'react';
import { UserSearcher } from '../components/UserSearcher.tsx';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';

interface HeaderTemplateProps {
  children: React.ReactNode;
}

export const HeaderTemplate: FC<HeaderTemplateProps> = ({ children }) => {
  const { navigate } = useRouter();

  const handleOnClickIcon = () => {
    navigate(Public.HOME.route);
  }

  return (
    <div className="h-screen">
      <div className="h-14 border-b border-solid border-customGray-600 z-50 w-full flex items-center px-4 gap-4">
        <div onClick={handleOnClickIcon} className="cursor-pointer">
          <GithubIcon size={32}/>
        </div>
        <UserSearcher/>
      </div>
      <div className="h-full">
        {children}
      </div>
    </div>
  );
};
