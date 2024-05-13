import { useState } from "react";
import { Button } from "@mui/material";
import InputnameCopy from "./InputnameCopy";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUpFormStudent = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [schoolCode, setSchoolCode] = useState("");
  const codeList = ["ABCD1234", "XYZ123"];
  const schoolCodeMap = { ABCD1234: "ABCD School", XYZ123: "XYZ School" };
  const [phone, setPhone] = useState("+91");

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")


  const defaultSchoolCode = () => {
    if(schoolCode !== "ABCD1234") setSchoolCode("ABCD1234")
    if(schoolCode === "ABCD1234") setSchoolCode("")
  }
  return (
    <div className="lg:m-10">
      <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
        <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
          Student Registration
        </h1>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> First Name </label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Last Name </label>
            <input
              type="text"
              placeholder="Last  Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className=""> Email Address </label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
              <label className=""> Phone Number </label>

              <div className="pt-2">
                <PhoneInput
                  value={phone}
                  onChange={(num) => setPhone(num)}
                  inputStyle={{
                    height: "48px",
                    width: "21rem",
                    backgroundColor: "#F5F5F5",
                    borderColor: "#F5F5F5",
                  }}
                  
                />
              </div>
            </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
        <div>
                  <label class=""> Gender </label>
                  <select
                    // onChange={(e) => {
                    //   setValues(e.target.value, "state");
                    // }}
                    placeholde
                    name="gender"
                    id="gender"
                    class={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 text-gray-800  `}
                  >
                    <option
                      value="default"
                      disabled
                      selected
                      hidden
                      className=""
                    >
                      Select Gender
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="male"
                    >
                      Male
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="female"
                    >
                      Female
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="other"
                    >
                      Other
                    </option>
                  
                  </select>
                </div>

          {/* <div>
            <label className=""> Gender </label>
            <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
              <input
                className="peer hidden"
                type="checkbox"
                name="select-2"
                id="select-2"
              />
              <label
                for="select-2"
                className="flex w-full h-12 cursor-pointer rounded-lg select-none border p-2 px-3 pt-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
              >
                Select Option{" "}
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Male
                </li>
                <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Female
                </li>
                <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                  Other
                </li>
              </ul>
            </div>
          </div> */}
          <div>
            <label className=""> Date of Birth </label>
            <input
              type="date"
              placeholder="Last  Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <div>
            <label className="flex">
              {" "}
              <div>School Code </div>
              <div className="pl-16">
                <input
                  checked={schoolCode == "ABCD1234"}
                  type="checkbox"
                  id="defaultcode"
                  name="defaultcode"
                  value="ABCD1234"
                  onClick={()=>defaultSchoolCode()}
                />
                <label for="defaultcode"> Use Default Code</label>
              </div>
            </label>
            <div className="flex justify-end items-center relative">
              <input
                value={schoolCode}
                type="text"
                placeholder="Enter School Code"
                className={`mt-2 h-12 w-full rounded-md ${
                  schoolCode.length == 0
                    ? "bg-gray-100"
                    : codeList.includes(schoolCode)
                    ? "bg-green-100"
                    : "bg-red-100"
                } px-3`}
                onChange={(e) => setSchoolCode(e.target.value)}
              />
              {schoolCode == "ABCD1234" ? (
                <span className="absolute mr-16 pt-2 text-sm text-gray-400">
                  (default)
                </span>
              ) : (
                ""
              )}
              {schoolCode.length === 0 ? (
                ""
              ) : codeList.includes(schoolCode) ? (
                <img
                  src="/check.png"
                  className="absolute mr-2 w-10 pt-2"
                  alt="Search Icon"
                />
              ) : (
                <img
                  src="/remove.png"
                  className="absolute mr-2 w-10 pt-2"
                  alt="Search Icon"
                />
              )}
            </div>
          </div>

             <div>
                  <label class=""> Grade Level </label>
                  <select
            
                    placeholde
                    name="gender"
                    id="gender"
                    class={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 text-gray-800  `}
                  >
                    <option
                      value="default"
                      disabled
                      selected
                      hidden
                      className=""
                    >
                      Select Grade
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 1"
                    >
                      LEVEL 1 | Grade 1-3
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 2"
                    >
                      LEVEL 2 | Grade 4-6
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Level 3"
                    >
                      LEVEL 3 | Grade 7-9
                    </option>
                  
                  </select>
                </div>
        </div>

        <div>
          <label className=""> School Name </label>
          <input
            value={schoolCodeMap[schoolCode] ? schoolCodeMap[schoolCode] : ""}
            type="text"
            readOnly
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
{/* 
        <div>
          <label className=""> Available Batch </label>
          <div className="relative w-full mt-2 bg-gray-100 rounded-lg">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-3"
              id="select-3"
            />
            <label
              for="select-3"
              className="flex w-full h-12 cursor-pointer rounded-lg select-none border p-2 pt-3 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
            >
              Select Batch{" "}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                Batch 1 | Time: 1-3
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                Batch 2 | Time: 4-6
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">
                Batch 3 | Time: 7-9
              </li>
            </ul>
          </div>
        </div> */}

<div>
                  <label class=""> Available Batch </label>
                  <select
            
                    placeholde
                    name="gender"
                    id="gender"
                    class={`mt-2 h-12 w-full rounded-md bg-gray-100 px-3 text-gray-800  `}
                  >
                    <option
                      value="default"
                      disabled
                      selected
                      hidden
                      className=""
                    >
                      Select Batch
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Batch 1"
                    >
                      Batch 1 | Time: 1-3
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Batch 2"
                    >
                      Batch 2 | Time: 4-6
                    </option>
                    <option
                      class="text-lg text-gray-500 hover:bg-blue-500 hover:text-white"
                      value="Batch 3"
                    >
                      Batch 3 | Time: 7-9
                    </option>
                  
                  </select>
                </div>

        <div className="flex justify-between pt-4">
          <div className="font-bold text-2xl">Price:</div>
          <div className="flex space-x-2">
            <div className="font-semibold text-2xl">
              {codeList.includes(schoolCode) ? "₹ 3000" : "₹ 6000"}
            </div>
            {codeList.includes(schoolCode) ? (
              <>
                <div className="mt-2 line-through text-sm text-gray-500">
                  ₹ 6000
                </div>
                <div className="mt-1.5 text-green-600">50% off</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
          >
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormStudent;
