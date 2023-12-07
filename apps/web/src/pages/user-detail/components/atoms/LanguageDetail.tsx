import { type FC } from 'react';
import { RepositoryPrimaryLanguage } from '../../../../models/Repository.ts';


export interface LangiageDetailProps {
	language: RepositoryPrimaryLanguage;
}

export const LanguageDetail: FC<LangiageDetailProps> = ({ language }) => {
	return (
		<div className="flex flex-row gap-1">
			<div/>
			<p className="text-xs text-left text-gray-400">{language.name}</p>
		</div>
	);
};
