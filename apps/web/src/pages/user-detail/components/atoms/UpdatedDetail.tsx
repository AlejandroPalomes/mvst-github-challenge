import { type FC } from 'react';
import { DateHelper } from '../../../../utils/dateHelper.ts';

export interface UpdatedDetailProps {
	date: string;
}

export const UpdatedDetail: FC<UpdatedDetailProps> = ({ date }) => {
	const dateHelper = DateHelper.fromString(date);
	return (
		<div className="flex flex-row gap-1">
			<p className="text-xs text-left text-gray-400">Updated on {dateHelper.format('MMM DD, YYYY')}</p>
		</div>
	);
};
