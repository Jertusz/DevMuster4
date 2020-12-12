import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { StarBorder, Favorite } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const Challenges = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Challanges table">
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell align="right">Sub category</TableCell>
            <TableCell align="right">Difficulty</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <Link to="/challenge/1">Pitagoras</Link>
            </TableCell>
            <TableCell align="right">Kategoria</TableCell>
            <TableCell align="right">
              <Rating
                readOnly
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorder fontSize="inherit" />}
              />
            </TableCell>
            <TableCell align="right">
              <StyledRating
                readOnly
                defaultValue={2}
                precision={0.5}
                IconContainerComponent={Favorite}
                color="red"
                emptyIcon={<Favorite fontSize="inherit" />}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <Link to="/challenge/2">Zabawna całka</Link>
            </TableCell>

            <TableCell align="right">Analiza</TableCell>
            <TableCell align="right">
              <Rating
                readOnly
                defaultValue={5}
                precision={0.5}
                emptyIcon={<StarBorder fontSize="inherit" />}
              />
            </TableCell>
            <TableCell align="right">
              <StyledRating
                readOnly
                defaultValue={4.5}
                precision={0.5}
                IconContainerComponent={Favorite}
                color="red"
                emptyIcon={<Favorite fontSize="inherit" />}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Challenges;
