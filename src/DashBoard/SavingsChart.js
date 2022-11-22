import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import FallbackMessage from "./FallbackMessage";

export default function Savings() {
  const [data, setData] = useState(undefined);

  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });

  useEffect(() => {
    const SAVINGS_URI = process.env.REACT_APP_SAVINGS_URI;

    axios
      .get(SAVINGS_URI)
      .then((res) => setData(res.data))
      .catch((error) => error);
  }, []);

  if (!data) return;
  return (
    <>
      <Container>
        <h2>Savings</h2>
        <Column>
          <p className={"big"}>Total saved</p>
          <h1>{formatter.format(data.total)}</h1>
        </Column>
        <Row>
          <Column>
            <p>Last 30 days</p>
            <h3>{formatter.format(data.last30days)}</h3>
          </Column>
          <Column>
            <p>Next 30 days projection</p>
            <h3>{formatter.format(data.next30days)}</h3>
          </Column>
        </Row>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 2rem;
  border-radius: 0.5rem;
  background: whitesmoke;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  h1 {
    font-size: 3vw;
  }
  h2 {
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem 0;
  }
  p {
    color: #bbb;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    white-space: nowrap;
  }
  .big {
    color: #777;
  }
  h3 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 2vw;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
