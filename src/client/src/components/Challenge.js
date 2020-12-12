import { TableCell, TableRow } from "@material-ui/core";
import { Favorite, StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { Link } from "react-router-dom";
import { mapDiff } from "../utils/helpers";
import StyledRating from "../utils/StyledRating";

const Challenge = ({ challenge }) => {
  const { name, subcategory, difficulty } = challenge;

  return (
    <TableRow>
      <TableCell scope="row">
        <Link to="/challenge/1">{name}</Link>
      </TableCell>
      <TableCell align="right">{subcategory}</TableCell>
      <TableCell align="right">
        <Rating
          readOnly
          max={3}
          defaultValue={mapDiff(difficulty)}
          precision={0.5}
          emptyIcon={<StarBorder fontSize="inherit" />}
        />
      </TableCell>
      <TableCell align="right">
        <StyledRating
          readOnly
          defaultValue={5}
          precision={0.5}
          IconContainerComponent={Favorite}
          color="red"
          emptyIcon={<Favorite fontSize="inherit" />}
        />
      </TableCell>
    </TableRow>
  );
};

export default Challenge;
