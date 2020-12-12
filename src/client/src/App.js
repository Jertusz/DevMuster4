import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { Route, Switch, useLocation } from "react-router-dom";
import CategoryMenu from "./components/CategoryMenu";
import Challenges from "./components/Challenges";
import CurrentChallenge from "./components/CurrentChallenge";
import Leaderboard from "./components/Leaderboard";
import Logo from "./components/Logo";
import UserInfo from "./components/UserInfo";
import { AppContext } from "./context/AppContext";

function App() {
  const [challengeOpen, setChallengeOpen] = React.useState(true);
  const { getExcerciseList, getCategories, setCategory, register } = useContext(
    AppContext
  );

  useEffect(() => {
    setCategory(1);
    getExcerciseList();
    getCategories();
    register();
  }, []);

  return (
    <Box mx={3}>
      <Grid container spacing={3} justify="center" className="wrapper">
        <Grid item xs={8} className="logo">
          <Logo />
        </Grid>
        <Grid item xs>
          <UserInfo />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={8}
          lg={10}
          spacing={3}
          className="left"
          justify="center"
        >
          <CategoryMenu />
          <Grid item xs>
            <Challenges />
          </Grid>
        </Grid>
        <Grid item xs className="leaderboard">
          <Leaderboard />
        </Grid>
      </Grid>
      <Route
        path="/challenge/:id"
        render={(props) => (
          <CurrentChallenge
            challenge={{
              name: "simple_addition_and_substraction",
              problem: "2+2-2",
              subcategory: "3",
              difficulty: "E",
              solution_a: "1",
              solution_b: "2",
              solution_c: "3",
              solution_d: "4",
            }}
            open={challengeOpen}
            setOpen={setChallengeOpen}
            {...props}
          />
        )}
      />
    </Box>
  );
}

export default App;
