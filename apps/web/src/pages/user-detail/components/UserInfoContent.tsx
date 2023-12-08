import { Avatar, Divider, PeopleIcon } from '@mvst-ui';
import { FC } from 'react';
import { User } from '../../../models/User.ts';
import { UserInfoRow } from './atoms/UserInfoRow.tsx';
import { UserExtraInfo } from './UserExtraInfo.tsx';

interface UserInfoContentProps {
  user: User;
}

export const UserInfoContent: FC<UserInfoContentProps> = ({ user }) => {
  return (<div>
    <div className="flex flex-col gap-2">
      <Avatar src={user.avatarUrl} size="l"/>
      <div className="flex flex-col gap-0">
        <span className="text-lg font-bold leading-4">{user.name}</span>
        <span className="text-base text-gray-400">{user.login}</span>
      </div>
      {Boolean(user.status?.message.length) &&
        <UserInfoRow>
          <span>{user.status?.message}</span>
        </UserInfoRow>}
      <div className="flex fle-row gap-2 text-customGray-400 text-sm items-center">
        <PeopleIcon size={16}/>
        <span><span className="text-white font-bold">{user.followers.totalCount}</span> followers</span>
        <span><span className="text-white font-bold">{user.following.totalCount}</span> following</span>
      </div>
      <div className="my-2">
        <Divider color={600}/>
      </div>
    </div>
    <UserExtraInfo user={user}/>
  </div>
  )
};
