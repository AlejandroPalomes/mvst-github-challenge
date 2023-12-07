import { FC } from 'react';
import { Repository } from '../../../models/Repository.ts';
import { RepositoryCard } from './RepositoryCard.tsx';

// const userInfoStyles = "w-full md:w-2/5 max-w-md min-w-sm md:border-gray-700 md:border-l md:border-solid p-10 flex flex-col gap-3 text-left md:order-2";

interface RepositoriesSectionContentProps {
  repositories: Repository[];
}

export const RepositoriesSectionContent: FC<RepositoriesSectionContentProps> = ({ repositories }) => {

  console.log('rendered page');

  return (
    <div className="flex flex-col gap-4">
      {repositories?.length
        ? repositories.map((repo) => <RepositoryCard repository={repo} key={`repository-${repo.name}`}/>)
        : <span>No repositories found</span>
      }
    </div>
  );
};
