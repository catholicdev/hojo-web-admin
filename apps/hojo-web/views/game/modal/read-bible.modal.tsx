import { useRecoilValue } from "recoil";

import { Button, Grid, Modal, Typography } from "@mui/material";

import { selectedStage } from "@web/utils/states/game";

type ReadBibleType = {
  open: boolean;
  handleClose: (e: any, reason?: string) => void;
};

export default function ReadBibleModal({ open, handleClose }: ReadBibleType) {
  const stage = useRecoilValue(selectedStage);

  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={(e, reason) => handleClose(e, reason)}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        className="modal-body">
        <Grid container item xs={12} spacing={2} justifyContent="center" alignItems="center">
          <div className="modal-book-name">
            <Typography fontSize="20px" fontWeight="400" color={"white"}>
              {stage?.name}
            </Typography>
          </div>
        </Grid>
        <Grid
          container
          item
          xs={12}
          rowGap={4}
          className="modal-book-summary"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={12}>
            {stage?.detail}
          </Grid>

          <Grid container item xs={12} spacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "40px",
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  height: "50px",
                  padding: "10px 15px",
                  borderStyle: "solid",
                  borderWidth: "2px",
                }}
                size="large">
                Xem full
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  width: "100%",
                  background: "linear-gradient(90deg, #0762C8 0%, #00C2E4 100%)",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  height: "50px",
                  padding: "10px 15px",
                }}
                size="large">
                Thử thách
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}
