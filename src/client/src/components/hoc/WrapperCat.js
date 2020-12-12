import { Grid } from "@material-ui/core";
import React from "react";

export const WrapperCat = ({ children, className = "category" }) => {
  return (
    <Grid
      container
      item
      xs={12}
      justify="space-around"
      spacing={1}
      className={className}
    >
      {children}
    </Grid>
  );
};

export default WrapperCat;
