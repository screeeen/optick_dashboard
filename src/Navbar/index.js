import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <StyledNavbar>
      <img src={logo} alt="logo" />
      <p>user.name@company - (Company Name SL)</p>
    </StyledNavbar>
  );
}
