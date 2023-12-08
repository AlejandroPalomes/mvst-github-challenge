import { FC } from 'react';
import { useParams } from 'react-router';
import { UserInfo } from './components/UserInfo.tsx';
import { RepositoriesSection } from './components/RepositriesSection.tsx';
import { useRouter } from '../../hooks/router/useRouter.tsx';
import { Public } from '../../router/routes/Public.ts';

const containerStyles = "flex flex-col md:flex-row h-full";
const userInfoStyles = "w-full md:w-2/5 max-w-md min-w-sm md:border-customGray-600 md:border-l md:border-solid p-10 sm:px-20 sm-py-10 md:p-10 flex flex-col gap-3 text-left md:order-2";
const mainContentStyles = "w-full flex flex-col gap-4 px-10 sm:px-20 py-8 md:order-1";

const UserPage: FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { navigate } = useRouter();

  if (!userId) {
    navigate(Public.ERROR.route);
    return null;
  }

  return <div className={containerStyles}>
    <div className={userInfoStyles}>
      <UserInfo userId={userId}/>
    </div>
    <div className={mainContentStyles}>
      <RepositoriesSection userId={userId}/>
    </div>
  </div>
};

export default UserPage;
