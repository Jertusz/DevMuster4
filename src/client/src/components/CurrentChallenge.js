import {
  AppBar,
  Box,
  Button,
  createStyles,
  Dialog,
  FormControl,
  FormControlLabel,
  IconButton,
  makeStyles,
  Radio,
  RadioGroup,
  Select,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { forwardRef, useEffect, useState } from "react";
import { Close, StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { mapDiff } from "../utils/helpers";

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
  const [selected, setSelected] = useState(null);
  const classes = useStyles();
  console.log(selected);

  // const Transition = forwardRef((props, ref) => {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  const handleClose = () => {
    history.push("/");
    setOpen(false);
  };

  // const {id} = params;

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

  const solutions = [solution_a, solution_b, solution_c, solution_d];

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
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
            {name}
          </Typography>
          <Box justifyContent="center">
            <Rating
              readOnly
              max={3}
              defaultValue={mapDiff(difficulty)}
              precision={1}
              emptyIcon={<StarBorder fontSize="inherit" />}
            />
          </Box>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Submit
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" align="center">
        {problem}
      </Typography>
      <Box alignSelf="center" mt={3}>
        <RadioGroup
          value={selected}
          onChange={(e) => {
            console.log(selected);
            setSelected(parseInt(e.target.value));
          }}
        >
          {solutions?.map((solution, i) => (
            <FormControlLabel
              key={i}
              value={i}
              label={solution}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </Box>
    </Dialog>
  );
};

export default CurrentChallenge;
