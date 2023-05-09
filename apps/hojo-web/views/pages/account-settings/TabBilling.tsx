// ** MUI Imports
// ** Types
import { PricingPlanType } from "@web/@core/components/plan-details/types";
import BillingAddressCard from "@web/views/pages/account-settings/billing/BillingAddressCard";
import BillingHistoryTable from "@web/views/pages/account-settings/billing/BillingHistoryTable";
// ** Demo Components
import CurrentPlanCard from "@web/views/pages/account-settings/billing/CurrentPlanCard";
import PaymentMethodCard from "@web/views/pages/account-settings/billing/PaymentMethodCard";

import Grid from "@mui/material/Grid";

const TabBilling = ({ apiPricingPlanData }: { apiPricingPlanData: PricingPlanType[] }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CurrentPlanCard data={apiPricingPlanData} />
      </Grid>

      <Grid item xs={12}>
        <PaymentMethodCard />
      </Grid>

      <Grid item xs={12}>
        <BillingAddressCard />
      </Grid>

      <Grid item xs={12}>
        <BillingHistoryTable />
      </Grid>
    </Grid>
  );
};

export default TabBilling;
