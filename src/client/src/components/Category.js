import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

const Category = ({ data }) => {
  if (!data) return <></>;
  const { name } = data;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Button size="small" color="primary" fullWidth>
          Show more
        </Button>
      </CardContent>
    </Card>
  );
};

export default Category;
