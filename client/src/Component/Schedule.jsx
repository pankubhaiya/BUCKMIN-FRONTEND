import React, { useRef, useState } from "react";
import "./Shedule.css";
import { IoIosPerson } from "react-icons/io";
import SimpleReactCalendar from "react-calendar";
const ToggleDiv = () => {
  const teamData = [
    { name: "Candice ", lastname: "Wu", email: "candice@untitledui.com" },
    { name: "Demi ", lastname: "Wilkinson", email: "demi@untitledui.com" },
    { name: "Drew ", lastname: "Cano", email: "drew@untitledui.com" },
    
  ];
  const [showDiv, setShowDiv] = useState(false);
  const [selectedOption, setSelectedOption] = useState("time"); // State to track the selected option
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store the selected date

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const toggleModal = () => {
    setShowDiv(!showDiv);
    setSelectedOption("time");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const fileInputRef = useRef(null);

  const handleClickName = () => {
    fileInputRef.current.click(); 
  };

  return (
    <div>
      <button
        onClick={toggleDiv}
        className="btn bg-[#FF5151] text-white font-bold w-24"
      >
        Schedule
      </button>
      {showDiv && selectedOption === "time" && (
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
                    selectedOption === "time"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("time")} 
                >
                  Time
                </div>
                <div
                  className={`mt-16 ml-6 ${
                    selectedOption === "date"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("date")} 
                >
                  Date
                </div>
                <div
                  className={`mt-16 ml-6 mb-40 ${
                    selectedOption === "addMember"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("addMember")} 
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
                <p className=" text-sm mb-10 ml-1 text-[#475467]">
                  time in 24 hr format
                </p>
                <button className="btn bg-[#FF5151] text-white mt-2 w-24">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv && selectedOption === "date" && (
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
                    selectedOption === "time"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("time")} // Set selected option to "time"
                >
                  Time
                </div>
                <div
                  className={`mt-16 ml-6 ${
                    selectedOption === "date"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("date")} 
                >
                  Date
                </div>
                <div
                  className={`mt-16 ml-6 mb-40 ${
                    selectedOption === "addMember"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("addMember")} 
                >
                  Add Team member
                </div>
              </div>
              <div className=" w-full items-center m-auto mt-24 ml-10">
                <h1 className="text-black font-bold text-lg mb-2">
                  Select a Date for meeting
                </h1>
                <p className="text-black text-sm mb-8">
                  The following time will be set for the meeting
                </p>
                <div className="calendar">
                  <SimpleReactCalendar activeMonth={new Date()} />
                </div>

                <button className="btn bg-[#FF5151] text-white mt-2 w-24">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDiv && selectedOption === "addMember" && (
        <div className="popup-background flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ">
          <div className="popup-content bg-white  rounded-lg relative">
            <button
              onClick={toggleModal}
              className="close-button absolute top-2 right-2 m-3 font-bold "
            >
              X
            </button>
            <div className="flex w-full h-auto ">
              <div className=" w-80 bg-[#FAFAFA] p-4 rounded-tl-lg rounded-bl-lg">
                <div
                  className={`mt-24 pt-16 ml-6 ${
                    selectedOption === "time"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("time")} 
                >
                  Time
                </div>
                <div
                  className={`mt-16 ml-6 ${
                    selectedOption === "date"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("date")} 
                >
                  Date
                </div>
                <div
                  className={`mt-16 ml-6 mb-40 ${
                    selectedOption === "addMember"
                      ? "text-[#FF5151] font-semibold"
                      : "hover:text-[#FF5151]"
                  }`}
                  onClick={() => setSelectedOption("addMember")} 
                >
                  Add Team member
                </div>
              </div>
              <div className=" w-full items-center m-auto pt-8 pb-8 mt-16 ml-10">
                <h1 className="text-black font-bold text-lg mb-2">
                  Add team member
                </h1>
                <p className="text-black text-sm mb-8">
                  The following users have access to this meeting:
                </p>

                <div>
                  <div className="team-div mr-10">
                    {teamData.map((member, index) => (
                      <div key={index} className="m-1">
                        <div className="flex items-center  ">
                          
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-12 h-12 rounded-full"
                            />
                          ) : (
                            <div
                              className="w-12 h-12 bg-[#F2F4F7] rounded-full flex items-center justify-center cursor-pointer"
                              onClick={handleClickName}
                            >
                              <span className="text-[#475467] font-bold">
                                {member.name.charAt(0)}{" "}
                                {member.lastname.charAt(0)}
                              </span>
                             
                              <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  handleImageUpload(e.target.files[0])
                                }
                              />
                            </div>
                          )}
                        
                          <div className="ml-4 flex-grow">
                            <div className="font-semibold">{member.name}</div>
                            <div className="text-gray-600 text-sm">
                              {member.email}
                            </div>
                          </div>
                         
                          <div>
                            <button className="text-[#B42318] font-bold">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[#344054] text-sm font-semibold mb-2">
                  Team member
                </p>

                <div>
                  {" "}
                  <select
                    className=" p-2 mb-6 w-80  border rounded-md"
                    name=""
                    id=""
                  >
                    <option value="team"> Select team member</option>
                  </select>
                </div>

                <button className="btn bg-[#FF5151] text-white mt-2 w-24">
                  {selectedOption === "addMember" ? "Confrim" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleDiv;
