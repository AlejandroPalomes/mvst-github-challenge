import { API } from '../../../lib/API.ts';
import React, { FC, useEffect, useState } from 'react';
import { Dropdown, Input } from '@mvst/ui';
import { RepositoriesSectionContent } from './RepositoriesSectionContent.tsx';
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

interface RepositoriesSectionProps {
  username: string;
}

export const RepositoriesSection: FC<RepositoriesSectionProps> = ({ username }): React.ReactNode => {
  const [language, setLanguage] = useState<string>();
  const [repoName, setRepoName] = useState<string>('');

  const { Item } = Dropdown;

  const { data: languages } = useGet<UserLanguage>(API.repositories.findAllLanguages, { username });
  const formattedLanguages = parseLanguage(languages);

  /**
   * Clear data after username change
   */
  useEffect(() => {
    setLanguage(undefined);
    setRepoName('');
  }, [username]);

  const inputHandler = (value: string) => {
    setRepoName(value);
  };

  const handleOnSelectLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-left text-2xl lg:text-4xl font-bold hidden md:block">Repositories</h3>
      <div className="flex flex-col xl:flex-row gap-3 items-end">
        <div className="w-56 min-w-min xl:order-2">
          <Dropdown onChange={handleOnSelectLanguage} placeholder='Select language' headerTitle={language || 'Select language'}>
            <Item>All</Item>
            {formattedLanguages.map(language =>
              <Item key={`language-${language}`} value={language}>{language}</Item>)}
          </Dropdown>
        </div>
        <div className="xl:order-1 w-full">
          <Input onChange={inputHandler} placeholder="Search repository..." value={repoName}/>
        </div>
      </div>
      <RepositoriesSectionContent repoName={repoName} username={username} language={language}/>
    </div>
  );
};