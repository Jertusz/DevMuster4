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
  console.log("currentCategory", currentCategory);
  console.log("subs", subs);
  return (
    <>
      <WrapperCat>
        <Categories categories={categories} />
      </WrapperCat>
      {subs && (
        <WrapperCat>
          <Categories categories={subs} sub={true} />
        </WrapperCat>
      )}
    </>
  );
};

export default CategoryMenu;
