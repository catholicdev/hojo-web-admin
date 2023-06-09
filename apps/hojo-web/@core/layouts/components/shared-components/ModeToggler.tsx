// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
import { Settings } from "@web/@core/context/settingsContext";
// ** Types Import
import { Mode } from "@web/@core/layouts/types";

import IconButton from "@mui/material/IconButton";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props;

  const handleModeChange = (mode: Mode) => {
    saveSettings({ ...settings, mode: mode });
  };

  const handleModeToggle = () => {
    if (settings.mode === "light") {
      handleModeChange("dark" as Mode);
    } else {
      handleModeChange("light" as Mode);
    }
  };

  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      <Icon icon={settings.mode === "dark" ? "mdi:weather-sunny" : "mdi:weather-night"} />
    </IconButton>
  );
};

export default ModeToggler;
