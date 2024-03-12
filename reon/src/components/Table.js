import React from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import * as XLSX from "xlsx";
const CustomTable = ({ data }) => {
  const downloadExcel = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(data.data);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color={"GrayText"}>
          Table
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Avg</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.avg}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          onClick={downloadExcel}
          variant="contained"
          color="primary"
          sx={{ marginTop: "5px" }}
        >
          Download Excel
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomTable;
