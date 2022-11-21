import React from "react";
import {
  StyledChartContainer,
  StyledChart,
  StyledBoardRow,
} from "./StyledDashboardElements";
import Line from "./Line";
import Doughnut from "./Doughnut";

export default function MidRow({ data }) {
  if (!data) return;
  //   console.log("data", data);

  //   const labels = data.map((day) =>
  //     day.day.replace("-2022", "").replace("-", "/")
  //   );

  //   const datasetsLine = data.map((day) => day.risk.invalid);
  //   const datasetsDoughnut = data.map((day) => day.risk.invalid);

  //   const chartDataLine = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         data: datasetsLine,
  //         label: "Invalid visits",
  //         borderColor: "#3e95cd",
  //         fill: false,
  //       },
  //     ],
  //   };

  //   const chartDataDoughnut = {
  //     labels: "",
  //     datasets: [
  //       {
  //         data: datasetsDoughnut,
  //         borderColor: "#3e95cd",
  //         fill: false,
  //       },
  //     ],
  //   };

  //   console.log("chartData - Invalid", chartDataDoughnut);

  return (
    <StyledBoardRow>
      <StyledChartContainer>
        <Line data={data} />
        <Doughnut data={data} />
      </StyledChartContainer>
    </StyledBoardRow>
  );
}
