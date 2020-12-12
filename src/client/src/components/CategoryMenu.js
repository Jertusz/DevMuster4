import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Categories from "./Categories";
import WrapperCat from "./hoc/WrapperCat";

const CategoryMenu = () => {
  const { categories, currentCategoryId } = useContext(AppContext);
  const currentCategory = categories[currentCategoryId];
  const currentSubs = currentCategory?.sub;

  return (
    <>
      <WrapperCat>
        <Categories categories={categories} />
      </WrapperCat>
      <WrapperCat>
        <Categories categories={currentSubs} sub={true} />
      </WrapperCat>
    </>
  );
};

export default CategoryMenu;
