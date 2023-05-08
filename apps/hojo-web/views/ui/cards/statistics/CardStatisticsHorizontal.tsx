// ** MUI Import
// ** Custom Components Imports
import CardStatisticsHorizontal from "@web/@core/components/card-statistics/card-stats-horizontal";
// ** Types Imports
import { CardStatsHorizontalProps } from "@web/@core/components/card-statistics/types";
// ** Icon Imports
import Icon from "@web/@core/components/icon";

import Grid from "@mui/material/Grid";

interface Props {
  data: CardStatsHorizontalProps[];
}

const CardStatsHorizontal = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item: CardStatsHorizontalProps, index: number) => {
          return (
            <Grid item xs={12} md={3} sm={6} key={index}>
              <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon as string} />} />
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return null;
  }
};

export default CardStatsHorizontal;
