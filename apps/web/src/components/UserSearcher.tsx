import { Divider, Dropdown } from '@mvst/ui';
import { useState, type FC } from 'react';
import { User } from '../models/User.ts';
import { API } from '../lib/API.ts';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';
import { UserCard } from './UserCard.tsx';
import { useGetDebounced } from '../hooks/api/useGetDebouced.tsx';

export interface UserSearcherProps {
}

export const UserSearcher: FC<UserSearcherProps> = () => {
	const [username, setUsername] = useState<string>('');
  const { navigate } = useRouter();
  const { data } = useGetDebounced<User[]>(API.users.findByUsername, { username });

  const inputHandler = (value: string) => {
    setUsername(value);
  };

	const handleOnClickItem = (user: string) => () => {
    setUsername('');
		navigate(Public.USER.to(user));
	}

	return (
		<Dropdown variant="searcher" onChange={inputHandler} placeholder="Search user..." dropLimit={false} value={username}>
			{username.length ? data?.length
				?	data.map((user, index) => <div key={user.login}>
					<Dropdown.Item onSelect={handleOnClickItem(user.login)}>
						{<UserCard user={user}/>}
					</Dropdown.Item>
          {(data.length !== index + 1) && <Divider/>}
        </div>)
				: <Dropdown.Item>No users found</Dropdown.Item> : null
			}
		</Dropdown>
	);
};
