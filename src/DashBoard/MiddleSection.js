import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import SavingsChart from "./SavingsChart";
import ThreatsChart from "./ThreatsChart";

export default function MiddleSection({ data, page }) {
  if (!data) return;

  return (
    <Section>
      {page === "Dashboard" ? (
        <>
          <LineChart data={data} />
          <DoughnutChart data={data} />
        </>
      ) : (
        <>
          <SavingsChart data={data} />
          <DoughnutChart data={data} />
          <ThreatsChart data={data} />
        </>
      )}
    </Section>
  );
}

const Row = styled.div`
  display: flex;
`;

const Section = styled(Row)`
  height: 40%;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;

`;
