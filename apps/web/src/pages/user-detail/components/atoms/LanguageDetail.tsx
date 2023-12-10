import { type FC } from 'react';
import { RepositoryPrimaryLanguage } from '../../../../models/Repository.ts';


export interface LanguageDetailProps {
	language: RepositoryPrimaryLanguage;
}

export const LanguageDetail: FC<LanguageDetailProps> = ({ language }) => {
	return (
		<div className="flex flex-row gap-2 items-center">
			<div style={{ backgroundColor: language.color }} className='w-3 h-3 rounded-full b'/>
			<p className="text-xs text-left text-gray-400">{language.name}</p>
		</div>
	);
};
