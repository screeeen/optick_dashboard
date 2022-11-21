import React from "react";
import { Line } from "react-chartjs-2";
import { StyledChart, StyledColumn } from "./StyledDashboardElements";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ({ data, grow }) {
  if (!data) return;

  const labels = data.map((day) =>
    day.day.replace("-2022", "").replace("-", "/")
  );

  const datasets = data.map((day) => day.risk.invalid);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: datasets,
        label: "Invalid visits",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  };

  return (
    <StyledChart>
      <StyledColumn>
        <h2>Invalid Traffic over time</h2>
        <Line datasetIdKey="id" data={chartData} />
      </StyledColumn>
    </StyledChart>
  );
}
