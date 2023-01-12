import React from "react";
import logo from "../assets/images/logo.svg";
import iconArrowDownIcon from "../assets/images/icon-arrow-down.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import NavbarDropDownItem from "./NavbarDropDownItem";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import todoIcon from "../assets/images/icon-todo.svg";
const Navbar = () => {
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [showCompanyOptions, setShowCompanyOptions] = React.useState(false);
  return (
    <nav className="container mx-auto relative py-7 px-5 md:px-12 font-epilogue">
      <div class="flex justify-between">
        <div class="flex space-x-12 items-center">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-25 md:w-20" />
          <div class="hidden md:flex space-x-8 lg:space-x-12">
            <div
              className="relative flex items-center space-x-1 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation;
                setShowFeatures(!showFeatures);
              }}
            >
              <a href="#" className=" hover:text-gray-400 ">
                Features
              </a>
              <img
                src={iconArrowDownIcon}
                alt=""
                className="w-2.5 h-1.5 hover:pinter"
              />
              {/* Dropdown Menu */}
              <div
                className={`${
                  showFeatures ? "md:flex" : "hidden"
                } z-50 flex-col w-44 rounded-xl space-y-5 absolute right-0 shadow-2xl py-2 px-5 border top-[calc(100%+1.2rem)] bg-white`}
              >
                <NavbarDropDownItem img={todoIcon} title="Todo List" />
                <NavbarDropDownItem img={calendarIcon} title="Calendar" />
                <NavbarDropDownItem img={remindersIcon} title="Reminders" />
                <NavbarDropDownItem img={planningIcon} title="Planning" />
              </div>
            </div>
            <div
              className="flex relative items-center space-x-1 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation;
                setShowCompanyOptions(!showCompanyOptions);
              }}
            >
              <a href="#" className=" hover:text-gray-400 ">
                Company
              </a>
              <img
                src={iconArrowDownIcon}
                alt=""
                className="w-2.5 h-1.5 hover:pinter"
              />
              <div
                className={`${
                  showCompanyOptions ? "md:flex" : "hidden"
                }  flex-col w-36 rounded-xl space-y-5 absolute left-0 shadow-2xl drop-shadow-2xl py-2 px-5 border top-[calc(100%+1.2rem)]`}
              >
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            </div>

            <a href="#" className=" hover:text-gray-400 my-auto">
              Careers
            </a>

            <a href="#" className=" hover:text-gray-400 my-auto">
              About
            </a>
          </div>
        </div>

        <div class="hidden md:flex space-x-10 items-center">
          <a href="#" className="hover:text-gray-400">
            Login
          </a>
          <a
            href="#"
            class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 border border-gray-200 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Register
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
