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

const PickersTime = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps["popperPlacement"] }) => {
  // ** States
  const [time, setTime] = useState<DateType>(new Date());
  const [dateTime, setDateTime] = useState<DateType>(new Date());

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} className="demo-space-x">
      <div>
        <DatePicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat="h:mm aa"
          id="time-only-picker"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomInput label="Time Only" />}
        />
      </div>
      <div>
        <DatePicker
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          selected={dateTime}
          id="date-time-picker"
          dateFormat="MM/dd/yyyy h:mm aa"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setDateTime(date)}
          customInput={<CustomInput label="Date & Time" />}
        />
      </div>
    </Box>
  );
};

export default PickersTime;
