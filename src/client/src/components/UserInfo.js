import {
  Grid,
  Button,
  Avatar,
  Box,
  Typography,
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const UserInfo = () => {
  const { loggedIn } = useContext(AppContext);

  const userLoggedIn = loggedIn;
  const userInfo = {
    avatarSrc:
      "https://thumbs.dreamstime.com/z/young-man-generic-portrait-2333478.jpg",
    username: "Bob",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popoverClose = () => {
    setAnchorEl(null);
  };

  const signInDialogOnClick = () => {
    setOpenSignIn(true);
  };

  const closeSignInDialog = () => {
    setOpenSignIn(false);
  };

  const signUpDialogOnClick = () => {
    setOpenSignUp(true);
  };

  const closeSignUpDialog = () => {
    setOpenSignUp(false);
  };

  if (!userLoggedIn) {
    return (
      <Box mt={2}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-end"
          alignItems="stretch"
        >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={signInDialogOnClick}
            >
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={signUpDialogOnClick}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={openSignIn}
          onClose={closeSignInDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent style={{ overflow: "hidden" }}>
            <Box pb={3}>
              <LoginForm />
            </Box>
          </DialogContent>
        </Dialog>
        <Dialog
          open={openSignUp}
          onClose={closeSignUpDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent style={{ overflow: "hidden" }}>
            <Box pb={3}>
              <SignUpForm />
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    );
  } else {
    return (
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="secondary"
          onClick={openPopover}
        >
          <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Typography className="username" variant="h5">
                {userInfo.username}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                alt={userInfo.username}
                src={userInfo.avatarSrc}
                className="avatar"
              />
            </Grid>
          </Grid>
        </Button>
        <Popover
          id={id}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={popoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography> Punkty czy coś</Typography>
        </Popover>
      </div>
    );
  }
};

export default UserInfo;
