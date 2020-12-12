import { Grid } from "@material-ui/core";
import React from "react";
import Category from "./Category";
import SubCategory from "./SubCategory";

const Categories = ({ categories, sub = false }) => {
  return (
    <>
      {categories?.map((category) => (
        <Grid item xs key={category.id}>
          {sub ? <SubCategory data={category} /> : <Category data={category} />}
        </Grid>
      ))}
    </>
  );
};
export default Categories;
