import React from "react";
import { Line } from "react-chartjs-2";
import FallbackMessage from "./FallbackMessage";
import styled from "styled-components";

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
        tension: 0.4,
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
        title: {
          display: true,
          text: "Number of visits",
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
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

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: ${(props) => props.grow};
  margin: 2em;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  h2 {
    font-weight: bold;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
