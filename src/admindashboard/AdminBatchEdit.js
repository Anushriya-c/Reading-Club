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

const AdminBatchEdit = () => {
  const [allBatch, setAllBatch] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getAllBatch();
  }, []);
  // const handleStatus = async (id, currentStatus) => {
  //   console.log(id, currentStatus)
  //   setLoading(true)
  //   const res = await instance({
  //     url: `/school/changeStatus/${id}`,
  //     method: "PUT",
  //     data : {status: !currentStatus},
  //     headers: {
  //       Authorization: Cookies.get("token"),
  //       // accesskey: `auth74961a98ba76d4e4`,
  //     },
  //   });
  //   getAllScchool()
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getAllScchool();
  // }, []);

  return (
    <>
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
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {allBatch.map(function (ele) {
                      return (
                        <tr key={ele.id}>
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
                            <p className="whitespace-no-wrap">Level 1</p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <label class="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                checked={ele.status}
                                onClick={() =>
                                  handleStatus(ele._id, ele.status)
                                }
                              />
                              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
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
        {/* <Popup 
          openPopUp={openPopup}
        // closePopUp={HandleRemovePopUp}
        data={
          <div class="bg-gray-100 h-fit">
            <div class="bg-white p-6  md:mx-auto">
              <svg
                viewBox="0 0 24 24"
                class="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                  Registration Success!
                </h3>
                <p class="text-gray-600 my-2">
                  Thank you for completing your school registration.
                </p>

                <div class="py-10 text-center">
                  <button
                    onClick={HandleRemovePopUp}
                    class="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
                  >
                    GO BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
        /> */}
      </div>
    </>
  );
};

export default AdminBatchEdit;
