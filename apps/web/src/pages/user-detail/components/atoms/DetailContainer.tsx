import { BuildingIcon, FolderIcon, LocationIcon } from '@mvst/ui';
import { type FC } from 'react';

type CardType = 'location' | 'company' | 'repositories';

const getIcon = (type: CardType) => {
	switch (type) {
		case 'location':
			return LocationIcon
		case 'company':
			return BuildingIcon
		case 'repositories':
		default:
			return FolderIcon
	}
}

export interface InputProps {
	type: CardType;
	content: string | number;
}

export const DetailCard: FC<InputProps> = ({ type, content }) => {
	const Icon = getIcon(type);
	return (
		<div className="flex flex-row gap-1">
			<Icon size={16} color="rgb(156 163 175)"/>
			<p className="text-xs text-left text-gray-400">{content}</p>
		</div>
	);
};
