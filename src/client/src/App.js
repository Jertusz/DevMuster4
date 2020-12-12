import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Route, Switch, useLocation } from "react-router-dom";
import CategoryMenu from "./components/CategoryMenu";
import Challenges from "./components/Challenges";
import CurrentChallenge from "./components/CurrentChallenge";
import Leaderboard from "./components/Leaderboard";
import Logo from "./components/Logo";

function App() {
  const [challengeOpen, setChallengeOpen] = React.useState(true);
  return (
    <Box mx={3}>
      <Grid container spacing={3} justify="center" className="wrapper">
        <Grid item xs={12} className="logo">
          <Logo />
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
            challenge={{}}
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
