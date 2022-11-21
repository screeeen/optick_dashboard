import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FallbackMessage from "./FallbackMessage";

export default function Savings() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const SAVINGS_URI = process.env.REACT_APP_SAVINGS_URI;

    axios
      .get(SAVINGS_URI)
      .then((res) => setData(res.data))
      .catch((error) => error);
  }, []);

  useEffect(() => {}, []);

  console.log("savings data", data);

  if (!data) return;
  return (
    <>
      <StyledChart>
        <StyledColumn>
          <h2>Savings</h2>
          <h4>Total saved</h4>
          <h2>{data.total}</h2>
          <StyledRow>
            <StyledColumn>
              <h4>Last 30 days</h4>
              <h2>{data.last30days}</h2>
            </StyledColumn>
            <StyledColumn>
              <h4>Next 30 days projection</h4>
              <h2>{data.next30days}</h2>
            </StyledColumn>
          </StyledRow>
        </StyledColumn>
      </StyledChart>
    </>
  );
}

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: ${(props) => props.grow};
  margin: 2em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  h2 {
    font-weight: bold;
  }
`;

const StyledRow = styled.div`
  display: flex;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
