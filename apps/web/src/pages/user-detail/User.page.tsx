import { Avatar, Button, Input } from '@mvst-ui';
import { FC, useEffect, useState } from 'react';
import { useGet } from '../../hooks/api/useGet.tsx';
import { API } from '../../lib/API.ts';
import { User } from '../../models/User.ts';
import { useRouter } from '../../hooks/router/useRouter.tsx';
import { useParams } from 'react-router';
import { Repository } from '../../models/Repository.ts';
import { UserLanguage } from '../../models/UserLanguage.ts';
import { RepositoryCard } from './components/RepositoryCard.tsx';

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

const UserPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [language, setLanguage] = useState<string>();
  const [typingTimeout, setTypingTimeout] = useState<any>(null);
  const { userId } = useParams();
  const { goBack } = useRouter();

  const { data: user, isLoading } = useGet<User>(API.users.getInfoById({ username: userId! }));
  const { data: repositories, refetch } = useGet<Repository[]>(API.repositories.findBy({ username: userId!, partialName: searchQuery, language }));
  const { data: languages } = useGet<UserLanguage>(API.repositories.findAllLanguages({ username: userId! }));

  const formattedLanguages = parseLanguage(languages);

  useEffect(() => {
    return () => typingTimeout && clearTimeout(typingTimeout);
  });

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
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <div>Error with user</div>;
  }

  return <div className="flex flex-col-reverse md:flex-row h-full">
    <div className="w-full flex flex-col gap-4 px-20 py-8">
      <span className="text-4xl text-left mb-10 hidden md:block">{user.name}</span>
      <div className="flex flex-row gap-3">
        <Input name="testing" onChange={inputHandler}/>
        <select onChange={({ target }) => handleOnSelectLanguage(target.value)}>
          <option value={undefined}>All</option>
          {formattedLanguages.map(language => <option value={language}>{language}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-4">
        {repositories?.length
          ? repositories.map((repo) => <RepositoryCard repository={repo}/>)
          : <span>No repositories found</span>
        }
      </div>
    </div>
    <div className="w-full md:w-2/5 max-w-md min-w-sm md:border-gray-700 md:border-l md:border-solid p-10 flex flex-col gap-3 text-left">
      <Avatar src={user.avatarUrl} size="l"/>
      <div className="flex flex-col gap-0">
        <span className="text-lg font-bold leading-4">{user.name}</span>
        <span className="text-base text-gray-400">{user.login}</span>
      </div>
      <div>
        <p className="text-sm text-gray-400 hidden sm:block">
          {user.bio}
        </p>
        {user.websiteUrl && <a href={'https://' + user.websiteUrl} target="_blank">{user.websiteUrl}</a>}
      </div>
      <Button onClick={() => goBack()}>Go back</Button>
    </div>
  </div>
};

export default UserPage;
