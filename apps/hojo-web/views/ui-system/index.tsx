import Head from "next/head";

import ButtonSystem from "./button";

export const UISystemView: React.FC = () => {
  return (
    <div>
      <Head>
        <title>UI System</title>
      </Head>
      <ButtonSystem />;
    </div>
  );
};
