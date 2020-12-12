import { Box, Grid } from "@material-ui/core";
import { useContext } from "react";
import Categories from "./components/Categories";
import Leaderboard from "./components/Leaderboard";
import Logo from "./components/Logo";
import { AppContext } from "./context/AppContext";

function App() {
  const { categories } = useContext(AppContext);

  return (
    <Box mx={3}>
      <Grid container spacing={3} className="wrapper">
        <Grid item xs={12} className="logo">
          <Logo />
        </Grid>
        <Grid container item xs={12} md={8} lg={10} className="left">
          <Grid
            container
            item
            xs={12}
            justify="space-around"
            spacing={2}
            className="categories"
          >
            <Categories categories={categories} />
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
