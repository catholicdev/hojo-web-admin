// ** React Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Styled Component
import DatePickerWrapper from "@web/@core/styles/libs/react-datepicker";
// ** Types
import { DateType } from "@web/types/forms/reactDatepickerTypes";
import { ForwardedRef, forwardRef, useState } from "react";
// ** Third Party Imports
import DatePicker from "react-datepicker";

import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface Props {
  open: boolean;
  toggle: () => void;
}

const CustomInput = forwardRef(({ ...props }, ref: ForwardedRef<HTMLElement>) => {
  return <TextField inputRef={ref} label="Payment Date" {...props} />;
});

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const EditInvoiceDrawer = ({ open, toggle }: Props) => {
  // ** State
  const [date, setDate] = useState<DateType>(new Date());

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      sx={{ "& .MuiDrawer-paper": { width: [300, 400] } }}>
      <Header>
        <Typography variant="h6">Add Payment</Typography>
        <IconButton size="small" onClick={toggle} sx={{ color: "text.primary" }}>
          <Icon icon="mdi:close" fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            id="invoice-balance"
            label="Invoice Balance"
            InputProps={{ disabled: true }}
            defaultValue="5000.00"
          />
        </Box>
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            type="number"
            label="Payment Amount"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </Box>
        <Box sx={{ mb: 6 }}>
          <DatePickerWrapper sx={{ "& .MuiFormControl-root": { width: "100%" } }}>
            <DatePicker
              selected={date}
              id="invoice-payment-date"
              customInput={<CustomInput />}
              onChange={(date: Date) => setDate(date)}
            />
          </DatePickerWrapper>
        </Box>
        <Box sx={{ mb: 6 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="payment-method">Payment Method</InputLabel>
            <Select
              label="Payment Method"
              labelId="payment-method"
              id="payment-method-select"
              defaultValue="select-method">
              <MenuItem value="select-method" disabled>
                Select Payment Method
              </MenuItem>
              <MenuItem value="Cash">Cash</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
              <MenuItem value="Credit">Credit</MenuItem>
              <MenuItem value="Debit">Debit</MenuItem>
              <MenuItem value="Paypal">Paypal</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 6 }}>
          <TextField rows={6} multiline fullWidth label="Internal Payment Note" placeholder="Internal Payment Note" />
        </Box>

        <div>
          <Button size="large" variant="contained" onClick={toggle} sx={{ mr: 4 }}>
            Send
          </Button>
          <Button size="large" variant="outlined" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  );
};

export default EditInvoiceDrawer;
