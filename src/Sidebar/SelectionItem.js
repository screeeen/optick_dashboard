import React from "react";
import styled from "styled-components";

export default function SelectionItem({ icon, name, onClick, isSelected }) {
  return (
    <StyledMenuItem onClick={onClick} isSelected={isSelected}>
      {icon}
      <h5>{name}</h5>
    </StyledMenuItem>
  );
}

const StyledMenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2% 1% 2% 5%;
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "whiteSmoke" : "#99b4cc")};

  border-left: ${(props) =>
    props.isSelected ? "6px solid whiteSmoke" : "none"};

  h5 {
    padding: 5%;
  }

  svg {
  }

  :hover {
    color: #fff;
  }
`;
