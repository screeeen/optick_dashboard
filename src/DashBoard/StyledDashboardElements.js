import styled from "styled-components";

export const StyledDateSelector = styled.select`
  color: black;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledBoardRow = styled(StyledRow)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledChartContainer = styled(StyledRow)`
  /* max-height: 20vh;
  min-height: 10vh; */
  height: 10vh;
  justify-content: flex-start;
`;

export const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  /* flex-grow: ${(props) => props.grow}; */
  h2 {
    font-weight: bold;
  }
`;

export const Dot = styled.div`
  background-color: transparent;
  border: 4px solid ${(props) => props.color};
  height: 12px;
  border-radius: 100%;
  width: 12px;
`;

export const StyledMessage = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 5%;
  background-color: lightblue;
  border: 1px solid blue;
  h4 {
    font-weight: bold;
  }

  color: blue;
`;
