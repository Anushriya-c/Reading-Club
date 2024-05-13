import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutCircleRFill, RiQuestionAnswerFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebarsmall = ({ openSidebar2, name }) => {
  return (
    <>
      <div
        className={` right-0 w-[15%]  fixed h-full ease-in-out duration-300 ${
          openSidebar2 ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-screen p-3 bg-blue-300 shadow w-60">
          <div className="flex-1 space-y-3">
            <div className="pt-6 pb-4 space-y-3 justify-between text-sm ">
              <div>
                <Link to="/dashboard">
                  <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                    <div
                      className={`flex items-center p-3 space-x-3 rounded-md  ${
                        name == "dashboard"
                          ? "bg-blue-600 text-white hover:text-white"
                          : "hover:text-red-700"
                      }`}
                    >
                      <BiSolidDashboard className="h-6 w-6" />
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/settings">
                  <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                    <div
                      className={`flex items-center p-3 space-x-3 rounded-md  ${
                        name == "settings"
                          ? "bg-blue-600 text-white hover:text-white"
                          : "hover:text-red-700"
                      }`}
                    >
                      <AiFillSetting className="h-6 w-6" />
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <Link to="/">
                  <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                    <div
                      className={`flex items-center p-3 space-x-3 rounded-md  ${
                        name == ""
                          ? "bg-blue-600 text-white hover:text-white"
                          : "hover:text-red-700"
                      }`}
                    >
                      <RiLogoutCircleRFill className="h-6 w-6" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebarsmall;