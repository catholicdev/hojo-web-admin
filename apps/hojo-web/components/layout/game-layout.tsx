import { FC, ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export const GameLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  return (
    <div className="game-home">
      <div className="container">{children}</div>
    </div>
  );
};
