import React from "react";
import styled from "styled-components";
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

const StyledRow = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledChartContainer = styled(StyledRow)`
  max-height: 14vh;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid yellow;
`;

const StyledBoardRow = styled(StyledRow)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 5%;
  border: 1px solid blue;
`;
