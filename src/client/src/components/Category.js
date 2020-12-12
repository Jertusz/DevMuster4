import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = ({ data, sub }) => {
  const {
    currentCategoryId,
    selectedSubCategoriesIds,
    setCategory,
  } = useContext(AppContext);

  if (!data) return <></>;
  const { name, id } = data;

  const isActive = () => {
    if (!sub) return id === currentCategoryId;
    return selectedSubCategoriesIds.includes(id);
  };

  const handleOnClick = () => {
    setCategory(id);
  };

  const active = isActive();

  return (
    <Card
      onClick={handleOnClick}
      style={{
        cursor: "pointer",
        color: active ? "red" : "black",
        userSelect: "none",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="h2" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
