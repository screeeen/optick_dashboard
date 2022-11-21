import React from "react";
import {
  StyledChart,
  StyledColumn,
  StyledRow,
  Bar,
} from "./StyledDashboardElements";

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
    <StyledChart>
      <StyledColumn>
        <h2>Threat Distribution</h2>
        <StyledRow>
          <StyledColumn>
            {legend.map((item) =>
              StatsThreats({
                name: item.name,
                amount: item.amount,
                color: color,
                totalValues: totalValues,
              })
            )}
          </StyledColumn>
        </StyledRow>
      </StyledColumn>
    </StyledChart>
  );
}

const StatsThreats = ({ name, amount, color, totalValues }) => {
  return (
    <StyledRow>
      <Bar value={amount} max={totalValues} color={color} amount={amount} />
      <h4>{`${amount} ${name}`}</h4>
    </StyledRow>
  );
};
