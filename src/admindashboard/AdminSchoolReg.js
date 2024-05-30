import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar";

import { useNavigate, useParams } from "react-router-dom";
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
  const [status, setStatus] = useState("");
  const [discount, setDiscount] = useState("");
  const [hasBlank, setHasBlank] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [reloadForm, setReloadForm] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [existingSchoolCodes, setExistingSchoolCodes] = useState([]);
  // let { schoolcode } = useParams();

  const navigate = useNavigate();
  const screenSize = Screensizehook();

  const HandleRemovePopUp = () => {
    setReloadForm(Math.random());
    setOpenPopup(false);
  };
  const getSchoolCode = async () => {
    // setLoading(true);{}
    try {
      const res = await instance({
        url: `school/checkCode/${schoolCode}`,
        method: "GET",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      if (res.data.data.schoolName) {
        setStatus("School already exists.");
      } else {
        setStatus("");
      }
    } catch (e) {
      setStatus("");
    }
    // setExistingSchoolCodes(res.data.data);
    // setSchoolCode(res.data.data);
  };

  const validateSchoolCode = (value) => {
    if (value.length < 6 || value.length > 12) {
      setError("School code must be between 6 and 12 characters.");
    } else if (existingSchoolCodes.includes(value)) {
      setError("School code already exists.");
    } else {
      setError("");
    }
  };
  const setValues = (value, field) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    switch (field) {
      case "schoolcode":
        if (value.length > 12) break;
        value = value.trim();
        if (!regex.test(value)) {
          alert("Please type only alphabets and numbers.");
          return;
        }
        setSchoolCode(value.toUpperCase());
        validateSchoolCode(value.toUpperCase());
        break;
      case "schoolname":
        if (!regex.test(value)) {
          alert("Please type only alphabets.");
          return;
        }
        setSchoolName(value);
        break;

      case "address":
        if (!regex.test(value)) {
          alert("Please type only alphabets.");
          return;
        }
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
        if (value >= 100) setDiscount(99);
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
      schoolCode: schoolCode,
      schoolName: schoolName,
      address: address,
      city: city,
      state: state,
      discount: discount,
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
  useEffect(() => {
    // getSchoolCode();
  }, [schoolCode]);
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

          <div className="lg:m-10" key={reloadForm}>
            <form className="relative border  space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
              <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
                School Registration
              </h1>

              <div>
                <label className=""> School Name </label>
                <input
                  value={schoolName}
                  onChange={(e) => {
                    setValues(e.target.value, "schoolname");
                  }}
                  type="text"
                  placeholder="School Name"
                  className={`mt-2 h-12 w-full border-2 ${
                    hasBlank
                      ? schoolName.length == 0
                        ? "border-red-500"
                        : ""
                      : ""
                  } rounded-md bg-gray-100 px-3`}
                />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className=""> School Code </label>
                  <input
                    value={schoolCode}
                    onChange={(e) => {
                      setValues(e.target.value, "schoolcode");
                    }}
                    onBlur={getSchoolCode}
                    type="text"
                    placeholder="School Code"
                    className={`mt-2 h-12 w-full border-2 ${
                      hasBlank
                        ? schoolCode.length == 0
                          ? "border-red-500"
                          : ""
                        : ""
                    } rounded-md bg-gray-100 px-3`}
                  />
                  <p>Status: {status}</p>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
                <div>
                  <label className=""> Discount Percentage </label>
                  <input
                    onChange={(e) => {
                      setValues(e.target.value, "discount");
                    }}
                    type="number"
                    value={discount}
                    placeholder="Discount"
                    className={`mt-2 h-12 w-full border-2 ${
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
                <label className=""> School Address </label>
                <input
                  value={address}
                  onChange={(e) => {
                    setValues(e.target.value, "address");
                  }}
                  type="address"
                  placeholder="Address"
                  className={`mt-2 h-12 w-full border-2 ${
                    hasBlank
                      ? address.length == 0
                        ? "border-red-500"
                        : ""
                      : ""
                  } rounded-md bg-gray-100 px-3`}
                />
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                <div>
                  <label className=""> School State </label>
                  <select
                    onChange={(e) => {
                      setValues(e.target.value, "state");
                    }}
                    placeholde
                    name="state"
                    id="state"
                    className={`mt-2 h-12 w-full rounded-md bg-gray-100 border-2 ${
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
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Andhra Pradesh"
                    >
                      Andhra Pradesh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Arunachal Pradesh"
                    >
                      Arunachal Pradesh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Assam"
                    >
                      Assam
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Bihar"
                    >
                      Bihar
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Chhattisgarh"
                    >
                      Chhattisgarh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Delhi"
                    >
                      Delhi
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Goa"
                    >
                      Goa
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Gujarat"
                    >
                      Gujarat
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Haryana"
                    >
                      Haryana
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Himachal Pradesh"
                    >
                      Himachal Pradesh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Jharkhand"
                    >
                      Jharkhand
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Karnataka"
                    >
                      Karnataka
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Kerala"
                    >
                      Kerala
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Madhya Pradesh"
                    >
                      Madhya Pradesh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Maharashtra"
                    >
                      Maharashtra
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Manipur"
                    >
                      Manipur
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Meghalaya"
                    >
                      Meghalaya
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Mizoram"
                    >
                      Mizoram
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Nagaland"
                    >
                      Nagaland
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Odisha"
                    >
                      Odisha
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Punjab"
                    >
                      Punjab
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Rajasthan"
                    >
                      Rajasthan
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Sikkim"
                    >
                      Sikkim
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Tamil Nadu"
                    >
                      Tamil Nadu
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Tripura"
                    >
                      Tripura
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value=" Telangana"
                    >
                      Telangana
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Uttar Pradesh"
                    >
                      Uttar Pradesh
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Uttrakhand"
                    >
                      Uttrakhand
                    </option>
                    <option
                      className="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="West Bengal"
                    >
                      West Bengal
                    </option>
                  </select>
                </div>
                <div>
                  <label className=""> School City </label>
                  <input
                    value={city}
                    onChange={(e) => {
                      setValues(e.target.value, "city");
                    }}
                    type="city"
                    placeholder="Enter City"
                    className={`mt-2 h-12 w-full border-2 ${
                      hasBlank ? (city.length == 0 ? "border-red-500" : "") : ""
                    } rounded-md bg-gray-100 px-3`}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={saveSchool}
                  type="button"
                  className="mt-5 w-full rounded-md bg-violet-600 hover:bg-violet-500 p-2 text-center font-semibold text-white"
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
                  Registration Success!
                </h3>
                <p className="text-gray-600 my-2">
                  Thank you for completing your school registration.
                </p>

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

export default AdminSchoolReg;
