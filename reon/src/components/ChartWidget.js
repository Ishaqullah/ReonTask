import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Typography, Card, CardContent } from "@mui/material";

const ChartWidget = ({ data }) => {
  const meta = data.meta;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" align="center" gutterBottom color={"GrayText"}>
          Chart
        </Typography>
        <LineChart width={600} height={300} data={data.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {meta.map(
            (item) =>
              item.chartType === "line" && (
                <Line
                  key={item.field}
                  type="monotone"
                  dataKey={item.field}
                  stroke={item.color}
                  activeDot={{ r: 8 }}
                />
              )
          )}
          {meta.map(
            (item) =>
              item.chartType === "bar" && (
                <Line
                  key={item.field}
                  type="monotone"
                  dataKey={item.field}
                  stroke={item.color}
                  activeDot={{ r: 8 }}
                />
              )
          )}
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default ChartWidget;
