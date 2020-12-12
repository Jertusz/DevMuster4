import React, { useContext } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import { StarBorder, Favorite } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import StyledRating from "../utils/StyledRating";
import { AppContext } from "../context/AppContext";
import Challenge from "./Challenge";
import axios from "axios";
import createHeader from "../utils/createHeader";

const Challenges = () => {
  const { challenges, selectedSubCategoriesIds } = useContext(AppContext);

  // const getSubName = async (id) => {
  //   const res = await axios.get(`/categories/subcategory/${id}/`, {
  //     headers: createHeader(token),
  //   });
  //   console.log(res);
  //   return res.name;
  // };

  // getSubName(1);

  return (
    <TableContainer component={Paper}>
      <Box m={2}>
        <Typography variant="h5">Challenges</Typography>
      </Box>
      <Table aria-label="Challenges table">
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell align="right">Sub category id</TableCell>
            <TableCell align="right">Difficulty</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {challenges?.map(async (c, i) => {
            // c.subcategory = await getSubName(c.id);
            return <Challenge key={i} challenge={c} />;
          })} */}
          {challenges
            .filter((challenge) =>
              selectedSubCategoriesIds.length > 0
                ? selectedSubCategoriesIds.includes(challenge.subcategory)
                : true
            )
            ?.map((c, i) => {
              return <Challenge key={i} challenge={c} />;
            })}
          <TableRow>
            <TableCell scope="row">
              <Link to="/challenge/2">Zabawna całka</Link>
            </TableCell>

            <TableCell align="right">Analiza</TableCell>
            <TableCell align="right">
              <Rating
                readOnly
                max={3}
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
