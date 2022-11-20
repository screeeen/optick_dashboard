import React from "react";
import { StyledMenuItem } from "./StyledMenuItem";

export default function SelectionItem({ icon, name, onClick, isSelected }) {
  return (
    <StyledMenuItem onClick={onClick} isSelected={isSelected}>
      {icon}
      <h5>{name}</h5>
    </StyledMenuItem>
  );
}
