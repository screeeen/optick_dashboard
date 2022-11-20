import axios from "axios";
import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";
import { StyledDashboard, StyledTopRow } from "./StyledDashboardElements";

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
      <StyledTopRow>
        {page}
        <DateSelector setDateRange={setDateRange} dateRange={dateRange} />
      </StyledTopRow>
    </StyledDashboard>
  );
}
