import { FC } from 'react';
import { useRouter } from '../hooks/router/useRouter.tsx';
import { Public } from '../router/routes/Public.ts';

export const NotFound404Page: FC = () => {
  const { goBack } = useRouter();

  return (
    <div>
      <p>
        404 not found...
      </p>
      <button onClick={() => goBack(Public.HOME.route)}>Go back</button>
    </div>
  );
};
