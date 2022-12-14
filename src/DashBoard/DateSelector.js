import React from "react";
import styled from "styled-components";

const rangeOptions = {
  today: "Today",
  yesterday: "Yesterday",
  last_7_days: "Last 7 days",
  last_30_days: "Last 30 days",
};

export default function ({ dateRange, setDateRange }) {
  const handleChange = (event) => {
    setDateRange(
      Object.keys(rangeOptions).find(
        (key) => rangeOptions[key] === event.target.value
      )
    );
  };

  return (
    <DateSelector
      labelId="simple-select-label"
      id="simple-select"
      value={rangeOptions[dateRange]}
      label="Range"
      onChange={handleChange}
    >
      {Object.values(rangeOptions).map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </DateSelector>
  );
}

const DateSelector = styled.select`
  color: black;
`;
