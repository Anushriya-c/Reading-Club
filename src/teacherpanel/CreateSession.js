import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import { Backdrop, CircularProgress } from "@mui/material";
import Popup from "../components/Popup";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

const CreateSession = () => {
  const [batchId, setBatchId] = useState([]);
  const [areFilesAllowed, setAreFilesAllowed] = useState("");
  const [studentMaxFiles, setStudentMaxFiles] = useState("");
  const [startDate, setStartDate] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [reloadForm, setReloadForm] = useState(1);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState([]);
  let { batchid } = useParams();

  const HandleRemovePopUp = () => {
    setReloadForm(Math.random());
    setOpenPopup(false);
  };
  const getSession = async () => {
    const res = await instance({
      url: `/session/all/${batchid}`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.data);
    setSession(res.data.data);
  };
  useEffect(() => {
    if (`${batchid}`) getSession();
  }, [batchid]);
  const setValues = (value, field) => {
    switch (field) {
      // case "batchId":
      //   setBatchId(value);
      //   break;
      case "startDate":
        setStartDate(value);
        break;
      case "studentmaxfiles":
        if (value >= 1000) setStudentMaxFiles(999);
        else if (value < 0) setStudentMaxFiles(1);
        else setStudentMaxFiles(value);
        break;
      case "setarefilesallowed":
        setAreFilesAllowed(value);
        break;
      default:
    }
  };

  const CreateSession = async (e) => {
    e.preventDefault();
    console.log(startDate, batchId, areFilesAllowed, studentMaxFiles);

    if (
      startDate.length === 0 ||
      // batchId.length === 0 ||
      areFilesAllowed.length === 0 ||
      studentMaxFiles.length === 0
    ) {
      console.log(startDate.length);
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }
    setLoading(true);
    const postData = {
      batchId: batchid,
      startDate: startDate,
      areFilesAllowed: areFilesAllowed,
      studentMaxFiles: studentMaxFiles,
    };
    console.log(postData);
    const res = await instance({
      url: `session/create`,
      method: "POST",
      data: postData,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    if (res.status === 201) {
      setBatchId(batchid);
      setStartDate("");
      setAreFilesAllowed("");
      setStudentMaxFiles("");
      setOpenPopup(true);
    }
    setLoading(false);
  };

  return (
    <div className="relative overflow-hidden">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Header highlight={"tchrpnl"} />
      <div className="flex">
        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "Session Creation", path: null }]} />
          <div className="lg:m-10" key={reloadForm}>
            <form className="relative border  space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
              <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
                Create Session
              </h1>
              <div className="flex flex-col gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                <div>
                  <label className=""> Batch ID </label>
                  {session.map(function (ele) {
                    return (
                      <input
                        className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                        value={ele._id}
                      >
                        {ele.batchId._id}
                      </input>
                    );
                  })}
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className=""> Start Date </label>
                    <input
                      onChange={(e) => {
                        setValues(e.target.value, "startDate");
                      }}
                      value={startDate}
                      type="date"
                      min={
                        new Date().getFullYear().toString() +
                        "-" +
                        (new Date().getMonth() + 1)
                          .toString()
                          .padStart(2, "0") +
                        "-" +
                        new Date().getDate().toString()
                      }
                      placeholder="Start Date"
                      className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                        hasBlank
                          ? startDate.length == 0
                            ? "border-red-500"
                            : ""
                          : ""
                      } px-3 text-gray-800  `}
                    />
                  </div>
                  <div>
                    <label className=""> Maximum Files Allowed </label>
                    <input
                      onChange={(e) => {
                        setValues(e.target.value, "studentmaxfiles");
                      }}
                      value={studentMaxFiles}
                      type="number"
                      placeholder="Maximum Files"
                      className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                        hasBlank
                          ? studentMaxFiles.length == 0
                            ? "border-red-500"
                            : ""
                          : ""
                      } px-3 text-gray-800  `}
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <label className=""> Files Allowed </label>
                    <select
                      onChange={(e) => {
                        setValues(e.target.value, "setarefilesallowed");
                      }}
                      placeholder
                      name="Select"
                      id="days"
                      className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                        hasBlank
                          ? areFilesAllowed.length == 0
                            ? "border-red-500"
                            : ""
                          : ""
                      } px-3 text-gray-800  `}
                    >
                      <option
                        value="default"
                        disabled
                        selected
                        hidden
                        className=""
                      >
                        Select
                      </option>
                      <option
                        className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                        value="Monday"
                      >
                        TRUE
                      </option>
                      <option
                        className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                        value="Tuesday"
                      >
                        FALSE
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    onClick={CreateSession}
                    type="button"
                    className="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
                  >
                    Create Session
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Popup
        openPopUp={openPopup}
        closePopUp={HandleRemovePopUp}
        data={
          <div className="bg-gray-100 h-fit">
            <div className="bg-white p-6  md:mx-auto">
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                  Session Creation Success!
                </h3>
                <div className="py-10 text-center">
                  <button
                    onClick={HandleRemovePopUp}
                    className="rounded-sm px-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3"
                  >
                    GO BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CreateSession;
