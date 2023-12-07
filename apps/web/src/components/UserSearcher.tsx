import { DropdownSearcher } from '@mvst-ui';
import { useState, type FC, useEffect } from 'react';
import { useGet } from '../hooks/api/useGet.tsx';
import { User } from '../models/User.ts';
import { API } from '../lib/API.ts';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';

export interface UserSearcherProps {
}

export const UserSearcher: FC<UserSearcherProps> = () => {

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

	const { navigate } = useRouter();

	const handleOnClickCard = (user: string) => () => {
		navigate(Public.USER.to(user));
	}

	return (
		<DropdownSearcher onChange={inputHandler} placeholder="Search user...">
			{searchQuery.length ? data?.length
				?	data.map(user =>
					<DropdownSearcher.Item onSelect={handleOnClickCard(user.login)}>{user.login}</DropdownSearcher.Item>
					)
				: <DropdownSearcher.Item>No users found</DropdownSearcher.Item> : null
			}
		</DropdownSearcher>
	);
};
