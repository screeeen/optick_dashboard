import axios from "axios";
import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";
import MidRow from "./MidRow";
import styled from "styled-components";

//https://us-central1-opticks-test.cloudfunctions.net/stats
//https://us-central1-opticks-test.cloudfunctions.net/savings
// console.log("REACT_APP_STATS_URI)", process.env.REACT_APP_STATS_URI);
// console.log("REACT_APP_SAVINGS_URI", process.env.REACT_APP_SAVINGS_URI);

export default function ({ page }) {
  const STATS_URI = process.env.REACT_APP_STATS_URI;
  const [dateRange, setDateRange] = useState("last_7_days");
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const testCall = `${STATS_URI}?range=${dateRange}`;
    axios
      .get(testCall)
      .then((res) => setData(res.data))
      .catch((error) => error);
  }, [dateRange]);

  return (
    <StyledDashboard>
      <StyledBoardRow>
        <DateSelector setDateRange={setDateRange} dateRange={dateRange} />
      </StyledBoardRow>

      <MidRow data={data} page={page} />
    </StyledDashboard>
  );
}

const StyledRow = styled.div`
  display: flex;
`;

const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
