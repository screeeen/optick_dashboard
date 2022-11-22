import React from "react";
import styled from "styled-components";

export default function Threats({ data }) {
  if (!data) return;

  const total = 0;

  const sortedData = data.map((day) => ({
    badBot: day.threats.BadBot,
    dataTampering: day.threats.DataTampering,
    nonCompliantTraffic: day.threats.NonCompliantTraffic,
    statisticalOutliers: day.threats.StatisticalOutliers,
    telemetryMissing: day.threats.TelemetryMissing,
    total: day.total
  }));

  const sum = (data) => data.reduce((acu, dayData) => acu + dayData, total);

  const legend = [
    { name: "Bad Bots", amount: sum(sortedData.map((day) => day.badBot)) },
    { name: "Data Tampering", amount: sum(sortedData.map((day) => day.dataTampering)) },
    { name: "Non-compliant Traffic", amount: sum(sortedData.map((day) => day.nonCompliantTraffic)) },
    { name: "Statistical anomalies", amount: sum(sortedData.map((day) => day.statisticalOutliers)) },
    { name: "Telemetry Missing", amount: sum(sortedData.map((day) => day.telemetryMissing)) },
  ];

  const totalValues = legend.reduce((acu, val) => acu + val.amount, 0);

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
    <Row key={name}>
      <Bar value={amount} max={totalValues} color={color} amount={amount} />
      <h4>{amount}</h4>
      <span>{name}</span>
    </Row>
  );
};

const color = "#5f8bb1";

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;

  h4 {
    padding: 0 0.5%;
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
    font-size: 1vw;
    padding: 1rem 0;
  }
`;

const Bar = styled.progress`
  width: 4vw;

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
