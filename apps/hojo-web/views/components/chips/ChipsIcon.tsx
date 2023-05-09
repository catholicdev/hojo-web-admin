// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";

import Chip from "@mui/material/Chip";

const ChipsIcon = () => {
  return (
    <div className="demo-space-x">
      <Chip label="Previous" icon={<Icon icon="mdi:arrow-left-thin-circle-outline" fontSize={20} />} />
      <Chip
        label="Next"
        color="primary"
        variant="outlined"
        icon={<Icon icon="mdi:arrow-right-thin-circle-outline" fontSize={20} />}
      />
    </div>
  );
};

export default ChipsIcon;
