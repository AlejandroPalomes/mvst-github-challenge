import { type FC } from 'react';
import { Card } from '@mvst/ui';
import { Repository } from '../../../models/Repository.ts';
import { LanguageDetail } from './atoms/LanguageDetail.tsx';
import { UpdatedDetail } from './atoms/UpdatedDetail.tsx';

export interface RepositoryCardProps {
	repository: Repository;
}

export const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => {
	const { name, primaryLanguage, description, updatedAt } = repository;
	return (
		<Card>
			<div className="flex flex-col gap-3 sm:gap-2">
				<div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start h-min">
					<span className="font-bold text-base leading-4 text-left">
						{name}
					</span>
				</div>
				{description && <span className="text-sm text-gray-400 text-center sm:text-left max-w-lg">{description}</span>}
				<div className="flex flex-row gap-4 items-center justify-items-center sm:justify-items-start">
					{primaryLanguage && <LanguageDetail language={primaryLanguage}/>}
					{<UpdatedDetail date={updatedAt}/>}
				</div>
			</div>
		</Card>
	);
};
