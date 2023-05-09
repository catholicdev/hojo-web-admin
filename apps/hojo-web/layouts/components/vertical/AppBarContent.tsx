// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Type Import
import { Settings } from "@web/@core/context/settingsContext";
import LanguageDropdown from "@web/@core/layouts/components/shared-components/LanguageDropdown";
import ModeToggler from "@web/@core/layouts/components/shared-components/ModeToggler";
import NotificationDropdown, {
  NotificationsType,
} from "@web/@core/layouts/components/shared-components/NotificationDropdown";
import ShortcutsDropdown, { ShortcutsType } from "@web/@core/layouts/components/shared-components/ShortcutsDropdown";
import UserDropdown from "@web/@core/layouts/components/shared-components/UserDropdown";
// ** Hook Import'@web
import { useAuth } from "@web/hooks/useAuth";
// ** Components'@web
import Autocomplete from "@web/layouts/components/Autocomplete";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface Props {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
}

const notifications: NotificationsType[] = [
  {
    meta: "Today",
    avatarAlt: "Flora",
    title: "Congratulation Flora! 🎉",
    avatarImg: "/images/avatars/4.png",
    subtitle: "Won the monthly best seller badge",
  },
  {
    meta: "Yesterday",
    avatarColor: "primary",
    subtitle: "5 hours ago",
    avatarText: "Robert Austin",
    title: "New user registered.",
  },
  {
    meta: "11 Aug",
    avatarAlt: "message",
    title: "New message received 👋🏻",
    avatarImg: "/images/avatars/5.png",
    subtitle: "You have 10 unread messages",
  },
  {
    meta: "25 May",
    title: "Paypal",
    avatarAlt: "paypal",
    subtitle: "Received Payment",
    avatarImg: "/images/misc/paypal.png",
  },
  {
    meta: "19 Mar",
    avatarAlt: "order",
    title: "Received Order 📦",
    avatarImg: "/images/avatars/3.png",
    subtitle: "New order received from John",
  },
  {
    meta: "27 Dec",
    avatarAlt: "chart",
    subtitle: "25 hrs ago",
    avatarImg: "/images/misc/chart.png",
    title: "Finance report has been generated",
  },
];

const shortcuts: ShortcutsType[] = [
  {
    title: "Calendar",
    url: "/apps/calendar",
    subtitle: "Appointments",
    icon: "mdi:calendar-month-outline",
  },
  {
    title: "Invoice App",
    url: "/apps/invoice/list",
    subtitle: "Manage Accounts",
    icon: "mdi:receipt-text-outline",
  },
  {
    title: "Users",
    url: "/apps/user/list",
    subtitle: "Manage Users",
    icon: "mdi:account-outline",
  },
  {
    url: "/apps/roles",
    title: "Role Management",
    subtitle: "Permissions",
    icon: "mdi:shield-check-outline",
  },
  {
    url: "/",
    title: "Dashboard",
    icon: "mdi:chart-pie",
    subtitle: "User Dashboard",
  },
  {
    title: "Settings",
    icon: "mdi:cog-outline",
    subtitle: "Account Settings",
    url: "/pages/account-settings/account",
  },
  {
    title: "Help Center",
    subtitle: "FAQs & Articles",
    icon: "mdi:help-circle-outline",
    url: "/pages/help-center",
  },
  {
    title: "Dialogs",
    subtitle: "Useful Dialogs",
    icon: "mdi:window-maximize",
    url: "/pages/dialog-examples",
  },
];

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props;

  // ** Hook
  const auth = useAuth();

  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Box className="actions-left" sx={{ mr: 2, display: "flex", alignItems: "center" }}>
        {hidden && !settings.navHidden ? (
          <IconButton color="inherit" sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon icon="mdi:menu" />
          </IconButton>
        ) : null}
        {auth.user && <Autocomplete hidden={hidden} settings={settings} />}
      </Box>
      <Box className="actions-right" sx={{ display: "flex", alignItems: "center" }}>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {auth.user && (
          <>
            <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
            <NotificationDropdown settings={settings} notifications={notifications} />
            <UserDropdown settings={settings} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default AppBarContent;