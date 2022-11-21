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

  return (
    <StyledBoardRow>
      <StyledChartContainer>
        <Line data={data} />
        <Doughnut data={data} />
      </StyledChartContainer>
    </StyledBoardRow>
  );
}
