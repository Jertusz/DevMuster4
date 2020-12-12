import {
  AppBar,
  Button,
  createStyles,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { forwardRef, useEffect } from "react";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const CurrentChallenge = ({
  challenge,
  open,
  setOpen,
  match: { params },
  history,
}) => {
  const classes = useStyles();
  const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  const { id } = params || {};

  const handleClose = () => {
    history.push("/");
    setOpen(false);
  };

  const {
    name,
    problem,
    subcategory,
    difficulty,
    solution_a,
    solution_b,
    solution_c,
    solution_d,
  } = challenge;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Challenge nr {id}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default CurrentChallenge;
