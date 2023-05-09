// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Custom Components Imports
import CustomAvatar from "@web/@core/components/mui/avatar";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const AvatarsIcon = () => {
  return (
    <Box className="demo-space-x" sx={{ display: "flex" }}>
      <Avatar>
        <Icon icon="mdi:folder-outline" />
      </Avatar>
      <CustomAvatar color="success">
        <Icon icon="mdi:cached" />
      </CustomAvatar>
      <CustomAvatar skin="light" color="info">
        <Icon icon="mdi:checkbox-marked-circle-outline" />
      </CustomAvatar>
    </Box>
  );
};

export default AvatarsIcon;
