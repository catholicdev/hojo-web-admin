import { useRouter } from 'next/router';

import { FC, ReactElement, ReactNode } from 'react';

import { useBrowserLayoutEffect } from '@web/utils/hooks/useBrowserLayoutEffect';
import mutateStorage from '@web/utils/mutate-storage';

interface ProtectedProps {
  children: (ReactNode & ReactElement) | any;
}

export const Protected: FC<ProtectedProps> = ({ children }) => {
  const router = useRouter();

  useBrowserLayoutEffect(() => {
    const loginTimeStamp = mutateStorage.loginTimeStamp;

    if (
      !mutateStorage.accessToken ||
      Date.now() - loginTimeStamp > 1000 * 60 * 20
    ) {
      //TODO call sign-out
      mutateStorage.purge(); //clear storage on browser
      router.push('/sign-in');
    }
  }, []);

  return children;
};
