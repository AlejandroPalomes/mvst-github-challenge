import { type FC } from 'react';
import { User } from '../models/User.ts';
import { Avatar } from '@mvst-ui';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';
import { DetailCard } from '../pages/home/components/atoms/DetailContainer.tsx';

export interface InputProps {
	user: User;
}

export const UserCard: FC<InputProps> = ({ user }) => {
	const { navigate } = useRouter();
	const { location, company, repositories, avatarUrl, name, login, bio } = user;

	const shouldRenderFirstDot = Boolean(location && Boolean(repositories.totalCount || company));
	const shouldRenderSecondDot = Boolean(Boolean(location || repositories.totalCount) && company);

	const handleOnClickCard = () => {
		navigate(Public.USER.to(login));
	}

	return (
		<div onClick={handleOnClickCard}>
			<div className="flex flex-row gap-4">
				<div className="flex flex-row gap-4 md:w-1/2 w-full">
					<div className="flex flex-col sm:flex-row h-10 items-center">
						<Avatar src={avatarUrl} size='m' />
					</div>
					<div className="flex flex-col gap-3 sm:gap-2">
						<div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center h-min">
							<span className="font-bold text-base leading-4">
								{name}
							</span>
							<span className="text-sm sm:text-base leading-4 text-gray-400">
								{login}
							</span>
						</div>
						<div className="hidden lg:flex flex-row gap-3 items-center justify-items-center">
							{location && <DetailCard type="location"content={location}/>}
							{shouldRenderFirstDot && <span className="text-xs text-gray-400">·</span>}
							{Boolean(repositories.totalCount) && <DetailCard type="repositories" content={repositories.totalCount}/>}
							{shouldRenderSecondDot && <span className="text-xs text-gray-400">·</span>}
							{company && <DetailCard type="company" content={company}/>}
						</div>
					</div>
				</div>
				{bio && <span className="hidden md:block text-sm text-center sm:text-left w-1/2">{bio}</span>}
			</div>
		</div>
	);
};