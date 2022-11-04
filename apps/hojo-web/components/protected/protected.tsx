import { useRouter } from 'next/router';

import { FC, ReactElement, ReactNode, useState } from 'react';

import { LoadingScreen } from '@web/components/loading';

import { useBrowserLayoutEffect } from '@web/utils/hooks/useBrowserLayoutEffect';
import mutateStorage from '@web/utils/mutate-storage';

interface ProtectedProps {
  children: (ReactNode & ReactElement) | any;
}

export const Protected: FC<ProtectedProps> = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useBrowserLayoutEffect(() => {
    const loginTimeStamp = mutateStorage.loginTimeStamp;

    if (
      !mutateStorage.accessToken ||
      (Date.now() - loginTimeStamp) / (1000 * 60 * 20) > 20
    ) {
      //TODO call sign-out
      router.push('/sign-in');
    } else {
      setAuthorized(true);
    }
  }, [authorized, router]);

  return authorized ? children : <LoadingScreen />;
  // return children;
};
