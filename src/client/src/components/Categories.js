import { Grid } from "@material-ui/core";
import React from "react";
import Category from "./Category";

const Categories = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => (
        <Grid item xs key={category.id}>
          <Category data={category} />
        </Grid>
      ))}
    </>
  );
};
export default Categories;
