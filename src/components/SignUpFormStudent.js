import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import Popup from "../components/Popup";
import instance from "../Instance";
import Cookies from "js-cookie";

const SignUpFormStudent = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [batchId, setBatchId] = useState("");
  const [batches, setBatches] = useState([]); // Store fetched batches here
  const [hasBlank, setHasBlank] = useState(false);
  const [error, setError] = useState("");
  const [allLevels, setAllLevels] = useState([]);

  const getAllLevels = async () => {
    setLoading(true);
    try {
      const res = await instance({
        url: `level/all`,
        method: "GET",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setAllLevels(res.data.data);
    } catch (error) {
      console.error("Error fetching levels:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllLevels();
  }, []);

  const getBatchId = async (levelId) => {
    try {
      const res = await instance({
        url: `batch/level/${levelId}`,
        method: "GET",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      console.log("Fetched batches:", res.data.data);
      setBatches(res.data.data);
    } catch (error) {
      console.error("Error fetching batchId:", error);
    }
  };

  useEffect(() => {
    console.log("All batches:", batches);
  }, [batches]);

  const getSchoolCode = async () => {
    try {
      const res = await instance({
        url: `school/checkCode/${schoolCode}`,
        method: "GET",
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      if (res.data.data.schoolName) {
        setSchoolName(res.data.data.schoolName);
        setError("");
      } else {
        setSchoolName("");
        setError("Invalid school code.");
      }
    } catch (error) {
      console.error("Error fetching school name:", error);
      setSchoolName("");
      setError("Invalid school code.");
    }
  };

  const validateSchoolCode = (value) => {
    if (value.length < 6 || value.length > 12) {
      setError("School code must be between 6 and 12 characters.");
    } else {
      setError("");
    }
  };

  const validateMobileNumber = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    setIsMobileValid(mobileRegex.test(mobile));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  useEffect(() => {
    if (email) validateEmail(email);
    if (mobile) validateMobileNumber(mobile);
  }, [email, mobile]);

  const setValues = (value, field) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    switch (field) {
      case "firstname":
        if (!regex.test(value)) {
          alert("Please type only alphabets.");
          return;
        }
        setFirstName(value);
        break;
      case "lastname":
        if (!regex.test(value)) {
          alert("Please type only alphabets.");
          return;
        }
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        validateEmail(value);
        break;
      case "mobile":
        if (value.length == 11) break;
        setMobile(value);
        validateMobileNumber(value);
        break;
      case "countrycode":
        setCountryCode(value);
        break;
      case "gender":
        setGender(value);
        break;
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
      case "level":
        setLevel(value);
        break;
      case "schoolname":
        if (!regex.test(value)) {
          alert("Please type only alphabets.");
          return;
        }
        setSchoolName(value);
        break;
      case "batchId":
        setBatchId(value);
        break;
      default:
    }
  };

  const createStudent = async (e) => {
    e.preventDefault();
    console.log("Form submission started");

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      countryCode.length === 0 ||
      gender.length === 0 ||
      schoolCode.length === 0 ||
      level.length === 0 ||
      schoolName.length === 0 ||
      batchId.length === 0 ||
      !checkboxChecked
    ) {
      setHasBlank(true);
      console.log("Form has blank fields");
      return;
    } else {
      setHasBlank(false);
    }

    setLoading(true);
    const postData = {
      firstName,
      lastName,
      email,
      mobile,
      countryCode,
      gender,
      schoolCode,
      batchId,
    };

    console.log("Submitting data:", postData); // Logging the data to be submitted

    try {
      const res = await instance({
        url: `user/createStudent`,
        method: "POST",
        data: postData,
        headers: {
          Authorization: Cookies.get("token"),
          "Content-Type": "application/json",
        },
      });

      console.log("Response received", res);

      if (res.status === 201) {
        console.log("Student registration successful");
        setOpenPopup(true);
      } else {
        console.error(
          "Error registering student: Unexpected status code",
          res.status
        );
      }
    } catch (error) {
      console.error("Error creating student:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("No response from server");
      }
    }
    setLoading(false);
  };

  // Function to handle closing the popup
  const handlePopupClose = () => {
    setOpenPopup(false);
    // Clear form fields after closing the popup
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setGender("");
    setSchoolCode("");
    setLevel("");
    setSchoolName("");
    setBatchId("");
    setCheckboxChecked(false);
    setOpenPopup(false);
  };

  return (
    <div className="lg:m-10">
      <form
        className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
        onSubmit={createStudent}
      >
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Student Registration
        </h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> First Name </label>
            <input
              onChange={(e) => {
                setValues(e.target.value, "firstname");
              }}
              value={firstName}
              type="text"
              placeholder="Your First Name"
              className={`mt-2 h-12 w-full border-2 ${
                hasBlank ? (firstName.length === 0 ? "border-red-500" : "") : ""
              } rounded-md bg-gray-100 px-3`}
            />
          </div>
          <div>
            <label className=""> Last Name </label>
            <input
              onChange={(e) => {
                setValues(e.target.value, "lastname");
              }}
              value={lastName}
              type="text"
              placeholder="Your Last Name"
              className={`mt-2 h-12 w-full border-2 ${
                hasBlank ? (lastName.length === 0 ? "border-red-500" : "") : ""
              } rounded-md bg-gray-100 px-3`}
            />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> Email </label>
            <input
              onChange={(e) => {
                setValues(e.target.value, "email");
              }}
              value={email}
              type="email"
              placeholder="Your Email"
              className={`mt-2 h-12 w-full border-2 ${
                !isEmailValid ? "border-red-500" : ""
              } ${
                hasBlank ? (email.length === 0 ? "border-red-500" : "") : ""
              } rounded-md bg-gray-100 px-3`}
            />
            {!isEmailValid && (
              <p className="text-red-500">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div>
            <label className=""> Mobile Number </label>
            <div className="flex">
              <input
                onChange={(e) => {
                  setValues(e.target.value, "countrycode");
                }}
                value={countryCode}
                type="text"
                placeholder="+91"
                className={`mt-2 h-12 w-1/4 border-2 ${
                  hasBlank
                    ? countryCode.length === 0
                      ? "border-red-500"
                      : ""
                    : ""
                } rounded-md bg-gray-100 px-3`}
              />
              <input
                onChange={(e) => {
                  setValues(e.target.value, "mobile");
                }}
                value={mobile}
                type="text"
                placeholder="Your Number"
                className={`mt-2 h-12 w-full border-2 ${
                  !isMobileValid ? "border-red-500" : ""
                } ${
                  hasBlank ? (mobile.length === 0 ? "border-red-500" : "") : ""
                } rounded-md bg-gray-100 px-3`}
              />
            </div>
            {!isMobileValid && (
              <p className="text-red-500">
                Please enter a valid mobile number.
              </p>
            )}
          </div>
        </div>
        <div>
          <label className=""> Gender </label>
          <select
            onChange={(e) => {
              setValues(e.target.value, "gender");
            }}
            value={gender}
            className={`mt-2 h-12 w-full border-2 ${
              hasBlank ? (gender.length === 0 ? "border-red-500" : "") : ""
            } rounded-md bg-gray-100 px-3`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> School Code </label>
            <input
              onBlur={() => getSchoolCode()}
              onChange={(e) => {
                setValues(e.target.value, "schoolcode");
              }}
              value={schoolCode}
              type="text"
              placeholder="Enter your school code"
              className={`mt-2 h-12 w-full border-2 ${
                error ? "border-red-500" : ""
              } ${
                hasBlank
                  ? schoolCode.length === 0
                    ? "border-red-500"
                    : ""
                  : ""
              } rounded-md bg-gray-100 px-3`}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div>
            <label className=""> School Name </label>
            <input
              onChange={(e) => {
                setValues(e.target.value, "schoolname");
              }}
              value={schoolName}
              type="text"
              placeholder="Your school name"
              disabled
              className={`mt-2 h-12 w-full border-2 ${
                hasBlank
                  ? schoolName.length === 0
                    ? "border-red-500"
                    : ""
                  : ""
              } rounded-md bg-gray-100 px-3`}
            />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> Level </label>
            <select
              onChange={(e) => {
                setValues(e.target.value, "level");
                getBatchId(e.target.value);
              }}
              value={level}
              className={`mt-2 h-12 w-full border-2 text-black ${
                hasBlank ? (level.length === 0 ? "border-red-500" : "") : ""
              } rounded-md bg-gray-100 px-3`}
            >
              <option value="">Select Level</option>
              {allLevels.map((level) => (
                <option key={level._id} value={level._id}>
                  {level.classes}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className=""> Batch ID </label>
            <select
              onChange={(e) => {
                setValues(e.target.value, "batchId");
              }}
              value={batchId}
              className={`mt-2 h-12 w-full border-2 text-black ${
                hasBlank ? (batchId.length === 0 ? "border-red-500" : "") : ""
              } rounded-md bg-gray-100 px-3`}
            >
              <option value="">Select Batch ID</option>
              {batches.map((batch) => (
                <option key={batch._id} value={batch._id}>
                  {batch.batchName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={() => setCheckboxChecked(!checkboxChecked)}
            className={`h-4 w-4 border-2 ${hasBlank ? "border-red-500" : ""}`}
          />
          <label>I agree to the terms and conditions</label>
        </div>

        {hasBlank && (
          <p className="text-red-500">Please fill in all required fields.</p>
        )}

        <button
          type="submit"
          className={`flex w-full justify-center rounded-md bg-purple-500 p-2 text-white ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <Popup
        openPopup={openPopup}
        handlePopupClose={handlePopupClose}
        title="Student Registered"
        message="Student has been successfully registered."
      />
    </div>
  );
};

export default SignUpFormStudent;
