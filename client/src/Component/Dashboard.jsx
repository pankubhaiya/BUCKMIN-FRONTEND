import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="main">
      <p className="pl-6 font-bold text-black text-4xl">Dashboard</p>
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
          <div></div>
        </div>
        <div className="second-div ">
          <div className="sf-row bg-[#161E54]  w-full ">
          <h1 className="bg-[#1B204A] text-white m-1 p-2 font-bold text-lg pl-4">Recently Activity</h1>
          <p className="text-sm text-[#686868] m-1   pl-4">10.40 AM, Fri 10 Sept 2021</p>
          <p className="text-xl text-white m-1   pl-4">You Posted a New Job</p>
          <p className=" text-sm text-white m-1 mt-2   pl-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
          <div className="btn-div">
            <h1 className="text-white">Schedule a call </h1>
            <button className="btn bg-[#FF5151] text-white font-bold">Schedule</button>
          </div>

          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
