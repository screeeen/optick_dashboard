import React from "react";
import {
  StyledChart,
  StyledColumn,
  StyledRow,
  Dot,
} from "./StyledDashboardElements";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ({ data, grow }) {
  if (!data) return;

  const total = 0;

  const sortedData = data.map((day) => ({
    invalid: day.risk.invalid,
    suspicious: day.risk.suspicious,
    legitimate: day.risk.legitimate,
  }));

  const sum = (data) => data.reduce((acu, dayData) => acu + dayData, total);

  const totalInvalids = sum(sortedData.map((day) => day.invalid));
  const totalSuspicious = sum(sortedData.map((day) => day.suspicious));
  const totalLegitimate = sum(sortedData.map((day) => day.legitimate));

  const datasets = [totalInvalids, totalSuspicious, totalLegitimate];

  const legend = [
    { name: "invalid", amount: totalInvalids, color: "#feb031" },
    { name: "suspicious", amount: totalSuspicious, color: "#f05641" },
    { name: "legitimate", amount: totalLegitimate, color: "#25d184" },
  ];

  const chartData = {
    labels: "",
    datasets: [
      {
        data: datasets,
        backgroundColor: [
          "rgb(254,176,49)",
          "rgb(240,86,65)",
          "rgb(37,209,132)",
        ],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <StyledChart>
      <StyledColumn>
        <h2>Traffic Veracity</h2>
        <StyledRow>
          <Doughnut datasetIdKey="id" data={chartData} options={options} />
          <StyledColumn>
            {legend.map((item) =>
              StatsDot({
                name: item.name,
                amount: item.amount,
                color: item.color,
              })
            )}
          </StyledColumn>
        </StyledRow>
      </StyledColumn>
    </StyledChart>
  );
}

const StatsDot = ({ name, amount, color }) => {
  return (
    <StyledRow>
      <Dot color={color} />
      <h4>{`${amount} ${name}`}</h4>
    </StyledRow>
  );
};
