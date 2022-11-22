import React from "react";
import styled from "styled-components";

export default function Threats({ data }) {
  if (!data) return;
  console.log("data", data);

  const total = 0;

  const sortedData = data.map((day) => ({
    badBot: day.threats.BadBot,
    dataTampering: day.threats.DataTampering,
    nonCompliantTraffic: day.threats.NonCompliantTraffic,
    statisticalOutliers: day.threats.StatisticalOutliers,
    telemetryMissing: day.threats.TelemetryMissing,
  }));

  console.log("sortedData", sortedData);

  const sum = (data) => data.reduce((acu, dayData) => acu + dayData, total);

  const totalBadBot = sum(sortedData.map((day) => day.badBot));
  console.log("totalBadBot", totalBadBot);

  const totalDataTampering = sum(sortedData.map((day) => day.dataTampering));
  console.log("totalDataTampering", totalDataTampering);

  const totalNonCompliantTraffic = sum(
    sortedData.map((day) => day.nonCompliantTraffic)
  );
  console.log("totalNonCompliantTraffic", totalNonCompliantTraffic);

  const totalStatisticsOutliers = sum(
    sortedData.map((day) => day.statisticalOutliers)
  );

  const totalTelemetry = sum(sortedData.map((day) => day.telemetryMissing));

  const datasets = [
    totalBadBot,
    totalDataTampering,
    totalNonCompliantTraffic,
    totalStatisticsOutliers,
    totalTelemetry,
  ];

  const color = "#5f8bb1";

  const legend = [
    { name: "Bad Bots", amount: totalBadBot },
    { name: "Data Tampering", amount: totalDataTampering },
    { name: "Non-compliant Traffic", amount: totalNonCompliantTraffic },
    { name: "Statistical anomalies", amount: totalStatisticsOutliers },
    { name: "Telemetry Missing", amount: totalTelemetry },
  ];

  const totalValues = datasets.reduce((acu, val) => acu + val, 0);

  return (
    <Container>
      <h2>Threat Distribution</h2>
      <Column>
        {legend.map((item) =>
          StatsThreats({
            name: item.name,
            amount: item.amount,
            color: color,
            totalValues: totalValues,
          })
        )}
      </Column>
    </Container>
  );
}

const StatsThreats = ({ name, amount, color, totalValues }) => {
  return (
    <Row>
      <Bar value={amount} max={totalValues} color={color} amount={amount} />
      <h4>{amount}</h4>
      <span>{name}</span>
    </Row>
  );
};

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  h4 {
    padding: 0 0.5rem;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background: whitesmoke;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  h2 {
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem 0;
  }
`;

const Bar = styled.progress`
  height: 10px;
  width: 300px;
  appearance: none;
  -webkit-appearance: none;

  ::-webkit-progress-bar {
    background-color: transparent;
  }

  ::-webkit-progress-value {
    background: ${(props) => props.color};
  }

  ::-moz-progress-bar {
    background-color: transparent;
  }

  ::-moz-progress-value {
    background: ${(props) => props.color};
  }

  -moz-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -webkit-transform: scale(-1, -1);
  transform: scale(-1, -1);
`;
