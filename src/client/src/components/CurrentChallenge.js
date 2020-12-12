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
import React, { forwardRef, useContext, useEffect, useState } from "react";
import { Close, StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { mapDiff } from "../utils/helpers";
import Feedback from "./Feedback";
import axios from "axios";
import createHeader from "../utils/createHeader";
import { AppContext } from "../context/AppContext";

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
  // challenge,
  open,
  setOpen,
  match: { params },
  history,
}) => {
  const [selected, setSelected] = useState(null);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [challenge, setChallenge] = useState(null);
  const [correct, setCorrect] = useState(null);
  const classes = useStyles();
  console.log(selected);

  const { token } = useContext(AppContext);
  const headers = createHeader(token);

  // const Transition = forwardRef((props, ref) => {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const check = async () => {
    const res = await axios.get(
      `/exercises/${id}/?solution=true&answer=${selected}`,
      {
        headers,
      }
    );
    console.log("correct", res);
  };

  const { id } = params;

  useEffect(() => {
    console.log("headers", headers);
    (async () => {
      const res = await axios.get(`/exercises/${id}/?solution=false`, {
        headers,
      });
      console.log(res);
      setChallenge(res.data);
    })();
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  const handleClose = () => {
    history.push("/");
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
  } = challenge || {};

  const solutions = [solution_a, solution_b, solution_c, solution_d];
  if (!challenge) return <>Loading</>;

  return (
    <>
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
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                console.log("openFeedback", openFeedback);
                check();
                setOpenFeedback(true);
              }}
            >
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
              setSelected(e.target.value);
            }}
          >
            {solutions?.map((solution, i) => (
              <>
                {}
                <FormControlLabel
                  key={i}
                  value={solution}
                  label={solution}
                  control={<Radio />}
                />
              </>
            ))}
          </RadioGroup>
        </Box>
      </Dialog>
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
    </>
  );
};

export default CurrentChallenge;
