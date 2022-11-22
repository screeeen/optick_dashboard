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
    <Message>
      <Column>
        <h4>{title}</h4>
        <p>{message}</p>
      </Column>
    </Message>
  );
}

const Message = styled.div`
  width: 40%;
  height: 60%;
  border-radius: 10px;
  background-color: lightblue;
  border: 1px solid blue;
  color: blue;
  padding: 0 2rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
  h4 {
    font-weight: bold;
  }
`;
