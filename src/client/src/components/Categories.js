import { Grid } from "@material-ui/core";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <Grid>
      {categories.map((cat) => (
        <Category data={cat} />
      ))}
    </Grid>
  );
};
export default Categories;
