import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "./Button";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

CustomTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonEdit: PropTypes.func.isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomTable({
  rows,
  headers,
  onButtonEdit,
  onButtonDelete,
}) {
  const getRowData = (row) => {
    const rowData = [];
    headers.forEach((header, index) => {
      if (header === "action") {
        rowData.push(
          <StyledTableCell
            key={header}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            align="right"
          >
            {row[header].map((item) => (
              <Button
                key={item}
                onClick={() =>
                  item === "edit" ? onButtonEdit(row) : onButtonDelete(row)
                }
                variant="contained"
              >
                {item}
              </Button>
            ))}
          </StyledTableCell>
        );
      } else if (header === "image") {
        rowData.push(
          <StyledTableCell key={header} align={index === 0 ? "left" : "right"}>
            <img src={row[header]} width="100px" alt="" />
          </StyledTableCell>
        );
      } else {
        rowData.push(
          <StyledTableCell key={header} align={index === 0 ? "left" : "right"}>
            {row[header]}
          </StyledTableCell>
        );
      }
    });
    return rowData;
  };

  return (
    <TableContainer  sx={{ width: "100%",maxHeight:'60vh',height:'100%' }} component={Paper} elevation={3}>
      <Table stickyHeader sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={header} align={index === 0 ? "left" : "right"}>
                {header.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {getRowData(row)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
