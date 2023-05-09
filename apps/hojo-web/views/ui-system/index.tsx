import Head from "next/head";

import ButtonSystem from "./button";
import TextBoxUI from "./text-box";

export const UISystemView: React.FC = () => {
  return (
    <div>
      <Head>
        <title>UI System</title>
      </Head>
      <ButtonSystem />
      <TextBoxUI />
    </div>
  );
};
