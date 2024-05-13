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
import Cookies from "js-cookie";

// import { Backdrop, CircularProgress } from "@mui/material";

const AdminSchoolReg = () => {
  const [schoolCode, setSchoolCode] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [discount, setDiscount] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [reloadForm, setReloadForm] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const screenSize = Screensizehook();

  const HandleRemovePopUp = () => {
    // navigate("/adminschoolregistration");
    // window.location.reload();
    setReloadForm(Math.random());
    setOpenPopup(false);
  };

  const setValues = (value, field) => {
    switch (field) {
      case "schoolcode":
        if (value.length > 8) break;
        value = value.trim();
        setSchoolCode(value.toUpperCase());
        break;
      case "schoolname":
        setSchoolName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "discount":
        value = parseInt(value);
        if (value > 100) setDiscount(99);
        else if (value < 0) setDiscount(1);
        else setDiscount(value);
        break;
      default:
      // code block
    }
  };

  const saveSchool = async (e) => {
    e.preventDefault();
    if (
      schoolName.length === 0 ||
      schoolCode.length === 0 ||
      discount.length === 0 ||
      address.length === 0 ||
      state.length === 0 ||
      city.length === 0
    ) {
      setHasBlank(true);
      return;
    } else {
      setHasBlank(false);
    }
    setLoading(true);
    const postData = {
      // "schoolCode": schoolCode,
      // "schoolName": schoolName,
      // "address": address,
      // "city": city,
      // state: state,
      // discount: discount,
      schoolCode: schoolCode,
      schoolName: "Name of the school",
      address: "address",
      city: "City as string",
      state: "State as string",
      discount: 50,
    };
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
      setCity("");
      setState("");
      setDiscount("");
      setOpenPopup(true);
    } else {
      alert("false");
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
        {screenSize.width < 550 ? "" : <Sidebar name={"adminschoolreg"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb
            crumbData={[{ name: "School Registration", path: null }]}
          />

          <div class="lg:m-10" key={reloadForm}>
            <form class="relative border  space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
              <h1 class="mb-6 text-xl font-semibold lg:text-2xl">
                School Registration
              </h1>

              <div>
                <label class=""> School Name </label>
                <input
                  value={schoolName}
                  onChange={(e) => {
                    setValues(e.target.value, "schoolname");
                  }}
                  type="text"
                  placeholder="School Name"
                  class={`mt-2 h-12 w-full border-2 ${
                    hasBlank
                      ? schoolName.length == 0
                        ? "border-red-500"
                        : ""
                      : ""
                  } rounded-md bg-gray-100 px-3`}
                />
              </div>
              <div class="grid gap-3 md:grid-cols-2">
                <div>
                  <label class=""> School Code </label>
                  <input
                    value={schoolCode}
                    onChange={(e) => {
                      setValues(e.target.value, "schoolcode");
                    }}
                    type="text"
                    placeholder="Your Name"
                    class={`mt-2 h-12 w-full border-2 ${
                      hasBlank
                        ? schoolCode.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } rounded-md bg-gray-100 px-3`}
                  />
                </div>
                <div>
                  <label class=""> Discount Percentage </label>
                  <input
                    onChange={(e) => {
                      setValues(e.target.value, "discount");
                    }}
                    type="number"
                    value={discount}
                    placeholder="Discount"
                    class={`mt-2 h-12 w-full border-2 ${
                      hasBlank
                        ? discount.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } rounded-md bg-gray-100 px-3 `}
                  />
                </div>
              </div>
              <div>
                <label class=""> School Address </label>
                <input
                  value={address}
                  onChange={(e) => {
                    setValues(e.target.value, "address");
                  }}
                  type="address"
                  placeholder="Address"
                  class={`mt-2 h-12 w-full border-2 ${
                    hasBlank
                      ? address.length == 0
                        ? "border-red-500"
                        : ""
                      : ""
                  } rounded-md bg-gray-100 px-3`}
                />
              </div>

              <div class="grid gap-3 lg:grid-cols-2">
                <div>
                  <label class=""> School State </label>
                  <select
                    onChange={(e) => {
                      setValues(e.target.value, "state");
                    }}
                    placeholde
                    name="state"
                    id="state"
                    class={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
                      hasBlank
                        ? state.length == 0
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
                      Select a State
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Andhra Pradesh"
                    >
                      Andhra Pradesh
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Arunachal Pradesh"
                    >
                      Arunachal Pradesh
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Assam"
                    >
                      Assam
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Bihar"
                    >
                      Bihar
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Chhattisgarh"
                    >
                      Chhattisgarh
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Goa"
                    >
                      Goa
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Gujarat"
                    >
                      Gujarat
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Haryana"
                    >
                      Haryana
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Himachal Pradesh"
                    >
                      Himachal Pradesh
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Jharkhand"
                    >
                      Jharkhand
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Karnataka"
                    >
                      Karnataka
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Kerala"
                    >
                      Kerala
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Madhya Pradesh"
                    >
                      Madhya Pradesh
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Maharashtra"
                    >
                      Maharashtra
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Manipur"
                    >
                      Manipur
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Meghalaya"
                    >
                      Meghalaya
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Mizoram"
                    >
                      Mizoram
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Nagaland"
                    >
                      Nagaland
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Odisha"
                    >
                      Odisha
                    </option>
                  </select>
                </div>
                <div>
                  <label class=""> School City </label>
                  <input
                    value={city}
                    onChange={(e) => {
                      setValues(e.target.value, "city");
                    }}
                    type="city"
                    placeholder="Enter City"
                    class={`mt-2 h-12 w-full border-2 ${
                      hasBlank ? (city.length == 0 ? "border-red-500" : "") : ""
                    } rounded-md bg-gray-100 px-3`}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={saveSchool}
                  type="button"
                  class="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
                >
                  Register School
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

export default AdminSchoolReg;
