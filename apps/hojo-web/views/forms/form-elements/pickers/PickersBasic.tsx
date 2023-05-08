// ** React Imports
// ** Types
import { DateType } from "@web/types/forms/reactDatepickerTypes";
import { useState } from "react";
// ** Third Party Imports
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

// ** MUI Imports
import Box from "@mui/material/Box";

// ** Custom Component Imports
import CustomInput from "./PickersCustomInput";

const PickersBasic = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps["popperPlacement"] }) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date());

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} className="demo-space-x">
      <div>
        <DatePicker
          selected={date}
          id="basic-input"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          placeholderText="Click to select a date"
          customInput={<CustomInput label="Basic" />}
        />
      </div>
      <div>
        <DatePicker
          disabled
          selected={date}
          id="disabled-input"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          placeholderText="Click to select a date"
          customInput={<CustomInput label="Disabled" />}
        />
      </div>
      <div>
        <DatePicker
          readOnly
          selected={date}
          id="read-only-input"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDate(date)}
          placeholderText="Click to select a date"
          customInput={<CustomInput readOnly label="Readonly" />}
        />
      </div>
    </Box>
  );
};

export default PickersBasic;
