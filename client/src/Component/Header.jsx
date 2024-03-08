import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { LuIndianRupee } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdNotifications} from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import Dashboard from "./Dashboard";
export default function Header({ Account }) {
  const [nav, setNav] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(sessionStorage.getItem("name"));
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    // Account = false;
    navigate("/");
  };
  return (
    <div className="w-full h-auto ml-16 ">
      <div className="w-full h-screen  rounded-tl-md ">
        <div className="h-[66px] shadow-sm shadow-[#FFF1EB] shadow-opacity-[30%]  flex items-center justify-between bg-white pl-8 pr-8">
          <div className="">
           
            <div className="relative">
              <input
            
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-opacity-50 focus:outline-none"
                placeholder="Search"
                
              />

              <div
               
                className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
              >
                <svg
                  className="w-4 h-4  text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-5 bg-white">
            <div className="">
              <div
                className={`flex px-4 py-2 rounded-[10px] cursor-pointer bg-white items-center w-auto`}
              >
                <div className="items-center flex gap-2 w-fit  ">
                  <div className="flex items-center gap-3 w-fit">
                    <IoMdNotifications size={27} className="text-[#555555]" />
                    <RiMessage2Fill size={27} className="text-[#555555]" />
                    <div className="">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/236/236832.png?w=740&t=st=1690788839~exp=1690789439~hmac=4d4fa9ad6657c9817da41cf0e72d2857df6e1f320bfc8a6e75333d25bc8546b8"
                        alt="user"
                      />
                    </div>
                    <h1>Pankaj jain</h1>
                  </div>
                  
                  <div className="">
                    <button
                      type="button"
                      onClick={() => {
                        setNav(!nav);
                      }}
                    >
                      <FiChevronDown
                        size={24}
                        className={`transition-all `}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <Dashboard/>
      </div>
     
    </div>
  );
}
