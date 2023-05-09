// ** MUI Imports
// ** Type Import
import { Settings } from "@web/@core/context/settingsContext";

import { ComponentsPropsList } from "@mui/material";
import { Theme } from "@mui/material/styles";

import MuiAccordion from "./accordion";
import MuiAlerts from "./alerts";
import MuiAutocomplete from "./autocomplete";
import MuiAvatar from "./avatars";
import MuiBackdrop from "./backdrop";
import MuiBreadcrumb from "./breadcrumbs";
import MuiButton from "./button";
// ** Overrides Imports
import MuiCard from "./card";
import MuiChip from "./chip";
import MuiDataGrid from "./dataGrid";
import MuiDialog from "./dialog";
import MuiDivider from "./divider";
import MuiInput from "./input";
import MuiLink from "./link";
import MuiList from "./list";
import MuiMenu from "./menu";
import MuiPagination from "./pagination";
import MuiPaper from "./paper";
import MuiPopover from "./popover";
import MuiRating from "./rating";
import MuiSelect from "./select";
import MuiSnackbar from "./snackbar";
import MuiSwitches from "./switches";
import MuiTable from "./table";
import MuiTabs from "./tabs";
import MuiTimeline from "./timeline";
import MuiToggleButton from "./toggleButton";
import MuiTooltip from "./tooltip";
import MuiTypography from "./typography";

export type OwnerStateThemeType = {
  theme: Theme;
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>;
};

const Overrides = (settings: Settings) => {
  const { skin, mode } = settings;

  const chip = MuiChip();
  const list = MuiList();
  const tabs = MuiTabs();
  const input = MuiInput();
  const tables = MuiTable();
  const menu = MuiMenu(skin);
  const button = MuiButton();
  const rating = MuiRating();
  const cards = MuiCard(skin);
  const avatars = MuiAvatar();
  const divider = MuiDivider();
  const tooltip = MuiTooltip();
  const alerts = MuiAlerts(mode);
  const dialog = MuiDialog(skin);
  const backdrop = MuiBackdrop();
  const dataGrid = MuiDataGrid();
  const switches = MuiSwitches();
  const timeline = MuiTimeline();
  const popover = MuiPopover(skin);
  const accordion = MuiAccordion();
  const snackbar = MuiSnackbar(skin);
  const pagination = MuiPagination();
  const breadcrumb = MuiBreadcrumb();
  const autocomplete = MuiAutocomplete(skin);

  return Object.assign(
    chip,
    list,
    menu,
    tabs,
    cards,
    input,
    alerts,
    button,
    dialog,
    rating,
    tables,
    avatars,
    divider,
    MuiLink,
    popover,
    tooltip,
    backdrop,
    dataGrid,
    MuiPaper,
    snackbar,
    switches,
    timeline,
    accordion,
    MuiSelect,
    breadcrumb,
    pagination,
    autocomplete,
    MuiTypography,
    MuiToggleButton
  );
};

export default Overrides;
