import { type FC } from 'react';
import { Card } from '@mvst-ui';
import { Repository } from '../../../models/Repository.ts';
import { LanguageDetail } from './atoms/LanguageDetail.tsx';

export interface InputProps {
	repository: Repository;
}

export const RepositoryCard: FC<InputProps> = ({ repository }) => {
	const { name, primaryLanguage, description } = repository;

	return (
		<Card>
			<div className="flex flex-col gap-3 sm:gap-2">
				<div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start h-min">
					<span className="font-bold text-base leading-4 text-left">
						{name}
					</span>
				</div>
				{description && <span className="text-sm text-gray-400 text-center sm:text-left max-w-lg">{description}</span>}
				<div className="flex flex-row gap-3 items-center justify-items-center sm:justify-items-start">
					{primaryLanguage && <LanguageDetail language={primaryLanguage}/>}
					{/* <div>{repository.}</div> */}
					{/* {shouldRenderFirstDot && <span className="text-xs text-gray-400">·</span>}
					{Boolean(repositories.totalCount) && <DetailCard type="repositories" content={repositories.totalCount}/>}
					{shouldRenderSecondDot && <span className="text-xs text-gray-400">·</span>}
					{company && <DetailCard type="company" content={company}/>} */}
				</div>
			</div>
		</Card>
	);
};
