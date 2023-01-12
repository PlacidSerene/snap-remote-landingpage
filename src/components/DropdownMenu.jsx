import React from "react";
import NavbarDropDownItem from "./NavbarDropDownItem";

const DropdownMenu = ({ title, items }) => {
  return (
    <div>
      <p>{title}</p>
      {items.map((item) => (
        <NavbarDropDownItem key={item.id} img={item?.img} title={item.title} />
      ))}
    </div>
  );
};

export default DropdownMenu;
