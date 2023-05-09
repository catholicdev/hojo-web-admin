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

const PickersMonthYear = ({ popperPlacement }: { popperPlacement: ReactDatePickerProps["popperPlacement"] }) => {
  // ** States
  const [year, setYear] = useState<DateType>(new Date());
  const [month, setMonth] = useState<DateType>(new Date());
  const [quarter, setQuarter] = useState<DateType>(new Date());

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} className="demo-space-x">
      <div>
        <DatePicker
          selected={month}
          id="month-picker"
          showMonthYearPicker
          dateFormat="MM/yyyy"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setMonth(date)}
          customInput={<CustomInput label="Month Picker" />}
        />
      </div>
      <div>
        <DatePicker
          showYearPicker
          selected={year}
          id="year-picker"
          dateFormat="MM/yyyy"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setYear(date)}
          customInput={<CustomInput label="Year Picker" />}
        />
      </div>
      <div>
        <DatePicker
          selected={quarter}
          id="quarter-picker"
          showQuarterYearPicker
          dateFormat="yyyy, QQQ"
          popperPlacement={popperPlacement}
          onChange={(date: Date) => setQuarter(date)}
          customInput={<CustomInput label="Quarter Picker" />}
        />
      </div>
    </Box>
  );
};

export default PickersMonthYear;
