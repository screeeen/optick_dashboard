import React from "react";
import styled from "styled-components";

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

const StyledMessage = styled.div`
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
