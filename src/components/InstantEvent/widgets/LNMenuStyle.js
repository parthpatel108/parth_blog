import React from "react";
import styled from "styled-components";

export const MenuBox = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
`;
export const MenuItemCountBadge = styled.span`
  /* background:#f9f9f9 */
  padding: 5px 8px;
  margin-right: 5px;
  font-size: 13px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  cursor: pointer;

  align-items: center;
  background-color: rgba(65, 66, 71, 0.08);
  background: ${(props) =>
    props.itemParams.isRefined ? "#ffffff" : "#41424714"};
  border-radius: 4px;
  color: ${(props) => (props.itemParams.isRefined ? "#22518a" : "#21243dcc")};
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 1.1px;
  margin-left: 8px;
  padding: 0 4px;
`;
export const MenuItem = styled.li`
  /* background:#f9f9f9 */
  /* padding: 5px 8px; */
  padding: 5px 0px 5px 5px;
  margin-right: 5px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  background: ${(props) =>
    props.itemParams.isRefined ? "#22518a" : "transparent"};
  font-weight: ${(props) => (props.itemParams.isRefined ? "600" : "normal")};
  color: ${(props) => (props.itemParams.isRefined ? "#fff" : "#000")};
  &:hover {
    background: #22518a;
    color: aliceblue;
    /* font-weight: 600; */
    border-color: #22518a;
    ${MenuItemCountBadge} {
      background: #ffffff;
      color: #22518a;
    }
  }
`;

export const MenuHeaderItem = styled.li`
  /* background:#f9f9f9 */
  padding: 5px 8px;
  margin-right: 5px;
  font-size: 13px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  /* cursor: pointer; */
  padding: 5px 20px 5px 8px;
  font-size: inherit;
  min-width: 100px;
`;
