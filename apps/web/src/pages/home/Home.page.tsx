import { Input } from '@mvst-ui';
import { FC, useEffect, useState } from 'react';
import { useGet } from '../../hooks/api/useGet.tsx';
import { API } from '../../lib/API.ts';
import { User } from '../../models/User.ts';
import { useRouter } from '../../hooks/router/useRouter.tsx';
import { Public } from '../../router/routes/Public.ts';
import { UserCard } from './components/UserCard.tsx';

const HomePage: FC = () => {
  const { navigate } = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const { data, error, isLoading, refetch } = useGet<User[]>(API.users.findByUsername({ username: searchQuery }));


  console.log({ data, error, isLoading });

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
      <div className="card">
        {data?.map(user => <button onClick={() => navigate(Public.USER.to(user.login))}>{user.login}</button>)}
      </div>
      <div className="card">
        <p className="text-red-600">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default HomePage;
