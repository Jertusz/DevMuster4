import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SubCategory = ({ data }) => {
  const { selectedSubCategoriesIds, toggleSubCategory } = useContext(
    AppContext
  );

  if (!data) return <></>;
  const { name, id } = data;

  const isActive = () => {
    return selectedSubCategoriesIds.includes(id);
  };

  const handleOnClick = () => {
    toggleSubCategory(id);
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
        <Typography variant="h6" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SubCategory;
