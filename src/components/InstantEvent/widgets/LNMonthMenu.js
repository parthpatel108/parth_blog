import React from "react";
import { connectMenu } from "react-instantsearch-dom";
import {MenuBox,MenuHeaderItem,MenuItem,MenuItemCountBadge} from './LNMenuStyle'
const alphaMonth = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const LNMonthMenu = ({ items, refine, menuTitle }) => {
  return (
    <MenuBox>
      <MenuHeaderItem>{menuTitle}:</MenuHeaderItem>
      {items.map((item) => (
        <MenuItem
          onClick={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
          key={item.value}
          itemParams={item}
        >
          {alphaMonth[item.label - 1]}
          <MenuItemCountBadge itemParams={item}>
            {item.count}
          </MenuItemCountBadge>
        </MenuItem>
      ))}
    </MenuBox>
  );
};

export default connectMenu(LNMonthMenu);
