import React from "react";
import styled from "styled-components";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";
import SavingsChart from "../Charts/SavingsChart";
import ThreatsChart from "../Charts/ThreatsChart";

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
  height: 35%;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;
