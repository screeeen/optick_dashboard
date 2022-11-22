import React from "react";
import styled from "styled-components";

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
        cutout: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        position: "right",
        padding: 2,
      },
    },
  };

  return (
    <Container grow={2}>
      <h2>Traffic Veracity</h2>
      <Row>
        <Chart>
          <Doughnut datasetIdKey="id" data={chartData} options={options} />
        </Chart>
        <Column>
          {legend.map((item) =>
            StatsDot({
              name: item.name,
              amount: item.amount,
              color: item.color,
            })
          )}
        </Column>
      </Row>
    </Container>
  );
}

const StatsDot = ({ name, amount, color }) => {
  return (
    <Row>
      <Dot color={color} />
      <h4>{amount}</h4>
      <span>{name}</span>
    </Row>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: ${(props) => props.grow};
  padding: 0 2rem;
  border-radius: 0.5rem;
  background: whitesmoke;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  h2 {
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Chart = styled.div`
  width: 9rem;
  height: 100%;
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  h4 {
    padding: 0 0.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: transparent;
  border: 4px solid ${(props) => props.color};
  border-radius: 100%;
`;
