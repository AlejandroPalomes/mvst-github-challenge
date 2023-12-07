import { type FC } from 'react';
import { DetailCard } from '../../pages/home/components/atoms/DetailContainer.tsx';

export interface UserExtraDataProps {
	location?: string;
	company?: string;
	totalCount: number;
}

export const UserExtraData: FC<UserExtraDataProps> = ({ location, company, totalCount }) => {
	const shouldRenderFirstDot = Boolean(location && Boolean(totalCount || company));
	const shouldRenderSecondDot = Boolean(Boolean(location || totalCount) && company);

	return (
		<div className="flex flex-row gap-3 items-center justify-items-center">
			{location && <DetailCard type="location"content={location}/>}
			{shouldRenderFirstDot && <span className="text-xs text-gray-400">·</span>}
			{Boolean(totalCount) && <DetailCard type="repositories" content={totalCount}/>}
			{shouldRenderSecondDot && <span className="text-xs text-gray-400">·</span>}
			{company && <DetailCard type="company" content={company}/>}
		</div>
	);
};
