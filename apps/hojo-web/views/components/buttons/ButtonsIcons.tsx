// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";

import IconButton from "@mui/material/IconButton";

const ButtonsIcons = () => {
  return (
    <div className="demo-space-x">
      <IconButton aria-label="capture screenshot">
        <Icon icon="mdi:camera-iris" />
      </IconButton>
      <IconButton aria-label="capture screenshot" color="primary">
        <Icon icon="mdi:camera-iris" />
      </IconButton>
      <IconButton aria-label="capture screenshot" color="secondary">
        <Icon icon="mdi:camera-iris" />
      </IconButton>
      <IconButton aria-label="capture screenshot" disabled>
        <Icon icon="mdi:camera-iris" />
      </IconButton>
    </div>
  );
};

export default ButtonsIcons;
