import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Categories from "./Categories";
import WrapperCat from "./hoc/WrapperCat";

const CategoryMenu = () => {
  const { categories, currentCategoryId } = useContext(AppContext);
  const currentCategory = categories.find(
    (cat) => cat.id === currentCategoryId
  );
  const subs = currentCategory?.sub;
  return (
    <>
      <WrapperCat>
        <Categories categories={categories} />
      </WrapperCat>
      <WrapperCat>
        <Categories categories={subs} sub={true} />
      </WrapperCat>
    </>
  );
};

export default CategoryMenu;
