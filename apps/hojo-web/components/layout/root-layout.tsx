import { FC, ReactNode } from "react";

import { ToastContainer } from "@web/components/toast";
import { Protected } from "@web/components/protected";

type RootLayoutProps = { children: ReactNode };

export const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  return (
    <main>
      <Protected>
        {children}
        <ToastContainer />
      </Protected>
    </main>
  );
};
