import { FC, useEffect, useState } from 'react';
import { useGet } from '../../../hooks/api/useGet.tsx';
import { API } from '../../../lib/API.ts';
import { User } from '../../../models/User.ts';
import { UserInfoContent } from './UserInfoContent.tsx';
import { UserInfoContentSkeleton } from './skeletons/UserInfoContent.skeleton.tsx';

interface UserInfoProps {
  userId: string;
}

export const UserInfo: FC<UserInfoProps> = ({ userId }) => {
  const [shouldRefetchOnUserIdChange, setShouldRefetchOnUserIdChange] = useState<string>(userId);
  const { data: user, isLoading, refetch } = useGet<User>(API.users.getInfoById({ username: userId }));

  useEffect(() => {
    if (shouldRefetchOnUserIdChange !== userId) {
      refetch();
      setShouldRefetchOnUserIdChange(userId);
    }
  }, [refetch, userId, shouldRefetchOnUserIdChange]);

  if (isLoading) {
    return <UserInfoContentSkeleton/>
  }

  if (!user) {
    return <div>Error loading user...</div>;
  }

  return <UserInfoContent user={user}/>
};
