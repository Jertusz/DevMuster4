import { Card, CardContent, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = ({ data }) => {
  const { setCategory, currentCategoryId } = useContext(AppContext);

  if (!data) return <></>;
  const { name, id } = data;

  const handleOnClick = () => {
    console.log("clicked", id);
    setCategory(id);
  };

  return (
    <Card
      onClick={handleOnClick}
      style={{
        cursor: "pointer",
        color: currentCategoryId === id ? "red" : "black",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Category;
