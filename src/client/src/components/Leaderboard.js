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
} from "@material-ui/core";
import React from "react";

const Leaderboard = () => {
  return (
    <TableContainer component={Paper}>
      <Box m={2}>
        <Typography variant="h5">Leaderboard</Typography>
      </Box>
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
