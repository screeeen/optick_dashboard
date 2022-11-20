import React, { useState } from "react";
import { StyledSidebar } from "./StyledSidebar";
import SelectionItem from "./SelectionItem";
import { MENU_ITEMS } from "./menuDescriptor";
import { useDispatch } from "react-redux";
import { changePage } from "../actions/LayoutActions";

export default function Sidebar() {
  const [selection, setSelection] = useState(MENU_ITEMS[0].name);
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

//select({ e, name: item.name }
