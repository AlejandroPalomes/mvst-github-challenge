import { Avatar, Button } from '@mvst-ui';
import { FC } from 'react';
import { User } from '../../../models/User.ts';
import { useRouter } from '../../../hooks/router/useRouter.tsx';

interface UserInfoContentProps {
  user: User;
}

export const UserInfoContent: FC<UserInfoContentProps> = ({ user }) => {
  const { goBack } = useRouter();

  return <>
    <Avatar src={user.avatarUrl} size="l"/>
    <div className="flex flex-col gap-0">
      <span className="text-lg font-bold leading-4">{user.name}</span>
      <span className="text-base text-gray-400">{user.login}</span>
    </div>
    <div>
      <p className="text-sm text-gray-400 hidden sm:block">
        {user.bio}
      </p>
      {user.websiteUrl && <a href={'https://' + user.websiteUrl} target="_blank">{user.websiteUrl}</a>}
    </div>
    <Button onClick={() => goBack()}>Go back</Button>
  </>
};
