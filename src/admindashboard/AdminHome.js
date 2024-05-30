import React from "react";
// import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";
import BreadCrumb from "../components/BreadCrumb";

const AdminHome = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <div className="overflow-hidden">
      <Header highlight={"admin"} />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminhome"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "Home", path: null }]} />

          <div className="grid grid-cols-1 gap-5 m-5 lg:grid-cols-2 bg-gray-300">
            <div className="border-double border-2 bg-white border-indigo-600 ...">
              <h1 className="flex flex-col justify-center text-center p-2 m-2 font-extrabold text-red-900 text-2xl">
                Number of Students
              </h1>
              <h3 className="flex flex-col justify-center text-center p-4 m-5 font-bold text-green-800 text-lg">
                400
              </h3>
            </div>
            <div className="border-double border-2 bg-white border-indigo-600 ...">
              <h1 className="flex flex-col justify-center text-center p-2 m-2 font-extrabold text-red-900 text-2xl">
                Number of Teachers
              </h1>
              <h3 className="flex flex-col justify-center text-center p-4 m-5 font-bold text-green-800 text-lg">
                400
              </h3>
            </div>
            <div className="border-double border-2 bg-white border-indigo-600 ...">
              <h1 className="flex flex-col justify-center text-center p-2 m-2 font-extrabold text-red-900 text-2xl">
                Number of Sessions
              </h1>
              <h3 className="flex flex-col justify-center text-center p-4 m-5 font-bold text-green-800 text-lg">
                400
              </h3>
            </div>
            <div className="border-double border-2 bg-white border-indigo-600 ...">
              <h1 className="flex flex-col justify-center text-center p-2 m-2 font-extrabold text-red-900 text-2xl">
                Number of Batches
              </h1>
              <h3 className="flex flex-col justify-center text-center p-4 m-5 font-bold text-green-800 text-lg">
                400
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
