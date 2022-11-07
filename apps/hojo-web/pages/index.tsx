import { useRouter } from "next/router";

import { ReactComponent as Function1 } from "@web/public/images/function1.svg";
import { ReactComponent as Function2 } from "@web/public/images/function2.svg";
import { ReactComponent as Function3 } from "@web/public/images/function3.svg";
import { ReactComponent as Function4 } from "@web/public/images/function4.svg";

import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./index.module.css";

export function Index() {
  const router = useRouter();

  const handleClickFunction = (route) => {
    router.push(route);
  };

  return (
    <div className={styles.page}>
      <div className={styles.homeUser}>
        <div className={styles.homeAvatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </div>
        <Typography className={styles.homeWelcome}>Chúa ở cùng bạn</Typography>
      </div>
      <div className={styles.homeFunction}>
        <Box className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage}>
            <Function1 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Game
            <br />
            Hành Trình
            <br />
            Kinh Thánh
          </Box>
        </Box>
        <Box className={styles.homeFunctionBox} onClick={() => handleClickFunction("/daily-bible")}>
          <Box className={styles.homeFunctionBoxImage}>
            <Function2 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Sống
            <br />
            Lời Chúa
            <br />
            mỗi ngày
          </Box>
        </Box>
        <Box className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage}>
            <Function3 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            Thực hành
            <br />
            bác ái
          </Box>
        </Box>
        <Box className={styles.homeFunctionBox}>
          <Box className={styles.homeFunctionBoxImage}>
            <Function4 />
          </Box>
          <Box className={styles.homeFunctionBoxContent}>
            App
            <br />
            Công Giáo
            <br />
            cho bạn
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Index;
