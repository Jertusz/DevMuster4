import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import React from "react";
import StyledRating from "../utils/StyledRating";

const Feedback = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Feel free to leave feedback 😉
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box justifyContent="center" display="flex">
            <StyledRating
              name="feedback"
              defaultValue={4.5}
              precision={0.5}
              IconContainerComponent={Favorite}
              color="red"
              emptyIcon={<Favorite fontSize="inherit" />}
            />
          </Box>
          <Typography color="textSecondary" align="center">
            You can also check solution here.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
