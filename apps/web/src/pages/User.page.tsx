import { Avatar, Button, Input } from '@mvst-ui';
import { FC, useEffect, useState } from 'react';
import { useGet } from '../hooks/api/useGet.tsx';
import { API } from '../lib/API.ts';
import { User } from '../models/User.ts';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { useParams } from 'react-router';
import { Repository } from '../models/Repository.ts';
import { UserLanguage } from '../models/UserLanguage.ts';

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

  const { data: user, error, isLoading } = useGet<User>(API.users.getInfoById({ username: userId! }));
  const { data: repositories, refetch } = useGet<Repository[]>(API.repositories.findBy({ username: userId!, partialName: searchQuery, language }));
  const { data: languages } = useGet<UserLanguage>(API.repositories.findAllLanguages({ username: userId! }));

  const { search } = useRouter();

  console.log({ user, error, isLoading, search, languages });

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

  return (
    <>
      <Button onClick={() => goBack()}>Go back</Button>
      <div>
        <Avatar src={user.avatarUrl}/>
      </div>
      <h1>{user.name}</h1>
      <p className="read-the-docs">
        {user.bio}
      </p>
      <select onChange={({ target }) => handleOnSelectLanguage(target.value)}>
        <option value={undefined}>All</option>
        {formattedLanguages.map(language => <option value={language}>{language}</option>)}
      </select>
      <div className="card">
        <Input name="testing" onChange={inputHandler}/>
      </div>
      {repositories?.map((repo) => <div className="card">
        {repo.name}
      </div>)}
    </>
  )
};

export default UserPage;
