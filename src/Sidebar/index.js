import React, { useState } from "react";
import SelectionItem from "./SelectionItem";
import { MENU_ITEMS } from "./menuDescriptor";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/LayoutActions";
import styled from "styled-components";

export default function Sidebar({ currentPage }) {
  const [selection, setSelection] = useState(currentPage);
  const dispatch = useDispatch();

  const selectPage = ({ name }) => {
    setSelection(name);
    dispatch(changePage(name));
  };

  return (
    <StyledSidebar>
      <p>INTELLIGENCE</p>
      {MENU_ITEMS.map((item) => (
        <SelectionItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          isSelected={selection.includes(item.name)}
          onClick={() => selectPage({ name: item.name })}
        />
      ))}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.section`
  width: 18%;
  min-width: 10vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2% 2% 2% 0;
  color: #99b4cc;

  p {
    font-size: 1em;
    font-weight: bold;
    padding: 2% 0 10% 2%;
  }

  overflow: auto;
  background: #00447f;
`;
