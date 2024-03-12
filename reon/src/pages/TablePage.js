import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "../components/Table";
import { Grid  } from "@mui/material";
const TablePage = () => {
  const data = useSelector((state) => state);

  return (
    <div>
      <Grid container justifyContent="center" mt={10}>
        <Grid item xs={12} sm={8} md={6} sx={{ textAlign: "center" }}>
          <CustomTable data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default TablePage;
