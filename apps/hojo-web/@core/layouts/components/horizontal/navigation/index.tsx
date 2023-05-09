// ** MUI Imports
// ** Type Import
import { LayoutProps } from "@web/@core/layouts/types";
// ** Config Import
import themeConfig from "@web/configs/themeConfig";

import Box from "@mui/material/Box";

// ** Menu Components
import HorizontalNavItems from "./HorizontalNavItems";

// ** Types
interface Props {
  settings: LayoutProps["settings"];
  horizontalNavItems: NonNullable<NonNullable<LayoutProps["horizontalLayoutProps"]>["navMenu"]>["navItems"];
}

const Navigation = (props: Props) => {
  return (
    <Box
      className="menu-content"
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > *": {
          "&:not(:last-child)": { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 }),
        },
      }}>
      <HorizontalNavItems {...props} />
    </Box>
  );
};

export default Navigation;
