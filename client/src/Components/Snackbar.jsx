import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setsnackbar } from "../Redux/Features/snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { snackbar } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      setsnackbar({
        open: false,
        message: "",
        severity:snackbar.severity,
      })
    );
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
    </Snackbar>
  );
}
