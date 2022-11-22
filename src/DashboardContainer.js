import React from "react";
import Navbar from "./Navbar";
import DashBoard from "./DashBoard";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function DashboardContainer() {
  const showExplorer = useSelector((state) => state.layout.showExplorer);
  const currentPage = useSelector((state) => state.layout.currentPage);

  return (
    <>
      <Navbar />
      <Container>
        {showExplorer && <Sidebar currentPage={currentPage} />}
        <DashBoard page={currentPage} />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  background: #d9d9d9;
`;
