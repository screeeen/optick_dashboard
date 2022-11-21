import React from "react";
import { StyledMessage } from "./StyledDashboardElements";

const defaultTitle = "Select a wider range";
const defaultMessage =
  "A minimum of 2 days of data is needed in order to display these metrics";

export default function FallbackMessage({
  title = defaultTitle,
  message = defaultMessage,
}) {
  return (
    <StyledMessage>
      <h4>{title}</h4>
      <p>{message}</p>
    </StyledMessage>
  );
}
