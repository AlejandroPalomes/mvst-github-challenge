import { FC } from 'react';
import { useGet } from '../../../hooks/api/useGet.tsx';
import { API } from '../../../lib/API.ts';
import { User } from '../../../models/User.ts';
import { UserInfoContent } from './UserInfoContent.tsx';
import { UserInfoContentSkeleton } from './skeletons/UserInfoContent.skeleton.tsx';

interface UserInfoProps {
  username: string;
}

export const UserInfo: FC<UserInfoProps> = ({ username }) => {
  const { data: user, isLoading } = useGet<User>(API.users.getInfoById, { username });

  if (isLoading) {
    return <UserInfoContentSkeleton/>
  }

  if (!user) {
    //TODO Add error component
    return <div>Error loading user...</div>;
  }

  return <UserInfoContent user={user}/>
};
