import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <img src={logo} alt="logo" />
      <p>user.name@company - (Company Name SL)</p>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.header`
  width: 100%;
  min-height: 4vh;
  padding: 1em;

  background: whiteSmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
