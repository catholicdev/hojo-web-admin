import { FC, ReactNode } from "react";

import { GameFooterLayout } from "./game-footer";
import { GameHeaderLayout } from "./game-header";

type RootLayoutProps = { children: ReactNode };

export const GameLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  return (
    <div className="game-home">
      <GameHeaderLayout />
      <div className="game-home-body">{children}</div>
      <GameFooterLayout />
    </div>
  );
};
