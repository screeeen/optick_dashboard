import React from "react";
import { Line } from "react-chartjs-2";
import { StyledChart, StyledColumn } from "./StyledDashboardElements";
import FallbackMessage from "./FallbackMessage";
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

  const enoughData = data.length > 3;
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
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      y: {
        position: "left",
        ticks: {
          callback: function (value, index, values) {
            return Number((value / 700).toFixed(1)) + "K"; //pass tick values as a string into Number function
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      // title: {
      //   display: true,
      //   text: "Invalid Traffic over time",
      //   fontStyle: "bold",
      //   position: "top",
      // },
    },
  };

  return (
    <StyledChart grow={4}>
      <StyledColumn>
        <h2>Invalid Traffic over time</h2>
        {enoughData ? (
          <Line datasetIdKey="id" data={chartData} options={options} />
        ) : (
          <FallbackMessage />
        )}
      </StyledColumn>
    </StyledChart>
  );
}
