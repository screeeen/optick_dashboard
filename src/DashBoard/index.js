import axios from "axios";
import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";
import MiddleSection from "./MiddleSection";
import styled from "styled-components";

//https://us-central1-opticks-test.cloudfunctions.net/stats
//https://us-central1-opticks-test.cloudfunctions.net/savings
// console.log("REACT_APP_STATS_URI)", process.env.REACT_APP_STATS_URI);
// console.log("REACT_APP_SAVINGS_URI", process.env.REACT_APP_SAVINGS_URI);

export default function ({ page }) {
  const STATS_URI = process.env.REACT_APP_STATS_URI;
  const [dateRange, setDateRange] = useState("last_7_days");
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const testCall = `${STATS_URI}?range=${dateRange}`;
    axios
      .get(testCall)
      .then((res) => setData(res.data))
      .catch((error) => error);
  }, [dateRange]);

  return (
    <Container>
      <SubContainer>
        <DateSelector setDateRange={setDateRange} dateRange={dateRange} />
      </SubContainer>

      <MiddleSection data={data} page={page} />
      <Section>
        <Other>Other widgets</Other>
      </Section>
    </Container>
  );
}

const StyledRow = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem;
`;

const SubContainer = styled(StyledRow)`
  width: 100%;
  max-height: 4rem;
  padding: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const Section = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Other = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: whitesmoke;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
