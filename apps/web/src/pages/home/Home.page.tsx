import { Input } from '@mvst-ui';
import { FC, useEffect, useState } from 'react';
import { useGet } from '../../hooks/api/useGet.tsx';
import { API } from '../../lib/API.ts';
import { User } from '../../models/User.ts';
import { UserCard } from './components/UserCard.tsx';

const HomePage: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typingTimeout, setTypingTimeout] = useState<any>(null);


  const { data, refetch } = useGet<User[]>(API.users.findByUsername({ username: searchQuery }));

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

  return (
    <>
      <h1>GitHub user search</h1>
      <div className="card">
        <Input name="testing" onChange={inputHandler}/>
      </div>
      {data?.map(user => <UserCard user={user}/>)}
    </>
  )
};

export default HomePage;
