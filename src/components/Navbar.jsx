import React from "react";
import logo from "../assets/images/logo.svg";
import iconArrowDownIcon from "../assets/images/icon-arrow-down.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import remindersIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
import todoIcon from "../assets/images/icon-todo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import NavbarDropDownItem from "./NavbarDropDownItem";
import Drawer from "./Drawer";
const Navbar = () => {
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [showCompanyOptions, setShowCompanyOptions] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth > 800) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <nav className="container relative mx-auto py-7 px-5 font-epilogue md:px-12">
      <div className="flex justify-between">
        <div className="flex items-center md:space-x-6 lg:space-x-12">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-25 md:w-20" />
          <div className="hidden space-x-8 md:flex md:space-x-3 lg:space-x-12">
            <div
              className="relative flex items-center space-x-1 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation;
                setShowFeatures(!showFeatures);
              }}
            >
              <a href="#" className="hover:text-gray-400 ">
                Features
              </a>
              <img src={iconArrowDownIcon} alt="" className="h-1.5 w-2.5" />
              {/* Dropdown Menu */}
              <div
                className={`${
                  showFeatures ? "md:flex" : "hidden"
                } absolute right-0 top-[calc(100%+1.2rem)] z-50 w-44 flex-col space-y-5 rounded-xl border bg-white py-2 px-5 shadow-2xl`}
              >
                <NavbarDropDownItem img={todoIcon} title="Todo List" />
                <NavbarDropDownItem img={calendarIcon} title="Calendar" />
                <NavbarDropDownItem img={remindersIcon} title="Reminders" />
                <NavbarDropDownItem img={planningIcon} title="Planning" />
              </div>
            </div>
            <div
              className="relative flex items-center space-x-1 hover:cursor-pointer"
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
                className="hover:pinter h-1.5 w-2.5"
              />
              <div
                className={`${
                  showCompanyOptions ? "md:flex" : "hidden"
                }  absolute left-0 top-[calc(100%+1.2rem)] w-36 flex-col space-y-5 rounded-xl border py-2 px-5 shadow-2xl drop-shadow-2xl`}
              >
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            </div>

            <a href="#" className=" my-auto hover:text-gray-400">
              Careers
            </a>

            <a href="#" className=" my-auto hover:text-gray-400">
              About
            </a>
          </div>
        </div>

        <div className="hidden items-center space-x-10 md:flex">
          <a href="#" className="hover:text-gray-400">
            Login
          </a>
          <a
            href="#"
            className="group relative overflow-hidden rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-600 shadow-inner"
          >
            <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
            <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
            <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
              Register
            </span>
          </a>
        </div>
        <img
          src={iconMenu}
          alt=""
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && (
          <div
            className="fixed inset-0 z-10 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <div
              tabIndex="0"
              className="absolute inset-0 bg-black opacity-50"
            ></div>
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
