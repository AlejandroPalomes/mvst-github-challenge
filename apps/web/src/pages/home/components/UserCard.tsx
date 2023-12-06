import { type FC } from 'react';
import { User } from '../../../models/User.ts';
import { Avatar, Card } from '@mvst-ui';
import { useRouter } from '../../../hooks/router/useRouter.tsx';
import { Public } from '../../../router/routes/Public.ts';

export interface InputProps {
	user: User;
}

export const UserCard: FC<InputProps> = ({ user }) => {
	const { navigate } = useRouter();

	return (
		<Card onClick={() => navigate(Public.USER.to(user.login))}>
			<div className="flex flex-row gap-4">
				<div className="flex flex-row h-12">
					<Avatar src={user.avatarUrl} size='m' />
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-2 items-end h-min">
						<p className="text-base leading-4">
							{user.name}
						</p>
						<p className="text-base leading-4 text-gray-400">
							{user.login}
						</p>
					</div>
					{user.bio && <p className="text-sm text-left max-w-lg">{user.bio}</p>}
					<div className="flex flex-row gap-3">
						{user.location && <p className="text-xs text-gray-400">{user.location}</p>}
						{Boolean(user.repositories.totalCount) && <p className="text-xs text-gray-400">{user.repositories.totalCount}</p>}
						{user.company && <p className="text-xs text-gray-400">{user.company}</p>}
					</div>
				</div>
			</div>
		</Card>
	);
};
