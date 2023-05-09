import { FC, ReactNode } from "react";

import { Protected } from "@web/components/protected";
import { ToastContainer } from "@web/components/toast";

type RootLayoutProps = { children: ReactNode };

export const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  return (
    <Protected>
      <div className="wrapper">
        <div className="container">
          {children}
          <ToastContainer />
        </div>
      </div>
    </Protected>
  );
};
