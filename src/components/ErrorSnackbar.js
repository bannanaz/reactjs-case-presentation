import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const withSnackbar = (WrappedComponent) => {
  return (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [duration, setDuration] = useState(5000);
    const [severity, setSeverity] = useState("error");

    //export props object to wrapped component
    const showSnackbar = (message, severity = "error", duration = 5000) => {
      setOpen(true);
      setMessage(message);
      setSeverity(severity);
      setDuration(duration);
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };

    //Render snackbar and wrapped component (Login.js and Profile.js)
    return (
      <>
        <WrappedComponent {...props} showErrorSnackbar={showSnackbar} />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          autoHideDuration={duration}
          open={open}
          onClose={handleClose}
        >
          <Alert variant="filled" onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
};
