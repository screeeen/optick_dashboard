import React from "react";
import { StyledDateSelector } from "./StyledDashboardElements";

const rangeOptions = {
  today: "Today",
  yesterday: "Yesterday",
  last_7_days: "Last 7 days",
  last_30_days: "Last 30 days",
};

export default function ({ rangeOptions }) {
  return (
    <StyledDateSelector>
      {rangeOptions.map((op) => (
        <option>{op}</option>
      ))}
    </StyledDateSelector>
  );
}
