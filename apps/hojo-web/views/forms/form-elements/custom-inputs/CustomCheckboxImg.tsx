// ** React Imports
// ** Demo Components Imports
import CustomCheckboxImg from "@web/@core/components/custom-checkbox/image";
// ** Type Import
import { CustomCheckboxImgData } from "@web/@core/components/custom-checkbox/types";
import { useState } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

const data: CustomCheckboxImgData[] = [
  {
    value: "clock",
    isSelected: true,
    img: "/images/pages/background-3.jpg",
  },
  {
    value: "donuts",
    img: "/images/pages/background-8.jpg",
  },
  {
    value: "flowers",
    img: "/images/pages/background-5.jpg",
  },
];

const CustomCheckboxWithImages = () => {
  const initialSelected: string[] = data.filter((item) => item.isSelected).map((item) => item.value);

  // ** State
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter((item) => item !== value);
      setSelected(updatedArr);
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomCheckboxImg
          key={index}
          data={data[index]}
          selected={selected}
          name="custom-checkbox-img"
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  );
};

export default CustomCheckboxWithImages;
