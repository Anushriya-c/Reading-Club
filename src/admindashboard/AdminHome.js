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

          <div className="grid grid-cols-1 gap-14 px-24 lg:grid-cols-3 py-12 bg-gray-300 h-full">
            Admin Home Data Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
