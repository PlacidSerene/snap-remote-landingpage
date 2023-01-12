import React from "react";
import calendarIcon from "../assets/images/icon-calendar.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import todoIcon from "../assets/images/icon-todo.svg";
import DropdownMenu from "./DropdownMenu";
import iconArrowDownIcon from "../assets/images/icon-arrow-down.svg";
import NavbarDropDownItem from "./NavbarDropDownItem";

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-20 flex h-full w-[70%] flex-col gap-7 bg-white p-12 duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="fixed top-4 right-4 text-xl"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <div>
          <div className="flex items-center gap-2">
            <p>Features</p>
            <img src={iconArrowDownIcon} alt="" className="h-1.5 w-2.5" />
          </div>
          <div className="flex w-44 flex-col space-y-5 bg-white py-2 px-5">
            <NavbarDropDownItem img={todoIcon} title="Todo List" />
            <NavbarDropDownItem img={calendarIcon} title="Calendar" />
            <NavbarDropDownItem img={remindersIcon} title="Reminders" />
            <NavbarDropDownItem img={planningIcon} title="Planning" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Company</p>
            <img src={iconArrowDownIcon} alt="" className="h-1.5 w-2.5" />
          </div>
          <div className="w-36 space-y-5 py-2 px-5">
            <p>History</p>
            <p>Our Team</p>
            <p>Blog</p>
          </div>
        </div>
        <p>Careers</p>
        <p>About</p>
        <div className="flex flex-col items-center justify-center gap-5">
          <a href="#" className="">
            Login
          </a>
          <a href="#" className="w-full rounded-xl border py-2 text-center">
            Register
          </a>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
