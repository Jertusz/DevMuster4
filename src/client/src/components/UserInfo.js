import { Avatar, Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { AppContext } from "../context/AppContext";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import LoginForm from "./LoginForm";

const UserInfo = () => {
  const userInfo = {
    avatarSrc:
      "https://thumbs.dreamstime.com/z/young-man-generic-portrait-2333478.jpg",
    username: "User Name",
  };
  const userLoggedIn = false;
  /*
    const {
         userLoggedIn,
         userInfo
     } = useContext(AppContext);
     */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
            <Button variant="outlined" color="primary">
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="secondary"
          onClick={handleClick}
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
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
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
