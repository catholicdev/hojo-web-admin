// ** React Imports
// ** Next Import
import { useRouter } from "next/router";

// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Types
import { InvoiceType } from "@web/types/apps/invoiceTypes";
// ** Demo Components Imports
import UserViewBilling from "@web/views/apps/user/view/UserViewBilling";
import UserViewConnection from "@web/views/apps/user/view/UserViewConnection";
import UserViewNotification from "@web/views/apps/user/view/UserViewNotification";
import UserViewOverview from "@web/views/apps/user/view/UserViewOverview";
import UserViewSecurity from "@web/views/apps/user/view/UserViewSecurity";
import { SyntheticEvent, useEffect, useState } from "react";

import TabContext from "@mui/lab/TabContext";
import MuiTabList, { TabListProps } from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// ** MUI Imports
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface Props {
  tab: string;
  invoiceData: InvoiceType[];
}

// ** Styled Tab component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`,
  },
  "& .MuiTab-root": {
    minWidth: 65,
    minHeight: 40,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("md")]: {
      minWidth: 130,
    },
  },
}));

const UserViewRight = ({ tab, invoiceData }: Props) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ** Hooks
  const router = useRouter();

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    router
      .push({
        pathname: `/apps/user/view/${value.toLowerCase()}`,
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false);
    }
  }, [invoiceData]);

  return (
    <TabContext value={activeTab}>
      <TabList
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        aria-label="forced scroll tabs example">
        <Tab
          value="overview"
          label={
            <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 2 } }}>
              <Icon fontSize={20} icon="mdi:account-outline" />
              Overview
            </Box>
          }
        />
        <Tab
          value="security"
          label={
            <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 2 } }}>
              <Icon fontSize={20} icon="mdi:lock-outline" />
              Security
            </Box>
          }
        />
        <Tab
          value="billing-plan"
          label={
            <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 2 } }}>
              <Icon fontSize={20} icon="mdi:bookmark-outline" />
              Billing & Plan
            </Box>
          }
        />
        <Tab
          value="notification"
          label={
            <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 2 } }}>
              <Icon fontSize={20} icon="mdi:bell-outline" />
              Notification
            </Box>
          }
        />
        <Tab
          value="connection"
          label={
            <Box sx={{ display: "flex", alignItems: "center", "& svg": { mr: 2 } }}>
              <Icon fontSize={20} icon="mdi:link" />
              Connection
            </Box>
          }
        />
      </TabList>
      <Box sx={{ mt: 4 }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: "flex", alignItems: "center", flexDirection: "column" }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel sx={{ p: 0 }} value="overview">
              <UserViewOverview invoiceData={invoiceData} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="security">
              <UserViewSecurity />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="billing-plan">
              <UserViewBilling />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="notification">
              <UserViewNotification />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value="connection">
              <UserViewConnection />
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  );
};

export default UserViewRight;
