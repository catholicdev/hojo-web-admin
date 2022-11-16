import { useRouter } from "next/router";

import { ReactComponent as Function1 } from "@web/public/images/function1.svg";
import { ReactComponent as Function2 } from "@web/public/images/function2.svg";
import { ReactComponent as Function3 } from "@web/public/images/function3.svg";
import { ReactComponent as Function4 } from "@web/public/images/function4.svg";

import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./index.module.css";

export function Index() {
  const router = useRouter();

  const handleClickFunction = (route) => {
    router.push(route);
  };

  return (
    <div className="flex_column">
      <Grid
        container
        spacing={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={5}>
        <Grid item xs={12}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight="400" fontSize="1.4rem">
            Chúa ở cùng bạn
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={6}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        paddingLeft={5}
        paddingRight={5}
        sx={{ width: "100%", marginLeft: 0, marginTop: 0, paddingBottom: "50px" }}
        className={styles.homeFunction}>
        <Grid item xs={12} onClick={() => handleClickFunction("/game")} className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage} sx={{ backgroundColor: "#00c2e4" }}>
            <Function1 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Game
            <br />
            Hành Trình
            <br />
            Kinh Thánh
          </Box>
        </Grid>

        <Grid item xs={12} onClick={() => handleClickFunction("/daily-bible")} className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage} sx={{ backgroundColor: "#0762C8" }}>
            <Function2 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Sống
            <br />
            Lời Chúa
            <br />
            mỗi ngày
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage} sx={{ backgroundColor: "#FFC107" }}>
            <Function3 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Thực hành
            <br />
            bác ái
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage} sx={{ backgroundColor: "#FF7B02" }}>
            <Function4 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            App
            <br />
            Công Giáo
            <br />
            cho bạn
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
