import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import { Backdrop, CircularProgress } from "@mui/material";
import Popup from "../components/Popup";
import Cookies from "js-cookie";

// import { Backdrop, CircularProgress } from "@mui/material";

const AdminBatchCreate = () => {
  const [level, setLevel] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [maxStudent, setMaxStudent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [alllevels, setAllLevels] = useState([]);
  const [hasBlank, setHasBlank] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [reloadForm, setReloadForm] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  const HandleRemovePopUp = () => {
    setReloadForm(Math.random());
    setOpenPopup(false);
  };
  const validateURL = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlRegex.test(url)) {
      setUrlError("Please enter a valid URL.");
    } else {
      setUrlError("");
    }
  };

  const getAllLevels = async () => {
    setLoading(true);
    const res = await instance({
      url: `level/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    setAllLevels(res.data.data);
    setLoading(false);
  };
  const setValues = (value, field, e) => {
    switch (field) {
      case "level":
        setLevel(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "maximumStudents":
        if (value >= 1000) setMaxStudent(999);
        else if (value < 0) setMaxStudent(1);
        else setMaxStudent(value);
        break;
      case "dayOfWeek":
        setDayOfWeek(value);
        break;
      case "url":
        setUrl(value);
        validateURL(value);
        break;
      case "starttime":
        setStartTime(value);

        const [hours, minutes] = value.split(":").map(Number);
        const endDate = new Date();
        endDate.setHours(hours + 1, minutes);

        const endHours = endDate.getHours().toString().padStart(2, "0");
        const endMinutes = endDate.getMinutes().toString().padStart(2, "0");
        const endTime = `${endHours}:${endMinutes}`;

        setEndTime(endTime);
        break;

      default:
      // code block
    }
  };

  const createBatch = async (e) => {
    e.preventDefault();
    console.log(startDate, maxStudent, dayOfWeek, level, url);

    if (
      startDate.length === 0 ||
      maxStudent.length === 0 ||
      dayOfWeek.length === 0 ||
      url.length === 0 ||
      level.length === 0
    ) {
      console.log(startDate.length);
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }
    setLoading(true);
    const postData = {
      level: level,
      startDate: startDate,
      maximumStudents: maxStudent,
      dayOfWeek: dayOfWeek,
      timing: `${startTime} to ${endTime}`,
      url: url,
    };
    console.log(postData);
    const res = await instance({
      url: `batch/create`,
      method: "POST",
      data: postData,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    if (res.status === 201) {
      setLevel("");
      setStartDate("");
      setMaxStudent("");
      setDayOfWeek("");
      setStartTime("");
      setEndTime("");
      setUrl("");
      setOpenPopup(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAllLevels();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Header highlight={"admin"} />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminbatchcreate"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "Batch Creation", path: null }]} />

          <div className="lg:m-10" key={reloadForm}>
            <form className="relative border  space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
              <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
                Create Batch
              </h1>

              <div>
                <label className=""> Level </label>
                <select
                  onChange={(e) => {
                    setValues(e.target.value, "level");
                  }}
                  placeholde
                  name="level"
                  id="level"
                  className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                    hasBlank ? (level.length == 0 ? "border-red-500" : "") : ""
                  } px-3 text-gray-800  `}
                >
                  <option value="default" disabled selected hidden className="">
                    Select Level
                  </option>
                  {alllevels.map(function (ele) {
                    return (
                      <option
                        className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                        value={ele._id}
                      >
                        {ele.level}
                      </option>
                    );
                  })}
                </select>
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
                      (new Date().getMonth() + 1).toString().padStart(2, "0") +
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
                  <label className=""> Maximum Student Allowed </label>
                  <input
                    onChange={(e) => {
                      setValues(e.target.value, "maximumStudents");
                    }}
                    value={maxStudent}
                    type="number"
                    placeholder="Maximum Student"
                    className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? maxStudent.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } px-3 text-gray-800  `}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <label className=""> Select a Day </label>
                  <select
                    onChange={(e) => {
                      setValues(e.target.value, "dayOfWeek");
                    }}
                    placeholder
                    name="Select any day"
                    id="days"
                    className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? dayOfWeek.length == 0
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
                      Select Days
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Monday"
                    >
                      Monday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Tuesday"
                    >
                      Tuesday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Wednesday"
                    >
                      Wednesday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Thursday"
                    >
                      Thursday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Friday"
                    >
                      Friday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Saturday"
                    >
                      Saturday
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Sunday"
                    >
                      Sunday
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label className=""> Start Time </label>
                  <input
                    type="time"
                    id="appt"
                    name="appt"
                    required
                    className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? startTime.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } px-3 text-gray-800  `}
                    onChange={(e) => {
                      setValues(e.target.value, "starttime");
                    }}
                  />
                </div>
                <div>
                  <label className=""> End Time </label>
                  <input
                    type="time"
                    id="appt"
                    name="appt"
                    value={endTime}
                    readOnly
                    className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? endTime.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } px-3 text-gray-800  `}
                  />
                </div>
              </div>
              <div>
                <label className=""> Batch URL </label>
                <input
                  onChange={(e) => {
                    setValues(e.target.value, "url");
                  }}
                  type="url"
                  value={url}
                  placeholder="URL"
                  className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                    hasBlank ? (url.length == 0 ? "border-red-500" : "") : ""
                  } px-3 text-gray-800  `}
                />
                {urlError && (
                  <div style={{ color: "red", marginTop: "10px" }}>
                    {urlError}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={createBatch}
                  type="button"
                  className="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
                >
                  Create Batch
                </button>
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
                  Batch Creation Success!
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

export default AdminBatchCreate;
