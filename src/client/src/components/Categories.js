import { Grid } from "@material-ui/core";
import React from "react";
import Category from "./Category";

const Categories = ({ categories, sub = false }) => {
  return (
    <>
      {categories?.map((category) => (
        <Grid item xs key={category.id}>
          <Category data={category} sub={sub} />
        </Grid>
      ))}
    </>
  );
};
export default Categories;
