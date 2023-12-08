import { BuildingIcon, Divider, EmailIcon, LocationIcon, WorldIcon } from '@mvst/ui';
import { FC } from 'react';
import { User } from '../../../models/User.ts';
import { UserInfoRow } from './atoms/UserInfoRow.tsx';

interface UserExtraInfoProps {
  user: User;
}

export const UserExtraInfo: FC<UserExtraInfoProps> = ({ user }) => {
  return (
    <div className="hidden sm:flex flex-col gap-2">
      {Boolean(user.bio?.length) && <>
        <p className="text-sm text-gray-100 hidden sm:block">
          {user.bio}
        </p>
        <div className="my-2">
          <Divider color={600}/>
        </div>
      </>}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-5">
          {user.location &&
            <UserInfoRow>
              <LocationIcon size={16}/>
              <span>{user.location}</span>
            </UserInfoRow>}
          {user.company &&
            <UserInfoRow>
              <BuildingIcon size={16}/>
              <span>{user.company}</span>
            </UserInfoRow>}
        </div>
        {user.websiteUrl &&
          <UserInfoRow>
            <WorldIcon size={16}/>
            <a className="text-sm text-customGray-400 underline" href={'https://' + user.websiteUrl} target="_blank">{user.websiteUrl}</a>
          </UserInfoRow>}
        {Boolean(user.email?.length) &&
          <UserInfoRow>
            <EmailIcon size={16}/>
            <span>{user.email}</span>
          </UserInfoRow>}
      </div>
    </div>
  )
};
