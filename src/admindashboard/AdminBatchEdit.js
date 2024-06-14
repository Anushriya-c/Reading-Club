import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Screensizehook from "../components/Screensizehook";
import Sidebar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import instance from "../Instance";
import Cookies from "js-cookie";
import Popup from "../components/Popup";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const AdminBatchEdit = () => {
  const [allBatch, setAllBatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  // const [status, setstatus] = useState();
  // const [idconfirm, setidconfirm] = useState("");

  const getAllBatch = async () => {
    // console.log(Cookies.get("token"));
    setLoading(true);
    const res = await instance({
      url: `batch/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data.data);
    setAllBatch(res.data.data);
    setLoading(false);
  };
  const HandleRemovePopUp = () => {
    // navigate("/adminschoolregistration");
    // window.location.reload();
    setOpenPopup(false);
  };
  const HandleConfirmPopUp = () => {
    handleStatus();
    setOpenPopup(false);
  };

  // const handleOpenPopUp = (id, status) => {
  //   setidconfirm(id);
  //   setstatus(status);
  //   setOpenPopup(true);
  // };

  useEffect(() => {
    getAllBatch();
  }, []);
  return (
    <div className="overflow-hidden">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header highlight={"admin"} />
      <div className="flex">
        {Screensizehook.width < 550 ? "" : <Sidebar name={"adminbatchmng"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "Batch Management", path: null }]} />
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">Start Date</th>
                      <th className="px-5 py-3">Batch Name</th>
                      <th className="px-5 py-3">Days of Week</th>
                      <th className="px-5 py-3">Max Student Allowed</th>
                      <th className="px-5 py-3">Student Enrolled</th>
                      <th className="px-5 py-3">Batch Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {allBatch.map(function (ele) {
                      return (
                        <tr key={ele._id}>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.startDate.slice(0, 10)}
                            </p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <div className="flex items-center">
                              <p className="whitespace-no-wrap">
                                {ele.batchName}
                              </p>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.dayOfWeek}
                            </p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.maximumStudents}
                            </p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.studentsEnrolled}
                            </p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.level ? ele.level.level : " "}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBatchEdit;
