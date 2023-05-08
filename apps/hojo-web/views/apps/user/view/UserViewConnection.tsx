// ** Next Import
import Link from "next/link";

// ** Icon Imports
import Icon from "@web/@core/components/icon";

// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

interface ConnectedAccountsType {
  title: string;
  logo: string;
  checked: boolean;
  subtitle: string;
}

interface SocialAccountsType {
  title: string;
  logo: string;
  username?: string;
  isConnected: boolean;
}

const connectedAccountsArr: ConnectedAccountsType[] = [
  {
    checked: true,
    title: "Google",
    logo: "/images/logos/google.png",
    subtitle: "Calendar and Contacts",
  },
  {
    checked: false,
    title: "Slack",
    logo: "/images/logos/slack.png",
    subtitle: "Communications",
  },
  {
    checked: true,
    title: "Github",
    logo: "/images/logos/github.png",
    subtitle: "Manage your Git repositories",
  },
  {
    checked: true,
    title: "Mailchimp",
    subtitle: "Email marketing service",
    logo: "/images/logos/mail-chimp.png",
  },
  {
    title: "Asana",
    checked: false,
    subtitle: "Communication",
    logo: "/images/logos/asana.png",
  },
];

const socialAccountsArr: SocialAccountsType[] = [
  {
    title: "Facebook",
    isConnected: false,
    logo: "/images/logos/facebook.png",
  },
  {
    title: "Twitter",
    isConnected: true,
    username: "@ThemeSelection",
    logo: "/images/logos/twitter.png",
  },
  {
    title: "Instagram",
    isConnected: true,
    username: "@ThemeSelection",
    logo: "/images/logos/instagram.png",
  },
  {
    title: "Dribbble",
    isConnected: false,
    logo: "/images/logos/dribbble.png",
  },
  {
    title: "Behance",
    isConnected: false,
    logo: "/images/logos/behance.png",
  },
];

const UserViewConnection = () => {
  return (
    <Grid container spacing={6}>
      {/* Connected Accounts Cards */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ fontWeight: 500 }}>Connected Accounts</Typography>
              <Typography variant="body2">Display content from your connected accounts on your site</Typography>
            </Box>
            {connectedAccountsArr.map((account) => {
              return (
                <Box
                  key={account.title}
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&:not(:last-of-type)": { mb: 4 },
                  }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 4, display: "flex", justifyContent: "center" }}>
                      <img src={account.logo} alt={account.title} height="36" width="36" />
                    </Box>
                    <div>
                      <Typography sx={{ fontWeight: 600 }}>{account.title}</Typography>
                      <Typography variant="body2">{account.subtitle}</Typography>
                    </div>
                  </Box>
                  <Switch defaultChecked={account.checked} />
                </Box>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
      {/* Social Accounts Cards */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 5 }}>
              <Typography sx={{ fontWeight: 500 }}>Social Accounts</Typography>
              <Typography variant="body2">Display content from social accounts on your site</Typography>
            </Box>

            {socialAccountsArr.map((account) => {
              return (
                <Box
                  key={account.title}
                  sx={{
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&:not(:last-of-type)": { mb: 4 },
                  }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mr: 4, minWidth: 45, display: "flex", justifyContent: "center" }}>
                      <img src={account.logo} alt={account.title} height="30" />
                    </Box>
                    <div>
                      <Typography sx={{ fontWeight: 500 }}>{account.title}</Typography>
                      {account.isConnected ? (
                        <Typography
                          href="/"
                          component={Link}
                          onClick={(e) => e.preventDefault()}
                          sx={{ color: "primary.main", textDecoration: "none" }}>
                          {account.username}
                        </Typography>
                      ) : (
                        <Typography variant="body2" sx={{ color: "text.disabled" }}>
                          Not Connected
                        </Typography>
                      )}
                    </div>
                  </Box>
                  <Button variant="outlined" sx={{ p: 1.5, minWidth: 38 }} color="secondary">
                    <Icon icon={account.isConnected ? "mdi:delete-outline" : "mdi:link"} />
                  </Button>
                </Box>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserViewConnection;
