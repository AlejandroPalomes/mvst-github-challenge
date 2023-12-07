import { FC } from 'react';

interface RepositoriesSectionContentSkeletonProps {
}

export const RepositoriesSectionContentSkeleton: FC<RepositoriesSectionContentSkeletonProps> = () => {

  return <div className="flex flex-col gap-4">
    <div className="p-4 h-24 bg-customGray-700 rounded-md w-full flex flex-col gap-2">
      <span className="h-4 bg-customGray-800 rounded w-52 block"/>
      <span className="h-4 bg-customGray-800 rounded w-64 block"/>
      <div className="flex flex-row gap-6">
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
      </div>
    </div>
    <div className="p-4 h-24 bg-customGray-700 rounded-md w-full flex flex-col gap-2">
      <span className="h-4 bg-customGray-800 rounded w-52 block"/>
      <span className="h-4 bg-customGray-800 rounded w-64 block"/>
      <div className="flex flex-row gap-6">
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
      </div>
    </div>
    <div className="p-4 h-24 bg-customGray-700 rounded-md w-full flex flex-col gap-2">
      <span className="h-4 bg-customGray-800 rounded w-52 block"/>
      <span className="h-4 bg-customGray-800 rounded w-64 block"/>
      <div className="flex flex-row gap-6">
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
        <span className="h-4 bg-customGray-800 rounded w-24 block"/>
      </div>
    </div>
  </div>
};
