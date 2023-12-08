import React, { type FC } from 'react';

export interface UserInfoRowProps {
	children: React.ReactNode;
}

export const UserInfoRow: FC<UserInfoRowProps> = ({ children }) => {
	return (
		<div className="flex flex-row gap-2 items-center text-sm text-customGray-400">
			{children}
		</div>
	);
};
