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
    <div className="flex flex-col items-center pb-7">
      <h1>GitHub user search</h1>
      <div className="p-5">
        <Input name="testing" onChange={inputHandler}/>
      </div>
      <div className="flex flex-col gap-4 max-w-3xl">
        {data?.map(user => <UserCard user={user}/>)}
      </div>
    </div>
  )
};

export default HomePage;
