import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiHelpCircle, BiLogOutCircle } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsDisplay, BsDot } from "react-icons/bs";
import { RiFolderUploadLine } from "react-icons/ri";
import { MdBarChart, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { PiCirclesThreeThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { RxCalendar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { IoIosPersonAdd } from "react-icons/io";
const DpMenu = (props) => {
  // const handleLogout = () => {
  //     sessionStorage.clear();
  //     navigate("/Signup");
  // };
  // const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  // const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(() => {
    return parseInt(sessionStorage.getItem("selectedMenuItem")) || 0;
  });

  const menu = [
    {
      title: "Dashboard",
      icons: <MdSpaceDashboard size={20} />,
      to: "",
    },
    {
      title: "Recruitment",
      icons: <IoIosPersonAdd size={20} />,
      to: "",
    },
    {
      title: "Schedules",
      icons: <RxCalendar size={20} />,
    },

    {
      title: "Employee",
      icons: <MdGroups size={20} />,
    },
    {
      title: "Department",
      icons: <PiCirclesThreeThin size={20} />,
    },
    {
      title: "Support",
      icons: <BiSupport size={20} />,
    },
    {
      title: "Settings",
      icons: <IoMdSettings size={20} />,
    },
  ];

  const handleMenuItemClick = useCallback((index) => {
    console.log(index);
    setSelectedMenuItem(index);
    sessionStorage.setItem("selectedMenuItem", index);
  }, []);

  return (
    <div
      className="h-full "
      style={{ backgroundImage: "url('path_to_your_image')" }}
    >
      <div
        className={`${
          open ? "w-[290px]" : "w-24"
        } p-4 pt-3  bg-gray-100 ease-in-out duration-500 flex-col gap-5 items-start relative h-screen shadow-lg shadow-[#FFF1EB] shadow-opacity-[30%] `}
      >
        <div
          className={` ease-in-out duration-500 cursor-default tracking-wide ${
            open ? "w-[90%] h-[42px]" : "w-[90%]"
          } flex items-center justify-center text-4xl font-bold text-gray-900 dark:text-white mb-8`}
        >
          WeHR
        </div>

        <div
          className={`origin-left text-xl text-black  items-center gap-1  ease-in-out duration-300 ${
            !open && "scale-24"
          }`}
        >
          <div
            className={`origin-left w-[260px] text-xl font-bold flex items-center gap-1 ease-in-out duration-700 pl-5 text-gray-500`}
          >
            <div>
              <span
                className={`origin-left ease-in-out ${!open && "hidden"} ${
                  open ? "ml-2" : "ml-0"
                }  text-[#B2B2B2] duration-500 cursor-default tracking-wide text-xs  font-semibold  `}
              >
                MAIN MENU
              </span>
            </div>
          </div>
          <ul
            className={`${
              open ? "" : "flex flex-col items-center justify-center "
            }`}
          >
             {menu.map(
              (item, index) =>
                index <= 4 && ( // Add this line to check if index is greater than 4
                  <li
                    key={index}
                    className={` ${
                      item.gap ? "mt-4" : "mt-4"
                    } flex items-center gap-x-4 rounded-[4px] cursor-pointer transition-all duration-500 pl-6`}
                  >
                    <button
                      type="button"
                      onClick={() => handleMenuItemClick(index)}
                      className={`w-full  hover:text-[#FF5151] h-full
                ${
                  index === selectedMenuItem
                    ? " font-semibold text-[#FF5151]"
                    : "text-[#888686]"
                }`}
                    >
                      <Link to={item.to} className="flex items-center gap-2">
                        <span>{item.icons}</span>
                        <p
                          className={`${
                            open ? "" : "hidden scale-0 "
                          } origin-center text-[18px]`}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </button>
                  </li>
                )
            )}
          </ul>
          <div
            className={` origin-left w-[260px]  text-xl  font-bold flex   items-center gap-1  ease-in-out duration-700 mt-16 pl-5`}
          >
            <div className="mt-b ">
              <span
                className={`origin-left ease-in-out ${!open && "hidden"} ${
                  open ? "ml-2" : "ml-0"
                }  text-[#B2B2B2] duration-500 cursor-default tracking-wide text-xs  font-semibold `}
              >
                OTHER
              </span>
            </div>
          </div>
          <ul
            className={`${
              open ? "" : "flex flex-col items-center justify-center "
            }`}
          >
            {menu.map(
              (item, index) =>
                index > 4 && ( // Add this line to check if index is greater than 4
                  <li
                    key={index}
                    className={` ${
                      item.gap ? "mt-4" : "mt-4"
                    } flex items-center gap-x-4 rounded-[4px] cursor-pointer transition-all duration-500 pl-6`}
                  >
                    <button
                      type="button"
                      onClick={() => handleMenuItemClick(index)}
                      className={`w-full  hover:text-[#FF5151] h-full
                ${
                  index === selectedMenuItem
                    ? " font-semibold text-[#FF5151]"
                    : "text-[#888686]"
                }`}
                    >
                      <Link to={item.to} className="flex items-center gap-2">
                        <span>{item.icons}</span>
                        <p
                          className={`${
                            open ? "" : "hidden scale-0 "
                          } origin-center text-[18px]`}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DpMenu;
