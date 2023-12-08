import { Spinner } from '@mvst/ui';
import { FC } from 'react';

export const LoadingPage: FC = () => {
  return <div className="w-full h-full flex items-center justify-center">
    <Spinner size={64}/>
  </div>;
};
