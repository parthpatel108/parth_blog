import React from "react";
import { connectMenu } from "react-instantsearch-dom";
import {MenuBox,MenuHeaderItem,MenuItem,MenuItemCountBadge} from './LNMenuStyle'

const LNMenu = ({ items, refine, menuTitle }) => {
  //  {console.log(props)}
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
          {item.label}
          <MenuItemCountBadge itemParams={item}>
            {item.count}
          </MenuItemCountBadge>
          {/* {console.log(item)} */}
          {/* <a href="#" style={{ fontWeight: item.isRefined ? 'bold' : '' }}>
              {item.label} ({item.count})
            </a> */}
        </MenuItem>
      ))}
    </MenuBox>
  );
};

export default connectMenu(LNMenu);
