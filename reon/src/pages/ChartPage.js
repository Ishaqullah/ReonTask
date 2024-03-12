import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../state/action/dataActions";
import ChartWidget from "../components/ChartWidget";
import { Link } from "react-router-dom";
import fakeData from "../data/data";
import { Button, Grid } from "@mui/material";
const ChartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  dispatch(setData(fakeData));

  return (
    <div>
      <Grid container justifyContent="center" mt={10}>
        <Grid item xs={12} sm={8} md={6} sx={{ textAlign: "center" }}>
          <ChartWidget data={data} />
          <Link to="/table">
            <Button
              color="primary"
              variant="contained"
              sx={{ marginTop: "10px" }}
            >
              Show Table
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartPage;
