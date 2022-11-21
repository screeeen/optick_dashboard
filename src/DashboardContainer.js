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
      <StyledContainer>
        {showExplorer && <Sidebar currentPage={currentPage} />}
        <DashBoard page={currentPage} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
