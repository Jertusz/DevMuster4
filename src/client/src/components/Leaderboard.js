import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const Leaderboard = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Bob
            </TableCell>
            <TableCell align="right">123</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
