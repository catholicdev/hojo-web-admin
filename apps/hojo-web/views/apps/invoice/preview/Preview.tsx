// ** React Imports
// ** Next Import
import Link from "next/link";

// ** Types
import { InvoiceLayoutProps, SingleInvoiceType } from "@web/types/apps/invoiceTypes";
import PreviewActions from "@web/views/apps/invoice/preview/PreviewActions";
// ** Demo Components Imports
import PreviewCard from "@web/views/apps/invoice/preview/PreviewCard";
import AddPaymentDrawer from "@web/views/apps/invoice/shared-drawer/AddPaymentDrawer";
import SendInvoiceDrawer from "@web/views/apps/invoice/shared-drawer/SendInvoiceDrawer";
// ** Third Party Components
import axios from "axios";
import { useEffect, useState } from "react";

import Alert from "@mui/material/Alert";
// ** MUI Imports
import Grid from "@mui/material/Grid";

const InvoicePreview = ({ id }: InvoiceLayoutProps) => {
  // ** State
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<null | SingleInvoiceType>(null);
  const [addPaymentOpen, setAddPaymentOpen] = useState<boolean>(false);
  const [sendInvoiceOpen, setSendInvoiceOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("/apps/invoice/single-invoice", { params: { id } })
      .then((res) => {
        setData(res.data);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setError(true);
      });
  }, [id]);

  const toggleSendInvoiceDrawer = () => setSendInvoiceOpen(!sendInvoiceOpen);
  const toggleAddPaymentDrawer = () => setAddPaymentOpen(!addPaymentOpen);

  if (data) {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xl={9} md={8} xs={12}>
            <PreviewCard data={data} />
          </Grid>
          <Grid item xl={3} md={4} xs={12}>
            <PreviewActions
              id={id}
              toggleAddPaymentDrawer={toggleAddPaymentDrawer}
              toggleSendInvoiceDrawer={toggleSendInvoiceDrawer}
            />
          </Grid>
        </Grid>
        <SendInvoiceDrawer open={sendInvoiceOpen} toggle={toggleSendInvoiceDrawer} />
        <AddPaymentDrawer open={addPaymentOpen} toggle={toggleAddPaymentDrawer} />
      </>
    );
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity="error">
            Invoice with the id: {id} does not exist. Please check the list of invoices:{" "}
            <Link href="/apps/invoice/list">Invoice List</Link>
          </Alert>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};

export default InvoicePreview;
