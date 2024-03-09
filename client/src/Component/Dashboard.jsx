import React from "react";
import "./dashboard.css";

import { BsPinAngleFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ToggleDiv from "./Schedule";
export default function Dashboard() {
  const data = [
    { text: "Outing schedule for every department", time: "5 Minutes ago" },
    { text: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    {
      text: "IT Department needs two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];
  const pdata = [
    { text: "Review candidate applications", time: "5 Minutes ago" },
  ];
  const odata = [
    { text: "Review candidate applications", time: "5 Minutes ago" },
    { text: "Review candidate applications", time: "5 Minutes ago" },
  ];
  return (
    <div className="main">
       <p className="pl-6 font-bold text-black text-4xl mt-6">Dashboard</p>
      <div className="dashboard-container">
     
        <div className="first-div">
          <div className="f-row">
            <div className="bg-[#FFEFE7]  p-4 ">
              <p className="font-bold text-black text-lg">Available position</p>
              <p className="text-black font-bold text-3xl mt-1 mb-1">24</p>
              <p className="text-[#FF5151] text-sm">4 Urgently needed</p>
            </div>

            <div className="bg-[#E8F0FB]  p-4 ">
              <p className="font-bold text-black text-lg">Job Open</p>
              <p className="text-black font-bold text-3xl mt-1 mb-1">10</p>
              <p className="text-[#3786F1] text-sm">4 Active hiring</p>
            </div>
            <div className="bg-[#FDEBF9]  p-4 ">
              <p className="font-bold text-black text-lg">New Employees</p>
              <p className="text-black font-bold text-3xl mt-1 mb-1">24</p>
              <p className="text-[#EE61CF] text-sm">4 Department</p>
            </div>
          </div>
          <div className="s-row">
            <div className=" m-2 mt-4 p-4 ">
              <p className="font-bold text-black text-lg">Total Employees</p>
              <p className="text-black font-bold text-5xl mt-2 mb-8">216</p>
              <p className="text-sm text-[#686868]">120 men</p>
              <p className="text-sm text-[#686868]">96 women</p>
            </div>
            <div className="m-2 mt-4 ml-8  p-4 ">
              <p className="font-bold text-black text-lg">Talent Request</p>
              <p className="text-black font-bold text-5xl mt-2 mb-8">16</p>
              <p className="text-sm text-[#686868]">6 men</p>
              <p className="text-sm text-[#686868]">10 women</p>
            </div>
          </div>
          <div className="annu">
            <div className="ann-div">
              <h1 className="text-black font-bold text-2xl">Announcement</h1>
              <select className="select" name="" id="">
                <option value="Today">Today, 13 Sep 2021</option>
              </select>
            </div>
            <div className="data-div">
              <div>
                {data.map((item, index) => (
                  <div key={index} className="data-ren-div">
                    <div>
                      <h1>{item.text}</h1>
                      <p>{item.time}</p>
                    </div>
                    <div className="icon">
                      <span>
                        <BsPinAngleFill />
                      </span>
                      <span>
                        <HiOutlineDotsHorizontal />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h1 className="new text-[#FF5151] text-center font-semibold">
              See All Announcement
            </h1>
          </div>
        </div>
        <div className="second-div ">
          <div className="sf-row bg-[#161E54]  w-full ">
            <h1 className="bg-[#1B204A] text-white m-1 p-2 font-bold text-lg pl-4">
              Recently Activity
            </h1>
            <p className="text-sm text-[#686868] m-1   pl-4">
              10.40 AM, Fri 10 Sept 2021
            </p>
            <p className="text-xl text-white m-1   pl-4">
              You Posted a New Job
            </p>
            <p className=" text-sm text-[#686868] m-1 mt-2   pl-4">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
            <div className="btn-div">
              <h1 className="text-white">Schedule a call </h1>
              
              <ToggleDiv />
            </div>
          </div>

          <div className="upannu mt-8 w-full">
            <div className="ann-div w-full">
              <h1 className="text-black font-bold text-sm">
                Upcoming Schedule
              </h1>
              <select className="select text-sm" name="" id="">
                <option value="Today">Today, 13 Sep 2021</option>
              </select>
            </div>
            <div className="s-data-div">
              <div>
                <p className="text-[#686868] text-sm ml-6">Priority</p>
                {pdata.map((item, index) => (
                  <div key={index} className="data-ren-div">
                  <div>
                      <h1 className="text-lg text-black">{item.text}</h1>
                      <p className="text-sm text-[#686868]">{item.time}</p>
                    </div>
                    <div className="icon">
                      <span>
                        <HiOutlineDotsHorizontal />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#686868] text-sm ml-6">Other</p>
                {odata.map((item, index) => (
                  <div key={index} className="data-ren-div">
                    <div>
                      <h1 className="text-lg text-black">{item.text}</h1>
                      <p className="text-sm text-[#686868]">{item.time}</p>
                    </div>
                    <div className="icon">
                      <span>
                        <HiOutlineDotsHorizontal />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="new text-[#FF5151] text-center font-semibold">
            Creat a New Schedule
          </h1>
        </div>
      </div>
    </div>
  );
}
