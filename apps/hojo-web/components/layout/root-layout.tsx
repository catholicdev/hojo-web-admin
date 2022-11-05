import { FC, ReactNode } from 'react';

import { ToastContainer } from '@web/components/toast';
import { Protected } from '@web/components/protected';

type RootLayoutProps = { children: ReactNode };

export const RootLayout: FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => {
  return (
    <Protected>
      <main>
        <div className="wrapper">
          <div className="container">
            {children}
            <ToastContainer />
          </div>
        </div>
      </main>
    </Protected>
  );
};
