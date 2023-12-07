import { FC, useEffect, useState } from 'react';
import { Repository } from '../../../models/Repository.ts';
import { RepositoryCard } from './RepositoryCard.tsx';
import { useGet } from '../../../hooks/api/useGet.tsx';
import { API } from '../../../lib/API.ts';
import { RepositoriesSectionContentSkeleton } from './skeletons/RepositoriesSectionContent.skeleton.tsx';

interface RepositoriesSectionContentProps {
  userId: string;
  searchQuery: string;
  language?: string;
}

export const RepositoriesSectionContent: FC<RepositoriesSectionContentProps> = ({ userId, searchQuery, language }) => {
  const [refetchOnUserId, setRefetchOnUserId] = useState<string>(userId);
  const [refetchOnQuery, setRefetchOnQuery] = useState<string>(searchQuery);
  const [refetchOnLanguage, setRefetchOnLanguage] = useState<string | undefined>(language);
  const { data: repositories, refetch, isLoading } = useGet<Repository[]>(API.repositories.findBy({ username: userId, partialName: searchQuery, language }));

  useEffect(() => {
    const shouldRefetch = refetchOnQuery !== searchQuery || refetchOnUserId !== userId || refetchOnLanguage !== language;
    if (shouldRefetch) {
      refetch();
      setRefetchOnUserId(userId);
      setRefetchOnQuery(searchQuery);
      setRefetchOnLanguage(language);
    }
  }, [refetch, searchQuery, userId, language, refetchOnQuery, refetchOnUserId, refetchOnLanguage]);

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
