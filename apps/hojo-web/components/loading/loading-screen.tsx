import { ReactComponent as Logo } from "@web/public/images/logo.svg";
import * as React from "react";

import Box from "@mui/material/Box";

export const LoadingScreen = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Box display="flex" flexDirection="column" alignItems="center" height="100vh" justifyContent="center">
          <div style={{ flex: 1 }} className="logo">
            <Logo />
          </div>
        </Box>
      </div>
    </div>
  );
};
