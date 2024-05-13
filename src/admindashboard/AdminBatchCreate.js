import React, { useState } from "react";
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
// import { Backdrop, CircularProgress } from "@mui/material";

const AdminBatchCreate = () => {
  const [schoolCode, setSchoolCode] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [level, setLevel] = useState("");
  const [state, setState] = useState("");
  const [discount, setDiscount] = useState("");
  const [maxStudent, setMaxStudent] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [reloadForm, setReloadForm] = useState(1);
  const [loading, setLoading] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const navigate = useNavigate();
  const screenSize = Screensizehook();

  const handleDayChange = (field) => {
    switch (field) {
      case "monday":
        setMonday(!monday);
        break;
      case "tuesday":
        setTuesday(!tuesday);
        break;
      case "wednesday":
        setWednesday(!wednesday);
        break;
      case "thursday":
        setThursday(!thursday);
        break;
      case "friday":
        setFriday(!friday);
        break;
      case "saturday":
        setSaturday(!saturday);
        break;
      case "sunday":
        setSunday(!sunday);
        break;
      default:
      // code block
    }
  };

  const HandleRemovePopUp = () => {
    // navigate("/adminschoolregistration");
    // window.location.reload();
    setReloadForm(Math.random());
    setOpenPopup(false);
  };

  const setValues = (value, field) => {
    switch (field) {
      case "schoolcode":
        setSchoolCode(value);
        break;
      case "schoolname":
        setSchoolName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "level":
        console.log(value);
        setLevel(value);
        break;
      case "startdate":
        console.log(value);
        setState(value);
        break;
      case "maxstudent":
        value = parseInt(value);
        if (value < 0) setMaxStudent(1);
        else setMaxStudent(value);
        break;
      default:
      // code block
    }
  };

  const createBatch = async (e) => {
    e.preventDefault();
    if (
      schoolName.length === 0 ||
      schoolCode.length === 0 ||
      discount.length === 0 ||
      maxStudent.length === 0 ||
      address.length === 0 ||
      state.length === 0 ||
      level.length === 0
    ) {
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }
    setLoading(true);
    const postData = {
      schoolCode: schoolCode,
      schoolName: schoolName,
      address: address,
      level: level,
      state: state,
      MaximumStudent: maxStudent,
      discount: discount,
    };
    // console.log(postData);
    const res = await instance({
      url: `school/create`,
      method: "POST",
      data: postData,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    if (res.status === 201) {
      setSchoolCode("");
      setSchoolName("");
      setAddress("");
      setOpenPopup(true);
    }
    setLoading(false);
  };

  return (
    <div className="relative ">
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

          <div class="lg:m-10" key={reloadForm}>
            <form class="relative border  space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
              <h1 class="mb-6 text-xl font-semibold lg:text-2xl">
                Create Batch
              </h1>

              <div>
                <label class=""> Level </label>
                <select
                  onChange={(e) => {
                    setValues(e.target.value, "level");
                  }}
                  placeholde
                  name="level"
                  id="level"
                  class={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                    hasBlank ? (level.length == 0 ? "border-red-500" : "") : ""
                  } px-3 text-gray-800  `}
                >
                  <option value="default" disabled selected hidden className="">
                    Select Level
                  </option>
                  <option
                    class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                    value="Level 1"
                  >
                    Level 1
                  </option>
                  <option
                    class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                    value="Level 2"
                  >
                    Level 2
                  </option>
                  <option
                    class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                    value="Level 3"
                  >
                    Level 3
                  </option>
                </select>
              </div>
              <div class="grid gap-3 md:grid-cols-2">
                <div>
                  <label className=""> Start Date </label>
                  <input
                    onChange={(e) => {
                      setValues(e.target.value, "startdate");
                    }}
                    type="date"
                    placeholder="Start Date"
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
                <div>
                  <label class=""> Maximum Student Allowed </label>
                  <input
                    onChange={(e) => {
                      setValues(e.target.value, "maxstudent");
                    }}
                    value={maxStudent}
                    type="number"
                    placeholder="Maximum Student"
                    class={`mt-2 h-12 w-full border-2 ${
                      hasBlank
                        ? maxStudent.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } rounded-md bg-gray-100 px-3 `}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <label class=""> Select a Day </label>
                  <select
                    onChange={(e) => {
                      setValues(e.target.value, "level");
                    }}
                    placeholder
                    name="Select any day"
                    id="days"
                    class={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? level.length == 0
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
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 1"
                    >
                      Monday
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 2"
                    >
                      Tuesday
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 3"
                    >
                      Wednesday
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 1"
                    >
                      Thursday
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 1"
                    >
                      Friday
                    </option>
                  </select>
                </div>
                {/* <form className="  mt-2 h-8 w-full border-2 rounded-md bg-gray-100 px-3">
                 
                   <div className="flex space-x-4 mt-1">
                    <div>
                      <input
                        type="radio"
                        id="monday"
                        name="monday"
                        defaultValue="monday"
                        checked={monday}
                        onChange={() => handleDayChange("monday")}
                      />
                      <label htmlFor="vehicle1"> Monday</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="tuesday"
                        name="tuesday"
                        defaultValue="tuesday"
                        checked={tuesday}
                        onChange={() => handleDayChange("tuesday")}
                      />
                      <label htmlFor="vehicle1"> Tuesday</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="wednesday"
                        name="wednesday"
                        defaultValue="wednesday"
                        checked={wednesday}
                        onChange={() => handleDayChange("wednesday")}
                      />
                      <label htmlFor="vehicle1"> Wednesday</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="thursday"
                        name="thursday"
                        defaultValue="thursday"
                        checked={thursday}
                        onChange={() => handleDayChange("thursday")}
                      />
                      <label htmlFor="vehicle1"> Thursday</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="friday"
                        name="friday"
                        defaultValue="friday"
                        checked={friday}
                        onChange={() => handleDayChange("friday")}
                      />
                      <label htmlFor="vehicle1"> Friday</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="saturday"
                        name="saturday"
                        defaultValue="saturday"
                        checked={saturday}
                        onChange={() => handleDayChange("saturday")}
                      />
                      <label htmlFor="vehicle1"> Saturday</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="sunday"
                        name="sunday"
                        defaultValue="sunday"
                        checked={sunday}
                        onChange={() => handleDayChange("sunday")}
                      />
                      <label htmlFor="vehicle1"> Sunday</label>
                    </div>
                  </div>
                </form> */}
              </div>

              <div class="grid gap-3 lg:grid-cols-2">
                <div>
                  <label className=""> Start Time </label>
                  <input
                    type="time"
                    id="appt"
                    name="appt"
                    min="09:00"
                    max="18:00"
                    required
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
                <div>
                  <label class=""> End Time </label>
                  <input
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    type="time"
                    id="appt"
                    name="appt"
                    min="09:00"
                    max="18:00"
                    required
                    className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={createBatch}
                  type="button"
                  class="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
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
      />
    </div>
  );
};

export default AdminBatchCreate;
