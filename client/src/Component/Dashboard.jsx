import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <div className="dashboard-container">
        <div className="first-div">
          <div className="f-row">
            <div className="bg-[#FFEFE7]  p-4 ">
              <p className="font-bold text-black text-lg">Available position</p>
              <p className="text-black font-bold text-4xl mt-1 mb-1">24</p>
              <p className="text-[#FF5151] text-sm">4 Urgently needed</p>
            </div>

            <div className="bg-[#E8F0FB]  p-4 ">
              <p className="font-bold text-black text-lg">Job Open</p>
              <p className="text-black font-bold text-4xl mt-1 mb-1">10</p>
              <p className="text-[#3786F1] text-sm">4 Active hiring</p>
            </div>
            <div className="bg-[#FDEBF9]  p-4 ">
              <p className="font-bold text-black text-lg">New Employees</p>
              <p className="text-black font-bold text-4xl mt-1 mb-1">24</p>
              <p className="text-[#EE61CF] text-sm">4 Department</p>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="second-div">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
