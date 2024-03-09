import React, { useState } from "react";
import "./Shedule.css";

const ToggleDiv = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [selectedOption, setSelectedOption] = useState("time"); // State to track the selected option

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const toggleModal = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button
        onClick={toggleDiv}
        className="btn bg-[#FF5151] text-white font-bold w-24"
      >
        Schedule
      </button>
      {showDiv && (
        <div className="popup-background flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ">
          <div className="popup-content bg-white  rounded-lg relative">
            <button
              onClick={toggleModal}
              className="close-button absolute top-2 right-2 m-3 font-bold "
            >
              X
            </button>
            <div className="flex w-full h-auto">
              <div className=" w-80 bg-[#FAFAFA] p-4 rounded-tl-lg rounded-bl-lg">
                <div
                  className={`mt-24 ml-6 ${
                    selectedOption === "time" ? "text-[#FF5151] font-semibold" : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("time")} // Set selected option to "time"
                >
                  Time
                </div>
                <div
                  className={`mt-16 ml-6 ${
                    selectedOption === "date" ? "text-[#FF5151] font-semibold" : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("date")} // Set selected option to "date"
                >
                  Date
                </div>
                <div
                  className={`mt-16 ml-6 mb-40 ${
                    selectedOption === "addMember" ? "text-[#FF5151] font-semibold" : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("addMember")} // Set selected option to "addMember"
                >
                  Add Team member
                </div>
              </div>
              <div className=" w-full items-center m-auto mt-24 ml-10">
                <h1 className="text-black font-bold text-lg mb-2">
                  Select a time for meeting
                </h1>
                <p className="text-black text-sm mb-8">
                  The following time will be set for the meeting
                </p>
                <div className="">
                  <form className="max-w-sm mx-auto">
                    <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
                      {[...Array(4)].map((_, index) => (
                        <div key={index}>
                          <label
                            htmlFor={`code-${index + 1}`}
                            className="sr-only"
                          >
                            Code {index + 1}
                          </label>
                          <input
                            type="text"
                            maxLength="1"
                            data-focus-input-init
                            data-focus-input-prev={
                              index === 0 ? "" : `code-${index}`
                            }
                            data-focus-input-next={
                              index === 5 ? "" : `code-${index + 2}`
                            }
                            id={`code-${index + 1}`}
                            className="block w-9 h-9 py-3 text-sm text-center text-black bg-[#DCD8D8] border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                            value={0}
                          />
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
                <p className=" text-sm mb-10 ml-1 text-[#475467]">time in 24 hr format</p>
                <button className="btn bg-[#FF5151] text-white mt-2 w-24">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleDiv;
