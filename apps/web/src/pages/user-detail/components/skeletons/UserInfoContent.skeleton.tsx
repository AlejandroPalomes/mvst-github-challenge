import { FC } from 'react';

interface UserInfoContentSkeletonProps {
}

export const UserInfoContentSkeleton: FC<UserInfoContentSkeletonProps> = () => {

  return <>
    <div className="w-20 h-20 rounded-full bg-customGray-700"/>
    <div className="flex flex-col gap-2">
      <span className="h-4 bg-customGray-700 rounded w-40"/>
      <span className="h-4 bg-customGray-700 rounded w-32"/>
      <span className="mt-6 h-32 bg-customGray-700 rounded w-w-56 block"/>
    </div>
  </>
};
