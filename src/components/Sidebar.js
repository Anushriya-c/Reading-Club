import { BiSolidDashboard } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutCircleRFill, RiQuestionAnswerFill, RiListCheck3  } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdAppRegistration } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";

function Sidebar({ name }) {
  return (
    <div className="flex static">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60 border-t-2 border-violet-400">
        <div className="flex-1 space-y-3">
          <div className="pt-6 pb-4 space-y-3 justify-between text-sm ">
            <div>
              <div>
                <Link to="/adminhome">
                  <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                    <div
                      className={`flex items-center p-3 space-x-3 rounded-md  ${
                        name == "adminhome"
                          ? "bg-violet-600 text-white hover:text-white"
                          : "hover:text-red-700"
                      }`}
                    >
                      <BiSolidDashboard className="h-6 w-6" />
                      <div className=" font-bold">HOME</div>
                    </div>
                  </div>
                </Link>
              </div>

      
            </div>

            <div>
              <Link to="/adminschoolregistration">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == "adminschoolreg"
                        ? "bg-violet-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    <MdAppRegistration className="h-6 w-6" />
                    <div className=" font-bold">SCHOOL REGISTRATION</div>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link to="/adminschoolmanage">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == "adminschoolmng"
                        ? "bg-violet-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    <MdOutlineManageHistory className="h-6 w-6" />
                    <div className=" font-bold">SCHOOL MANAGEMENT</div>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link to="/adminbatchcreate">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == "adminbatchcreate"
                        ? "bg-violet-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    < RiListCheck3 className="h-6 w-6" />
                    <div className=" font-bold">CREATE BATCH</div>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link to="/adminbatchedit">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == "adminbatchmng"
                        ? "bg-violet-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    <AiFillSetting className="h-6 w-6" />
                    <div className=" font-bold">BATCH MANAGEMENT</div>
                  </div>
                </div>
              </Link>
            </div>

       

            {/* <div>
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
                    <div className=" font-bold">LOGOUT</div>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;