import React from "react";
import Navbar from "../Navbar";
import DashBoard from ".";
import Sidebar from "../Sidebar";
import styled from "styled-components";

export default function DashboardContainer() {

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <DashBoard />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  background: #d9d9d9;
`;
