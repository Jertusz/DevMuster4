import { Box, Grid } from "@material-ui/core";
import CategoryMenu from "./components/CategoryMenu";
import Challenges from "./components/Challenges";
import Leaderboard from "./components/Leaderboard";
import Logo from "./components/Logo";

function App() {
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
    </Box>
  );
}

export default App;
