import { FC } from 'react';
import { Repository } from '../../../models/Repository.ts';
import { RepositoryCard } from './RepositoryCard.tsx';
import { API } from '../../../lib/API.ts';
import { RepositoriesSectionContentSkeleton } from './skeletons/RepositoriesSectionContent.skeleton.tsx';
import { useGetDebounced } from '../../../hooks/api/useGetDebouced.tsx';

interface RepositoriesSectionContentProps {
  username: string;
  repoName: string;
  language?: string;
}

export const RepositoriesSectionContent: FC<RepositoriesSectionContentProps> = ({ username, repoName, language }) => {
  const { data: repositories, isLoading } = useGetDebounced<Repository[]>(API.repositories.findBy, { username, repoName, language });
  
  if (isLoading) {
    return <RepositoriesSectionContentSkeleton/>
  }

  if (!repositories) {
    return <div>Error loading user...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {repositories?.length
        ? repositories.map((repo) => <RepositoryCard repository={repo} key={`repository-${repo.name}`}/>)
        : <span>No repositories found</span>
      }
    </div>
  );
};
