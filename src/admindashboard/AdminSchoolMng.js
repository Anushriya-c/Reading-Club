import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import Popup from "../components/Popup";
import Cookies from "js-cookie";
import { Backdrop, CircularProgress } from "@mui/material";

const AdminSchoolMng = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();
  const [allSchool, setAllSchool] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [idconfirm, setidconfirm] = useState("");
  const [status, setstatus] = useState();

  const getAllSchool = async () => {
    setLoading(true);
    const res = await instance({
      url: `school/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });

    setAllSchool(res.data.data);
    setLoading(false);
  };
  const HandleRemovePopUp = () => {
    setOpenPopup(false);
  };

  const HandleConfirmPopUp = () => {
    handleStatus();
    setOpenPopup(false);
  };

  const handleOpenPopUp = (id, status) => {
    setidconfirm(id);
    setstatus(status);
    setOpenPopup(true);
  };

  const handleStatus = async () => {
    console.log(idconfirm, status);
    setLoading(true);
    const res = await instance({
      url: `/school/changeStatus/${idconfirm}`,
      method: "PUT",
      data: { status: !status },
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    getAllSchool();
    setLoading(false);
  };

  useEffect(() => {
    getAllSchool();
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
        {screenSize.width < 550 ? "" : <Sidebar name={"adminschoolmng"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "School Management", path: null }]} />
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
            <div className="rounded-lg border">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">School Code</th>
                      <th className="px-5 py-3">School Name</th>
                      <th className="px-5 py-3">Address</th>
                      <th className="px-5 py-3">City</th>
                      <th className="px-5 py-3">State</th>
                      <th className="px-5 py-3">Discount</th>
                      <th className="px-5 py-3">Inactive/Active</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {allSchool.map(function (ele) {
                      return (
                        <tr key={ele.id}>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.schoolCode}
                            </p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <div className="flex items-center">
                              <p className="whitespace-no-wrap">
                                {ele.schoolName}
                              </p>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.address}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.city}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.state}</p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.discount}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={ele.status}
                                onClick={() =>
                                  handleOpenPopUp(ele._id, ele.status)
                                }
                              />
                              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            </label>
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
        <Popup
          openPopUp={openPopup}
          // closePopUp={HandleRemovePopUp}
          data={
            <div className="bg-gray-100 h-fit">
              <div className="bg-white p-6  md:mx-auto">
                {status == true ? (
                  <ImCross className="text-red-600 w-16 h-16 mx-auto my-6" />
                ) : (
                  <TiTick className="text-green-600 w-16 h-16 mx-auto my-6" />
                )}

                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    {status == true
                      ? "Are You Sure You Want To Cancel?"
                      : "Are You Sure You Want To Activate? "}
                  </h3>
                  <div className="py-10 mx-7 text-center">
                    <button
                      onClick={HandleRemovePopUp}
                      className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 mx-10"
                    >
                      GO BACK
                    </button>
                    <button
                      onClick={HandleConfirmPopUp}
                      className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
                    >
                      CONFIRM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AdminSchoolMng;
