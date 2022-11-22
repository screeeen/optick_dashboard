import React, { useState } from "react";
import SelectionItem from "./SelectionItem";
import { MENU_ITEMS } from "./menuDescriptor";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/LayoutActions";
import styled from "styled-components";

export default function ({ currentPage }) {
  const [selection, setSelection] = useState(currentPage);
  const dispatch = useDispatch();

  const selectPage = ({ name }) => {
    setSelection(name);
    dispatch(changePage(name));
  };

  return (
    <Sidebar>
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
    </Sidebar>
  );
}

const Sidebar = styled.section`
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1% 0;
  color: #99b4cc;

  p {
    align-self: flex-start;
    font-size: 1em;
    font-weight: bold;
    padding: 0 0 6% 8%;
  }

  overflow: auto;
  background: #00447f;
`;
