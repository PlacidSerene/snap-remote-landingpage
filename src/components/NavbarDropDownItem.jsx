import React from "react";

const NavbarDropDownItem = ({ img, title }) => {
  return (
    <div className="flex space-x-5 items-center text-sm">
      <img src={img} alt="" className="w-5 h-5" />
      <p>{title}</p>
    </div>
  );
};

export default NavbarDropDownItem;
