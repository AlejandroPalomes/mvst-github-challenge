import { API } from '../../../lib/API.ts';
import React, { FC, useEffect, useState } from 'react';
import { Dropdown, Input } from '@mvst-ui';
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

interface RepostioriesSectionProps {
  userId: string;
}

export const RepostioriesSection: FC<RepostioriesSectionProps> = ({ userId }): React.ReactNode => {
  const [shouldClearData, setShouldClearData] = useState<string>(userId);
  const [language, setLanguage] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const { Item } = Dropdown;

  const { data: languages } = useGet<UserLanguage>(API.repositories.findAllLanguages({ username: userId! }));

  const formattedLanguages = parseLanguage(languages);

  useEffect(() => {
    return () => typingTimeout && clearTimeout(typingTimeout);
  });

  useEffect(() => {
    if(shouldClearData !== userId) {
      setSearchQuery('');
      setLanguage(undefined);
      setShouldClearData(userId);
    } 
  }, [userId, shouldClearData]);

  const startTimeout = (value: string) => {
    return setTimeout(() => {
      setTypingTimeout(null);
      setSearchQuery(value);
    }, 500);
  };

  const inputHandler = (value: string) => {
    typingTimeout && clearTimeout(typingTimeout);
    setTypingTimeout(startTimeout(value));
  };

  const handleOnSelectLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-left text-2xl lg:text-4xl font-bold hidden md:block">{languages?.name}</h3>
      <div className="flex flex-col xl:flex-row gap-3 items-end">
        <div className="w-56 min-w-min xl:order-2">
          <Dropdown onChange={handleOnSelectLanguage} placeholder='Select language' headerTitle={language || 'Select language'}>
            <Item>All</Item>
            {formattedLanguages.map(language =>
              <Item key={`language-${language}`} value={language}>{language}</Item>)}
          </Dropdown>
        </div>
        <div className="xl:order-1 w-full">
          <Input name="testing" onChange={inputHandler} placeholder="Search repository..."/>
        </div>
      </div>
      <RepositoriesSectionContent searchQuery={searchQuery} userId={userId} language={language}/>
    </div>
  );
};