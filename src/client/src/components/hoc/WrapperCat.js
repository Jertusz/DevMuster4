import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

export const WrapperCat = ({ children, spacing = 2 }) => {
  return (
    <Grid container item xs={12} justify="space-between" spacing={spacing}>
      {children}
    </Grid>
  );
};

export default WrapperCat;
