import React from "react";
import {
  StyledChartContainer,
  StyledChart,
  StyledBoardRow,
} from "./StyledDashboardElements";
import Line from "./Line";
import Doughnut from "./Doughnut";
import Savings from "./Savings";
import Threats from "./Threats";

export default function MidRow({ data, page }) {
  if (!data) return;

  return (
    <StyledBoardRow>
      <StyledChartContainer>
        {page === "Dashboard" ? (
          <>
            <Line data={data} />
            <Doughnut data={data} />
          </>
        ) : (
          <>
            <Savings data={data} />
            <Doughnut data={data} />
            <Threats data={data} />
          </>
        )}
      </StyledChartContainer>
    </StyledBoardRow>
  );
}
