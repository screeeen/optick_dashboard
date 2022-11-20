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

  useEffect(
    () => async () => {
      const testCall = `${STATS_URI}?range=today`;
      const data = await axios
        .get(testCall)
        .then((res) => res.data)
        .catch((error) => error);

      console.log("data", data);
    },
    []
  );

  return (
    <StyledDashboard>
      <StyledTopRow>
        {page}
        <DateSelector setDateRange={setDateRange} />
      </StyledTopRow>
    </StyledDashboard>
  );
}
