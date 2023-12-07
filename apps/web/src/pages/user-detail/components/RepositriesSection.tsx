import { API } from '../../../lib/API.ts';
import React, { FC, useEffect, useState } from 'react';
import { Input } from '@mvst-ui';
import { RepositoriesSectionContent } from './RepositoriesSectionContent.tsx';
import { Repository } from '../../../models/Repository.ts';
import { useGet } from '../../../hooks/api/useGet.tsx';
import { UserLanguage } from '../../../models/UserLanguage.ts';

const parseLanguage = (languages?: UserLanguage): string[] => {
  if (!languages) {
    return [];
  }

  const languageArray: string[] = [];

  languages.repositories.nodes.forEach(repo => {
    repo.languages.nodes.forEach(language => {
      if (!languageArray.includes(language.name)) {
        languageArray.push(language.name)
      }
    })
  })

  return languageArray.sort();
}

interface RepostioriesSectionProps {
  userId: string;
}

export const RepostioriesSection: FC<RepostioriesSectionProps> = ({ userId }): React.ReactNode => {
  const [language, setLanguage] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shouldRefetchOnUserIdChange, setShouldRefetchOnUserIdChange] = useState<string>(userId);
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const { data: repositories, refetch, isLoading } = useGet<Repository[]>(API.repositories.findBy({ username: userId!, partialName: searchQuery, language }));
  const { data: languages } = useGet<UserLanguage>(API.repositories.findAllLanguages({ username: userId! }));

  const formattedLanguages = parseLanguage(languages);

  useEffect(() => {
    return () => typingTimeout && clearTimeout(typingTimeout);
  });

  useEffect(() => {
    if (shouldRefetchOnUserIdChange !== userId) {
      refetch();
      setShouldRefetchOnUserIdChange(userId);
    }
  }, [refetch, userId, shouldRefetchOnUserIdChange]);

  const startTimeout = (value: string) => {
    return setTimeout(() => {
      setTypingTimeout(null);
      setSearchQuery(value);
      refetch();
    }, 500);
  };

  const inputHandler = (value: string) => {
    typingTimeout && clearTimeout(typingTimeout);
    setTypingTimeout(startTimeout(value));
  };

  const handleOnSelectLanguage = (value: string) => {
    setLanguage(value);
    refetch();
  };

  if (isLoading) {
    return <div>Skeleton...</div>
  }

  if (!repositories) {
    return <div>Error loading user...</div>;
  }

  return <>
    <div className="flex flex-row gap-3">
      <Input name="testing" onChange={inputHandler}/>
      <select onChange={({ target }) => handleOnSelectLanguage(target.value)}>
        <option value={undefined} key="language-option-all">All</option>
        {formattedLanguages.map(language => <option value={language} key={`language-${language}`}>{language}</option>)}
      </select>
    </div>
    <RepositoriesSectionContent repositories={repositories}/>
  </>;
};