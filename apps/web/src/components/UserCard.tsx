import { type FC } from 'react';
import { User } from '../models/User.ts';
import { Avatar } from '@mvst/ui';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';
import { UserExtraData } from './atoms/UserExtraData.tsx';

export interface UserCardProps {
	user: User;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
	const { navigate } = useRouter();
	const { location, company, repositories, avatarUrl, name, login, bio } = user;

	const handleOnClickCard = () => {
		navigate(Public.USER.to(login));
	}

	return (
		<div onClick={handleOnClickCard}>
			<div className="flex flex-row gap-4">
				<div className="flex flex-row gap-4 md:w-2/5 w-full items-center">
					<div className="flex flex-col sm:flex-row h-10 items-center">
						<Avatar src={avatarUrl} size='m' />
					</div>
					<div className="flex flex-col gap-3 sm:gap-2">
						<div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center items-start h-min">
							<span className="font-bold text-base leading-4">
								{name}
							</span>
							<span className="text-sm sm:text-base leading-4 text-gray-400">
								{login}
							</span>
						</div>
						<div className="hidden lg:block">
							<UserExtraData company={company} location={location} totalCount={repositories.totalCount}/>
						</div>
					</div>
				</div>
				{bio && <span className="hidden lg:block text-sm text-center sm:text-left w-3/5">{bio}</span>}
				<div className="hidden md:flex lg:hidden items-center min-h-max w-3/5">
					<UserExtraData company={company} location={location} totalCount={repositories.totalCount}/>
				</div>
			</div>
		</div>
	);
};
